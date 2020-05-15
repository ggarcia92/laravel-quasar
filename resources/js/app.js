import Vue from 'vue'
import Quasar from 'quasar'
import langQ from 'quasar/lang/es'
import store from './store'
import router from './router'

import App from "./app.vue"

Vue.use(Quasar, {
    lang: langQ,
    config: {
        brand: {
            primary: '#B48BE3',
            secondary: '#7fada9',
            accent: '#c9a7cf',

            dark: '#1d1d1d',

            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
});


window.app = new Vue({
    el: '#app',
    render: h => h(App),
    router: router(),
    store: store()
});