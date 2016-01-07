Vue.component('switch-button', {
    // camelCase in JavaScript
    props : {
        status : {
            type : Boolean,
            default : false,
            toWay : true
        }
    },
    template: '<div class="t-switch" v-bind:class="{open :status}" v-on:click="status=!status"> <div class="t-switch__btn"></div></div>'
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
        }
    })
})
