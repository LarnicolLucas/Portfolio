const app_login = new Vue({
    el: '#app_login',

    data: {

        adress: ADRESS,

        error_msg: "",

        login: {
            value: "",
            type: "string",
        },

        password: {
            value: "",
            type: "string",
        },

        not_valid: false
    },

    methods:{
        sendFunction: function(){

            let app = this;

            axios.post(ADRESS+'/login_request', {
                login: app.login.value,
                password: app.password.value
              })
              .then(function (response) {                

                if(response.data.succes == false && response.data.blocked == false){
                    app.not_valid = true;
                    if(response.data.tentative > 3){
                        app.error_msg = "Mot de passe ou nom d'utilisateur incorrect. Tentatives restantes : "+(6 - response.data.tentative);
                    } else {
                        app.error_msg = "Mot de passe ou nom d'utilisateur incorrect."
                    }
                    
                }else if(response.data.blocked == true){
                    app.not_valid = true;
                    app.error_msg = "Compte bloqué. Contactez votre administrateur";
                } else if(response.data.succes == true){
                    window.location = app.adress+"/index/accueil";
                }
  
              })
              .catch(function (error) {
                console.log(error);
              });
            
        },
        skip: function() {
            let app = this;
            axios.post(ADRESS+'/login_request', {
                login: 'Guest2020',
                password: "Inv$0202"
              })
              .then(function (response) { 
                if(response.data.succes == true){
                    window.location = app.adress+"/index/accueil";
                }
              })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
    
    mounted: function(){
        M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
        M.Tooltip.init(document.querySelectorAll('.tooltipped'));
    }
});
