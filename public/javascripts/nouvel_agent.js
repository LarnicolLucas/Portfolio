const app_nouvel_agent = new Vue({
    el: '#app_nouvel_agent',
    
    data:{

        ADRESS: ADRESS,

        select_information : Select_information,

        data_agent_client_side : {},

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
                //si la valeur à analysé est null on la convertit en 'NULL'
              } else {
                value = null
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
                msg: "Confirmez-vous la creation ?",
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
                target: "nouvel_agent",
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
    created: function(){
      this.data_agent_client_side = this.duplicateObject(inputs.modification)
    }
});