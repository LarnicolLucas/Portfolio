const app_modification = new Vue({
    el: '#app_modification',
    
    data:{

        ADRESS: ADRESS,

        select_information : Select_information,

        data_agent: DATA_FROM_SERV[0],

        data_agent_client_side : {},

        initialisation: false,

        loader: false,

        error_msg: [],

        info: {
          titre: "",
          msg: ""
        }
    },

    methods:{

        duplicateObject: function(object_to_copy){   
            return JSON.parse(JSON.stringify(object_to_copy));
        },
    
        convertDBDataForComponent: function(object_copy_type, target_value){
            let value = null;
            if(object_copy_type == "date"){
              value = convertDateTime(`${target_value}`);
            } else if(object_copy_type == "boolean"){
              value = target_value
            } else {
              value = `${target_value}`;
            }
            return value
        },

        initMinitializer: function(){
            M.FormSelect.init(document.querySelectorAll('select'));
            M.Datepicker.init(document.querySelectorAll('.datepicker'), option_date_picker);
        },

        testValidityRegEx: function(value, charsRegEx){
            let regex = new RegExp(charsRegEx);
            return regex.test(value);
        },
        testValidityTrhrowObject: function(regex, value, error_msg, champ){
  
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
            }
        },
        checkValidityOfInputs: function(){

            let data_to_send = this.data_agent_client_side
  
            let data_is_valid = true;
            this.error_msg = [];
  
            for(keys in data_to_send){
  
              if(data_to_send[keys] != undefined){
  
                let wrong_input = this.testValidityTrhrowObject(
                  data_to_send[keys].regex, 
                  data_to_send[keys].value, 
                  this.error_msg, 
                  data_to_send[keys].placeholder,
                );
              
  
                if(wrong_input){
                  data_is_valid = false;
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

        sendInfo: function(type){
          if(this.checkValidityOfInputs()){
            if(type == "confirmation"){
              this.info = {
                msg: "Confirmez-vous les modifications ?",
                titre: "Envoyez les changements",
                cancel: true
              }
            }else if(type == "envoi"){
              this.info = {
                msg: "Donnés reçus",
                titre: "Les changements ont bien été pris en compte",
                cancel: false
              }
            };

            let elems_modals = document.querySelectorAll('.modal');
            M.Modal.init(elems_modals);
            let instance = M.Modal.getInstance(document.getElementById("modal_info"));
            instance.open();
          }
        },

        sendFunction: function(){

            let app = this;

              app.loader = true;

              data_to_send = {
                target: "modification_save",
                data: this.data_agent_client_side,
              };
          
              axios.post(ADRESS+'/post_request', {
                data: data_to_send
              })
              .then(function (response) {

                if(response.status === 200){

                  app.sendInfo("envoi")

                } else {

                }
      
              })
              .catch(function (error) {
                console.log(error);
              });
            
        },
    },
    mounted: function(){
        let inputs_copy = this.duplicateObject(inputs.modification);

        for(keys in inputs_copy){
            let value = this.convertDBDataForComponent(inputs_copy[keys].type, this.data_agent[keys]);
            this.data_agent_client_side[keys] = Object.assign(inputs_copy[keys], {value: value});
            this.data_agent_client_side[keys].label_class = "active";
        };

        this.data_agent_client_side.id_agent = {value: this.data_agent.id_agent,type: "number"}

        if(this.data_agent_client_side.stagiaire.value == true){
            this.data_agent_client_side.stagiaire.value = "1"
        } else if(this.data_agent_client_side.stagiaire.value == false){
            this.data_agent_client_side.stagiaire.value = "0"
        }

        this.initialisation = true
    }

});