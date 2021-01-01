const notes_obj = {
    "C0":   16.35,
   "C#0":   17.32,
   "Db0":   17.32,
    "D0":   18.35,
   "D#0":   19.45,
   "Eb0":   19.45,
    "E0":   20.60,
    "F0":   21.83,
   "F#0":   23.12,
   "Gb0":   23.12,
    "G0":   24.50,
   "G#0":   25.96,
   "Ab0":   25.96,
    "A0":   27.50,
   "A#0":   29.14,
   "Bb0":   29.14,
    "B0":   30.87,
    "C1":   32.70,
   "C#1":   34.65,
   "Db1":   34.65,
    "D1":   36.71,
   "D#1":   38.89,
   "Eb1":   38.89,
    "E1":   41.20,
    "F1":   43.65,
   "F#1":   46.25,
   "Gb1":   46.25,
    "G1":   49.00,
   "G#1":   51.91,
   "Ab1":   51.91,
    "A1":   55.00,
   "A#1":   58.27,
   "Bb1":   58.27,
    "B1":   61.74,
    "C2":   65.41,
   "C#2":   69.30,
   "Db2":   69.30,
    "D2":   73.42,
   "D#2":   77.78,
   "Eb2":   77.78,
    "E2":   82.41,
    "F2":   87.31,
   "F#2":   92.50,
   "Gb2":   92.50,
    "G2":   98.00,
   "G#2":  103.83,
   "Ab2":  103.83,
    "A2":  110.00,
   "A#2":  116.54,
   "Bb2":  116.54,
    "B2":  123.47,
    "C3":  130.81,
   "C#3":  138.59,
   "Db3":  138.59,
    "D3":  146.83,
   "D#3":  155.56,
   "Eb3":  155.56,
    "E3":  164.81,
    "F3":  174.61,
   "F#3":  185.00,
   "Gb3":  185.00,
    "G3":  196.00,
   "G#3":  207.65,
   "Ab3":  207.65,
    "A3":  220.00,
   "A#3":  233.08,
   "Bb3":  233.08,
    "B3":  246.94,
    "C4":  261.63,
   "C#4":  277.18,
   "Db4":  277.18,
    "D4":  293.66,
   "D#4":  311.13,
   "Eb4":  311.13,
    "E4":  329.63,
    "F4":  349.23,
   "F#4":  369.99,
   "Gb4":  369.99,
    "G4":  392.00,
   "G#4":  415.30,
   "Ab4":  415.30,
    "A4":  440.00,
   "A#4":  466.16,
   "Bb4":  466.16,
    "B4":  493.88,
    "C5":  523.25,
   "C#5":  554.37,
   "Db5":  554.37,
    "D5":  587.33,
   "D#5":  622.25,
   "Eb5":  622.25,
    "E5":  659.26,
    "F5":  698.46,
   "F#5":  739.99,
   "Gb5":  739.99,
    "G5":  783.99,
   "G#5":  830.61,
   "Ab5":  830.61,
    "A5":  880.00,
   "A#5":  932.33,
   "Bb5":  932.33,
    "B5":  987.77,
    "C6": 1046.50,
   "C#6": 1108.73,
   "Db6": 1108.73,
    "D6": 1174.66,
   "D#6": 1244.51,
   "Eb6": 1244.51,
    "E6": 1318.51,
    "F6": 1396.91,
   "F#6": 1479.98,
   "Gb6": 1479.98,
    "G6": 1567.98,
   "G#6": 1661.22,
   "Ab6": 1661.22,
    "A6": 1760.00,
   "A#6": 1864.66,
   "Bb6": 1864.66,
    "B6": 1975.53,
    "C7": 2093.00,
   "C#7": 2217.46,
   "Db7": 2217.46,
    "D7": 2349.32,
   "D#7": 2489.02,
   "Eb7": 2489.02,
    "E7": 2637.02,
    "F7": 2793.83,
   "F#7": 2959.96,
   "Gb7": 2959.96,
    "G7": 3135.96,
   "G#7": 3322.44,
   "Ab7": 3322.44,
    "A7": 3520.00,
   "A#7": 3729.31,
   "Bb7": 3729.31,
    "B7": 3951.07,
    "C8": 4186.01,
   "C#8": 4434.92,
   "Db8": 4434.92,
    "D8": 4698.64,
   "D#8": 4978.03,
   "Eb8": 4978.03
};

const notes_array_no_filter = [];
 
for(let keys in notes_obj){
    notes_array_no_filter.push(notes_obj[keys]);
};
 
const notes = notes_array_no_filter.filter((el, i) => el != notes_array_no_filter[i - 1]);

const instruments = {
    flute : [null, 0.1, 0.9, 0.37, 0.185, 0.02, 0.01, 0, 0.005, 0, 0.005],
    oboe : [null, 1, 0.98, 2.1, 0.2, 0.22, 0.24, 0.58, 0.3, 0.2],
    clarinet : [null, 1, 0.35, 0.25, 0, 0.1, 0.2, 0.007],
    horn : [null, 1, 0.4, 0.25, 0.2, 0.05, 0.04, 0.05, 0.04, 0.03, 0.02, 0.01],
    guitar : [null, 1, 0.68, 1.25, 0.12, 0.12, 0.11, 0, 0, 0.2, 0.05, 0.002],
    piano: [null, 1, 0.1, 0.35, 0.052, 0.05, 0.049, 0, 0.012]
};

