

const mixin_trig = {
  methods: {
    trig_mix: function(e, el){
      if(el.offsetTop <= window.scrollY +500){
          el.setAttribute("style", "opacity: 1; transform: translateX(0%);")
      }
    }
  }
};

Vue.component('titre-ligne', {
  props: ["numero", "titre"],
  template: "<span>{{numero}} | <strong> {{titre}} </strong></span>"
});

Vue.component('space-and-border', {
  template: `<div style="border: 1px solid black; margin-top: 20px; margin-bottom: 20px;"></div>`
});



/////////////////////SELECT//////////////////////////


Vue.component('input-m-select', {
    props: {
      icon: String,
      col: String,
      value: String,
      disable: Boolean,
      label_class: String,
      list: Array,
      placeholder: String
    },
    monted: function(){
      M.FormSelect.init(document.querySelectorAll('select'));
    },
    template: `

                <div class="input-field col" v-bind:class="col">
                <i class="material-icons prefix"> {{ icon }} </i>
                  <select v-bind:disabled="disable" v-bind:value="value" v-on:change="$emit('input', $event.target.value)">
                    <option value="" disabled selected> {{placeholder}} </option>
                    <option v-for="keys in list" v-bind:value="keys.value"> {{ keys.placeholder }} </option>
                  </select>
                  <label v-bind:class="label_class"> {{placeholder}} </label>
                </div>
              `
  });


///////////////////////////////////////////////////////////////
  

Vue.component('preLoader',{
        template: `
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
        `
});

      
/////////////////////////////////////////////////////////////////////////////////////////////////////



Vue.component('titre-page', {
  props: ['titre'],
  template: `
    <h3 class='center-align' style="margin-top: 25px; margin-bottom: 25px;"><b> {{titre}} </b></h3>
  `
});

Vue.component('close-button', {

  props: ['number_postulant', 'type_postulant'],

  template:`
    <div class="right-align">
      <button class="btn waves-effect waves-light" @click="$emit('click', {id: number_postulant, type: type_postulant})">
        <i class="tiny material-icons">close</i>
      </button>
    </div>
  `
});

Vue.component('button-accueil', {
  props:['titre', 'icon'],
  template:`

    <div class="row hoverable button_perso" @click="$emit('clicked')">
      <div class="s12 col" style="margin-top: 1em;">
        <p></p>
      </div>
      <div class="s12 col">
        <i class="large material-icons">{{icon}}</i>
      </div>
      <div class="s12 col">
        <p><b>{{titre}}</b></p>
      </div>
    </div>

  `
});


Vue.component('collection-titre', {
	
	//list = {id: x, img : "http...", icon_left: "materielize", value: "text", icon_right : "icon_left"}
	props : ['list'],
	
	template: `

		<ul class="collection">
      <li class="collection-item avatar">
      <img :src="list.img" class="circle">
        <span class="title">
        <h5><b>{{ list.value }}</b></h5>
        </span>
        <a class="secondary-content"><i :style="'color: '+list.icon_right.color+';'" class="medium material-icons"> {{ list.icon_right.value }}</i></a>
			</li>
		</ul>
	`
});

Vue.component('collection', {
	
	//list = {id: x, img : "http...", icon_left: "materielize", value: "text", icon_right : "icon_left"}
	props : ['list'],
	
  template: `

    <div>

      <div v-for="keys in list" :key="keys.id"> 
      
        <div class="divider"></div>
        <div class="section">
        <p><i :style="'color: '+keys.icon_left.color+';'" class="small material-icons">{{ keys.icon_left.value }}</i> {{ keys.label }} </p>
        
          <p class="center-align"><b> {{ keys.value }} </b></p>

        </div>

      </div>
    </div>
	`
});

Vue.component('collapsible-infos', {
	
	//list0 = [metier, service, pole, lieux]
	//list1 = [date_ieg, date_admission, diplome]
	//info
	props: ["list0", "list1", "info"],
	
	template:`
	
	
		<ul class="collapsible">
			<li>
				<div class="collapsible-header"><i class="material-icons">assignment_ind</i>Service</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
			
			
							<collection :list="list0"></collection>
				
				
				
						</div>
					</div>
	  
				</span></div>
			</li>
			<li>
				<div class="collapsible-header"><i class="material-icons">fingerprint</i>Perso</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
			
			
							<collection :list="list1"></collection>
				
				
				
						</div>
					</div>
	  
				</span></div>
			</li>
			<li>
				<div class="collapsible-header"><i class="material-icons">visibility</i>Infos</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
			
			
							<p> {{ info }} </p>
				
				
						</div>
					</div>
	  
				</span></div>
			</li>
		</ul>
	`
  
});

