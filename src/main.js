import './scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
//import { Dropdown } from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'


let app

if (!app) {
  app = createApp(App).mount('#app')
}