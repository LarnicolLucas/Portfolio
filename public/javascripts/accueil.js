
var palette0= {
    primary: "#fff",
    secondary: "#197278",
    tertary: "#772e25",
    last: "#000"
};
var palette1= {
    primary: "#fff",
    secondary: "#fca311",
    tertary: "#14213d",
    last: "#000"
};

Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })


const app_accueil = new Vue({
    el: '#app_accueil',
    data: {

        position_shape: 0,
        intro_down: 0,
        intro_up: 0,

        section_trig: {
            svg_face: {triged : false},
            pres_text: {triged : false},
            pres_final: {triged : false}
        },

        background_color: palette0.primary,
        text_color: palette0.last,

        secondary_color: palette0.secondary,
        tertary_color: palette0.tertary,

        titre_component_Param: {

            pres: {title: "WHO AM I ?", color: palette0.secondary},
            skill_icons: {title: "TECHNOLOGIES", color: palette0.secondary},
            projects: {title: "MY PROJECTS", color: palette0.secondary},
        },

        link_icon: [
            {id: 0, src: "/images/github.svg", link: "https://github.com/LarnicolLucas/Pres", trig: false, text_color: palette0.last},
            {id: 1, src: "/images/linkin.svg", link: "https://www.linkedin.com/in/lucas-larnicol-52a995201/", trig: false, text_color: palette0.last},
            {id: 2, src: "/images/sololearn.svg", link: 'https://www.sololearn.com/Profile/7125694', trig: false, text_color: palette0.last},
            {id: 3, src: "/images/twitter.svg", link: 'https://twitter.com/LarnicolLucas', trig: false, text_color: palette0.last},
        ],

        skills_description: [
            {id:0, titre: "WEB", icon:"web", icon_color: palette0.secondary,
                description_rank1: [
                    {text: 'HTML5', id: 0, src: "/images/icon_dev/html5.svg"},
                    {text: 'CSS', id: 1, src: "/images/icon_dev/css3.svg"},
                    {text: 'JAVASCRIPT', id: 2, src: "/images/icon_dev/js-brands.svg"}
                ],
                description_rank2: [
                    {text: 'JSON', id: 3, src: "/images/icon_dev/JSON.svg"},
                    {text: 'Vue.js', id: 4, src: "/images/icon_dev/vuejs-brands.svg"},
                    {text: 'JWT', id: 5, src: "/images/icon_dev/jwt.svg"}
                ],
            },
            {id:1, titre: "DESIGN", icon:"design_services", icon_color: palette0.secondary,
                description_rank1: [
                    {text: 'Bootstrap', id: 6, src:"/images/icon_dev/bootstrap-brands.svg" },
                    {text: 'Bulma', id: 7, src: "/images/icon_dev/bulma.svg"},
                    {text: 'Materialize', id: 8, src: "/images/icon_dev/materialize_2.svg"},
                ],
                description_rank2: [
                    {text: 'Illustrator', id: 9, src:"/images/icon_dev/illustrator.svg" },
                    {text: 'Photoshop', id: 10, src:"/images/icon_dev/photoshop.svg" },
                    {text: 'Premiere', id: 11, src:"/images/icon_dev/premiere.svg" },
                ] 
            },
            {id:2, titre: "BACK-END", icon:"alt_route", icon_color: palette0.secondary,
                description_rank1: [
                    {text: 'Node.js', id: 12, src: "/images/icon_dev/node-brands.svg" },
                    {text: 'NPM', id: 13, src: "/images/icon_dev/npm.svg"},
                    {text: 'SQL Server', id: 14, src: "/images/icon_dev/sql_server.svg"},
                ],
                description_rank2: [
                    {text: 'Raspberry Pi', id: 15, src: "/images/icon_dev/raspberry.svg" },
                ]
            }
        ],

        projecttease: [
            {
                id:0, 
                src: "/images/projets/wave.jpg", 
                alt: "Synthesizer Project", 
                link: "/wave", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "With this synthesizer, simulate sounds by adding harmonics and visualize the waveform. A battery and a sequencer are added in order to compose."
            },
            {
                id:1,
                src: "/images/projets/employees.jpg", 
                alt: "Search Employees Engine Project", 
                link: "/employees", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "Search in a database for information about employees and synthesize statistical data."
            },
            {id:2, 
                src: "/images/projets/institut.jpg", 
                alt: "SPA Exemple", 
                link: "/institut", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "This site is an example of a SPA for a beauty institute."
            },
            {id:3, 
                src: "/images/projets/life_game.jpg", 
                alt: "Cellular Automaton Project", 
                link: "/life_game", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "Simulation of a cellular automatism which evolves according to propagation rules dictated by the user. We find interesting shapes like the Sierpiński Triangle."
            },
            {id:4, 
                src: "/images/projets/particle.jpg", 
                alt: "Pure Vanilla JS Particle Parallax", 
                link: "/particle", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "Animation illustrating snowflakes with a parralax effect."
            },
            {id:5, 
                src: "/images/projets/sololearn.jpg", 
                alt: "Other Projects", 
                link: "/sololearn_project", 
                color: palette0.tertary,
                color_text: palette0.primary,
                description: "Others projects hosted by SoloLearn's site."
            }
        ]
    
    },
    methods: {

        trigIcon: function(target, state){
            this.dev_icons[target].trig = state;
        },

        trig: function(e, el){
            if(el.offsetTop <= window.scrollY +500){
                el.setAttribute("style", "opacity: 1; transform: translateX(0%);")
            }
        },

        slide_shape: function(e, el){
            
            let relative_position = window.scrollY - 500;

            if(window.scrollY >= 500 && window.scrollY <= 1000){
                this.position_shape = (relative_position) * 0.4;
                el.setAttribute("style", "top: "+ this.position_shape +"px;");
            } else {
                this.position_shape = 0;
            }
        },

        slide_down_intro: function(e, el){
            
            if(window.scrollY >= 0 && window.scrollY <= 250){
                this.intro_down = window.scrollY * 0.45;
                el.setAttribute("style", "margin-top: "+ this.intro_down +"px;");
            } else {
                this.intro_down = 0;
            }
        },
        slide_up_intro: function(e, el){
            
            if(window.scrollY >= 0 && window.scrollY <= 500){
                this.intro_up = window.scrollY * (-0.50);
                el.setAttribute("style", "margin-top: "+ this.intro_up +"px;");
            } else {
                this.intro_up = 0;
            }
        },

        buttonSelect: function(e){
            window.location+= e
        }

    }
});

M.Tooltip.init(document.querySelectorAll('.tooltipped'), {margin: 40});
M.Parallax.init(document.querySelectorAll('.parallax'));