class synthetiseur {
    constructor(
        nb_harmonique,
        canvas, //DOM CANVAS (ById)
        synthetiseur_DOM, //DOM container (ById)
        keyboard, //DOM Keyboard (ByClassName)
        buttons_waves, //6 DOM buttons (ByClassName)
        buttons_instruments, //6 DOM buttons (ByClassName)
        buttons_potentiometre, //3 DOM buttons (ByClassName)
        buttons_octave, //DOM buttons 2 (+ and -) (ByClassName)
        buttons_manual_harmonique, // can't be > nb_harmonique DOM buttons (ByClassName)
        button_save,    // button for saving custom wave (ById)
        target_dom_save, // target to implement button for loading saved wave (ById)
        class_saved_custom_wave, //class name for button save custom wave STRING
        class_saved_custom_wave_delete, //class name for button delete a saved wave STRING
        canvas_equalizer, //Id of canvas for sketch equalizer (ById)
        container_filters_buttons, // 2 for low and hight (ByClassName)
        buttons_filters, // DOM Class (ByClassName)
        notes // frequencies list [array]
        ){

            this.color = "#4a148c";

        this.params = {
            wave: {
                nb_harmonique: nb_harmonique,

                coef_pulsation: -180*Math.PI / 40,

                coef_amplitude: 0.3,
                attack: 0.05,
                release: 0.2,
                volume: 0.2 ,

                polyphonie:[
                    {
                        oscillator: [null],
                        gain: [null],
                        amplitude: [null],
                    
                        filter: {
                            Low: [null],
                            Hight: [null]
                        },
                        fundamental: 220,
                        octave: 4
                    },
                    {
                        oscillator: [null],
                        gain: [null],
                        amplitude: [null],
                    
                        filter: {
                            Low: [null],
                            Hight: [null]
                        },
                        fundamental: 220,
                        octave: 4
                    },
                    {
                        oscillator: [null],
                        gain: [null],
                        amplitude: [null],
                    
                        filter: {
                            Low: [null],
                            Hight: [null]
                        },
                        fundamental: 220,
                        octave: 4
                    },
                ]    
            },


            fourrier_function : {
                sinus: (x) => x == 1 ? 1 : 0,
                square: (x) => x%2 != 0 ? (4/Math.PI) * (1/x) : 0,
                tooth: (x) => x%2 === 0 ? (2/Math.PI) * (-1/x) : (2/Math.PI) * (1/x),
                triangle: (x) => x%2 !=0 ? (8/Math.pow(Math.PI,2)) * Math.pow(-1, ((x+1)/2)) * (1/Math.pow(x,2)) : 0,
                random1: (x) => ((Math.random() * 2) - 1) / x * (Math.random() + 1),
                random2: (x) => 1/Math.PI * ((Math.random() * 2) - 1),

                instrument: (x) => this.params.instruments[this.params.instrument].fft[x] != undefined ? this.params.instruments[this.params.instrument].fft[x] : 0
            },
            instrument: "flute",
            instruments : {
                flute : {
                    fft: [null, 0.1, 0.9, 0.37, 0.185, 0.02, 0.01, 0, 0.005, 0, 0.005],
                    DOM: buttons_instruments[0],
                    attack_release : [0.095, 0.146, 4]
                },
                oboe : {
                    fft: [null, 0.5, 0.49, 1.05, 0.1, 0.11, 0.12, 0.28, 0.15, 0.1],
                    DOM: buttons_instruments[1],
                    attack_release : [0.095, 0.2, 3]
                },
                clarinet : {
                    fft: [null, 1, 0.35, 0.25, 0, 0.1, 0.2, 0.007],
                    DOM: buttons_instruments[2],
                    attack_release : [0.074, 0.153, 4]
                },
                horn : {
                    fft: [null, 1, 0.4, 0.25, 0.2, 0.05, 0.04, 0.05, 0.04, 0.03, 0.02, 0.01],
                    DOM: buttons_instruments[3],
                    attack_release : [0.13, 0.3, 2]
                },
                guitar : {
                    fft: [null, 1, 0.68, 1.25, 0.12, 0.12, 0.11, 0, 0, 0.2, 0.05, 0.002],
                    DOM: buttons_instruments[4],
                    attack_release : [0.03, 0.1, 4]
                },
                piano: {
                    fft: [null, 1, 0.1, 0.35, 0.052, 0.05, 0.049, 0, 0.012],
                    DOM: buttons_instruments[5],
                    attack_release : [0.008, 0.128, 4]
                }
            },
            buttons:{
                sinus: buttons_waves[0],
                square: buttons_waves[1],
                tooth: buttons_waves[2],
                triangle: buttons_waves[3],
                random1: buttons_waves[4],
                random2: buttons_waves[5],
            },
            range_buttons:{
                volume: {
                    min: 0,
                    max: 0.5,
                    DOM: buttons_potentiometre[0],
                    clicked: false,
                    position: 0,
                },
                attack: {
                    min: 0.0001,
                    max: 0.1,
                    DOM: buttons_potentiometre[1],
                    clicked: false,
                    position: 0,
                },
                release: {
                    min: 0.0001,
                    max: 0.2,
                    DOM: buttons_potentiometre[2],
                    clicked: false,
                    position: 0,
                },
            },
            custom_wave : {
                save_nb : 0,
                data : {}
            },
            equalizer_draw:{
                Low : [canvas_equalizer.height/2, canvas_equalizer.width/4],
                Hight : [canvas_equalizer.height/2, 3*canvas_equalizer.width/4] 
            }
        }

        this.keyboard = keyboard;
        this.synthetiseur = synthetiseur_DOM,
        this.buttons_octave = buttons_octave;
        this.buttons_manual_harmonique = buttons_manual_harmonique;
        this.container_filters_buttons = container_filters_buttons;
        this.buttons_filters = buttons_filters;
        this.notes = notes;

        this.custom_wave_button = button_save;
        this.custom_wave_save_folder = target_dom_save;


        this.mouse_position = 0;

        this.audio_context = {};

        this.canvas = canvas;
        this.canvas_ctx = this.canvas.getContext("2d");

        this.canvas_equalizer = canvas_equalizer;
        this.canvas_equalizer_ctx = this.canvas_equalizer.getContext("2d");

        ////INIT and DOM listener create /////

        this.mouseMove = (evt, mobile) => {

            let clientY = 0;

            if(mobile){
                clientY = evt.touches[0].clientY;
            } else {
                clientY = evt.clientY
            }

            for(let keys in this.params.range_buttons){
                if(this.params.range_buttons[keys].clicked){
                    let x = this.mouse_position - clientY;

                    if( x >= 150 ){
                        x = 150;
                    } else if(this.mouse_position - clientY <= -150){
                        x = -150;
                    } else {
                        x = x;
                    }

                    this.params.range_buttons[keys].DOM.style.transform = "rotate("+x+"deg)";
                    this.params.range_buttons[keys].position = x;

                    this.params.wave[keys] = (-((this.params.range_buttons[keys].min - this.params.range_buttons[keys].max)/300) * x) + this.params.range_buttons[keys].max + (this.params.range_buttons[keys].min - this.params.range_buttons[keys].max)/2;

                    for(let polyphonie = 0 ; polyphonie < this.params.wave.polyphonie.length; polyphonie++){

                        if(keys.slice(0, -1) == "harmoniques" || keys.slice(0, -2) == "harmoniques"){
                            let rank = keys.slice(11);
                            this.params.wave.polyphonie[polyphonie].amplitude[rank] =  this.params.wave[keys];
                            this.printWave();
                        }

                        if(keys == "Lowgain"){
                            for(let rank = 1 ; rank <= this.params.wave.nb_harmonique; rank++){

                                this.params.wave.polyphonie[polyphonie].filter.Low[rank].gain.value = this.params.wave[keys];

                            }

                            this.params.equalizer_draw.Low[0] = ((-this.canvas_equalizer.height/300) * x) + (this.canvas_equalizer.height/2);

                            this.printEqualizer();
                        }

                        if(keys == "Lowfrequency"){

                            for(let rank = 1 ; rank <= this.params.wave.nb_harmonique; rank++){

                                this.params.wave.polyphonie[polyphonie].filter.Low[rank].frequency.value = this.params.range_buttons[keys].range_frequencies.max * Math.pow(2, this.params.range_buttons[keys].range * (this.params.wave[keys] - 1));
                            }

                            this.params.equalizer_draw.Low[1] = ((this.canvas_equalizer.width/600) * x) + (this.canvas_equalizer.width/4);

                            this.printEqualizer();
                        }

                        if(keys == "Hightgain"){
                            for(let rank = 1 ; rank <= this.params.wave.nb_harmonique; rank++){

                                this.params.wave.polyphonie[polyphonie].filter.Hight[rank].gain.value = this.params.wave[keys];

                            }


                            this.params.equalizer_draw.Hight[0] = ((-this.canvas_equalizer.height/300) * x) + (this.canvas_equalizer.height/2);

                            this.printEqualizer();
                        }

                        if(keys == "Hightfrequency"){
                            for(let rank = 1 ; rank <= this.params.wave.nb_harmonique; rank++){

                                this.params.wave.polyphonie[polyphonie].filter.Hight[rank].frequency.value = this.params.range_buttons[keys].range_frequencies.max * Math.pow(2, this.params.range_buttons[keys].range * (this.params.wave[keys] - 1));
                            }
                

                            let a = ((this.canvas_equalizer.width / 2) / 300);
                            let b = this.canvas_equalizer.width - (a * 150);



                            this.params.equalizer_draw.Hight[1] = ( a * x )+ b;

                            this.printEqualizer();
                        }
                    }
                }

            }
        }

        this.InitButtonsHarmoniques = () => {
            for(let rank = 1; rank <= this.buttons_manual_harmonique.length; rank++){
                this.params.range_buttons["harmoniques"+rank] = {
                    min: -2,
                    max: 2,
                    DOM: this.buttons_manual_harmonique[rank-1],
                    clicked: false,
                    position: 0,
                };
            }
        }


        this.initFiltersButtons = () => {

            let cont = 0;

            for(let nb_container = 0; nb_container < this.container_filters_buttons.length; nb_container++){

                let keys = ["Low", "Hight"];

                let range_filter = ["gain", "frequency"];

                let min_max = [[-12,12], [0,1]];

                let range_frequencies = {
                    max: [this.audio_context.sampleRate/4, this.audio_context.sampleRate/4 ], //this.audio_context.sampleRate/2],
                    min: [40, 40] //this.audio_context.sampleRate/4],
                }

                for(let button_nb = 0; button_nb < 2; button_nb++){
                    this.params.range_buttons[keys[nb_container]+range_filter[button_nb]] = {
                        min: min_max[button_nb][0],
                        max: min_max[button_nb][1],
                        DOM: this.buttons_filters[cont],
                        clicked: false,
                        position: 0,
                        range: Math.log(range_frequencies.max[nb_container] / range_frequencies.min[nb_container]) / Math.LN2,
                        range_frequencies : {
                            max: range_frequencies.max[nb_container],
                            min: range_frequencies.min[nb_container],
                        }
                    };

                    cont++;
                }

            }
        }

        this.create = () => {

            this.audio_context = new (window.AudioContext || window.webkitAudioContext)();

            for(let polyphonie = 0; polyphonie < this.params.wave.polyphonie.length; polyphonie++){

            

                for(let rank = 1 ; rank <= nb_harmonique; rank++){

                    this.params.wave.polyphonie[polyphonie].amplitude[rank] = 0;

                    this.params.wave.polyphonie[polyphonie].oscillator[rank] = this.audio_context.createOscillator();
                    this.params.wave.polyphonie[polyphonie].oscillator[rank].type = "sine";

                    this.params.wave.polyphonie[polyphonie].gain[rank] = this.audio_context.createGain();
                    this.params.wave.polyphonie[polyphonie].gain[rank].gain.value = 0; 

                    this.params.wave.polyphonie[polyphonie].filter.Low[rank] = this.audio_context.createBiquadFilter();
                    this.params.wave.polyphonie[polyphonie].filter.Low[rank].type = "lowshelf";

                    this.params.wave.polyphonie[polyphonie].filter.Hight[rank] = this.audio_context.createBiquadFilter();
                    this.params.wave.polyphonie[polyphonie].filter.Hight[rank].type = "highshelf";

                    this.params.wave.polyphonie[polyphonie].oscillator[rank].connect(this.params.wave.polyphonie[polyphonie].filter.Low[rank]);
                    this.params.wave.polyphonie[polyphonie].filter.Low[rank].connect(this.params.wave.polyphonie[polyphonie].filter.Hight[rank]);
                    this.params.wave.polyphonie[polyphonie].filter.Hight[rank].connect(this.params.wave.polyphonie[polyphonie].gain[rank]);
                    this.params.wave.polyphonie[polyphonie].gain[rank].connect(this.audio_context.destination);

                    this.params.wave.polyphonie[polyphonie].oscillator[rank].start();
                };
            }
            this.InitButtonsHarmoniques();
            this.initFiltersButtons();
            this.initNotes();
            this.initButtonsWaves();
            this.initButtonsInstruments();
            this.initPotentiometres();
            this.initButtonsOctave();

            this.initSaveButton();

            this.params.wave.polyphonie[0].amplitude[1] = 1.5;
            this.params.wave.polyphonie[1].amplitude[1] = 1.5;
            this.params.wave.polyphonie[2].amplitude[1] = 1.5;
            
            this.printWave();
            this.printEqualizer();
            this.actualizeHarmoniqueButtons();
            


        };

        this.initNotes = () => {

            for(let i_notes = 0 ; i_notes < this.keyboard.length; i_notes++){

                this.keyboard[i_notes].addEventListener("mousedown", () => {
            
                    this.params.wave.polyphonie[0].fundamental = this.notes[i_notes + (this.params.wave.polyphonie[0].octave * 12)];
                    this.playWave(0)
                });

                this.keyboard[i_notes].addEventListener("mouseup",this.stopWave);

                //MOBILE//
                this.keyboard[i_notes].addEventListener("touchstart", () => {
            
                    this.params.wave.polyphonie[0].fundamental = this.notes[i_notes + (this.params.wave.polyphonie[0].octave * 12)];
                    this.playWave(0)
                });

                this.keyboard[i_notes].addEventListener("touchend",this.stopWave);
            }
        }

        this.initButtonsWaves = () => {

            for(let keys in this.params.buttons){

                this.params.buttons[keys].innerHTML = keys;
                this.params.buttons[keys].addEventListener("click", ()=> {

                    this.functionOfX = this.params.fourrier_function[keys];
                    
                    this.changeAmplitude();

                    this.actualizeHarmoniqueButtons();
                });
            };
        }

        this.initButtonsInstruments = () => {

            for(let keys in this.params.instruments){

                this.params.instruments[keys].DOM.innerHTML = keys;
                this.params.instruments[keys].DOM.addEventListener("click", ()=> {
                    this.params.instrument = keys;
                    this.functionOfX = this.params.fourrier_function["instrument"];
                    this.changeAttackMode(this.params.instruments[keys].attack_release)
                    this.changeAmplitude();
                    this.actualizeHarmoniqueButtons();
                });
            };
        },

        this.initPotentiometres = () => {

            for(let keys in this.params.range_buttons){

                this.params.range_buttons[keys].DOM.addEventListener("mousedown", (evt) => {
                    this.params.range_buttons[keys].clicked = true;
                    this.mouse_position = evt.clientY + this.params.range_buttons[keys].position;
                });
            };

            this.synthetiseur.addEventListener("mouseup", (evt) => {
                for(let keys in this.params.range_buttons){
                    this.params.range_buttons[keys].clicked = false;
                }
            });
            this.synthetiseur.addEventListener("mouseleave", (evt) => {
                for(let keys in this.params.range_buttons){
                    this.params.range_buttons[keys].clicked = false;
                }
            });

            this.synthetiseur.addEventListener("mousemove", (evt) => { this.mouseMove(evt, false) });


            ////For Mobile ///

            for(let keys in this.params.range_buttons){

                this.params.range_buttons[keys].DOM.addEventListener("touchstart", (evt) => {
                    evt.preventDefault();
                    this.params.range_buttons[keys].clicked = true;
                    this.mouse_position = evt.touches[0].clientY + this.params.range_buttons[keys].position;
                });
            };

            this.synthetiseur.addEventListener("touchend", (evt) => {
                for(let keys in this.params.range_buttons){
                    this.params.range_buttons[keys].clicked = false;
                }
            });

            this.synthetiseur.addEventListener("touchmove", (evt) => { this.mouseMove(evt, true) });
        };

        this.initButtonsOctave = () => {

            for(let i = 0; i < this.buttons_octave.length; i++){

                this.buttons_octave[i].addEventListener("click", (evt) =>{

                    if(i===0 && this.params.wave.polyphonie[0].octave > 0){
                        this.params.wave.polyphonie[0].octave -= 1;
                    } else if(i == 1 && this.params.wave.polyphonie[0].octave < 6){
                        this.params.wave.polyphonie[0].octave +=1;
                    }
                })
            }
        }

        this.initSaveButton = () => {
            this.custom_wave_button.addEventListener("click", (evt)=> {

                this.params.custom_wave.save_nb++;

                this.createCustomButton([], [this.params.wave.attack, this.params.wave.release, this.params.wave.octave], "Custom"+this.params.custom_wave.save_nb);

                let string = JSON.stringify(this.local_storage_custom_wave);

                window.localStorage.setItem("saved_waves", string);

            })
        }

        this.createCustomButton = (harmoniques, ARO, key) => {

            this.params.custom_wave.data[key] = {
                harmoniques: [],
                ARO: ARO,
                div: document.createElement("div"),
                delete_icon : document.createElement("i")
            };

            if(harmoniques.length != 0){
                this.params.custom_wave.data[key].harmoniques = harmoniques;
            } else {
                for(let rank = 1; rank <= this.buttons_manual_harmonique.length; rank++ ){
                    this.params.custom_wave.data[key].harmoniques[rank] = this.params.wave.amplitude[rank];
                }
            }

            this.params.custom_wave.data[key].div.setAttribute("class", class_saved_custom_wave);
            this.params.custom_wave.data[key].div.innerHTML = key;
            this.custom_wave_save_folder.appendChild(this.params.custom_wave.data[key].div);
                

            this.params.custom_wave.data[key].delete_icon.setAttribute("class", class_saved_custom_wave_delete);
            this.params.custom_wave.data[key].delete_icon.innerHTML= "delete";
            this.custom_wave_save_folder.appendChild(this.params.custom_wave.data[key].delete_icon);

            this.params.custom_wave.data[key].div.addEventListener("click", (evt)=>{

                for(let rank = 1; rank <= this.buttons_manual_harmonique.length; rank++){

                    this.params.wave.amplitude[rank] = this.params.custom_wave.data[key].harmoniques[rank];
                
                }

                this.changeAttackMode(this.params.custom_wave.data[key].ARO);
                this.actualizeHarmoniqueButtons();
                this.printWave();

            });

            this.params.custom_wave.data[key].delete_icon.addEventListener("click", (evt)=>{

                this.custom_wave_save_folder.removeChild(this.params.custom_wave.data[key].delete_icon);
                this.custom_wave_save_folder.removeChild(this.params.custom_wave.data[key].div);
                    
                delete this.params.custom_wave.data[key];
                    
            });
        };


        ///////////////////////////////////////////////// Audio action : ramp to max volume value ////////////////////////////////////////////////////

        this.playWave = (nb_poly) => {

            for(let rank = 1 ; rank <= nb_harmonique; rank++){

                this.params.wave.polyphonie[nb_poly].oscillator[rank].frequency.value = this.params.wave.polyphonie[nb_poly].fundamental * rank;

                if(this.params.wave.polyphonie[nb_poly].amplitude[rank] != 0){

                    this.params.wave.polyphonie[nb_poly].gain[rank].gain.setTargetAtTime(this.params.wave.polyphonie[nb_poly].amplitude[rank] * this.params.wave.volume, this.audio_context.currentTime, this.params.wave.attack);
                }
            }
        };

        this.stopWave = () => {

            for(let polyphonie = 0; polyphonie < this.params.wave.polyphonie.length; polyphonie++){

                for(let rank = 1 ; rank <= nb_harmonique; rank++){
                
                    this.params.wave.polyphonie[polyphonie].gain[rank].gain.setTargetAtTime(0, this.audio_context.currentTime, this.params.wave.release);

                }
            }

        };

        /////////////////////////////////////////// User Interface Display ///////////////////////////

        this.printWave = () =>{

            this.canvas_ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) 

            let height_corection = this.params.wave.coef_amplitude * this.canvas.height;
          
            this.canvas_ctx.beginPath()
        
            for(let i=0; i< this.canvas.width; i++){
                
                let y = 0;
                
                for(let rank = 1; rank <= nb_harmonique; rank++){

                    y+= this.params.wave.polyphonie[0].amplitude[rank] * height_corection/2 * Math.sin((i/this.params.wave.coef_pulsation) * rank);

                }
            
                this.canvas_ctx.lineTo(i*3, y + height_corection/2 + this.canvas.height/3);

                this.canvas_ctx.strokeStyle = this.color;
                
                this.canvas_ctx.stroke()
            }
        };

