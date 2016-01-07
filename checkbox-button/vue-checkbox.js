Vue.component('checkbox-button', {
    props : {
        status : {
            type : Boolean,
            default : false,
            toWay : true
        }
    },
    template: '<label><input type="checkbox" v-on:click="status=!status" class="s00d-chkbox"><span></span></label>'
});


$(document).ready(function(){
    var test = new Vue({
        el: '#test',
        data: {
            status : false
        },
        methods: {
            checkbox-test: function (val) {
                console.log(val);
            },
        }
    })
})