Vue.component('circle-percent', {
	props: ['label', 'value', 'size', 'color', 'unity', 'circle_percent'],
  template: `
  
		
    <div @mouseout="$emit('elem_desactivation')" @mouseover="$emit('elem_activation')"  class="box_circle_percent" v-bind:style="'width: '+ size/100 * 300+'px; height: '+ size/100 * 260+'px;'">
    
      <div class="bcp_percent" v-bind:style="'width: '+ size/100 * 150+'px; height: '+ size/100 * 150+'px;'">
      
        <svg class="bcp_svg" v-bind:style="'width: '+ size/100 * 150+'px; height: '+ size/100 * 150+'px;'">
        
					<circle class="bcp_circle bcp_circle1" v-bind:cx="'70' * size/100 " v-bind:cy="'70' * size/100 " v-bind:r="'70' * size/100 " v-bind:style="'width: '+ size/100 * 150+'px; height: '+ size/100 * 150+'px; strokeWidth: '+size/100 * 10+'; transform: translate('+size/100 * 5+'px,'+size/100 * 5+'px);'"></circle> <!-- cx et cy non responsive -->
				
					<circle class="bcp_circle bcp_circle2" v-bind:style="'stroke: '+ color +'; width: '+ size/100 * 150+'px; height: '+ size/100 * 150+'px; strokeWidth: '+size/100 * 10+'; transform: translate('+size/100 * 5+'px,'+size/100 * 5+'px); strokeDasharray: '+size/100 * 440+'; strokeDashoffset:'+ ((440*size/100) - ((440 * size/100) * circle_percent) / 100) " v-bind:cx="'70' * size/100 " v-bind:cy="'70' * size/100 " v-bind:r="'70' * size/100 "></circle> <!-- cx et cy non responsive -->
        
        </svg>
        
        <div class="bcp_number">
        
					<h2 class="bcp_number_only" v-bind:style="'fontSize: '+ size/100 * 48 +'px;'"> {{ value }} <span class="bcp_number_percent" v-bind:style="'fontSize: '+ size/100 * 24 +'px;'"> {{ unity }}</span></h2>
        
        </div>

      </div> 
      
      <p class="bcp_text center-align" v-bind:style="'fontSize: '+ size/100 * 30 +'px; fontWeight: '+ size/100 * 700 +'; letterSpacing: '+ size/100 +';'"> {{label}} </p>

    </div>
    
  `
});

Vue.component('global-circle-and-average', {
	
	//circle = {label : '', value: '', size : '', color : '', circle_percent: ''}
	props: ['circle0', 'circle1', 'circle2', 'circle0b', 'circle1b', 'circle2b', 'refresh'],

	template:`

    <div class="row center-align">

      <div class="col s12 m12 l4">

        <div class="row">
          <div class="col s6"> 
                  
            <circle-percent
              @elem_activation="active_AVG0"
              @elem_desactivation="desactive_AVG0"
              :label="circle0.label" 
              :value="circle0.value" 
              :size="circle0.size" 
              :color="circle0.color"
              :unity="circle0.unity"
              :circle_percent="circle0.circle_percent"
            ></circle-percent>

          </div>
          <div class="col s6">

              <circle-percent
                v-if="refresh"
                v-show="show_AVG0"
                @elem_activation="active_AVG0"
                @elem_desactivation="desactive_AVG0"
                :label="circle0b.label" 
                :value="circle0b.value" 
                :size="circle0b.size" 
                :color="circle0b.color"
                :unity="circle0b.unity"
                :circle_percent="circle0b.circle_percent"
              ></circle-percent>


          </div>
        </div>

			</div>

			<div class="col s12 m12 l4">

        <div class="row">
          <div class="col s6">
        
            <circle-percent
              @elem_activation="active_AVG1"
              @elem_desactivation="desactive_AVG1"
              :label="circle1.label" 
              :value="circle1.value" 
              :size="circle1.size" 
              :color="circle1.color"
              :unity="circle1.unity"
              :circle_percent="circle1.circle_percent"
            ></circle-percent>

          </div>
          <div class="col s6">

            <circle-percent
              v-show="show_AVG1"
              v-if="refresh"
              @elem_activation="active_AVG1"
              @elem_desactivation="desactive_AVG1"
              :label="circle1b.label" 
              :value="circle1b.value" 
              :size="circle1b.size" 
              :color="circle1b.color"
              :unity="circle1b.unity"
              :circle_percent="circle1b.circle_percent"
            ></circle-percent>

          </div>
        </div>

      </div>

      <div class="col s12 m12 l4">

        <div class="row">
          <div class="col s6">
        
            <circle-percent
              @elem_activation="active_AVG2"
              @elem_desactivation="desactive_AVG2"
              :label="circle2.label" 
              :value="circle2.value" 
              :size="circle2.size" 
              :color="circle2.color"
              :unity="circle2.unity"
              :circle_percent="circle2.circle_percent"
            ></circle-percent>

          </div>
          <div class="col s6">

            <circle-percent
              v-show="show_AVG2"
              v-if="refresh"
              @elem_activation="active_AVG2"
              @elem_desactivation="desactive_AVG2"
              :label="circle2b.label" 
              :value="circle2b.value" 
              :size="circle2b.size" 
              :color="circle2b.color"
              :unity="circle2b.unity"
              :circle_percent="circle2b.circle_percent"
            ></circle-percent>
          </div>

        </div>
      </div>

		</div>
  `,

  data: function(){
    return{
      show_AVG0 : true,
      show_AVG1 : true,
      show_AVG2 : true,
    }
  },
  
  methods: {
    active_AVG0: function(){
      this.show_AVG0 = true
    },
    active_AVG1: function(){
      this.show_AVG1 = true
    },
    active_AVG2: function(){
      this.show_AVG2 = true
    },
    desactive_AVG0: function(){
      this.show_AVG0 = true
    },
    desactive_AVG1: function(){
      this.show_AVG1 = true
    },
    desactive_AVG2: function(){
      this.show_AVG2 = true
    }
  }
});

