const app_nouvel_utilisateur = new Vue({
    el: '#app_nouvel_utilisateur',

    data: {

        adress: ADRESS,

        error_msg: "",

        login: {
            value: "",
            type: "string",
        },

        password0: {
            value: "",
            type: "string",
        },
        password1: {
            value: "",
            type: "string",
        },

        different_password : true,

        not_valid: false
    },

    methods:{

        wrongPassEvent: function(password_state){
            
            this.different_password = password_state
        },

        sendFunction: function(){

            let app = this;

            axios.post(ADRESS+'/new_login_request', {
                login: app.login.value,
                password: app.password1.value
              })
              .then(function (response) {                

                if(response.data.succes == false){
                    app.not_valid = true;
                    app.error_msg = "Nom d'utilisateur éxistant";
                } else if(response.data.succes == true){
                    window.location = app.adress+"/login";
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }
    }
});