

const app_statistique_agent = new Vue({
    el: '#app_statistique_agent',
    data: {

        data_serv : DATA_FROM_SERV,
        data_client_side : [],

        genre : {
            Masculin: "",
            Feminin: "e"
        },

        histo: [],
        hist_annee_nr: ["_2012_nr", "_2013_nr", "_2014_nr", "_2015_nr", "_2016_nr", "_2017_nr", "_2018_nr", ],
        hist_annee_gf: ["_2012_gf", "_2013_gf", "_2014_gf", "_2015_gf", "_2016_gf", "_2017_gf", "_2018_gf", ],
        hist_annee_motif: ["_2012_motif", "_2013_motif", "_2014_motif", "_2015_motif", "_2016_motif", "_2017_motif", "_2018_motif", ],

        img: {
            Feminin: "/images/gender_female.svg",
            Masculin: "/images/gender_male.svg",
        },
        icon: {
            Maitrise: {
                value: "engineering",
                color: "#ff9800",
                color_second: "#ffb74d"
            },
            Execution: {
                value: "construction",
                color: "#f44336",
                color_second: "#e57373"
            },
            Cadre: {
                value: "work",
                color: "#2196f3",
                color_second: "#64b5f6"
            },
            Masculin: {
                value: "account_circle",
                color: "#f44336"
            },
            Feminin: {
                value: "account_circle",
                color: "#f44336"
            }
        },

        statistique_agent : {},

        active_components : false,
        activ_components_refresh : true,


        key_date_agent: [],

        circle_color: '#505050',
        circle_color_second: '#404040',
        icon_info_color: '#000'

    },
    methods: {

        convertDataFromServ__nom_prenom: function(){

            this.statistique_agent.nom_prenom = {

                id: 0,
                img : this.img[this.data_serv[0].sexe],
                icon_left: false,
                value: this.data_serv[0].nom_prenom,
                icon_right : this.icon[this.data_serv[0].college]
            };
        },

        convertDataFromServ__stats0: function(){
            
            this.statistique_agent.gf = {
                
                
                label: "GF",
                value: this.data_serv[0].gf,
                size: 50,
                color: this.circle_color,
                unity: '',
                circle_percent: 100
            };

            this.statistique_agent.nr = {
                
                label: "NR",
                value: this.data_serv[0].nr,
                size: 50,
                color: this.circle_color,
                unity: '',
                circle_percent: 100
            };

            this.statistique_agent.dernier_nr = {
                
                label: "Dernier NR",
                value: this.data_serv[0].dernier_nr_annee,
                size: 50,
                color: this.circle_color,
                unity: ' Ans',
                circle_percent: 100
            };

            this.statistique_agent.gf_moyen = {
                
                key:0,
                label: "",
                value: this.data_serv[0].gf_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: "",
                circle_percent: 100
            };

            this.statistique_agent.nr_moyen = {
                
                key:0,
                label: "",
                value: this.data_serv[0].nr_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: "",
                circle_percent: 100
            };

            this.statistique_agent.dernier_nr_moyen = {
                
                key:0,
                label: "",
                value: this.data_serv[0].dernier_nr_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: ' Ans',
                circle_percent: 100
            };


            

        },

        convertDataFromServ__statsAnnes: function(){
            
            this.statistique_agent.age_annee = {
                
                label: "Age",
                value: this.data_serv[0].age_annee,
                size: 50,
                color: this.circle_color,
                unity: 'Ans',
                circle_percent: 100
            };

            this.statistique_agent.date_ieg = {
                
                label: "Ancienneté dans les IEG",
                value: this.data_serv[0].date_ieg_annee,
                size: 50,
                color: this.circle_color,
                unity: 'Ans',
                circle_percent: 100
            };

            this.statistique_agent.date_admission = {
                
                label: "Ancienneté",
                value: this.data_serv[0].date_admission_annee,
                size: 50,
                color: this.circle_color,
                unity: 'Ans',
                circle_percent: 100
            };

            this.statistique_agent.age_moyen = {
                
                label: "",
                value: this.data_serv[0].age_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: "Ans",
                circle_percent: 100
            };

            this.statistique_agent.date_ieg_moyen = {
                
                label: "",
                value: this.data_serv[0].date_ieg_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: "Ans",
                circle_percent: 100
            };

            this.statistique_agent.date_admission_moyen = {
                
                label: "",
                value: this.data_serv[0].date_admission_moyen_par_service,
                size: 30,
                color: this.circle_color_second,
                unity: 'Ans',
                circle_percent: 100
            };


            

        },

        convertDataFromServ__service: function(){

            this.statistique_agent.service = [
                {
                    id: 0,
                    value: this.data_serv[0].metier,
                    icon_left : {
                        value: "build_circle",
                        color: this.icon_info_color,
                    },
                    label: "Metier"
                },
                {
                    id: 1,
                    value: this.data_serv[0].service,
                    icon_left : {
                        value: "supervised_user_circle",
                        color: this.icon_info_color,
                    },
                    label: "Service"
                },
                {
                    id: 2,
                    value: this.data_serv[0].pole,
                    icon_left : {
                        value: "group_work",
                        color: this.icon_info_color,
                    },
                    label: "Pôle"
                },
                {
                    id: 3,
                    value: this.data_serv[0].lieux,
                    icon_left : {
                        value: "location_on",
                        color: this.icon_info_color,
                    },
                    label: "Lieux de travail"
                },
                {
                    id: 4,
                    value: this.data_serv[0].diplome,
                    icon_left : {
                        value: "class",
                        color: this.icon_info_color,
                    },
                    label: "Diplôme"
                },
            ];
        },

        convertDataFromServ__femme: function(){
            this.statistique_agent.rapport_femme = this.data_serv[0].rapport_femme_par_service;
        },

        avgByService: function(){
            let values_to_change = ['gf_moyen', 'nr_moyen', 'dernier_nr_moyen', 'age_moyen', 'date_ieg_moyen', 'date_admission_moyen'];

            values_to_change.forEach(value => {
                
                this.statistique_agent[value] = {
                
                    label: this.statistique_agent[value].label,
                    value: this.data_serv[0][value+'_par_service'],
                    size: this.statistique_agent[value].size,
                    color: this.statistique_agent[value].color,
                    unity: this.statistique_agent[value].unity,
                    circle_percent: this.statistique_agent[value].circle_percent,
                };

            });

            this.statistique_agent.rapport_femme = this.data_serv[0].rapport_femme_par_service;
        },
        avgByDR: function(){
            let values_to_change = ['gf_moyen', 'nr_moyen', 'dernier_nr_moyen', 'age_moyen', 'date_ieg_moyen', 'date_admission_moyen'];

            values_to_change.forEach(value => {
                
                this.statistique_agent[value] = {
                
                    label: this.statistique_agent[value].label,
                    value: this.data_serv[0][value],
                    size: this.statistique_agent[value].size,
                    color: this.statistique_agent[value].color,
                    unity: this.statistique_agent[value].unity,
                    circle_percent: this.statistique_agent[value].circle_percent,
                };

            });

            this.statistique_agent.rapport_femme = this.data_serv[0].rapport_femme;
        },      
        changeAVG: function(e){
            this.activ_components_refresh = false;
            if(e == true){

                this.avgByDR();

            } else {

                this.avgByService();

            }
            this.activ_components_refresh = true;
        },

        findCollege: function(){
            if(this.data_serv[0].college == null){
                if(this.data_serv[0].gf < 8){
                    this.data_serv[0].college = "Execution"
                } else if(this.data_serv[0].gf >= 8 || this.data_serv[0].gf <= 10){
                    this.data_serv[0].college = "Maitrise"
                } else {
                    this.data_serv[0].college = "Cadre"
                }
            }
        },

        FindfirstAvancement: function(){

            let hist_annee_nr = this.hist_annee_nr;
            let len = hist_annee_nr.length;
            let i = 0;

            let res;

            for(i; i < len; i++ ){

                if(this.data_serv[0][hist_annee_nr[i]] != "�" && this.data_serv[0][hist_annee_nr[i]] != "null"){
                    res = {
                        nr: this.data_serv[0][hist_annee_nr[i]],
                        date: hist_annee_nr[i].split("_")[1],
                    }
                    break
                }
            }
            return res
        },

        caluculateTauxAvancement: function(){

            

            let dernier_avancement = this.data_serv[0].nr;
            let date_admission_annee = this.data_serv[0].date_admission_annee;

            if(dernier_avancement != "null" && date_admission_annee != "null"){

                let premier_avancement;

                if(this.data_serv[0].date_admission_first_year != null){

                    if(Number(this.data_serv[0].date_admission_first_year) <= 2018){

                        let findFirstNR = this.FindfirstAvancement();

                        let date_now = new Date();
                        
                        let actual_year = date_now.getFullYear();

                        premier_avancement = Number(findFirstNR.nr);
                        date_admission_annee = actual_year - Number(findFirstNR.date);
                        
                    }

                } else {

                    premier_avancement = this.data_serv[0].nr_stage_statutaire
                }  
                
                this.statistique_agent.ratioAvancementAgent = Math.round((dernier_avancement - premier_avancement) / (date_admission_annee * 5)*100)/100

                if(isNaN(this.statistique_agent.ratioAvancementAgent)){
                    this.statistique_agent.ratioAvancementAgent = 0;
                }
            }

        },

        construct_histo: function(){

            let fields = {

                avancement : ['date_effet_avancement', 'motif_avancement', 'nr_1_avancement', 'nr_avancement'],
                adp : ['date_effet_adp', 'motif_adp', 'nr_1_adp', 'gf_1_adp', 'nr_adp','gf_adp'],
                mutation : ['date_effet_mutation', 'motif_mutation', 'metier_1_mutation', 'metier_mutation'],
                postulant : ['date_effet_postulant', 'metier_poste', 'aptitude_postulant', 'choisi_postulant'],
                stage_statutaire : ['date_effet_stage_statutaire', 'nr_stage_statutaire', 'info_stage_statutaire'],
                titularisation : ['date_admission_titularisation','info_titularisation']
            };

            let count = 0;

            //Doit être mis en oeuvre si l'agent à une anciennetée superieur à 2019  => if(date_admission >= 2019)
            this.key_date_agent = this.hist_annee_nr.map(el =>{

                if(this.data_serv[0][el] != null && this.data_serv[0][el] != undefined && this.data_serv[0][el] != "�"){

                    let addId = count;
                    count++;

                    let year = el.split("_")[1];

                    let date_now = new Date();
                        
                    let actual_year = date_now.getFullYear();

                    let position = ((year - 2012) / (actual_year - 2012)) *100;

                    let content = `Motif: ${this.data_serv[0]["_"+year+"_motif"]} NR: ${this.data_serv[0][el]}`

                    return{ id: addId, value: year, content: content, position_left: position};
    
                } else {

                    let addId = count;
                    count++;
                    return{ id: addId, label: null, value: null, novisible: true };
                }

            });

            this.data_serv.forEach(data_servX => {

                for(key in fields){

                    let histo_event = {id: count, novisible: true};

                    count++;
                    let motifs= "";

                    fields[key].forEach((name, index) => {


                        let data = data_servX[name];

                        if(data != null && data != undefined){

                            if(index === 0 ){

                                let year = data.split("-")[0];

                                let date_now = new Date();
                                    
                                let actual_year = date_now.getFullYear();

                                let position = ((year - 2012) / (actual_year - 2012)) *100;

                                Object.assign(histo_event, {value: year, position_left: position});

                            } else {

                                motifs += ` ${data} `;
                                histo_event.novisible = null
                            }
                        } else {
                            Object.assign(histo_event, {value: null, position_left: null});
                        }
                        Object.assign(histo_event,{
                            content: motifs
                        })
                    });

                    this.key_date_agent.push(histo_event)
                }
            })            
        },

        activateToolTips: function(){
            M.Tooltip.init(document.querySelectorAll('.tooltipped'));
        },

    },
    mounted: function(){

        this.findCollege();

        this.convertDataFromServ__nom_prenom();
        this.convertDataFromServ__stats0();
        this.convertDataFromServ__statsAnnes();
        this.convertDataFromServ__service();
        this.convertDataFromServ__femme();

        this.caluculateTauxAvancement();

        this.construct_histo();

        this.active_components = true;
        M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }
});
