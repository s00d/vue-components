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

Vue.component('pg-accordion', {
    // camelCase in JavaScript
    props: {
        one_at_time: {
            type: Boolean,
            default: false
        }
    },
    created: function() {
        this.$on('isOpenEvent', function(child) {
            if (this.one_at_time) {
                this.$children.forEach(function (item) {
                    if (child !== item) {
                        item.isOpen = false
                    }
                })
            }
        })
    },
    template: '<div class="panel-group"><slot></slot></div>'
});
