// js/pdf-generator.js

/**
 * Génère un PDF pour le professeur avec tous les détails de la séance.
 * @param {object} sessionData - L'objet de session contenant les sélections.
 */
export function generatePdfForProf(sessionData) {
    const {
        phase,
        activite,
        tache,
        problematique,
        resultatAttendu,
        competenceVisee,
        ressourceOnDonne,
        competenceDetails // Accès direct aux détails de la compétence si stockés
    } = sessionData;

    // Création du contenu HTML pour le PDF
    let content = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">Séance Pédagogique TEBAA - Version Professeur</h1>
            
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Résumé de la Séance</h2>
                <p><strong>Phase :</strong> ${phase || 'Non sélectionné'}</p>
                <p><strong>Activité :</strong> ${activite || 'Non sélectionné'}</p>
                <p><strong>Tâche :</strong> ${tache || 'Non sélectionné'}</p>
            </div>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Détails Pédagogiques</h2>
                <p><strong>Problématique :</strong> ${problematique || 'Non sélectionné'}</p>
                <p><strong>Résultat attendu :</strong> ${resultatAttendu || 'Non sélectionné'}</p>
                <p><strong>Ressource "On donne" :</strong> ${ressourceOnDonne || 'Non sélectionné'}</p>
            </div>
    `;

    // Ajout des détails de la compétence visée s'ils existent
    if (competenceVisee && competenceDetails) {
        content += `
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Compétence Visée : ${competenceVisee}</h2>
                <p><strong>Être capable de :</strong> ${competenceDetails.etreCapable || 'N/A'}</p>
                <p><strong>Conditions et Ressources :</strong> ${competenceDetails.conditionsRessources || 'N/A'}</p>
                <p><strong>Critères d'Évaluation :</strong> ${competenceDetails.criteresEvaluation || 'N/A'}</p>
            </div>
        `;
    } else if (competenceVisee) {
         content += `
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Compétence Visée : ${competenceVisee}</h2>
                <p><em>Détails non disponibles pour cette compétence dans les données.</em></p>
            </div>
        `;
    } else {
        content += `
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Compétence Visée :</h2>
                <p>Non sélectionné</p>
            </div>
        `;
    }

    content += `</div>`;

    // Configuration pour html2pdf
    const options = {
        margin: 10,
        filename: `seance_professeur_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Génération du PDF
    html2pdf().from(content).set(options).save();
}

/**
 * Génère un PDF simplifié pour l'élève.
 * @param {object} sessionData - L'objet de session contenant les sélections.
 */
export function generatePdfForEleve(sessionData) {
    const {
        phase,
        activite,
        tache,
        problematique,
        resultatAttendu,
        ressourceOnDonne
    } = sessionData;

    // Contenu HTML pour le PDF Élève (plus concis)
    const content = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">Fiche de Travail TEBAA - Version Élève</h1>
            
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Contexte de la Séance</h2>
                <p><strong>Phase du Projet :</strong> ${phase || 'À définir'}</p>
                <p><strong>Activité :</strong> ${activite || 'À définir'}</p>
                <p><strong>Tâche à Réaliser :</strong> ${tache || 'À définir'}</p>
            </div>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Objectifs Pédagogiques</h2>
                <p><strong>Problématique à aborder :</strong> ${problematique || 'À définir'}</p>
                <p><strong>Ce qui est attendu :</strong> ${resultatAttendu || 'À définir'}</p>
            </div>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Ressources Fournies</h2>
                <p>${ressourceOnDonne || 'Aucune ressource spécifique mentionnée'}</p>
            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; color: #7f8c8d; font-size: 0.9em;">
                <p>Date de génération : ${new Date().toLocaleDateString()}</p>
                <p>Fiche générée par l'outil Concepteur de Séances Pédagogiques TEBAA</p>
            </div>
        </div>
    `;

    // Configuration pour html2pdf
    const options = {
        margin: 10,
        filename: `fiche_eleve_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Génération du PDF
    html2pdf().from(content).set(options).save();
}