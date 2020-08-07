import Vue from 'vue';
import App from './App.vue';
import {
  applyPolyfills,
  defineCustomElements
} from '@the-ksquare-group/vuh-stencil-components/loader';
import '@the-ksquare-group/vuh-stencil-components/www/build/vuh-stencil.css';
import './custom-global.css';
import router from './router';

Vue.config.productionTip = false;

applyPolyfills().then(() => {
  defineCustomElements();
});

Vue.config.ignoredElements = [/^k-/];

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
