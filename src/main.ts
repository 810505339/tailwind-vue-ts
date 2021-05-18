import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import '../node_modules/equal-vue/dist/style.css'
import install from '@/utlis/install'
import router from '@/router/navigationGuards'

const app = createApp(App)
app.use(router)
install(app)
app.mount('#app')