        this.printEqualizer = () =>{

            this.canvas_equalizer_ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) 
          
            this.canvas_equalizer_ctx.beginPath();
            
            this.canvas_equalizer_ctx.lineTo(0, this.canvas_equalizer.height/2);
            this.canvas_equalizer_ctx.lineTo( this.params.equalizer_draw.Low[1], this.params.equalizer_draw.Low[0] );
            this.canvas_equalizer_ctx.lineTo( this.params.equalizer_draw.Hight[1], this.params.equalizer_draw.Hight[0] );
            this.canvas_equalizer_ctx.lineTo( this.canvas_equalizer.width, this.canvas_equalizer.height/2);

            this.canvas_equalizer_ctx.strokeStyle = this.color;
                
            this.canvas_equalizer_ctx.stroke();

        }

        /////// Action to Change Amplitude (harmonique and wave shape) //////

        this.actualizeHarmoniqueButtons = () => {
            for(let rank = 1; rank < this.buttons_manual_harmonique.length; rank++){
                let x = (this.params.wave.polyphonie[0].amplitude[rank] * 75 )
                this.params.range_buttons["harmoniques"+rank].DOM.style.transform = "rotate("+ x +"deg)";
            }
        }

        this.functionOfX = (x) => 0;

        this.changeAmplitude = () =>{

            for(let polyphonie = 0; polyphonie < this.params.wave.polyphonie.length; polyphonie++){
            
                for(let rank = 1; rank <= nb_harmonique; rank++){

                    this.params.wave.polyphonie[polyphonie].amplitude[rank] = this.functionOfX(rank);

                };
            }
            this.printWave();
        };

        this.changeAttackMode = (ARO) => {
            this.params.wave.attack = ARO[0];
            this.params.wave.release = ARO[1];
            this.params.wave.polyphonie[0].octave = ARO[2];

            let b = -150;
            let a1 = 300 / this.params.range_buttons.attack.max;
            let a2 = 300 / this.params.range_buttons.release.max;

            let attack_value = (a1 * ARO[0]) + b;
            let release_value = (a2 * ARO[1]) + b;

            this.params.range_buttons.attack.DOM.style.transform = "rotate("+attack_value+"deg)";
            this.params.range_buttons.release.DOM.style.transform = "rotate("+release_value+"deg)";

            this.params.range_buttons.attack.position = attack_value;
            this.params.range_buttons.release.position = release_value;
        }
    }
};

