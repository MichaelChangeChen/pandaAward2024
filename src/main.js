import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// axios - https://www.npmjs.com/package/vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
	components,
	directives
});

createApp(App).use(vuetify, VueAxios, axios).mount('#app')