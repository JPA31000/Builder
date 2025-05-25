// js/script.js

// Importe toutes les données de l'application depuis data.js
import { appData } from './data.js';
// Importe les fonctions de génération de PDF depuis pdf-generator.js
import { generatePdfForProf, generatePdfForEleve } from './pdf-generator.js';

// --- Références aux éléments HTML ---
const selectPhase = document.getElementById('select-phase');
const selectActivite = document.getElementById('select-activite');
const selectTache = document.getElementById('select-tache');
const selectProblematique = document.getElementById('select-problematique');
const selectResultatAttendu = document.getElementById('select-resultat-attendu');
const selectCompetenceVisee = document.getElementById('select-competence-visee');
const selectRessourceOnDonne = document.getElementById('select-ressource-on-donne');

const competenceDetailsDiv = document.getElementById('competence-details');
const etreCapableDeSpan = document.getElementById('etre-capable-de');
const conditionsRessourcesSpan = document.getElementById('conditions-ressources');
const criteresEvaluationSpan = document.getElementById('criteres-evaluation');

const summaryPhase = document.getElementById('summary-phase');
const summaryActivite = document.getElementById('summary-activite');
const summaryTache = document.getElementById('summary-tache');
const summaryProblematique = document.getElementById('summary-problematique');
const summaryResultatAttendu = document.getElementById('summary-resultat-attendu');
const summaryCompetenceVisee = document.getElementById('summary-competence-visee');
const summaryRessourceOnDonne = document.getElementById('summary-ressource-on-donne');

const generatePdfProfBtn = document.getElementById('generate-pdf-prof');
const generatePdfEleveBtn = document.getElementById('generate-pdf-eleve');
const saveSessionBtn = document.getElementById('save-session');
const loadSessionBtn = document.getElementById('load-session'); // Ce bouton ne sera plus utilisé directement
const exportJsonBtn = document.getElementById('export-json');
const importJsonInput = document.getElementById('import-json');
const triggerImportJsonBtn = document.getElementById('trigger-import-json');
const clearSelectionsBtn = document.getElementById('clear-selections');

const historiqueList = document.getElementById('historique-list');

// --- Stockage des données de la session courante ---
let currentSession = {
    phase: '',
    activite: '',
    tache: '',
    problematique: '',
    resultatAttendu: '',
    competenceVisee: '',
    ressourceOnDonne: '',
    competenceDetails: null // Pour stocker les détails de la compétence sélectionnée
};
let historiqueSessions = []; // Tableau pour stocker les sessions sauvegardées

// --- Initialisation des données (chargées depuis data.js) ---
function initializeData() {
    // appData est directement disponible grâce à l'import
    console.log("Données chargées avec succès depuis data.js :", appData);
    populatePhases(); // Initialise la première liste déroulante
    loadHistorique(); // Charge l'historique au démarrage
}

// --- Fonctions de population des listes déroulantes ---

/**
 * Peuple un élément select HTML avec des options.
 * @param {HTMLSelectElement} selectElement - L'élément <select> à peupler.
 * @param {Array<string|object>} items - Le tableau d'éléments à ajouter (peut être des chaînes ou des objets avec une propriété 'nom').
 * @param {string} placeholder - Le texte de l'option par défaut.
 */
function populateSelect(selectElement, items, placeholder) {
    selectElement.innerHTML = `<option value="">-- ${placeholder} --</option>`;
    selectElement.disabled = !items || items.length === 0;

    if (items) {
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = typeof item === 'object' ? item.nom : item;
            option.textContent = typeof item === 'object' ? item.nom : item;
            selectElement.appendChild(option);
        });
    }
}

function populatePhases() {
    populateSelect(selectPhase, appData.phases, "Sélectionner une phase");
    selectPhase.value = currentSession.phase; // Réinitialise ou définit la sélection
    updateSummary();
    if (currentSession.phase) {
        populateActivites();
    }
}

function populateActivites() {
    const selectedPhaseName = selectPhase.value;
    const selectedPhase = appData.phases.find(p => p.nom === selectedPhaseName);

    const activites = selectedPhase ? selectedPhase.activites : [];
    populateSelect(selectActivite, activites, "Sélectionner une activité");
    selectActivite.value = currentSession.activite;
    updateSummary();
    if (currentSession.activite) {
        populateTaches();
    }
}

function populateTaches() {
    const selectedPhaseName = selectPhase.value;
    const selectedActiviteName = selectActivite.value;

    const selectedPhase = appData.phases.find(p => p.nom === selectedPhaseName);
    const selectedActivite = selectedPhase ? selectedPhase.activites.find(a => a.nom === selectedActiviteName) : null;

    const taches = selectedActivite ? selectedActivite.taches : [];
    populateSelect(selectTache, taches, "Sélectionner une tâche");
    selectTache.value = currentSession.tache;
    updateSummary();
    if (currentSession.tache) {
        populateProblematiques();
        populateResultatsAttendus();
        populateCompetencesVisees();
        populateRessourcesOnDonne();
    }
}

