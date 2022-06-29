new Vue({
    el:"#counter-app",

    data: {
        age: "20",
    },

    methods: {
        add: function(){
            return this.age++
        },

        subtract: function(){
            return this.age--
        }



    }



});

// alert("hheeeee")