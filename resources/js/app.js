import Vue from 'vue'
import Quasar from 'quasar'
import langQ from 'quasar/lang/es'
import store from './store'
import router from './router'

import App from "./app.vue"

Vue.use(Quasar, {
    lang: langQ
});


window.app = new Vue({
    el: '#app',
    render: h => h(App),
    router: router(),
    store: store()
});