function populateProblematiques() {
    const selectedActiviteName = selectActivite.value;
    const problematiques = appData.problematiquesParActivite[selectedActiviteName] || [];
    populateSelect(selectProblematique, problematiques, "Sélectionner une problématique");
    selectProblematique.value = currentSession.problematique;
    updateSummary();
}

function populateResultatsAttendus() {
    const selectedTacheName = selectTache.value;
    const resultatAttendu = appData.resultatsAttendusParTache[selectedTacheName];
    // Convertit le string en un array pour populateSelect
    const items = resultatAttendu ? [resultatAttendu] : [];
    populateSelect(selectResultatAttendu, items, "Sélectionner un résultat attendu");
    selectResultatAttendu.value = currentSession.resultatAttendu;
    updateSummary();
}

function populateCompetencesVisees() {
    const selectedTacheName = selectTache.value;
    const competences = appData.competencesParTache[selectedTacheName] || [];
    populateSelect(selectCompetenceVisee, competences, "Sélectionner une compétence visée");
    selectCompetenceVisee.value = currentSession.competenceVisee;
    updateSummary();
    displayCompetenceDetails(); // Met à jour les détails si une compétence est déjà sélectionnée
}

function populateRessourcesOnDonne() {
    const ressources = appData.ressourcesOnDonne || [];
    populateSelect(selectRessourceOnDonne, ressources, "Sélectionner une ressource");
    selectRessourceOnDonne.value = currentSession.ressourceOnDonne;
    updateSummary();
}

// --- Mise à jour du résumé et détails de compétence ---

function updateSummary() {
    summaryPhase.textContent = currentSession.phase || 'N/A';
    summaryActivite.textContent = currentSession.activite || 'N/A';
    summaryTache.textContent = currentSession.tache || 'N/A';
    summaryProblematique.textContent = currentSession.problematique || 'N/A';
    summaryResultatAttendu.textContent = currentSession.resultatAttendu || 'N/A';
    summaryCompetenceVisee.textContent = currentSession.competenceVisee || 'N/A';
    summaryRessourceOnDonne.textContent = currentSession.ressourceOnDonne || 'N/A';
}

function displayCompetenceDetails() {
    const selectedCompetence = selectCompetenceVisee.value;
    const details = appData.competenceDetails[selectedCompetence];

    if (details) {
        etreCapableDeSpan.textContent = details.etreCapable || 'N/A';
        conditionsRessourcesSpan.textContent = details.conditionsRessources || 'N/A';
        criteresEvaluationSpan.textContent = details.criteresEvaluation || 'N/A';
        competenceDetailsDiv.style.display = 'block';
        currentSession.competenceDetails = details; // Stocke les détails pour le PDF
    } else {
        etreCapableDeSpan.textContent = 'N/A';
        conditionsRessourcesSpan.textContent = 'N/A';
        criteresEvaluationSpan.textContent = 'N/A';
        competenceDetailsDiv.style.display = 'none';
        currentSession.competenceDetails = null;
    }
}

// --- Gestionnaires d'événements pour les sélecteurs ---

selectPhase.addEventListener('change', () => {
    currentSession.phase = selectPhase.value;
    currentSession.activite = '';
    currentSession.tache = '';
    currentSession.problematique = '';
    currentSession.resultatAttendu = '';
    currentSession.competenceVisee = '';
    currentSession.ressourceOnDonne = '';
    currentSession.competenceDetails = null;

    populateActivites();
    populateSelect(selectTache, [], "Sélectionner une tâche"); // Vide et désactive
    populateSelect(selectProblematique, [], "Sélectionner une problématique");
    populateSelect(selectResultatAttendu, [], "Sélectionner un résultat attendu");
    populateSelect(selectCompetenceVisee, [], "Sélectionner une compétence visée");
    populateSelect(selectRessourceOnDonne, [], "Sélectionner une ressource");

    competenceDetailsDiv.style.display = 'none';
    updateSummary();
});

selectActivite.addEventListener('change', () => {
    currentSession.activite = selectActivite.value;
    currentSession.tache = '';
    currentSession.problematique = '';
    currentSession.resultatAttendu = '';
    currentSession.competenceVisee = '';
    currentSession.ressourceOnDonne = '';
    currentSession.competenceDetails = null;

    populateTaches();
    populateSelect(selectProblematique, [], "Sélectionner une problématique");
    populateSelect(selectResultatAttendu, [], "Sélectionner un résultat attendu");
    populateSelect(selectCompetenceVisee, [], "Sélectionner une compétence visée");
    populateSelect(selectRessourceOnDonne, [], "Sélectionner une ressource");

    competenceDetailsDiv.style.display = 'none';
    updateSummary();
});

