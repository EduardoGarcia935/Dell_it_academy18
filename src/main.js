import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Criando o App do Vue.js, importando e utilizando o plugin de state management Pinia 
// E por fim, inicializando o App dentro da div com o ID = 'app'
const app = createApp(App)

app.use(createPinia())
app.mount('#app')
