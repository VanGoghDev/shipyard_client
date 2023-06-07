import { createApp } from 'vue'
import router from './routes/index'
import store from './store/index'
import './style.css'
import App from './App.vue'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
