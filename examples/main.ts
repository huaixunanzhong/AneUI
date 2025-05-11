import {createApp} from 'vue'
import App from './App.vue'
import AneUI from 'ane-ui'

const app = createApp(App)

// app.component('AneButton', AneButton)
app.use(AneUI)

app.mount('#app')