import { createApp   } from 'vue'
import App from './App.vue'

// import counterModule
import store from '../store/index.js'

const app = createApp(App)

// use imported store
app.use(store)
app.mount('#app')