class sequencer {
    constructor(synthetiseur, is_drum){

        this.is_drum = is_drum;

        this.play_interval0 = [];
        this.play_interval1;


        this.playing = false;

        this.synthetiseur = synthetiseur;

        this.polyphonie = this.synthetiseur.params.wave.polyphonie.length;

        this.tempo = 90;

        this.partition = [] ;

        this.time_division = {};

        this.init = () => {

            for(let nb_time_division = 0; nb_time_division < 16; nb_time_division++){

                this.partition.push({
                    note: {},
                    polyphonie: 0,
                    time: nb_time_division * (4000/16),
                    duration: 100,
                })
            }
        }

        this.play = () => {

            let temp = this.tempo / 60;

            for(let nb_time_division = 0; nb_time_division < 16; nb_time_division++){

                this.play_interval0[nb_time_division] = window.setTimeout(()=> {

                    let cont = 0;

                    for(let keys in this.partition[nb_time_division].note){

                        if(this.is_drum){

                            this.synthetiseur.drums_elements[this.partition[nb_time_division].note[keys]]();

                        } else {

                            this.synthetiseur.params.wave.polyphonie[cont].fundamental = this.partition[nb_time_division].note[keys];
            
                            this.synthetiseur.playWave(cont);
                        }

                        cont++;
                    }

                }, this.partition[nb_time_division].time / temp);

                if(!this.is_drum){

                    window.setTimeout(()=> {

                        this.synthetiseur.stopWave();

                    }, (this.partition[nb_time_division].time + this.partition[nb_time_division].duration) / temp)
                }
                
            }

            this.play_interval1 = window.setTimeout(this.play, 4000/temp);
        }

        this.stop = () => {
            for(let nb_time_division = 0; nb_time_division < 16; nb_time_division++){
                window.clearTimeout(this.play_interval0[nb_time_division]);
            }
            window.clearTimeout(this.play_interval1);
        }
    }
};

