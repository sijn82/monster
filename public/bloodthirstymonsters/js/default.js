apiURL = "http://monsters-api.test/api/monster";

// // import Parallax from 'parallax.vue'
// // import Vue and vue-parallax-js
// import Vue from 'vue'
// import VueParallaxJs from 'vue-parallax-js'
//
// // add vue-parallax-js to vue
// Vue.use(VueParallaxJs);


new Vue ({
    el: '#mainTitle',
    data: {
        warning: 'Contains scenes of mild peril and wholesale slaughter.'
    }
});

new Vue ({
    el: '#homePage',
    // data: {
    //     message: 'Blood thirsty, whole heartedly insane.  Only our deaths will appease them.',
    // }
    // components: { Parallax }

});

new Vue ({

    el: '#monstersAPI',
    data: {
        monsters: '',
        imgMonsterSRC: null,
        title: '',
        summary: null,
        searchTerm: '',
        aggressions: [
            { level: 'Calm' },
            { level: 'Agitated' },
            { level: 'Chasey' },
            { level: 'Aggressive' },
            { level: 'Bloodthirsty' }
        ],
    },

    methods: {
        getMonsters: function () {
            this.$http.get(apiURL).then(function (monsters) {
                this.monsters = monsters.data;
                console.log(monsters);
            });
        },
        aggression_level: function (level) {

             var levels = {
                0: 'Calm',
                1: 'Agitated',
                2: 'Chasey',
                3: 'Aggressive',
                4: 'Bloodthirsty'
             };
             return levels[level];
        },
    },

    mounted: function () {
        this.getMonsters();
        this.aggression_level();
    },
});
