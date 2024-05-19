import {createApp} from 'vue'
import App from './App.vue'
import LayoutContainer from '@/components/globals/layout-container.vue';
import DefaultInput from '@/components/globals/default-input.vue';

import '@/assets/scss/index.scss';

import store from '@/store/index.js'

const app = createApp(App)

app
    .component('GLayoutContainer', LayoutContainer)
    .component('GDefaultInput', DefaultInput);

app.use(store)
app.mount('#app')