class domGrid {
    constructor(
        target_dom,
        play_song_button_dom,
        stop_song_button_dom,
        nb_octaves,
        class_of_cells_notes,
        class_of_cells_times,
        class_of_active_cell,
        separation_class,
        class_times_demi,
        white_note,
        black_note,
        sequencer,
        notes,
        is_drum,
        all_sequencer,
        ){

        this.all_sequencer = all_sequencer;

        this.is_drum = is_drum;

        this.drums = [0, 1, 2];

        this.target_dom = target_dom;
        this.play_song_button_dom = play_song_button_dom;
        this.stop_song_button_dom = stop_song_button_dom;
        this.nb_notes = nb_octaves * 13;

        this.white_note = white_note;
        this.black_note = black_note;

        this.sequencer = sequencer;

        this.class_notes = class_of_cells_notes;
        this.class_times = class_of_cells_times;

        this.separation_class = separation_class;
        this.class_times_demi = class_times_demi;

        this.rows = [];

        this.notes = notes;

        this.createCell = (class_of_cells) => {

            let div = document.createElement("div");
            div.setAttribute('class', class_of_cells);

            return div;

        };

        this.factorOf = () => {

            let white_note_number = [1,2,4,6,8,9,11,13];

            let number_of_octave = this.nb_notes/12;

            let white_places = [];

            for(let octave = 0; octave < number_of_octave; octave++){
                white_note_number.forEach(el => {
                    white_places.push((octave * 12) + el);
                })
            }

            return white_places;
        };

        this.create = () => {

            let white_places = this.factorOf();

            for(let row = 0; row < this.nb_notes; row++){

                let cols = [];
                let class_col = this.class_times;
                let container = document.createElement("div");

                for(let compare = 0; compare < white_places.length; compare++){
                    if(row+1 == white_places[compare]){
                        cols[0] = this.createCell(this.class_notes+" "+this.white_note);
                        class_col = this.class_times;
                        break
                    } else {
                        cols[0] = this.createCell(this.class_notes+" "+this.black_note);
                        class_col = this.class_times+" "+this.class_times_demi;
                    }
                }
         
                container.appendChild(cols[0]);

                for(let col = 1; col < 17; col++){

                    cols[col] = this.createCell(class_col);

                    if(col == 5 || col == 9 || col == 13){
                        let separation = this.createCell(this.separation_class);
                        cols[col].appendChild(separation);
                    }



                    cols[col].addEventListener("click", (evt)=> {

                        let row_col = String(row) + String(col);

                        if(this.sequencer.partition[col-1].note[row_col] == null){

                            if(this.sequencer.partition[col-1].polyphonie < this.sequencer.polyphonie){

                                cols[col].setAttribute("class", class_of_active_cell+" "+this.class_times);

                                if(this.is_drum){

                                    this.sequencer.partition[col-1].note[row_col] = this.drums[row];

                                } else {

                                    this.sequencer.partition[col-1].note[row_col] = this.notes[(3 * 13) + (this.nb_notes + (-row))] ;
                                    this.sequencer.partition[col-1].polyphonie++;
                                }
                            }
                            
                        } else if(this.sequencer.partition[col-1].note[row_col] != null){

                            delete this.sequencer.partition[col-1].note[row_col];
                            this.sequencer.partition[col-1].polyphonie--;
                            cols[col].setAttribute("class", class_col);
                        };
                    
                    });

                    container.appendChild(cols[col]);
                }

                this.target_dom.appendChild(container);
                this.rows.push(cols);

                this.play_song_button_dom.addEventListener("click",() =>{

                    this.all_sequencer.forEach((sequencer, i)=>{

                        if(!sequencer.playing){
                            sequencer.play();
                            sequencer.playing = true;
                        }

                    });
                });

                this.stop_song_button_dom.addEventListener("click", () =>{ 

                    this.all_sequencer.forEach((sequencer, i) =>{

                        sequencer.playing = false;
                        sequencer.stop();
                    });
                });
            }
        }
    }
};

