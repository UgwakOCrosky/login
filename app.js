var app = new Vue({
    el: "#root",
    data: {
        showingAddModal: false,
        showingEditModal: false,
        showingDeleteModal: false,
    },

    mounted: function(){
        this.test();
    },

    methods: {
        test() {
            console.log(this.showingAddModal + " , " + this.showingEditModal + " , " + this.showingDeleteModal );
        }
    }
});