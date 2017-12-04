apiURL = "http://monsters-api.dev/api/monster";

new Vue ({
    el: '#mainTitle',
    data: {
        warning: 'Contains scenes of mild peril and wholesale slaughter.'
    }
});

new Vue ({
    el: '#homePage',
    data: {
        message: 'So a bit of both really...'
    }
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
    }
});
