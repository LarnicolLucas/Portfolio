const app_csp = new Vue({
    el: '#app_csp',
    data: {

      page_load: true,

      texte_rapide: "",

      inputs_para_remplissage_rapide : {
	
	
        pole : {
          first_char : " DUM : ",
          second_char : " SDUM : ",
          type: 1
        },
        service : {
          first_char : " SDUM : ",
          second_char : " FSDUM : ",
          type: 1
        },
        metier : {
          first_char : " Emploi : ",
          second_char : " Lieu de travail ",
          type: 0
        },
        position : {
          first_char : " Position ",
          second_char : " GF",
          type: 0
        },
        nombre : {
          first_char : " d'emploi(s) ",
          second_char : " Date",
          type: 2
        },
        motif: {
          first_char : "Motif ",
          second_char : " Position ",
          type: 0
        },
        numero_publication: {
          first_char : "n° ",
          second_char : " Nombre",
          type: 4
        },
        date_forclusion: {
          first_char : "de forclusion ",
          second_char : " Motif ",
          type: 3
        },
        gf_publication: {
          first_char : "publication de ",
          second_char : " CERNE",
          type: 0
        }
      },

      select_information: Select_information,

      a1_key: 0,

      date_csp_is_select: false,

      id_csp: "",
      date_csp: "",

      agents_list_id: {
        agents_statutaires: {},
        agents_stagiaires: {}
      },

      numero_publication_list: [],
      numero_publication_list_for_auto_complete : {},

      error_msg : [],
      dom_modal_error : null,

      loader: {
        a1_inputs: false,
        a2_inputs: true,
        a3_inputs: true,
        a4_inputs: true,
        a5_inputs: true,
        a6_inputs: true,
        a7_inputs: true
      },
      target: {
        a1_inputs: "selectAllStagiaire",
        a2_inputs : "selectAllStagiaire",
        a3_inputs : "selectAllStagiaire",
        a4_inputs : "selectAllStatutaire",
        a5_inputs : "selectAgentNumeroPublication",
        a6_inputs : "selectAllStatutaire",
        a7_inputs : "selectAllStatutaire",
      },
      inputs: {
        a1_inputs: null,
        a2_inputs : null,
        a3_inputs : null,
        a4_inputs : null,
        a5_inputs : null,
        a6_inputs : null,
        a7_inputs : null
      }
    },

    created: function(){
      this.copyInputs();
    },

    mounted: function(){
      this.page_load = false
    },
      
    methods: {

      copyInputs : function(){
          for(keys in this.inputs){
            
            this.inputs[keys] = JSON.parse(JSON.stringify(inputs[keys]));
          }
      },
      initMinitializer: function(){
          M.FormSelect.init(document.querySelectorAll('select'));
          M.Datepicker.init(document.querySelectorAll('.datepicker'), option_date_picker);
      },


      testValidityRegEx: function(value, charsRegEx){
          let regex = new RegExp(charsRegEx);
          return regex.test(value);
      },
      testValidityTrhrowObject: function(regex, value, error_msg, champ, autocomplete, accept_null){

          //on regarde si la clé à un reGEX attribué
          if(regex != null){
            //on regarde si la valeur à analysé est non null
            if(value != null){
              let valid = this.testValidityRegEx(value, `^${regex.regex}$`);
              //on regarde si la valeur ne correspond pas au REGEX
              if(!valid){
                //liste les valeurs hors REGEX dans le msg d'erreur
                error_msg.push({id: error_msg.length, champ: champ, message : "Ce champ n'est pas valide"});
                return true;
              }
              //si la valeur à analysé est null on liste la clé et sont msg d'erreur attribué
            } else if(!accept_null){
              error_msg.push({id: error_msg.length, champ: champ, message : "Champ vide"});
              return true;
            }
          } if(!autocomplete && autocomplete != undefined){
              
            error_msg.push({id: error_msg.length, champ: champ, message : "Doit être choisi dans la liste"});
            return true;
          }
      },
      checkValidityOfInputs: function(data_to_send){

          let data_is_valid = true;
          this.error_msg = [];

          for(keys in data_to_send.data){

            if(data_to_send.data[keys] != undefined && data_to_send.data[keys].regex != undefined){

              let wrong_input;

              if(data_to_send.data[keys].regex.accept_null == undefined){

                wrong_input = this.testValidityTrhrowObject(
                  data_to_send.data[keys].regex, 
                  data_to_send.data[keys].value, 
                  this.error_msg, 
                  data_to_send.data[keys].placeholder,
                  data_to_send.data[keys].autocomplete,
                );

                } else {

                  wrong_input = this.testValidityTrhrowObject(
                    data_to_send.data[keys].regex, 
                    data_to_send.data[keys].value, 
                    this.error_msg, 
                    data_to_send.data[keys].placeholder,
                    data_to_send.data[keys].autocomplete,
                    data_to_send.data[keys].regex.accept_null
                  );

                }
            

              if(wrong_input){
                data_is_valid = false;
              }

              if(keys == "postulants"){

                for(ext_int in data_to_send.data.postulants){

                  data_to_send.data.postulants[ext_int].forEach(postulant => {

                    let wrong_input = this.testValidityTrhrowObject(
                      postulant.nom_prenom.regex, 
                      postulant.nom_prenom.value, 
                      this.error_msg, 
                      "postulant '"+postulant.nom_prenom.value+"'",
                      postulant.nom_prenom.autocomplete
                    );

                    if(wrong_input){
                      data_is_valid = false;
                    }

                  })
                }
              }
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


      askDB: function(bordereau){
          let app = this
          app.loader[bordereau]= true;

          axios.post(ADRESS+'/post_request', {
            data: {
               target: app.target[bordereau],
            }
          })
          .then(function (response) {
 
            app.loader[bordereau]= false;
            let raw_list = {};
            let raw_list_numero_publication = {};

            response.data.forEach(el =>  {
              if(el.nom_prenom != null){
                if(bordereau == "a4_inputs" || bordereau == "a6_inputs" || bordereau == "a7_inputs" || bordereau == "a5_inputs"){
                  app.agents_list_id.agents_statutaires[el.nom_prenom] = el.id_agent;

                } else if(bordereau == "a2_inputs" || bordereau == "a3_inputs"){
                  app.agents_list_id.agents_stagiaires[el.nom_prenom] = el.id_agent;
                };
                Object.assign(raw_list, {[el.nom_prenom]: null})
              } else {
                app.numero_publication_list.push({id_poste: el.id_poste, numero_publication: el.numero_publication});
                Object.assign(raw_list_numero_publication, {[el.numero_publication]: null})
              }
            });
            app.inputs[bordereau].list= {data: raw_list};
            app.numero_publication_list_for_auto_complete = {data: raw_list_numero_publication}
         })
          .catch(function (error) {
           console.log(error);
         });
      },
      autoFillOtherInputs: function(e, bordereau){

          let app = this;
          let id_agent = null;
          let target = 'selectAllStatutaireWhere';
          let condition = null;

          if(bordereau != "a5_inputs"){
            condition  = app.inputs[bordereau].list.data[e.currentTarget.value]
          } else {
            if(app.numero_publication_list_for_auto_complete.data[e.numero_publication] === null){
              condition = null
            } else {
              condition = true
              app.inputs[bordereau].numero_publication.value = e.numero_publication
            }
          };

          if(condition === null){

            app.loader[bordereau]= true;

            if(bordereau == "a3_inputs"){
              target = 'selectAllStagiaireWhere';
              id_agent= app.agents_list_id.agents_stagiaires[e.currentTarget.value];
              Object.assign(app.inputs[bordereau], {id_agent: {value: id_agent, type: "number"}});
              app.inputs[bordereau].nom_prenom.value = e.currentTarget.value;

            } else if(bordereau == "a5_inputs"){

              target = 'selectAllPostWhere';
              app.inputs[bordereau].numero_publication.value = e.numero_publication

            } else {
              id_agent= app.agents_list_id.agents_statutaires[e.currentTarget.value];
              Object.assign(app.inputs[bordereau], {id_agent: {value: id_agent, type: "number"}});
              app.inputs[bordereau].nom_prenom.value = e.currentTarget.value;
            }

            let data_to_send = JSON.parse(JSON.stringify(app.inputs[bordereau]));
            delete data_to_send.list
        
            axios.post(ADRESS+'/post_request', {
              
              data: {
                target: target,
                data: data_to_send,
              }          
            })
            .then(function (response) {
            
              for(keys in response.data[0]){
                
                if(app.inputs[bordereau][keys] != null){
                  app.inputs[bordereau][keys].label_class = "active";
                  if(app.inputs[bordereau][keys].type == "date"){
                    app.inputs[bordereau][keys].value = convertDateTime(`${response.data[0][keys]}`);
                  } else {
                    app.inputs[bordereau][keys].value = `${response.data[0][keys]}`;
                  }
                }
              }

              M.updateTextFields();
              app.loader[bordereau]= false;
            })
            .catch(function (error) {
              console.log(error);
            });
          }
      },


      addPostulant: function(from){
        let keys_validation = null
        let value = null
        if(from == "interne"){
          keys_validation = "autocomplete",
          value = null
        } else {
          keys_validation = "regex",
          value = regex_list.general_text
        }
          this.inputs.a5_inputs.postulants[from].push({
            key: this.inputs.a5_inputs.postulants[from].length,
            id: this.inputs.a5_inputs.postulants[from].length, 
            nom_prenom: {
              value: '',
              type:"string",
              [keys_validation]: value
            }, 
            id_agent: {
              value: 0,
              type: "number",
            }, 
          });
      },
      deletePostulant: function(e){
        let id_postulant = e.id;
        let type_postulant = e.type;

        this.inputs.a5_inputs.postulants[type_postulant].forEach((el, i)=>{

          if(el.key > id_postulant){
            el.key--;
            el.id--;
          }

        });
        
        this.inputs.a5_inputs.postulants[type_postulant].splice(id_postulant, 1);

      },
      selecteDate: function(){

          let app = this;

          axios.post(ADRESS+'/post_request', {
            data: {
              target: "insertDateCsp",
              data: {
                date: {
                  value: app.date_csp,
                  type: "date",
                }
              }
            }
          })
          .then(function (response) {

            app.id_csp = response.data[0].id
            app.date_csp_is_select = true;
  
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      sendFunction: function(bordereau, data){

          let app = this;
          let id_agent = null;

          if(bordereau == 'a1_inputs'|| bordereau == 'a5_inputs'){
            id_agent= null
          } else if(bordereau == 'a2_inputs'|| bordereau == 'a3_inputs'){
            id_agent= app.agents_list_id.agents_stagiaires[data.nom_prenom.value];
          } else {
            id_agent= app.agents_list_id.agents_statutaires[data.nom_prenom.value];
          }


          let data_to_send = {
            target: bordereau,
            data: Object.assign(data, {id_csp: {type: 'number', value: app.id_csp}}, {id_agent: {type: "number", value: id_agent}}),
          };
 
          if(this.checkValidityOfInputs(data_to_send)){

            //remove list from data :
            let list = data.list;
            delete data.list;

            app.loader[bordereau] = true;
          
            axios.post(ADRESS+'/post_request', {
              data: data_to_send
            })
            .then(function (response) {

              if(response.status === 200){

                //remise à zéro des valeurs d'inputs
                app.inputs[bordereau] = JSON.parse(JSON.stringify(inputs[bordereau]));
                app.inputs[bordereau].list = list
                app.loader[bordereau] = false;

                app.a1_key++
              } else {

              }
    
            })
            .catch(function (error) {
              console.log(error);
            });
          }
      },

      findData : function(first_char, second_char, type){

        let x0 = this.texte_rapide.split(first_char) // ["...", "XXXXXX pole ......"];
        let x1 = x0[1].split(second_char) // ["XXXXX pole", "......."];
        let res = "";
        if(type === 1) {
        
          let x2 = x1[0].split(" ") // ["XXXXX", "pole...", "....pole"];
          x2.shift(); //["pole...", "...pole"];
          x2.forEach(x => res+= x+" ");
          res = res.slice(0, -1);
          
        } else if(type === 2){
        
          res = x1[0].split(" ")[0]
        
        } else if(type === 3){
        
          let replace_point = x1[0].split(".")
        
          res = replace_point[0]+"/"+replace_point[1]+"/"+replace_point[2]
          
        } else if(type === 4){
        
          let replace_point = x1[0].split("-")
        
          res = replace_point[0]+replace_point[1]+replace_point[2]
          
        } else {
        
          res = x1[0]
        }
        
        return res
    
      },
      remplissageRapide: function(){
      
        let res = {}
      
        for(keys in this.inputs_para_remplissage_rapide) {
        
          res[keys] = this.findData(this.inputs_para_remplissage_rapide[keys].first_char, this.inputs_para_remplissage_rapide[keys].second_char, this.inputs_para_remplissage_rapide[keys].type);
        
        }	
    
        for(keys in res){
          this.inputs.a5_inputs[keys].value = res[keys];
          this.inputs.a5_inputs[keys].label_class = "active";
        };

        this.initMinitializer()
        
      },
    }
  });
  M.Collapsible.init(document.querySelectorAll('.collapsible'))

