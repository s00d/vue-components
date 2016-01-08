Vue.component('pg-paginate', {
    props : {
        total_page : {
            type: Number,
            default : 0
        },
        select_page : {
            type: Number,
            default : 1
        }
    },
    methods: {
        loadPage: function (val, e) {
            e.preventDefault();
            this.select_page = val;
        }
    },
    template: '<div class="paginate wrapper">'+
    '<ul>'+
    '<a href="" v-bind:class="{inactive: total_page === 1 || select_page === 1 }" v-on:click="loadPage(select_page-1, $event)">&lt;</a>'+
    '<li  v-for="page in total_page" >'+
    '<a href="" v-on:click="loadPage(page+1, $event)" v-bind:class="{active: page+1 === select_page }" id="navdisp" v-text="page+1"></a>'+
    '</li>'+
    '<a href="" v-bind:class="{inactive: total_page === 1 || total_page === select_page }" v-on:click="loadPage(select_page+1, $event)">&gt;</a>'+
    '</ul>'+
    '</div>'
});

$(document).ready(function(){
    var test = new Vue({
        el: '#test',
        data: {
            selectpage: 1,
            totalpages: 0
        },
        watch: {
            selectpage: function(val) {
                console.log(val);
            }
        },
        ready: function () {
            this.totalpages = 10;
            this.selectpage = 1;

        }
    })
})