selectTache.addEventListener('change', () => {
    currentSession.tache = selectTache.value;
    currentSession.problematique = '';
    currentSession.resultatAttendu = '';
    currentSession.competenceVisee = '';
    currentSession.ressourceOnDonne = '';
    currentSession.competenceDetails = null;

    populateProblematiques();
    populateResultatsAttendus();
    populateCompetencesVisees();
    populateRessourcesOnDonne();

    competenceDetailsDiv.style.display = 'none'; // Réinitialise les détails jusqu'à sélection de compétence
    updateSummary();
});

selectProblematique.addEventListener('change', () => {
    currentSession.problematique = selectProblematique.value;
    updateSummary();
});

selectResultatAttendu.addEventListener('change', () => {
    currentSession.resultatAttendu = selectResultatAttendu.value;
    updateSummary();
});

selectCompetenceVisee.addEventListener('change', () => {
    currentSession.competenceVisee = selectCompetenceVisee.value;
    displayCompetenceDetails();
    updateSummary();
});

selectRessourceOnDonne.addEventListener('change', () => {
    currentSession.ressourceOnDonne = selectRessourceOnDonne.value;
    updateSummary();
});


// --- Gestion de l'historique (Sauvegarde, Chargement, Affichage) ---

function saveSession() {
    if (!currentSession.phase || !currentSession.activite || !currentSession.tache) {
        alert("Veuillez sélectionner au moins une Phase, une Activité et une Tâche avant de sauvegarder.");
        return;
    }

    const sessionToSave = { ...currentSession, timestamp: new Date().toLocaleString() }; // Ajoute un horodatage
    historiqueSessions.push(sessionToSave);
    localStorage.setItem('historiqueSessions', JSON.stringify(historiqueSessions));
    renderHistorique();
    alert("Séance sauvegardée !");
}

function loadSessionFromHistorique(index) {
    if (index >= 0 && index < historiqueSessions.length) {
        const sessionToLoad = historiqueSessions[index];
        currentSession = { ...sessionToLoad }; // Copie les données de la session

        // Met à jour l'UI avec les données chargées
        selectPhase.value = currentSession.phase;
        populateActivites(); // Re-populate activites based on loaded phase
        selectActivite.value = currentSession.activite;
        populateTaches(); // Re-populate taches based on loaded activity
        selectTache.value = currentSession.tache;

        // Populate the remaining selects
        populateProblematiques();
        selectProblematique.value = currentSession.problematique;
        populateResultatsAttendus();
        selectResultatAttendu.value = currentSession.resultatAttendu;
        populateCompetencesVisees();
        selectCompetenceVisee.value = currentSession.competenceVisee;
        populateRessourcesOnDonne();
        selectRessourceOnDonne.value = currentSession.ressourceOnDonne;

        displayCompetenceDetails(); // Affiche les détails de la compétence
        updateSummary();
        alert("Séance chargée avec succès !");
    }
}

function deleteSessionFromHistorique(index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette séance de l'historique ?")) {
        historiqueSessions.splice(index, 1);
        localStorage.setItem('historiqueSessions', JSON.stringify(historiqueSessions));
        renderHistorique();
        alert("Séance supprimée de l'historique.");
    }
}

function loadHistorique() {
    const savedHistorique = localStorage.getItem('historiqueSessions');
    if (savedHistorique) {
        historiqueSessions = JSON.parse(savedHistorique);
        renderHistorique();
    }
}

function renderHistorique() {
    historiqueList.innerHTML = ''; // Vide l'historique actuel
    if (historiqueSessions.length === 0) {
        historiqueList.innerHTML = '<li style="text-align: center; color: var(--text-light);">Aucune séance sauvegardée pour le moment.</li>';
        return;
    }

    historiqueSessions.forEach((session, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('historique-item');
        listItem.innerHTML = `
            <div class="historique-item-info">
                <span><strong>Phase:</strong> ${session.phase || 'N/A'}</span>
                <span><strong>Activité:</strong> ${session.activite || 'N/A'}</span>
                <span><strong>Tâche:</strong> ${session.tache || 'N/A'}</span>
                <span>(${session.timestamp || 'Date inconnue'})</span>
            </div>
            <div class="historique-item-actions">
                <button class="load-historique-btn" data-index="${index}">Charger</button>
                <button class="delete-historique-btn" data-index="${index}">Supprimer</button>
            </div>
        `;
        historiqueList.appendChild(listItem);
    });

    // Attacher les gestionnaires d'événements aux boutons chargés dynamiquement
    document.querySelectorAll('.load-historique-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.index);
            loadSessionFromHistorique(index);
        });
    });

    document.querySelectorAll('.delete-historique-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.index);
            deleteSessionFromHistorique(index);
        });
    });
}


