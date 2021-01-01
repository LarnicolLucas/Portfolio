
const app_validation_candidats = new Vue({
    el: '#app_validation_candidats',
    data: {

      dates: {
        list_select : [],
        list_select2 : [],
        id_list_select : {},
        loaded: false,
        first_pick: false,
        zero_pick: true
      },

      selected_date_csp: false,

      select_information: Select_information,

      loader: {
        bordereau : false,
        modal: false,
      },

      error_msg: "",

      inputs: {
          a1_inputs: [],
          a2_inputs : [],
          a3_inputs : [],
          a4_inputs : [],
          a5_inputs : [],
          a6_inputs : [],
          a7_inputs : []
      },

      a5_final_stage: [],

      table:{
          
      },
      postulant_list: [],

      id_csp: null,
      date_csp: null,

    },
    methods: {

      duplicateObject: function(object_to_copy){   
        return JSON.parse(JSON.stringify(object_to_copy));
      },
      convertDBDataForComponent: function(object_copy_type, target_value){
        let value = null;
        if(object_copy_type == "date" && target_value != undefined){
          value = convertDateTime(`${target_value}`);
        }else if(target_value == null || target_value == 'null' || target_value == undefined ){
          value = "";
        } else {
          value = `${target_value}`;
        }
        return value
      },


    testValidityRegEx: function(value, charsRegEx){
        let regex = new RegExp(charsRegEx);
        return regex.test(value);
    },
    testValidityTrhrowObject: function(regex, value, error_msg, champ, autocomplete){

        //on regarde si la clé à un reGEX attribué
        if(regex != null){
          //on regarde si la valeur à analysé est non null
          if(value != null){
            let valid = this.testValidityRegEx(value, `^${regex.regex}$`);
            //on regarde si la valeur ne correspond pas au REGEX
            if(!valid){
              //liste les valeurs hors REGEX dans le msg d'erreur
              error_msg.push({key: error_msg.length, champ: champ, message : "Ce champ n'est pas valide"});
              return true;
            }
            //si la valeur à analysé est null on liste la clé et sont msg d'erreur attribué
          } else {
            error_msg.push({key: error_msg.length, champ: champ, message : "Champ vide"});
            return true;
          }
        } if(!autocomplete && autocomplete != undefined){
            
          error_msg.push({key: error_msg.length, champ: champ, message : "Doit être choisi dans la liste"});
          return true;
        }
    },
    checkValidityOfInputs: function(data_to_send){

        let data_is_valid = true;
        this.error_msg = [];

        for(keys in data_to_send.data){

          let wrong_input = this.testValidityTrhrowObject(
            data_to_send.data[keys].regex, 
            data_to_send.data[keys].value, 
            this.error_msg, 
            data_to_send.data[keys].placeholder,
            data_to_send.data[keys].autocomplete
          );

          if(wrong_input){
            data_is_valid = false;
          }
        }
        if(data_is_valid){
          return true
        } else {
          this.sendError()
          return false
        }
    },
    sendError: function() {
        let elems_modals = document.querySelectorAll('.modal');
        M.Modal.init(elems_modals);
        let instance = M.Modal.getInstance(document.getElementById("modal_error"));
        instance.open();
    },

    selectDate: function(e) {
        
      let app = this;
      axios.post(ADRESS+'/post_request', {
        data: {
          target: 'select_date_csp_tri',
          data: {
            date_annee : {
              value : e.value,
              type : "number"
            }
          },
        }
      }).then(function (response){

        response.data.forEach((el, i) => {

          let decent_date_format = convertDateTime(el.date_seance);
          app.dates.list_select2.push({key: i, id: i, date: decent_date_format});
          app.dates.id_list_select[decent_date_format] = el.id_date_seance;

        });
        app.dates.zero_pick = false;
        app.dates.loaded = true;
        app.dates.first_pick = true;
      })
    },

      askDB: function(e){
        let target = this ;
        target.loader.bordereau = true;
        target.date_csp = e.value;
        target.id_csp = e.id_csp;

          axios.post(ADRESS+'/post_request', {
               data: {
                  target: "selectPostAndPostulant2",
                  id_csp: {value : e.id_csp, type: "number"},
        
               }
           })
            .then(function (response) {

              target.loader.bordereau = false;

              let postes = {};
              let id_postulant = 0;
              response.data.forEach((el, i)=>{

                //groupement des noms par postes:
                if(postes[el.id_poste[0]] == undefined){
                  id_postulant = 0;
                  let data = Object.assign(el, {postulants: [
                    {
                      id: {value: id_postulant, type:"number"},
                      nom_prenom: {value: el.nom_prenom, type: "string"}, 
                      id_agent: {value: el.id_agent, type: "number"},
                      choisi: {value : null, type: "string"}
                    }
                  ]})
                  Object.assign(postes, {[el.id_poste[0]]: data});
                  id_postulant++;
                }else{
                  postes[el.id_poste[0]].postulants.push({
                    id: {value: id_postulant, type:"number"},
                    nom_prenom: {value: el.nom_prenom, type: "string"}, 
                    id_agent: {value: el.id_agent, type: "number"},
                    choisi: {value : null, type: "string"}
                  });
                  id_postulant++
                };
              });

              let i = 0;
              for(keys in postes){
                let postulants = postes[keys].postulants;
                delete postes[keys].postulants;
                target.inputs.a5_inputs[i] = {};
                let inputs_copy = target.duplicateObject(inputs.a5_candidature_inputs);
                postulants.forEach((el)=>{
                  el.id_poste = i;
                });
                for(keys2 in inputs_copy){
                  let value = target.convertDBDataForComponent(inputs_copy[keys2].type, postes[keys][keys2]);
                  target.inputs.a5_inputs[i][keys2] = Object.assign(inputs_copy[keys2], {value: value});
                  target.inputs.a5_inputs[i][keys2].label_class = "active";
                };
                target.inputs.a5_inputs[i].id = i;
                target.inputs.a5_inputs[i].postulants = postulants;
                target.inputs.a5_inputs[i].sended = true;
                target.inputs.a5_inputs[i].id_poste = postes[keys].id_poste[0];
                target.a5_final_stage.push(target.inputs.a5_inputs[i])
                i++;
              }

              target.selected_date_csp = true;

            })
             .catch(function (error) {
              console.log(error);
            });
      },
      initMinitializer: function(){
        M.FormSelect.init(document.querySelectorAll('select'));
        M.Datepicker.init(document.querySelectorAll('.datepicker'), option_date_picker);
      },
      sendFunction: function(bordereau, data){

        let app = this;
        
        let postulant_choisi = null;

        let data_copy = this.duplicateObject(data)

        data_copy.id_poste = {value: data.id_poste, type: "number"}

        let data_to_send = {
          target: bordereau,
          data: data_copy,

        };

        let inputs_to_verify = Object.assign({}, { gf: data_to_send.data.gf, nr: data_to_send.data.nr, date_effet: data_to_send.data.date_effet})

        let data_To_check = { data : inputs_to_verify}

        if(this.checkValidityOfInputs(data_To_check)){

          app.loader.bordereau = true;

          axios.post(ADRESS+'/post_request', {
            data: data_to_send
          })
          .then(function (response) {
            
              app.a5_final_stage.splice(0, app.a5_final_stage.length)
              app.askDB({id_csp: app.id_csp})
    
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      openModal: function(e){

        this.inputs.a5_inputs[e.id_poste].nom_prenom.value = e.nom_prenom.value;

        if(e.id_agent.value != 0){

          let target = this

          target.loader.modal = true;
            axios.post(ADRESS+'/post_request', {
                data: {
                  target: "selectAllPostulantFinalWhere",
                  data: target.a5_final_stage[e.id_poste],
        
                }
              })
              .then(function (response) {

                target.a5_final_stage[e.id_poste].gf.value = ''+response.data[0].gf+'';
                target.a5_final_stage[e.id_poste].nr.value = ''+response.data[0].nr+'';

                M.Modal.init(document.querySelectorAll('.modal'));  
                let modal_to_open = document.getElementById("modal"+e.id_poste);
                let instance = M.Modal.getInstance(modal_to_open);
                instance.open();
                target.loader.modal = false;
      

              })
              .catch(function (error) {
                console.log(error);
              });
        } else {
          
          M.Modal.init(document.querySelectorAll('.modal'));
          
          let modal_to_open = document.getElementById("modal"+e.id_poste);
          
          let instance = M.Modal.getInstance(modal_to_open);
          
          instance.open();

        };

        this.initMinitializer();
      }
    },
    mounted: function() {

      let app = this;
      axios.post(ADRESS+'/post_request', {
        data: {
          target: "selectDateYears",
        }
      }).then(function (response){

        response.data.forEach((el, i) => {

          app.dates.list_select.push({key: i, id: i, date: el.date_years});

        });
        app.dates.loaded = true;
      });
    }
  });

M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {accordion: false});
