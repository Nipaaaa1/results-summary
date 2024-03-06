import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createHead } from '@unhead/vue'

const head = createHead()

const app = createApp(App)

app.use(head)

app.mount('#app')
