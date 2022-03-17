import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './route'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
