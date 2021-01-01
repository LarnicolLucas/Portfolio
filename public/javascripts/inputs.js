 const inputs = {   
    a1_inputs : 
    {
        nom_prenom : {

            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            regex: regex_list.general_text

        },
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        diplome: {
            value: null,
            col: "s4",
            icon: "class",
            label_class: "",
            placeholder: "Diplôme",
            type: "string",
            regex: regex_list.info
        },
        info: {
            value: null,
            col: "s4",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Info",
            type: "string",
            regex: regex_list.info
        },

        sexe: {
            value: null,
            col: "s4",
            icon: "wc",
            label_class: "",
            placeholder: "Sexe",
            type: "string",
            regex : regex_list.sexe
        },
        age: {
            value: null,
            col: "s4",
            icon: "event",
            label_class: "",
            placeholder: "Date de Naissance",
            type: "date",
            regex: regex_list.date
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        date_effet: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'effet",
            type: "date",
            regex: regex_list.date
        },
    },
    a2_inputs : 
    {
        nom_prenom : {

            class: "a2_inputs_autocomplete",
            value: null,
            col: "s12",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            autocomplete: null
        },
        date: {
            value: null,
            col: "s6",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date",
            type: "date",
            regex: regex_list.date
        },
        info: {
            value: null,
            col: "s6",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Info",
            type: "string",
            regex: regex_list.info
        },
    },
    a3_inputs : 
    {
        nom_prenom : {

            class: "a3_inputs_autocomplete",
            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string"

        },
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        diplome: {
            value: null,
            col: "s4",
            icon: "class",
            label_class: "",
            placeholder: "Diplôme",
            type: "string",
            regex: regex_list.info
        },
        info: {
            value: null,
            col: "s4",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Info",
            type: "string",
            regex: regex_list.info
        },

        sexe: {
            value: null,
            col: "s4",
            icon: "wc",
            label_class: "",
            placeholder: "Sexe",
            type: "string",
            regex: regex_list.sexe
        },
        age: {
            value: null,
            col: "s4",
            icon: "event",
            label_class: "",
            placeholder: "Date de Naissance",
            type: "date",
            regex: regex_list.date
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        date_admission: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'admission",
            type: "date",
            regex: regex_list.date
        },
    },
    a4_inputs : 
    {
        nom_prenom : {

            class: "a4_inputs_autocomplete",
            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string"

        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        motif: {
            value: null,
            col: "s6",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            regex: regex_list.info
        },
        date_effet: {
            value: null,
            col: "s6",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'effet",
            type: "date",
            regex: regex_list.date
        },
    },
    a5_inputs : 
    {
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf_publication: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF de publication",
            type: "string",
            regex: regex_list.gf_publication
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        numero_publication: {
            value: null,
            col: "s4",
            icon: "sticky_note_2",
            label_class: "",
            placeholder: "Numéro de publication",
            type: "string",
            regex: regex_list.publication
        },
        motif: {
            value: null,
            col: "s6",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            disable: false,
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.general_text
        },
        date_forclusion: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date de forclusion",
            type: "date",
            regex: regex_list.date
        },
        nombre:{
            value: null,
            col: "s4",
            icon: "groups",
            label_class: "",
            placeholder: "Nombre de postes",
            type: "number",
            regex: regex_list.number
        },
        postulants_externe: {
            col: "s12",
            icon: "person_add",
            label_class: "",
            placeholder: "Nom Prénom",
            type: "string",
            regex: { 
                message : regex_list.general_text.message,
                regex : regex_list.general_text.regex,
                accept_null: true
            }
        },
        postulants: {
            externe : [],
            interne : [],
        },
    },
    a6_inputs : 
    {
        nom_prenom : {

            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string"

        },
        gf: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        motif: {
            value: null,
            col: "s4",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            regex: regex_list.info
        },
        date_effet: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'effet",
            type: "date",
            regex: regex_list.date
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        }
    },
    a7_inputs : 
    {
        nom_prenom : {

            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string"

        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        motif: {
            value: null,
            col: "s4",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            regex: regex_list.info
        },
        date_effet: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'effet",
            type: "date",
            regex: regex_list.date
        }
    },
    a5_seance_inputs : 
    {
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf_publication: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF de publication",
            type: "string",
            regex: regex_list.number
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        numero_publication: {
            value: null,
            col: "s4",
            icon: "sticky_note_2",
            label_class: "",
            placeholder: "Numéro de publication",
            type: "string",
            regex: regex_list.publication
        },
        motif: {
            value: null,
            col: "s12",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            disable: false,
            regex: regex_list.info
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        date_forclusion: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date de forclusion",
            type: "date",
            regex: regex_list.date
        },
        nombre:{
            value: null,
            col: "s4",
            icon: "groups",
            label_class: "",
            placeholder: "Nombre de postes",
            type: "number",
            regex: regex_list.number
        },
        postulants: {
            externe : [],
            interne : [],
        },
        postulant: {
            nom_prenom :{
                value: null,
            },
            id_agent:{
                value: null
            }
        },
        nom_prenom : {

            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            regex: regex_list.general_text

        },     
        button_republication: {
            disabled: false,
            text: "ne pas republier ce poste"
        }

    },
    a5_candidature_inputs : 
    {
        date_ieg: {
            value: null,
            col: "s4",
            icon: "sensor_door",
            label_class: "",
            placeholder: "Date dans les IEG",
            type: "date",
            regex: regex_list.date
        },
        date_effet: {
            value: null,
            col: "s6",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date d'effet",
            type: "date",
            regex: regex_list.date
        },
        sexe: {
            value: null,
            col: "s4",
            icon: "wc",
            label_class: "",
            placeholder: "Sexe",
            type: "string",
            regex : regex_list.sexe
        },
        age: {
            value: null,
            col: "s4",
            icon: "event",
            label_class: "",
            placeholder: "Date de Naissance",
            type: "date",
            regex: regex_list.date
        },
        gf: {
            value: null,
            col: "s3",
            icon: "upgrade",
            label_class: "",
            placeholder: "Ancien GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s3",
            icon: "euro",
            label_class: "",
            placeholder: "Ancien NR",
            type: "number",
            regex: regex_list.number
        },
        gf_1: {
            value: null,
            col: "s3",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr_1: {
            value: null,
            col: "s3",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        gf_publication: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF de publication",
            type: "string",
            regex: regex_list.number
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        numero_publication: {
            value: null,
            col: "s4",
            icon: "sticky_note_2",
            label_class: "",
            placeholder: "Numéro de publication",
            type: "string",
            regex: regex_list.publication
        },
        motif: {
            value: null,
            col: "s12",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Motif",
            type: "string",
            disable: false,
            regex: regex_list.info
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        date_forclusion: {
            value: null,
            col: "s4",
            icon: "calendar_today",
            label_class: "",
            placeholder: "Date de forclusion",
            type: "date",
            regex: regex_list.date
        },
        nombre:{
            value: null,
            col: "s4",
            icon: "groups",
            label_class: "",
            placeholder: "Nombre de postes",
            type: "number",
            regex: regex_list.number
        },
        postulants: {
            externe : [],
            interne : [],
        },
        postulant: {
            nom_prenom :{
                value: null,
            },
            id_agent:{
                value: null
            }
        },
        nom_prenom : {

            value: null,
            col: "s6",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            regex: regex_list.general_text

        },     
        button_republication: {
            disabled: false,
            text: "ne pas republier ce poste"
        }

    },
    modification : 
    {
        nom_prenom : {

            value: null,
            col: "s12",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            regex: regex_list.general_text

        },
        gf: {
            value: null,
            col: "s4",
            icon: "upgrade",
            label_class: "",
            placeholder: "GF",
            type: "number",
            regex: regex_list.number
        },
        nr: {
            value: null,
            col: "s4",
            icon: "euro",
            label_class: "",
            placeholder: "NR",
            type: "number",
            regex: regex_list.number
        },
        position: {
            value: null,
            col: "s4",
            icon: "format_size",
            label_class: "",
            placeholder: "Position",
            type: "string",
            regex: regex_list.one_text
        },
        metier: {
            value: null,
            col: "s4",
            icon: "build_circle",
            label_class: "",
            placeholder: "Metier",
            type: "string",
            regex: regex_list.general_text
        },
        lieux: {
            value: null,
            col: "s4",
            icon: "location_on",
            label_class: "",
            placeholder: "Lieux",
            type: "string",
            regex: regex_list.general_text
        },
        pole: {
            value: null,
            col: "s4",
            icon: "group_work",
            label_class: "",
            placeholder: "Pôle",
            type: "string",
            regex: regex_list.general_text
        },
        service: {
            value: null,
            col: "s4",
            icon: "supervised_user_circle",
            label_class: "",
            placeholder: "Service",
            type: "string",
            regex: regex_list.general_text
        },
        info: {
            value: null,
            col: "s4",
            icon: "text_snippet",
            label_class: "",
            placeholder: "Info",
            type: "string",
            regex: regex_list.info
        },
        sexe: {
            value: null,
            col: "s4",
            icon: "wc",
            label_class: "",
            placeholder: "Sexe",
            type: "string",
            regex : regex_list.sexe
        },
        age: {
            value: null,
            col: "s4",
            icon: "event",
            label_class: "",
            placeholder: "Date de Naissance",
            type: "date",
            regex: regex_list.date
        },
        date_admission: {
            value: null,
            col: "s4",
            icon: "school",
            label_class: "",
            placeholder: "Date d'admission",
            type: "date",
            regex: regex_list.date
        },
        date_ieg: {
            value: null,
            col: "s4",
            icon: "sensor_door",
            label_class: "",
            placeholder: "Date dans les IEG",
            type: "date",
            regex: regex_list.date
        },
        diplome: {
            value: null,
            col: "s4",
            icon: "class",
            label_class: "",
            placeholder: "Diplôme",
            type: "string",
            regex: regex_list.info
        },
        stagiaire: {
            value: null,
            col: "s4",
            icon: "how_to_reg",
            label_class: "",
            placeholder: "Titularisation",
            type: "boolean",
            regex: regex_list.bol
        }
        
    },
    recherche : {
        nom_prenom : {

            value: null,
            col: "s12",
            icon: "account_circle",
            label_class: "",
            placeholder: "Nom et Prénom",
            type: "string",
            regex: regex_list.general_text,
            list: []

        },
    }
 }

