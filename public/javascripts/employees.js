
const app_agent = new Vue({
    el: '#app_agent',
    data: {

      list_by_name : {

        list: {

          array :[
            {value: 0, key: 0, placeholder: "John"},
            {value: 1, key: 1, placeholder: "Lucas"},
            {value: 2, key: 2, placeholder: "Kathryn"},
            {value: 3, key: 3, placeholder: "Fern"},
            {value: 4, key: 4, placeholder: "Rita"},
            {value: 5, key: 5, placeholder: "Roxanne"},
            {value: 6, key: 6, placeholder: "Alannah"},
            {value: 7, key: 7, placeholder: "Constance"},
            {value: 8, key: 8, placeholder: "Lee"},
            {value: 9, key: 9, placeholder: "Tanya"},
            {value: 10, key: 10, placeholder: "Melanie"},
          ]
        },

        value: null,
        col: "s12",
        icon: "account_circle",
        label_class: "",
        placeholder: "Nom et Prénom",
        type: "string",
        regex: regex_list.general_text,
      },

      agent_list : {
        "John": 0,
        "Lucas": 1,
        "Kathryn": 2,
        "Fern": 3,
        "Rita": 4,
        "Roxanne": 5,
        "Alannah": 6,
        "Constance": 7,
        "Lee": 8,
        "Tanya": 9,
        "Melanie": 10,
      }
    },

    methods: {

      mise_a_jour_value: function(e){

        console.log(e)


          window.location += "/statistique_agent/"+e;

        
      }
    }, mounted: function(){
      M.FormSelect.init(document.querySelectorAll('select'));
    }
  })