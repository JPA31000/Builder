// js/data.js

export const appData = {
  "phases": [
    {
      "nom": "Phase 1 : L’avant-projet",
      "activites": [
        {
          "nom": "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic",
          "taches": [
            "Effectuer un relevé d’ouvrage",
            "Rédiger des éléments d’une notice descriptive de l’existant",
            "Mettre au net et compléter des documents graphiques d’esquisses",
            "Réaliser une maquette sommaire et des dessins de rendu",
            "Effectuer les calculs de surfaces"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 1.2 – L’avant-projet sommaire",
          "taches": [
            "Rechercher et classer la documentation spécifique au projet",
            "Produire des documents graphiques d’APS en 2D et 3D",
            "Rédiger une notice descriptive des choix architecturaux",
            "Vérifier et confirmer les calculs de surfaces"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 1.3 – L’avant-projet définitif",
          "taches": [
            "Analyser la compatibilité entre choix architecturaux et techniques",
            "Produire des documents graphiques architecturaux",
            "Transcrire les détails techniques et constructifs",
            "Établir un quantitatif des ouvrages",
            "Établir un estimatif des travaux par éléments",
            "Synthétiser la documentation graphique et technique"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 1.4 – Les autorisations de construire",
          "taches": [
            "Établir les documents administratifs nécessaires",
            "Produire des documents graphiques réglementaires",
            "Compléter le dossier administratif et technique",
            "Analyser les demandes de pièces complémentaires"
          ],
          "niveau": 2
        }
      ]
    },
    {
      "nom": "Phase 2 : Le projet",
      "activites": [
        {
          "nom": "Activité 2.1 – Les études de projet",
          "taches": [
            "Produire des documents graphiques du projet (plans, coupes, façades, détails, etc.)",
            "Rédiger le descriptif détaillé des ouvrages",
            "Estimer le coût prévisionnel des travaux"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 2.2 – L’assistance au maître d’ouvrage pour la passation des contrats de travaux",
          "taches": [
            "Constituer le Dossier de Consultation des Entreprises (DCE)",
            "Analyser les offres des entreprises",
            "Assister à la rédaction des marchés de travaux"
          ],
          "niveau": 3
        }
      ]
    },
    {
      "nom": "Phase 3 : La réalisation",
      "activites": [
        {
          "nom": "Activité 3.1 – Les plans d’exécution préalables au démarrage des travaux",
          "taches": [
            "Collecter les documents des entreprises, des bureaux d’études et de contrôle",
            "Traduire graphiquement des choix techniques retenus",
            "Produire des documents graphiques (plans de détails complémentaires…)"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 3.2 – La direction de l’exécution des marchés de travaux",
          "taches": [
            "Mettre à jour le dossier d’exécution de l’ouvrage",
            "Pointer l’avancement des travaux et actualiser le calendrier de travaux",
            "Assister aux réunions de chantier et rendre compte",
            "Effectuer le relevé des ouvrages exécutés",
            "Établir des documents modificatifs",
            "Collecter les pièces nécessaires au règlement des situations de travaux"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 3.3 – La réception et la livraison des ouvrages",
          "taches": [
            "Préparer les opérations préalables à la réception des travaux",
            "Contrôler les travaux conduisant aux levées de réserves et rendre compte",
            "Finaliser le DOE",
            "Assurer le suivi du parfait achèvement de l’ouvrage"
          ],
          "niveau": 2
        }
      ]
    }
  ],
  "problematiquesParActivite": {
    "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic": [
      "Comment recueillir efficacement les informations techniques nécessaires au diagnostic ?",
      "Quelle méthode choisir pour représenter clairement un ouvrage existant ?",
      "Comment produire des documents précis et conformes aux normes graphiques ?"
    ],
    "Activité 1.2 – L’avant-projet sommaire": [
      "Comment traduire fidèlement les intentions architecturales dans l'avant-projet sommaire ?",
      "Quelle démarche adopter pour sélectionner et présenter efficacement les matériaux ?",
      "Comment garantir que les documents produits répondent clairement aux exigences du programme ?"
    ],
    "Activité 1.3 – L’avant-projet définitif": [
      "Comment assurer une intégration cohérente et complète des éléments techniques validés ?",
      "Quelle méthode utiliser pour quantifier précisément les ouvrages prévus au projet ?",
      "Comment structurer et présenter efficacement les documents graphiques et écrits définitifs ?"
    ],
    "Activité 1.4 – Les autorisations de construire": [
      "Comment assurer la conformité réglementaire et administrative des dossiers produits ?",
      "Quelle représentation graphique choisir pour faciliter l’obtention des autorisations ?",
      "Comment organiser et vérifier l’exhaustivité du dossier administratif à déposer ?"
    ],
    "Activité 2.1 – Les études de projet": [
      "Comment concilier les contraintes techniques, réglementaires et esthétiques dans l'élaboration du projet ?",
      "Quelle méthode privilégier pour la rédaction des descriptifs techniques afin d'assurer leur clarté et leur exhaustivité ?",
      "Comment utiliser les outils numériques (BIM, DAO) pour optimiser la production des documents de projet ?"
    ],
    "Activité 2.2 – L’assistance au maître d’ouvrage pour la passation des contrats de travaux": [
      "Comment assurer une analyse rigoureuse des offres reçues des entreprises ?",
      "Quelle méthode efficace adopter pour gérer les échanges et questions durant la consultation ?",
      "Comment garantir la conformité du dossier marché aux attentes du maître d'ouvrage ?"
    ],
    "Activité 3.1 – Les plans d’exécution préalables au démarrage des travaux": [
      "Comment identifier et résoudre rapidement les incohérences avant le début du chantier ?",
      "Quelle démarche suivre pour obtenir et intégrer efficacement les informations complémentaires ?",
      "Comment produire des plans d’exécution clairs, complets et conformes aux normes ?"
    ],
    "Activité 3.2 – La direction de l’exécution des marchés de travaux": [
      "Comment organiser efficacement le suivi documentaire et opérationnel durant les travaux ?",
      "Quelle méthode employer pour actualiser précisément le calendrier et les relevés du chantier ?",
      "Comment produire des documents graphiques et écrits exacts et exploitables pendant les travaux ?"
    ],
    "Activité 3.3 – La réception et la livraison des ouvrages": [
      "Comment collecter, organiser et vérifier efficacement l’ensemble des documents de réception ?",
      "Quelle méthode adopter pour assurer un suivi rigoureux des réserves formulées lors de la réception ?",
      "Comment produire un Dossier des Ouvrages Exécutés clair, précis et utilisable par tous les acteurs concernés ?"
    ]
  },
  "resultatsAttendusParTache": {
    "Effectuer un relevé d’ouvrage": "Localiser l’ouvrage, préciser l’accessibilité et l’environnement. Compléter et préciser le croquis d’ensemble en respectant l’organisation des ouvrages. Identifier les systèmes constructifs, les matériaux (type, qualité, aspect…) et les différentes parties d’ouvrage. Relever et repérer les détails géométriques indispensables. Relever toutes les dimensions nécessaires.",
    "Rédiger des éléments d'une notice descriptive de l'existant": "Rédiger des notices descriptives précises, concises et explicites.",
    "Mettre au net et compléter des documents graphiques d'esquisses": "Utiliser les modes de représentation les mieux adaptés (croquis, photo, vidéo…). Mettre au net des documents exploitables, complets et conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique.",
    "Réaliser une maquette sommaire et des dessins de rendu": "Traduire les données graphiques préalables (aspect et volumes) par la maquette. Adapter les matériaux de la maquette aux spécificités du projet. Produire des rendus traduisant et mettant en valeur le parti architectural.",
    "Effectuer les calculs de surfaces": "Détailler les surfaces permettant la comparaison avec les exigences du programme. Choisir l’outil ou le média adapté aux documents à produire (main levée, dessin, DAO, bureautique…)",
    "Rechercher et classer la documentation spécifique au projet": "Collecter une documentation exhaustive et pertinente. Identifier et analyser la pertinence des informations collectées. Classer les informations pour en faciliter l’exploitation.",
    "Produire des documents graphiques d'APS en 2D et 3D": "Produire des documents exploitables, complets, conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique. Utiliser un outil de production de documents graphiques (DAO, BIM).",
    "Rédiger une notice descriptive des choix architecturaux": "Rédiger des notices descriptives précises, concises et explicites. Préciser les choix architecturaux et justifier les orientations retenues.",
    "Vérifier et confirmer les calculs de surfaces": "Vérifier la cohérence des calculs de surfaces avec les intentions du projet. Confirmer les surfaces définitives.",
    "Analyser la compatibilité entre choix architecturaux et techniques": "Identifier et anticiper les contraintes techniques liées aux choix architecturaux. Proposer des solutions d’adaptation ou de compromis.",
    "Produire des documents graphiques architecturaux": "Produire des documents exploitables, complets, conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique. Utiliser un outil de production de documents graphiques (DAO, BIM).",
    "Transcrire les détails techniques et constructifs": "Représenter les détails constructifs de manière claire et compréhensible. Intégrer les exigences réglementaires et normatives.",
    "Établir un quantitatif des ouvrages": "Détailler les quantités d’ouvrages élémentaires de manière exhaustive et précise.",
    "Établir un estimatif des travaux par éléments": "Estimer le coût des travaux en s’appuyant sur des bases de données économiques. Justifier les estimations.",
    "Synthétiser la documentation graphique et technique": "Organiser la documentation de manière cohérente et accessible. Assurer la conformité entre les documents graphiques et techniques.",
    "Établir les documents administratifs nécessaires": "Rédiger les documents administratifs de manière précise et conforme aux exigences réglementaires.",
    "Produire des documents graphiques réglementaires": "Produire des documents graphiques conformes aux exigences réglementaires (PLU, code de l'urbanisme, etc.).",
    "Compléter le dossier administratif et technique": "Vérifier l’exhaustivité du dossier. Organiser les pièces pour faciliter l’instruction.",
    "Analyser les demandes de pièces complémentaires": "Identifier les pièces manquantes ou les compléments d’information demandés. Préparer les réponses appropriées.",
    "Produire des documents graphiques du projet (plans, coupes, façades, détails, etc.)": "Produire des documents exploitables, complets, conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique. Utiliser un outil de production de documents graphiques (DAO, BIM).",
    "Rédiger le descriptif détaillé des ouvrages": "Rédiger des notices descriptives précises, concises et explicites. Détailler les spécifications techniques et les matériaux.",
    "Estimer le coût prévisionnel des travaux": "Estimer le coût des travaux en s’appuyant sur des bases de données économiques. Justifier les estimations et intégrer les aléas.",
    "Constituer le Dossier de Consultation des Entreprises (DCE)": "Organiser le DCE de manière complète et cohérente. S’assurer de la conformité réglementaire du DCE.",
    "Analyser les offres des entreprises": "Analyser les offres sur les plans technique, économique et administratif. Rédiger une synthèse comparative des offres.",
    "Assister à la rédaction des marchés de travaux": "Contribuer à la rédaction des pièces du marché. Vérifier la conformité juridique des contrats.",
    "Collecter les documents des entreprises, des bureaux d’études et de contrôle": "Collecter exhaustivement l’ensemble des documents (plans d’exécution, notes de calcul, avis techniques, etc.).",
    "Traduire graphiquement des choix techniques retenus": "Produire des documents graphiques exploitables, complets, conformes aux normes de dessin et aux conventions spécifiques de représentation.",
    "Produire des documents graphiques (plans de détails complémentaires…)": "Produire des documents exploitables, complets, conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique.",
    "Mettre à jour le dossier d’exécution de l’ouvrage": "Actualiser le dossier d’exécution en intégrant les modifications et les évolutions du chantier. Ordonner et organiser le dossier.",
    "Pointer l’avancement des travaux et actualiser le calendrier de travaux": "Suivre l’avancement des travaux et l’intégrer dans le calendrier. Anticiper et gérer les retards.",
    "Assister aux réunions de chantier et rendre compte": "Participer activement aux réunions de chantier. Rédiger des comptes-rendus clairs, précis et exhaustifs.",
    "Effectuer le relevé des ouvrages exécutés": "Réaliser un relevé complet et précis, conforme à la réalité de l’ouvrage. Relever les dimensions nécessaires aux contrôles de conformité.",
    "Établir des documents modificatifs": "Produire des documents exploitables, complets, conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique. Élaborer des documents conformes aux instructions et exploitables en phase de réalisation.",
    "Collecter les pièces nécessaires au règlement des situations de travaux": "Collecter exhaustivement les pièces nécessaires.",
    "Préparer les opérations préalables à la réception des travaux": "Collecter exhaustivement l’ensemble des documents (PV et fiches techniques…) nécessaires à la réception.",
    "Contrôler les travaux conduisant aux levées de réserves et rendre compte": "Effectuer correctement le suivi des réserves et en rendre compte dans un document détaillé.",
    "Finaliser le DOE": "Traduire graphiquement les modifications dans le DOE. Structurer et compléter le DOE (nomenclature, plans et documents divers).",
    "Assurer le suivi du parfait achèvement de l’ouvrage": "Constater et détailler la nature des désordres."
  },
  "competencesParTache": {
    "Effectuer un relevé d’ouvrage": ["C3.1 (Effectuer un relevé d’ouvrage)"],
    "Rédiger des éléments d'une notice descriptive de l'existant": ["C3.2 (Rédiger une notice descriptive)"],
    "Mettre au net et compléter des documents graphiques d'esquisses": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Réaliser une maquette sommaire et des dessins de rendu": ["C3.7 (Réaliser une maquette d’étude)"],
    "Effectuer les calculs de surfaces": ["C2.1 (Analyser un dossier)"],
    "Rechercher et classer la documentation spécifique au projet": ["C1.2 (Collecter et gérer des informations)", "C2.1 (Analyser un dossier)"],
    "Produire des documents graphiques d'APS en 2D et 3D": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Rédiger une notice descriptive des choix architecturaux": ["C3.2 (Rédiger une notice descriptive)"],
    "Vérifier et confirmer les calculs de surfaces": ["C2.1 (Analyser un dossier)"],
    "Analyser la compatibilité entre choix architecturaux et techniques": ["C2.1 (Analyser un dossier)", "C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)", "C2.3 (Proposer une solution à un problème identifié)"],
    "Produire des documents graphiques architecturaux": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Transcrire les détails techniques et constructifs": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Établir un quantitatif des ouvrages": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Établir un estimatif des travaux par éléments": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Synthétiser la documentation graphique et technique": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Établir les documents administratifs nécessaires": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Produire des documents graphiques réglementaires": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Compléter le dossier administratif et technique": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Analyser les demandes de pièces complémentaires": ["C2.1 (Analyser un dossier)"],
    "Produire des documents graphiques du projet (plans, coupes, façades, détails, etc.)": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Rédiger le descriptif détaillé des ouvrages": ["C3.2 (Rédiger une notice descriptive)"],
    "Estimer le coût prévisionnel des travaux": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Constituer le Dossier de Consultation des Entreprises (DCE)": ["C4.1 (Ordonner et actualiser un dossier)", "C2.1 (Analyser un dossier)"],
    "Analyser les offres des entreprises": ["C2.1 (Analyser un dossier)", "C2.3 (Proposer une solution à un problème identifié)"],
    "Assister à la rédaction des marchés de travaux": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Collecter les documents des entreprises, des bureaux d’études et de contrôle": ["C1.2 (Collecter et gérer des informations)"],
    "Traduire graphiquement des choix techniques retenus": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Produire des documents graphiques (plans de détails complémentaires…)": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Mettre à jour le dossier d’exécution de l’ouvrage": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Pointer l’avancement des travaux et actualiser le calendrier de travaux": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Assister aux réunions de chantier et rendre compte": ["C1.3 (Rendre compte oralement)", "C1.4 (Rédiger un compte-rendu)"],
    "Effectuer le relevé des ouvrages exécutés": ["C3.1 (Effectuer un relevé d’ouvrage)"],
    "Établir des documents modificatifs": ["C3.4 (Traduire graphiquement une solution technique et architecturale)", "C4.1 (Ordonner et actualiser un dossier)"],
    "Collecter les pièces nécessaires au règlement des situations de travaux": ["C1.2 (Collecter et gérer des informations)", "C4.2 (Suivre la gestion économique d’un projet)"],
    "Préparer les opérations préalables à la réception des travaux": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Contrôler les travaux conduisant aux levées de réserves et rendre compte": ["C4.3 (Vérifier la conformité de l’ouvrage et des prestations)", "C1.3 (Rendre compte oralement)"],
    "Finaliser le DOE": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Assurer le suivi du parfait achèvement de l’ouvrage": ["C4.3 (Vérifier la conformité de l’ouvrage et des prestations)"]
  },
  "competenceDetails": {
    "C1.1 (Participer à un collectif de travail)": {
      "etreCapable": "Identifier les partenaires, leur fonction et leur mission. Mesurer la responsabilité collective du groupe et repérer la mission individuelle de chacun. S’informer, écouter, analyser, intervenir dans le cadre de sa mission. Se situer dans le groupe et participer au travail.",
      "conditionsRessources": "Situation professionnelle « réelle ou simulée », dans un environnement de travail (organigramme, partenaires, interlocuteurs, relations extérieures, etc.). Mise en présence des membres d’un groupe (en interne à l’entreprise, en coactivité d’intervention, …)",
      "criteresEvaluation": "Les missions des différents partenaires sont clairement identifiées. L’enjeu de sa propre mission est explicité. Les limites de son intervention sont respectées. L’incidence de son intervention est identifiée dans la chaîne de responsabilités. Les interventions sont pertinentes."
    },
    "C1.2 (Collecter et gérer des informations)": {
      "etreCapable": "Rechercher les informations nécessaires à la résolution d’un problème et mesurer la pertinence de leur source. Classer les informations en fonction de critères définis. Organiser et synthétiser les informations. Utiliser les outils numériques et les logiciels spécifiques pour la gestion de l’information.",
      "conditionsRessources": "Documents techniques, Dossier d’Ouvrage Exécuté (DOE), Plans, Normes, Réglementations, Logiciels de bureautique (tableur, traitement de texte, base de données).",
      "criteresEvaluation": "Les informations collectées sont complètes et pertinentes. Les sources sont fiables. Les informations sont classées et organisées de manière logique. La synthèse est claire et exploitable. Les outils numériques sont maîtrisés."
    },
    "C1.3 (Rendre compte oralement)": {
      "etreCapable": "Adapter sa communication à son interlocuteur. Exposer ses arguments de manière claire et structurée. Interagir avec son auditoire. Utiliser un vocabulaire technique adapté.",
      "conditionsRessources": "Situation professionnelle « réelle ou simulée » (réunion de chantier, présentation de projet, entretien).",
      "criteresEvaluation": "La communication est adaptée à l’interlocuteur. Les arguments sont clairs et pertinents. Les interactions sont constructives. Le vocabulaire technique est approprié."
    },
    "C1.4 (Rédiger un compte-rendu)": {
      "etreCapable": "Structurer un compte-rendu. Rédiger de manière claire, concise et objective. Utiliser un vocabulaire technique précis. Respecter les conventions de rédaction.",
      "conditionsRessources": "Informations issues d’une réunion, d’une visite de chantier, d’un entretien. Modèle de compte-rendu.",
      "criteresEvaluation": "Le compte-rendu est structuré et logique. La rédaction est claire, concise et objective. Le vocabulaire technique est précis. Les conventions de rédaction sont respectées."
    },
    "C2.1 (Analyser un dossier)": {
      "etreCapable": "Identifier l’objet du dossier. Repérer les informations essentielles. Évaluer la pertinence et la complétude des documents. Synthétiser les informations clés. Proposer des axes d’analyse.",
      "conditionsRessources": "Dossiers techniques (plans, descriptifs, rapports), Réglementations, Normes, Cahiers des charges.",
      "criteresEvaluation": "L’objet du dossier est clairement identifié. Les informations essentielles sont repérées. La pertinence et la complétude sont évaluées. La synthèse est claire. Les axes d’analyse sont pertinents."
    },
    "C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)": {
      "etreCapable": "Identifier les contraintes réglementaires (PLU, RT, ERP, PMR, etc.). Analyser la conformité du projet architectural. Proposer des ajustements pour assurer la conformité.",
      "conditionsRessources": "Réglementations d’urbanisme, Normes de construction, Codes de la construction et de l’habitation.",
      "criteresEvaluation": "Les contraintes réglementaires sont identifiées. La conformité est analysée précisément. Les ajustements proposés sont pertinents et efficaces."
    },
    "C2.3 (Proposer une solution à un problème identifié)": {
      "etreCapable": "Reformuler le problème. Identifier les causes. Rechercher des solutions possibles. Évaluer les solutions (avantages/inconvénients). Proposer la solution la plus pertinente.",
      "conditionsRessources": "Cas d’étude, Problèmes concrets rencontrés en projet ou en chantier. Outils d’aide à la décision.",
      "criteresEvaluation": "Le problème est reformulé clairement. Les causes sont identifiées. Les solutions sont variées. L’évaluation est rigoureuse. La solution proposée est justifiée."
    },
    "C3.1 (Effectuer un relevé d’ouvrage)": {
      "etreCapable": "Préparer le matériel de relevé. Choisir la méthode de relevé adaptée. Effectuer les mesures. Réaliser les croquis annotés. Reporter les données sur support informatique.",
      "conditionsRessources": "Matériel de mesure (mètre, télémètre laser, niveau, etc.). Support de relevé (carnet, tablette). Logiciels de DAO/BIM.",
      "criteresEvaluation": "Le matériel est adapté. La méthode est pertinente. Les mesures sont précises. Les croquis sont clairs et annotés. Les données sont reportées correctement."
    },
    "C3.2 (Rédiger une notice descriptive)": {
      "etreCapable": "Identifier les éléments à décrire. Structurer la notice. Rédiger le contenu de manière claire, concise et technique. Utiliser un vocabulaire précis. Respecter les conventions de rédaction.",
      "conditionsRessources": "Plans, spécifications techniques, normes, modèles de notices. Outils de traitement de texte.",
      "criteresEvaluation": "Les éléments sont identifiés. La structure est logique. La rédaction est claire et technique. Le vocabulaire est précis. Les conventions sont respectées."
    },
    "C3.3 (Dresser un tableau comparatif de solutions)": {
      "etreCapable": "Identifier les critères de comparaison. Rechercher les informations sur chaque solution. Renseigner le tableau. Analyser les données et conclure.",
      "conditionsRessources": "Documentation technique, fiches produits, bases de données de matériaux. Logiciel tableur.",
      "criteresEvaluation": "Les critères sont pertinents. Les informations sont complètes. Le tableau est clair. L’analyse est rigoureuse. La conclusion est justifiée."
    },
    "C3.4 (Traduire graphiquement une solution technique et architecturale)": {
      "etreCapable": "Interpréter les intentions architecturales et techniques. Choisir le mode de représentation (plan, coupe, élévation, détail). Utiliser un logiciel de DAO/BIM. Respecter les normes de dessin et les conventions graphiques.",
      "conditionsRessources": "Croquis, esquisses, descriptifs techniques. Logiciels de DAO/BIM (AutoCAD, Revit, SketchUp).",
      "criteresEvaluation": "Les intentions sont interprétées correctement. Le mode de représentation est adapté. Le logiciel est maîtrisé. Les normes et conventions sont respectées."
    },
    "C3.5 (Quantifier les éléments d’un projet)": {
      "etreCapable": "Identifier les éléments à quantifier. Choisir la méthode de quantification. Effectuer les calculs. Présenter les résultats de manière claire.",
      "conditionsRessources": "Plans, descriptifs techniques. Logiciel tableur, logiciels de métré.",
      "criteresEvaluation": "Les éléments sont identifiés. La méthode est pertinente. Les calculs sont précis. Les résultats sont clairs."
    },
    "C3.6 (Estimer le coût d’un projet)": {
      "etreCapable": "Identifier les postes de dépenses. Rechercher les prix unitaires. Effectuer les calculs. Présenter l’estimation de manière structurée. Justifier les choix.",
      "conditionsRessources": "Bases de données de prix, bordereaux de prix, devis. Logiciel tableur, logiciels d’estimation.",
      "criteresEvaluation": "Les postes de dépenses sont identifiés. Les prix unitaires sont pertinents. Les calculs sont précis. L’estimation est structurée. Les choix sont justifiés."
    },
    "C3.7 (Réaliser une maquette d’étude)": {
      "etreCapable": "Interpréter les plans et dessins pour la maquette. Choisir les matériaux et l’échelle. Assembler les éléments. Soigner les finitions.",
      "conditionsRessources": "Plans, dessins, outils de coupe, colle, matériaux de maquette (carton, PVC, bois).",
      "criteresEvaluation": "Les plans sont interprétés correctement. Les matériaux et l’échelle sont adaptés. L’assemblage est soigné. Les finitions sont de qualité."
    },
    "C4.1 (Ordonner et actualiser un dossier)": {
      "etreCapable": "Identifier les pièces du dossier. Classer les documents selon un plan logique. Mettre à jour les informations. Archiver les versions précédentes.",
      "conditionsRessources": "Dossiers de projet, dossiers d’exécution, logiciels de gestion documentaire.",
      "criteresEvaluation": "Les pièces sont identifiées. Le classement est logique. Les informations sont à jour. L’archivage est correct."
    },
    "C4.2 (Suivre la gestion économique d’un projet)": {
      "etreCapable": "Suivre l’évolution des coûts et des dépenses. Mettre à jour les tableaux de suivi financier. Analyser les écarts et proposer des actions correctives. Préparer les demandes de règlement et les situations de travaux.",
      "conditionsRessources": "Devis, factures, tableaux de suivi financier, logiciels de comptabilité, outils de bureautique (Excel).",
      "criteresEvaluation": "Les postes de dépenses et de recettes sont identifiés. L’évolution des coûts est suivie rigoureusement. Les tableaux de suivi financier sont à jour. Les écarts sont analysés et des actions corrosives sont proposées. Les demandes de règlement sont préparées correctement."
    },
    "C4.3 (Vérifier la conformité de l’ouvrage et des prestations)": {
      "etreCapable": "Vérifier le respect des procédures administratives. Repérer et analyser les non-conformités. Contrôler le respect des règles de l’art et des tolérances. Vérifier la traçabilité des interventions. Établir les documents de suivi.",
      "conditionsRessources": "Pièces constitutives du marché, Normes, DTU et Avis techniques, Documents de labellisation ou de certification, Fiches techniques et notices d’utilisation, Rapports de contrôle, Dossier d’intervention ultérieure sur l’ouvrage (DIUO).",
      "criteresEvaluation": "Les erreurs ou manquements sont signalés. Les non-conformités sont clairement exposées. Les méthodes et outils de contrôle sont pertinents. Le bon achèvement est vérifié. Tous les aléas liés aux malfaçons ou désordres émergents sont pris en compte."
    }
  },
  "ressourcesOnDonne": [
    "Plan de situation", "Plan de masse", "Plans d'architecte (état existant)",
    "Photos du site", "Règlement d'urbanisme", "Extrait cadastral",
    "Données topographiques", "Données géotechniques", "Diagnostic amiante/plomb",
    "Cahier des charges", "Budget prévisionnel", "Planning des travaux",
    "Normes et DTU (Documents Techniques Unifiés)", "Avis techniques",
    "Logiciel de DAO (Dessin Assisté par Ordinateur)", "Logiciel BIM (Building Information Modeling)",
    "Base de données de matériaux", "Exemple de notice descriptive",
    "Tableau de métré vierge", "Modèle de compte-rendu de réunion"
  ]
};