Vue.component('collapsible-stats', {
	
	//list0 = [metier, service, pole, lieux]
	//list1 = [date_ieg, date_admission, diplome]
	//info
	props: ["list0", "list1", "histo"],
	
	template:`
	
	
		<ul class="collapsible">
			<li>
				<div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
					
							<div class="row">
			
								<div class="col s4">
						
									<global-circle-and-average :circle0="list0.circle1" :circle1="list0.circle1b"></global-circle-and-average>
									
								</div>
								
								<div class="col s4">
						
									<global-circle-and-average :circle0="list0.circle2" :circle1="list0.circle2b"></global-circle-and-average>
									
								</div>
								
								<div class="col s4">
						
									<global-circle-and-average :circle0="list0.circle3" :circle1="list0.circle3b"></global-circle-and-average>
									
								</div>
								
							</div>
										
						</div>
					</div>
	  
				</span></div>
			</li>
			<li>
				<div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
			
							<div class="row">
							
								<div class="col s4">
						
									<global-circle-and-average :circle0="list1.circle1" :circle1="list1.circle1b"></global-circle-and-average>
									
								</div>
								
								<div class="col s4">
						
									<global-circle-and-average :circle0="list1.circle2" :circle1="list1.circle2b"></global-circle-and-average>
									
								</div>
								
								<div class="col s4">
						
									<global-circle-and-average :circle0="list1.circle3" :circle1="list1.circle3b"></global-circle-and-average>
									
								</div>
								
							</div>
				
						</div>
					</div>
	  
				</span></div>
			</li>
			<li>
				<div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
				<div class="collapsible-body"><span>
	  
					<div class="row">
		
						<div class="col s12">
			
							<div> {{ histo }} </div>
				
						</div>
					</div>
	  
				</span></div>
			</li>
		</ul>
	`
});

Vue.component('switch-m', {
  template:`
    <div class="switch">
      <label>
        Moyenne du service
        <input type="checkbox" @change="$emit('changeavg', $event.target.checked)">
        <span class="lever"></span>
        Moyenne Paris
      </label>
    </div>
  `
});

Vue.component('pointhisto', {
  template:`
    <div class="point_histo" :style=" 'left: '+props.position_left+'%;'">
      <div
        v-show="!props.novisible"
        class='point_histo_bubble tooltipped'
        data-position="top" 
        :data-tooltip="props.content"
      ></div>
      <p> {{ props.value }} </p>
    </div>
  `,
  props: ['props']
});

Vue.component('pointhisto_mobile', {
  template:`

    
    <div class="point_histo_mobile" :style="' top: '+props.position_left+'%;'">
      <div
        v-show="!props.novisible"
        class='point_histo_bubble tooltipped'
        data-position="top" 
        :data-tooltip="props.content"
      ></div>
      <p style='background: #fff'> {{ props.value }} </p>
    </div>

  `,
  props: ['props'],
  mounted: function(){
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  }
});



/////////////////////////////////////////////////////////

Vue.component('icon-link', {
  template:`
      <div class="col s2 m1 l1">

          <a :href="props.link">
              <img v-bind:class=" { iconBefore: !triged, iconAfter: triged }"
              @mouseover="trig(true)"
              @mouseout="trig(false)" 
              :src="props.src">
              </img>
          </a>

    </div>
  `,
  props: ['props'],
  data: function(){
    return {
      triged : false
    }
  },
  methods: {
    trig: function(state){
      this.triged = state;
    },
  }
});

