import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/Aura'
import Tooltip from 'primevue/tooltip'
import './style.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).directive('tooltip', Tooltip)

app.mount('#app')
