import './assets/styles/newepa/styles.css'
import { createPinia } from 'pinia'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pinia
const pinia = createPinia()

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {useAllStore} from "./stores/AllStore.js";

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)
app.use(pinia)
app.use(router)


app.use(vuetify)

app.mount('#app')

const allStore = useAllStore()