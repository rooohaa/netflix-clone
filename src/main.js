import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// Global components
const Footer = defineAsyncComponent(() => import('./layout/Footer.vue'))
const Spinner = defineAsyncComponent(() => import('./layout/Spinner.vue'))
const MovieSpinner = defineAsyncComponent(() => import('./layout/MovieSpinner.vue'))

const app = createApp(App)

app.component('Footer', Footer)
app.component('Spinner', Spinner)
app.component('MovieSpinner', MovieSpinner)

app.use(store).use(router).mount('#app')