class drums{
    constructor(button_class_dom){

        this.audio_context = new AudioContext();

        this.buttons = button_class_dom;

        this.tempo = 90;

        this.drums_elements = [];

        this.params = {
            wave: {
                polyphonie: [null, null, null]
            }
        }



        //Snar//

        this.noise= null;

        this.noiseEnvelope= null;

        this.oscNoiseSnar= null;

        this.oscGain= null;

        ////Kick////

        this.kickOscillo = null;

        this.kickGain = null;


        ///HitHat

        this.fundamental = 40;

        this.ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

        this.ocsilloHitHat = [];

        this.filter_band_pass = null;

        this.filter_hight = null;

        this.hit_hat_gain = null;


        this.playHitHat = () => {

            this.ocsilloHitHat = [];

            this.filter_hight = this.audio_context.createBiquadFilter();

            this.filter_band_pass = this.audio_context.createBiquadFilter();

            this.hit_hat_gain = this.audio_context.createGain();

            this.filter_hight.type = "highpass";
            this.filter_hight.frequency.value = 9000;

            this.filter_band_pass.type = "bandpass";
            this.filter_band_pass.frequency.value = 10000;

            this.hit_hat_gain.gain.setValueAtTime(1, this.audio_context.currentTime);
            this.hit_hat_gain.gain.exponentialRampToValueAtTime(0.01, this.audio_context.currentTime + 0.05);


            this.ratios.forEach((ratio, i) =>{

                this.ocsilloHitHat.push(this.audio_context.createOscillator());

                this.ocsilloHitHat[i].type = "square";
                this.ocsilloHitHat[i].frequency.value = this.fundamental * ratio;


                this.ocsilloHitHat[i].connect(this.filter_band_pass);
                this.filter_band_pass.connect(this.filter_hight);
                this.filter_hight.connect(this.hit_hat_gain);
                this.hit_hat_gain.connect(this.audio_context.destination);

                this.ocsilloHitHat[i].start(this.audio_context.currentTime);
                this.ocsilloHitHat[i].stop(this.audio_context.currentTime + 0.05);         
            });

        }




        this.createKickOscillo = () => {

            this.kickOscillo = this.audio_context.createOscillator();
            this.kickGain = this.audio_context.createGain();

            this.kickOscillo.connect(this.kickGain);
	        this.kickGain.connect(this.audio_context.destination);

        }
        
        this.playKick = () => {

            this.createKickOscillo();

            this.kickOscillo.frequency.setValueAtTime(150, this.audio_context.currentTime);
            this.kickGain.gain.setValueAtTime(1, this.audio_context.currentTime);

            this.kickOscillo.frequency.exponentialRampToValueAtTime(0.01, this.audio_context.currentTime + 0.5);
            this.kickGain.gain.exponentialRampToValueAtTime(0.01, this.audio_context.currentTime + 0.5);

            this.kickOscillo.start(this.audio_context.currentTime);

            this.kickOscillo.stop(this.audio_context.currentTime + 0.5);
        };

        this.noiseBuffer = () => {

            let buffer = this.audio_context.createBuffer(1, this.audio_context.sampleRate, this.audio_context.sampleRate);
            let output = buffer.getChannelData(0);
        
            for (var i = 0; i < this.audio_context.sampleRate; i++) {
                output[i] = Math.random() * 2 - 1;
            }
        
            return buffer;
        };

        this.noiseFilterSnar = () => {

            this.noise = this.audio_context.createBufferSource()

            this.noise.buffer = this.noiseBuffer();

            let noiseFilter = this.audio_context.createBiquadFilter();

            noiseFilter.type = 'highpass';

            noiseFilter.frequency.value = 1000;

            this.noise.connect(noiseFilter);

            this.noiseEnvelope = this.audio_context.createGain();

            noiseFilter.connect(this.noiseEnvelope);

            this.noiseEnvelope.connect(this.audio_context.destination);

            this.oscNoiseSnar = this.audio_context.createOscillator();
            this.oscNoiseSnar.type = 'triangle';

            this.oscGain = this.audio_context.createGain();

            this.oscNoiseSnar.connect(this.oscGain);

            this.oscGain.connect(this.audio_context.destination);
        };

        this.playSnar= () => {
            
            this.noiseFilterSnar();
            
            this.noiseEnvelope.gain.setValueAtTime(1, this.audio_context.currentTime);
            this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, this.audio_context.currentTime + 0.2);
            this.noise.start(this.audio_context.currentTime)
        
            this.oscNoiseSnar.frequency.setValueAtTime(100, this.audio_context.currentTime);
            this.oscGain.gain.setValueAtTime(0.7, this.audio_context.currentTime);
            this.oscGain.gain.exponentialRampToValueAtTime(0.01, this.audio_context.currentTime + 0.1);
            this.oscNoiseSnar.start(this.audio_context.currentTime)
            
            this.oscNoiseSnar.stop(this.audio_context.currentTime + 0.2);
            this.noise.stop(this.audio_context.currentTime + 0.2);
    
        }

