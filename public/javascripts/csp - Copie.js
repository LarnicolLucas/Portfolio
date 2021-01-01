const app_csp = new Vue({
    el: '#app_csp',
    data: {

      loader: {
        a1_inputs: false,
        a2_inputs: false,
        a3_inputs: false,
        a4_inputs: false,
        a5_inputs: false,
        a6_inputs: false,
        a7_inputs: false
      },

      postulants: {
        
      },
      
      function_list: {
        fonctionDeTest: function(el){
          console.log(el)
        },
        duplicateObject: function(object_to_copy){   
          return JSON.parse(JSON.stringify(object_to_copy));
        },
        createComponentExtend: function(extend, data){

          let newComponent = new extend({
            data: data.data,
            methods : data.methods
          }).$mount();
          return newComponent
        },
        insertInDOM: function(el, target){
          let elem = el.$el;
          return elem.parentNode.insertBefore(target, elem);
        },
        initMinitializer: function(){
          M.FormSelect.init(document.querySelectorAll('select'));
          M.Datepicker.init(document.querySelectorAll('.datepicker'), option_date_picker);
        },
        sendFunction: function(x){
          console.log(x)
        }
        /*sendFunction: function(target, data, table){

          let data_to_send = {
            target: target,
            data: data,
            table: table
          };

          console.log(data_to_send)

          //affichage du loader
          //target.loading.add = true;

          //demande a la base de donée d'une liste
          axios.post(ADRESS+'/post_request', {
            data: data_to_send
          })
          .then(function (response) {

            //target.loading.add = false;

            console.log("reponse reçus");
  
          })
          .catch(function (error) {
            console.log(error);
          });
        },*/
      }
    
    }
  });



M.Collapsible.init(document.querySelectorAll('.collapsible'))

