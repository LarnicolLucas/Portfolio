Vue.component('sl-teaser', {
    props:['src_img', 'description', 'link', 'link_placeholder'],
    template: `

            <div class="col s12 m6 l4 offset-l1">
                <div class="card">
                    <div class="card-image">
                        <img :src="src_img" style="height: 300px;">
                    </div>
                    <div class="card-content">
                        <p> {{ description }}
                        </p>
                    </div>
                    <a :href="link"><div class="card-action hoverable center-align">

                        
                        
                        <svg width="10%" height="10%" enable-background="new 0 0 2225.2 2230.7" viewBox="0 0 2225.2 2230.7" xmlns="http://www.w3.org/2000/svg">
                            <g stroke-miterlimit="10">
                                <path d="m699.9 98.8s-597.3 699.4 135.7 1478.5c0 0-643.4-214-713.4-713.4 0 0-103.5-509.1 577.7-765.1z" fill="#6bb94f" stroke="#6bb94e"/>
                                <path d="m639.7 1119.9s83.9-1021.1 1156.8-891c0 0-465.8-381.9-895.2-158.1-1.4 0-611.3 331.5-261.6 1049.1z" fill="#ee7541" stroke="#ed7540"/>
                                <path d="m891.5 668.1s261.6-437.8 923.2-345.5c0 0 479.8 144.1 401.4 979.1-1.4 0-267.2-1011.3-1324.6-633.6z" fill="#e9555f" stroke="#e9565f"/>
                                <path d="m1431.4 644.3s815.5 797.3 0 1566.6c0 0 499.4-132.9 688.2-594.5 0 0 193-686.7-688.2-972.1z" fill="#ea589f" stroke="#e9589f"/>
                            </g>
                            <path d="m1693 1189.8s-363.7 1035.1-1342.8 734.3c0 0 292.3 398.6 812.7 286.7-.1.1 661.5-50.2 530.1-1021z" fill="#32b7e9"/>
                            <path d="m35.5 896.1s226.6 937.2 1314.8 720.4c0 0-384.7 468.6-1000.1 230.8 0-.1-482.6-244.8-314.7-951.2z" fill="#118e9b"/>
                        </svg>

                        <p class="black-text"><b> {{ link_placeholder }} </b></p>
                    </div></a>
                </div>
            </div>

    `
});

const app_sololearn_project = new Vue({
    el: '#app_sololearn_project',
    data: {

        cards : [
            {
                id: 0, 
                src_img: "images/dot_spiral.png", 
                description : "Canvas effect with random pics", 
                link: "https://code.sololearn.com/WtFyVRhO9njy/#html", 
                link_placeholder: "Dots Spirale"
            },
            {
                id: 1, 
                src_img: "images/snake.png", 
                description : "CSS controlled animation", 
                link: "https://code.sololearn.com/WIo8y8olhvFU/#html", 
                link_placeholder: "Rainbow Snake"
            },
            {
                id: 2, 
                src_img: "images/wave.png", 
                description : "Canvas 2d waves", 
                link: "https://code.sololearn.com/W4g8YJFX3H0F/#html", 
                link_placeholder: "Wave"
            },
            {
                id: 3, 
                src_img: "images/snow.png", 
                description : "Snow simulation", 
                link: "https://code.sololearn.com/WDR3c86772l9/#html", 
                link_placeholder: "Snow"
            },
            {
                id: 4, 
                src_img: "images/wave2.png", 
                description : "Wave creation with harmoniques", 
                link: "https://code.sololearn.com/W2tjMpVdOZ3w/#html", 
                link_placeholder: "wave2"
            },
            {
                id: 5, 
                src_img: "images/pascal_triangle.png", 
                description : "visualisation of (a+b)^n. Pascal's triangle", 
                link: "https://code.sololearn.com/W2570P3c5j2U/#html", 
                link_placeholder: "Pascal's triangle"
            },
            {
                id: 6, 
                src_img: "images/mars_rover.png", 
                description : "Mini game with Roover.", 
                link: "https://code.sololearn.com/WDU72F4fym1h/#html", 
                link_placeholder: "Mars ROOVER"
            },
        ]

    },
});