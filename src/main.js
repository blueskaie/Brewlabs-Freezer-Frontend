import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'
import SETTINGS from '@/store/settings'

import http from './plugins/axios'
import userAxios from './plugins/user-axios'

import '@/components/globals'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/main.scss'
import './registerServiceWorker'

const app = createApp(App);

app.config.globalProperties.$axios = http
app.config.globalProperties.$userAxios = userAxios
app.config.globalProperties.$settings = SETTINGS

app.use(VueClipboard)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
