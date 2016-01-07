Vue.component('switch-button', {
    // camelCase in JavaScript
    props : {
        status : {
            type : Boolean,
            default : false,
            toWay : true
        }
    },
    template: '<div class="s00d-switch" v-bind:class="{open :status}" v-on:click="status=!status"> <div class="s00d-switch__btn"></div></div>'
});

$(document).ready(function(){
    var test = new Vue({
        el: '#test',
        data: {
            status : false
        },
        watch: {
            status: function(val) {
                console.log(val);
            }
        },
        methods: {
            switch-test: function (val) {
                console.log(val);
            },
        }
    })
})
