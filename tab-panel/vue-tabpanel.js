Vue.component('pg-tabpanel', {
    props : {
        list : {
            type : Array
        },
        index: {
            type: Number,
            default : 0
        }
    },
    template: '<section class="t-tab"><nav>'+
    '<a v-for="($index, its) in list" v-text="its.title" v-bind:class="{ current: index === $index}" v-on:click="index=$index"></a> '+
    '</nav> <div class="t-tab__bd"><p v-text="list[index].content"></p></div> </section>'
});


$(document).ready(function(){
    var test = new Vue({
        el: '#test',
        data: {
            list : [{
                title : 'tab 1',
                content : 'my tab 1'
            },{
                title : 'tab 2',
                content : 'my tab 2'
            }]
        }
    })
})