        this.create =() =>{

            this.drums_elements = [this.playKick, this.playSnar, this.playHitHat];

            for(let dom =0; dom< this.buttons.length; dom++){


                this.buttons[dom].addEventListener("click", this.drums_elements[dom])
            }
        }

    }
};


////////////////////// Materialize Collapse function initiation : ///////////////////////////

const items_collapse = document.querySelectorAll('.collapsible');
const instances = M.Collapsible.init(items_collapse);

/////DOM Elements///////


//// buttons general Init////

const init_button = document.getElementById("init");

///// containers of digital instruments (drums and synth) //////

const coople_synth_seque_DOM = document.getElementById("coople_synt_sequ");

const coople_drums_sequ = document.getElementById("coople_drums_sequ");



////// Objects Instruments ////

const synthetiseurX = new synthetiseur(
    25, 
    document.getElementById('canvas'),
    document.getElementById("synthetiseur"),
    document.getElementsByClassName("keyboard"),
    document.getElementsByClassName('buttons_select'),
    document.getElementsByClassName('buttons_instruments'),
    document.getElementsByClassName('potarVAR'),
    document.getElementsByClassName('octave_buttons'),
    document.getElementsByClassName('dom_manual_harmonique'),
    document.getElementById('save_wave'),
    document.getElementById('save_folder'),
    "custom_wave_saved_button waves-effect waves-purple btn-flat buttons_instruments",
    "material-icons trash_custom",
    document.getElementById("canvas_equalizer"),
    document.getElementsByClassName("band_equalizer_container"),
    document.getElementsByClassName('buttons_filters'),
    notes
);