// --- Fonctions d'exportation/importation JSON ---

function exportToJson() {
    if (!currentSession.phase && !currentSession.activite && !currentSession.session) {
        alert("Aucune session à exporter. Veuillez sélectionner des critères ou charger une session.");
        return;
    }

    const sessionData = { ...currentSession }; // Copie la session actuelle
    const filename = `session_tebaa_${new Date().toISOString().slice(0, 10)}.json`;
    const dataStr = JSON.stringify(sessionData, null, 2); // Pretty print JSON

    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("Session exportée en JSON !");
}

function importJson(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedSession = JSON.parse(e.target.result);
            // Vérifier si c'est une session TEBAA valide (vérification simple)
            if (importedSession && importedSession.phase !== undefined && importedSession.activite !== undefined) {
                currentSession = { ...importedSession }; // Charge la session importée

                // Met à jour l'UI avec les données chargées
                selectPhase.value = currentSession.phase;
                populateActivites();
                selectActivite.value = currentSession.activite;
                populateTaches();
                selectTache.value = currentSession.tache;

                populateProblematiques();
                selectProblematique.value = currentSession.problematique;
                populateResultatsAttendus();
                selectResultatAttendu.value = currentSession.resultatAttendu;
                populateCompetencesVisees();
                selectCompetenceVisee.value = currentSession.competenceVisee;
                populateRessourcesOnDonne();
                selectRessourceOnDonne.value = currentSession.ressourceOnDonne;

                displayCompetenceDetails();
                updateSummary();
                alert("Séance importée avec succès !");
            } else {
                alert("Le fichier JSON n'est pas une séance TEBAA valide.");
            }
        } catch (error) {
            alert("Erreur lors de la lecture ou de l'analyse du fichier JSON : " + error.message);
            console.error("Erreur d'importation JSON :", error);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Réinitialise la valeur de l'input pour permettre de re-sélectionner le même fichier
}

function clearAllSelections() {
    if (!confirm("Voulez-vous vraiment effacer toutes les sélections et réinitialiser la séance actuelle ?")) {
        return;
    }

    currentSession = {
        phase: '',
        activite: '',
        tache: '',
        problematique: '',
        resultatAttendu: '',
        competenceVisee: '',
        ressourceOnDonne: '',
        competenceDetails: null
    };

    selectPhase.value = '';
    populateSelect(selectActivite, [], "Sélectionner une activité");
    populateSelect(selectTache, [], "Sélectionner une tâche");
    populateSelect(selectProblematique, [], "Sélectionner une problématique");
    populateSelect(selectResultatAttendu, [], "Sélectionner un résultat attendu");
    populateSelect(selectCompetenceVisee, [], "Sélectionner une compétence visée");
    populateSelect(selectRessourceOnDonne, [], "Sélectionner une ressource");

    competenceDetailsDiv.style.display = 'none';
    updateSummary();
    alert("Toutes les sélections ont été effacées !");
}


// --- Événements des boutons d'action ---

saveSessionBtn.addEventListener('click', saveSession);
loadSessionBtn.addEventListener('click', () => {
    alert("Veuillez utiliser les boutons 'Charger' dans la section Historique des Séances.");
}); // Le bouton "Charger une séance" général ne sert plus, l'historique a ses propres boutons.
exportJsonBtn.addEventListener('click', exportToJson);
triggerImportJsonBtn.addEventListener('click', () => importJsonInput.click());
importJsonInput.addEventListener('change', importJson);
clearSelectionsBtn.addEventListener('click', clearAllSelections);

// --- Génération de PDF ---
generatePdfProfBtn.addEventListener('click', () => {
    if (!currentSession.phase || !currentSession.activite || !currentSession.tache) {
        alert("Veuillez sélectionner au moins une Phase, une Activité et une Tâche pour générer le PDF Professeur.");
        return;
    }
    generatePdfForProf(currentSession, currentSession.competenceDetails); // Passe les détails de la compétence
});

generatePdfEleveBtn.addEventListener('click', () => {
    if (!currentSession.phase || !currentSession.activite || !currentSession.tache) {
        alert("Veuillez sélectionner au moins une Phase, une Activité et une Tâche pour générer le PDF Élève.");
        return;
    }
    generatePdfForEleve(currentSession);
});


// --- Initialisation de l'application ---
// Lance le chargement des données au chargement du DOM
document.addEventListener('DOMContentLoaded', initializeData);