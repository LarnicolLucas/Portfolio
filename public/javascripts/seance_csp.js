

const app_seance_csp = new Vue({
    el: '#app_seance_csp',
    data: {

        dates: {
          list_select : [],
          list_select2 : [],
          id_list_select : {},
          loaded: false,
          first_pick: false,
          zero_pick: true
        },

        loader: {
          bordereau : false,
          send: []
        },
        inputs: {
          a1_inputs: [],
          a2_inputs : [],
          a3_inputs : [],
          a4_inputs : [],
          a5_inputs : [],
          a6_inputs : [],
          a7_inputs : []
        },
        table:{
          a5_inputs_seance: ["test_db", "poste", "postulant"]
        },

        id_csp: null,
        date_csp: null,

        openA5: false,
        openAll: false,
    },
    methods: {

      duplicateObject: function(object_to_copy){   
        return JSON.parse(JSON.stringify(object_to_copy));
      },

      convertDBDataForComponent: function(object_copy_type, target_value){
        let value = null;
        if(object_copy_type == "date"){
          value = convertDateTime(`${target_value}`);
        } else {
          value = `${target_value}`;
        }
        return value
      },

      askDB: function(e){
        
        let target = this 
        target.date_csp = e.value;

        target.loader.bordereau = true;

          axios.post(ADRESS+'/post_request', {
               data: {
                  target: "selectPostAndPostulant",
                  data: {date: {value: target.date_csp, type: "date"}},
               }
           })
            .then(function (response) {

              target.loader.bordereau = false;
              target.openA5 = true;

              let postes = {};
              response.data.forEach((el,i)=>{

                //groupement des noms par postes:
                if(postes[el.id_poste[0]] == undefined){
                  if(el.id_agent == null){
                    let data = Object.assign(el, {postulants: null })
                    Object.assign(postes, {[el.id_poste[0]]: data});
                  } else {
                    let data = Object.assign(el, {postulants: [
                      {nom_prenom: {value: el.nom_prenom, type: "string"}, 
                      name_radio: "radio"+el.nom_prenom, 
                      aptitude: {value: null, type: "string"}
                      }]}
                      )
                    Object.assign(postes, {[el.id_poste[0]]: data});
                  }
                }else{
                  postes[el.id_poste[0]].postulants.push({
                    nom_prenom: {value: el.nom_prenom, type: "string"},
                    name_radio: "radio"+el.nom_prenom, 
                    aptitude: {value: null, type: "string"}
                  })
                };
              });

              let i = 0;
              for(keys in postes){
                let postulants = postes[keys].postulants;
                delete postes[keys].postulants;
                target.inputs.a5_inputs[i] = {};
                let inputs_copy = target.duplicateObject(inputs.a5_seance_inputs);
                for(keys2 in inputs_copy){
                  let value = target.convertDBDataForComponent(inputs_copy[keys2].type, postes[keys][keys2]);
                  target.inputs.a5_inputs[i][keys2] = Object.assign(inputs_copy[keys2], {value: value});
                  target.inputs.a5_inputs[i][keys2].label_class = "active";
                };
                target.inputs.a5_inputs[i].id = i;
                target.inputs.a5_inputs[i].postulants = postulants;
                target.inputs.a5_inputs[i].sended = true;
                target.inputs.a5_inputs[i].id_poste = postes[keys].id_poste[0];
                target.loader.send[i] = false
                i++;
              }
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
        app.loader.send[data.id] = true;

        let data_to_send = {
          target: bordereau,
          data: data
        };

        app.loader[bordereau] = true;

        app.inputs.a5_inputs[data.id].id_poste = {value: app.inputs.a5_inputs[data.id].id_poste, type: "number"}

        axios.post(ADRESS+'/post_request', {
          data: data_to_send
        })
        .then(function (response) {
          let copy_of_data = app.duplicateObject(app.inputs.a5_inputs[data.id]);
          copy_of_data.sended = false;
          copy_of_data.motif.disable= true;
          app.inputs.a5_inputs.splice(data.id, 1, copy_of_data);
          app.loader.send[data.id] = false;

          if(bordereau == "a5_inputs_delete_post"){
            app.inputs.a5_inputs[data.id].button_republication = {
              disabled: true,
              text : 'Poste non republié'
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        
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
      })
    }
  });

M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {accordion: false})