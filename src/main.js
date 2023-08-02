import { createApp } from 'vue'
import router from './routes/index'
import store from './store/index'
import './style.css'
import App from './App.vue'
import FontAwesomeIcon from './fontAwesomeIcons'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount('#app')
