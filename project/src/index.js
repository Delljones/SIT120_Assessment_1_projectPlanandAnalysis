
Vue.component ('nav-bar', {
    data() {
        return {
            menus: ["Homes", "About", "Services", "Contact"]
        }
    },
    template: '<div><ul><li v-for= "menu in menus"> {{menu}} </li></ul></div>'
})