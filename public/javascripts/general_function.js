
const convertDateTime = (date_raw)=> {

    let date_split0 = date_raw.split("T")[0];
    let date_split = date_split0.split("-");

    return `${date_split[2]}/${date_split[1]}/${date_split[0]}`

};
const regex_list= {
    general_text: {
        message: "Doit contenir que des lettres, sans accents. 100 charactères Max",
        regex: "[A-Za-z ']{0,100}$"
    },
    one_text: {
        message: "Doit contenir qu'une lettre",
        regex: "[A-Za-z]"
    },
    gf_publication: {
        message: "Doit être sous la forme : XX à XX",
        regex: "[0-9]{2}[ ][à][ ][0-9]{2}"
    },
    number: {
        regex: "([1-9][0-9]{0,2}|1000)"
    },
    sexe:{
        regex: "Masculin|Feminin"
    },
    date:{
        regex: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
    },
    publication:{
        regex: "[0-9]*"
    },
    bol:{
        regex: "[0-1]"
    },
    info:{
        message: "Doit contenir que des lettres, sans accents et des chiffres. 100 charactères Max",
        regex: "[A-Za-z0-9 '-]{0,100}$"
    }
};
const Select_information = {
    Sites: [
        {
            key: 0,
            value: "TOLBIAC",
            placeholder : "Tolbiac"
        },
        {
            key: 1,
            value: "GRENELLE",
            placeholder : "Grenelle"
        },
        {
            key: 2,
            value: "BD NEY",
            placeholder : "BD Ney"
        },
        {
            key: 3,
            value: "ST MAUR",
            placeholder : "St Maur"
        },
        {
            key: 4,
            value: "BATIGNOLLES",
            placeholder : "Batignolles"
        },
        {
            key: 5,
            value: "ITINERANT",
            placeholder : "Itinérant"
        },
    ],
    Poles : [
        {
            key: 0,
            value: "ETAT MAJOR",
            placeholder : "Etat Major"
        },
        {
            key: 1,
            value: "OPERATIONS",
            placeholder : "Opération"
        },
        {
            key: 2,
            value: "PATRIMOINE ET INFRASTRUCTURES",
            placeholder : "Patrimoine et Infrastructures"
        },
        {
            key: 3,
            value: "RACCORDEMENT ET INGENIERIE",
            placeholder : "Raccordement et Ingenierie"
        },
        {
            key: 4,
            value: "RELATIONS CLIENTS",
            placeholder : "Relations Clients"
        },
        {
            key: 5,
            value: "TERRITORIALITE",
            placeholder : "Territorialite"
        },
    ],
    Sexe: [
        {
            key:0,
            value: "Feminin",
            placeholder: "Féminin"
        },
        {
            key:1,
            value: "Masculin",
            placeholder: "Masculin"
        }
    
    ],
    Titularisation : [
        {
            key:0,
            value: 0,
            placeholder: "Agent Titulaire"
        },
        {
            key:1,
            value: 1,
            placeholder: "Agent Stagiaire"
        }
    ],
    Positions: [
        {
            key: 0,
            value: "D",
            placeholder: "D"
        },
        {
            key: 1,
            value: "E",
            placeholder: "E"
        },
        {
            key: 2,
            value: "F",
            placeholder: "F"
        },
        {
            key: 3,
            value: "G",
            placeholder: "G"
        },
        {
            key: 4,
            value: "H",
            placeholder: "H"
        },
    ],
    Motifs: [
        {
            keys: 0,
            value: "CREATION DE POSTE",
            placeholder: "Création de poste"
        },
        {
            keys: 1,
            value: "MUTATION",
            placeholder: "Mutation"
        },
        {
            keys: 2,
            value: "DEPART EN INACTIVITE",
            placeholder: "Départ en inactivité"
        },
        {
            keys: 3,
            value: "VACANCE EVENTUELLE",
            placeholder: "Vacance éventuelle"
        },
        {
            keys: 4,
            value: "REMPLACEMENT",
            placeholder: "Remplacement"
        }
    ],
    Services: [
        {keys: 1, placeholder: "Absence longue durée", value: "ABSENCE LONGUE DUREE"},
        {keys: 2, placeholder: "Accès réseau distribution", value: "ACCES RESEAU DISTRIBUTION"},
        {keys: 3, placeholder: "Acheminement", value: "ACHEMINEMENT"},
        {keys: 4, placeholder: "ACR", value: "ACR"},
        {keys: 5, placeholder: "Agence intervention specialisées", value: "AGENCE INTERV SPECIALISEES"},
        {keys: 6, placeholder: "AIS marché d'affaires", value: "AIS MARCHE D'AFFAIRES"},
        {keys: 7, placeholder: "AMEPS", value: "AMEPS"},
        {keys: 8, placeholder: "Appui et expertise", value: "APPUI ET EXPERTISE"},
        {keys: 9, placeholder: "AQHSE", value: "AQHSE"},
        {keys: 10, placeholder: "AREX", value: "AREX"},
        {keys: 11, placeholder: "BRIPS", value: "BRIPS"},
        {keys: 12, placeholder: "Cartographie", value: "CARTOGRAPHIE"},
        {keys: 13, placeholder: "Cellule pilotage activités", value: "CELLULE PILOTAGE ACTIVITES"},
        {keys: 14, placeholder: "Communication", value: "COMMUNICATION"},
        {keys: 15, placeholder: "Détachés syndicaux et sociaux", value: "DETACHES SYNDICAUX ET SOCIAUX"},
        {keys: 16, placeholder: "Direction", value: "DIRECTION"},
        {keys: 17, placeholder: "Direction territoriale 75", value: "DIRECTION TERRITORIALE 75"},
        {keys: 18, placeholder: "Encadrement", value: "ENCADREMENT"},
        {keys: 19, placeholder: "Gestion", value: "GESTION"},
        {keys: 20, placeholder: "Grands comptes", value: "GRANDS COMPTES"},
        {keys: 21, placeholder: "Ingenierie Haut de Portefeuille", value: "INGENIERIE HT DE PORTEFEUILLE"},
        {keys: 22, placeholder: "Ingenierie ouvrages collectifs", value: "INGENIERIE OUVRAGES COLLECTIFS"},
        {keys: 23, placeholder: "Ingenierie structures PARIS", value: "INGENIERIE STRUCTURES PARIS"},
        {keys: 24, placeholder: "Interventions Batignolles", value: "INTERVENTIONS BATIGNOLLES"},
        {keys: 25, placeholder: "Interventions Grenelle", value: "INTERVENTIONS GRENELLE"},
        {keys: 26, placeholder: "Interventions Italie", value: "INTERVENTIONS ITALIE"},
        {keys: 27, placeholder: "Interventions Paris EST", value: "INTERVENTIONS PARIS EST"},
        {keys: 28, placeholder: "Linky", value: "LINKY"},
        {keys: 29, placeholder: "Logistique secretariat assistant", value: "LOGISTIQUE SECRETARIAT ASSIST"},
        {keys: 30, placeholder: "Marche d'affaire", value: "MARCHE D'AFFAIRE"},
        {keys: 31, placeholder: "MOAD reseau", value: "MOAD RESEAU"},
        {keys: 32, placeholder: "Patrimoine", value: "PATRIMOINE"},
        {keys: 33, placeholder: "Raccordement marché d'affaires", value: "RACCORDEMENT MARCHE D'AFFAIRES"},
        {keys: 34, placeholder: "Raccordement marché de masse", value: "RACCORDEMENT MARCHE DE MASSE"},
        {keys: 35, placeholder: "Ressources humaines", value: "RESSOURCES HUMAINES"},
        {keys: 36, placeholder: "Service consommateur", value: "SERVICE CONSOMMATEUR"},
        {keys: 37, placeholder: "Teleconduite", value: "TELECONDUITE"}
    ]
};

M.Sidenav.init(document.querySelectorAll('.sidenav'));

/*Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
})*/