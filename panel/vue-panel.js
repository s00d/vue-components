Vue.component('pg-panel', {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        header: {
            type: String
        }
    },
    data: function() {
        return {
            height: 0
        }
    },
    methods: {
        toggleIsOpen: function() {
            this.isOpen = !this.isOpen;
            this.$dispatch('isOpenEvent', this);
        }
    },
    ready: function() {
        const panel = this.$els.panel;
        panel.style.display = 'block';
        this.height = panel.offsetHeight;
        panel.style.maxHeight = this.height + 'px';
        if (!this.isOpen) panel.style.display = 'none';
    },
    template: '<div class="panel panel-default">'+
    '<div class="panel-heading">'+
    '<h4 class="panel-title">'+
    '<a class="accordion-toggle" @click="toggleIsOpen()">'+
    '{{ header }}'+
    '</a>'+
    '</h4>'+
    '</div>'+
    '<div class="panel-collapse" v-el:panel v-show="isOpen" transition="collapse" >'+
    '<div class="panel-body">'+
    '<slot></slot>'+
    '</div>'+
    '</div>'+
    '</div>'
});