const drumX = new drums(document.getElementsByClassName("button_drum"));

///// Object Sequencer //////

const sequencerX = new sequencer(synthetiseurX, false);

const sequencerY = new sequencer(drumX, true);

sequencerX.init();

sequencerY.init();

////// Object for create grid Sequencer /////

const sequencer_gridX = new domGrid(
    document.getElementById("sequencer_container"),
    document.getElementById("playSong"),
    document.getElementById("stopSong"),
    3,
    "notes_sequencer",
    "notes_times",
    "active_note",
    "separation_class", 
    "class_times_demi", 
    "sequencer_white_note", 
    "sequencer_black_note", 
    sequencerX, 
    notes, 
    false, 
    [sequencerX, sequencerY]
);

const sequencer_gridY = new domGrid(
    document.getElementById("sequencer_container_drum"),
    document.getElementById("playSongD"), 
    document.getElementById("stopSongD"), 
    2/12,  
    "notes_sequencer", 
    "notes_times", 
    "active_note",
    "separation_class", 
    "class_times_demi", 
    "sequencer_white_note", 
    "sequencer_black_note", 
    sequencerY, 
    notes, 
    true, 
    [sequencerX, sequencerY]
);


sequencer_gridX.create();

sequencer_gridY.create();


///// Initiate instuments for avooing browser to block audio_context ////////////////


init_button.addEventListener("click", () =>{

    synthetiseurX.create();

    drumX.create();

    init_button.setAttribute("class", "hide");

    coople_synth_seque_DOM.setAttribute("class", "show");
    coople_drums_sequ.setAttribute("class", "show");

});





