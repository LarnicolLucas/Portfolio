
const winHeight = window.innerHeight;

const rdm = (max, min) => Math.floor(Math.random()*(max - min + 1 )) + min

function appear(elem, page, st1, st2){
            
        if(elem.offsetTop <= page+winHeight-150){
             elem.setAttribute("style", st1);
        }else if(elem.offsetTop >= page+winHeight-150){
            elem.setAttribute("style", st2);
        }
}

const scrollStyle1 = "opacity: 1; top: -30px;";
const scrollStyle2 = "opacity: 0; top: 0px;";


Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});
Vue.directive('resize', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', f)
      }
    }
    window.addEventListener('resize', f)
  }
});
Vue.directive('load', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('load', f)
      }
    }
    window.addEventListener('load', f)
  }
});
Vue.directive('mousemouve', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('mousemove', f)
      }
    }
    window.addEventListener('mousemove', f)
  }
});
Vue.component('img-bandeau', {
  props: ['funct', 'src_'],
  template: `
    <img id="fondPic" v-resize="funct" class="imgFond0" :src='src_'/>
  `,
  mounted: function(){
    this.funct(null, this.$el)
  }
})


new Vue({
  el: '#app',
  data : {
    //activate class
    miniMenuClicked: false,
    windowTop: true,
    //height of window
    winHeight: winHeight,
    //splitMiniPAge
    slideSplitScreen : 0,
  },
  methods: {
    //scroll element appear
    handleScroll : function (evt, el) {
        appear(el, window.scrollY, scrollStyle1, scrollStyle2)
    },
    leaveTopScroll : function (evt, el){
      if(window.scrollY > 0 ){
          this.windowTop = false;
      } else {
          this.windowTop = true;
      }
    },
    redimensionPict : function (evt, el) {
      el.style.marginTop = (window.innerWidth * (-0.35)) + 130 + "px";
    },
    redimensionPict2 : function (evt, el){
      if(window.innerWidth >= 992){
        el.style.marginLeft = (window.innerWidth * (0.269)) -517 + "px";
      } else {
        el.style.marginLeft = (window.innerWidth * (0.493)) -489 + "px";
      }
    },
    addSlide : function(el){
      if(this.slideSplitScreen <4){
        this.slideSplitScreen += 1;
      } else {
        this.slideSplitScreen = 0;
      }
    }
  }
});




///////////////////////////////////////////////////////////////////////