Vue.component('img_effect_button', {
  template:`
    <img  
      @mouseover="trig(true)"
      @mouseout="trig(false)"
      class="responsive-img font tooltipped" 
      :src="props.src"
      :class="{font_effect_hover : triged, effect_icon_hide: props.hide}"

      data-position="bottom" 
      :data-tooltip="props.text"
    />
  `,
  props: ["props"],
  data: function(){
    return {
      triged: false,
      key: this.props.id
    }
  },
  methods: {
    trig: function (state){
      this.triged = state
      this.$emit('elemSelect', {state: state, id_select: this.key})
    }
  }
});

Vue.component('skill-detail', {
  template:`<div
    class="col s12 m4 scroll_slide_before"
    v-scroll="trig_mix"
    v-if="reset" 
  >


    <div class="center-align">
      <i :style="'color: '+props.icon_color+';'" class="medium material-icons">{{ props.icon }}</i>
    </div>

    <div class="center-align" style="margin-top: -18px;" :style="'color: '+props.icon_color+';'">
      <h5>{{props.titre}}</h5>
    </div>

    <div class="center-align" style="margin-top:70px;">

      <div class="row center-align">
        <div class="col s3"></div>
        <div class="col s2" v-for="keys_descriptions_rank1 in props.description_rank1">
          <img_effect_button 
            :key="keys_descriptions_rank1.id"
            :props="{
              src: keys_descriptions_rank1.src, 
              hide: hidden[keys_descriptions_rank1.id], 
              id: keys_descriptions_rank1.id,
              text: keys_descriptions_rank1.text
            }"
            @elemSelect="hide_all"
          />
        </div>
        <div class="col s3"></div>
      </div>

      <div class="row center-align">
        <div class="col s3"></div>
        <div class="col s2" v-for="keys_descriptions_rank2 in props.description_rank2">
          <img_effect_button 
            :key="keys_descriptions_rank2.id"
            :props="{
              src: keys_descriptions_rank2.src, 
              hide: hidden[keys_descriptions_rank2.id], 
              id: keys_descriptions_rank2.id,
              text: keys_descriptions_rank2.text
            }"
            @elemSelect="hide_all"
          />
        </div>
        <div class="col s3"></div>
      </div>

    </div>

    <div class="hide-on-med-and-up" style="margin-bottom:70px;"></div>

  </div>
  `,
  props: ['props'],
  data: function(){
    return {
      hidden: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      reset: true
    }
  },
  methods: {
    hide_all: function(e){
      this.reset= false;
      this.hidden.forEach((el,i) => i == e.id_select ? this.hidden[i] = false : this.hidden[i] = e.state);
      this.reset= true;
    }
  },
  mixins: [mixin_trig]
});


Vue.component('projecttease', {
  template:`
    <div class="col s8 offset-s2 m6 offset-m3 l4 container_image_project scroll_slide_before"
      v-scroll="trig_mix"         
      @mouseover="trig(true)"
      @mouseout="trig(false)"
    >
    <a :href="props.link">

      <div 
        class="image_project_effect valign-wrapper"
        :style=" 'backgroundColor: ' +props.color+ 'F0;' "
        :class="{slide : triged}"
      >
        <p :style=" 'color :'+props.color_text+';' " class="project_description">{{props.description}}</p>
      </div>
      
        
        <img class="responsive-img image_project"
          :src="props.src"
          :alt="props.alt"
        >
        </img>
      </a>
    </div>
  `,
  props: ["props"],
  data: function(){
    return {
      triged: false
    }
  },
  methods: {
    trig: function(state){

      this.triged = state
    }
  },
  mixins: [mixin_trig]
});

Vue.component('section-title', {
  template:`
    <div class="row">
      <div class="col s12 center-align">
        <h5 style="margin-bottom:75px;" :style=" 'color: '+props.color+';'"> {{props.title}} </h5>
      </div>
    </div>
    `,
  props:["props"]
});

Vue.component('divizer', {
  template: `

    <div>
      <div class="hide-on-small-only" style="margin-top: 200px;"></div>
      <div class="container">
        <div class="divider">
        </div>
      </div>
      <div class="hide-on-small-only" style="margin-bottom: 50px;"></div>
    </div>

  `
});

Vue.component('appear-effect', {
  template:`
    <div 
      class="scroll_slide_before"
      v-bind:class=" { scroll_slide_after: triged }"
      @mouseover="trig"
    ></div>
  `,
  data: function(){
    return {
      triged: false
    }
  },
  methods: {
    trig: function(){
      this.triged = true;
    }
  }
});


