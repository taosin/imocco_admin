import Vue from 'vue';
import Router from 'vue-router';
import {
  sync
} from 'vuex-router-sync';
import store from './vuex/store';
import filters from './filter';
import App from './App.vue';

window.Vue = Vue;
Vue.use(Router);
const router = new Router({
  hashbang: false,
  history: false,
  saveScrollPosition: false
});

window.router = router;
Object.keys(filters).forEach((k) => {
  Vue.filter(k, filters[k]);
});
Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));
router.map({
  '/': {
    name: 'index',
    component(resolve) {
      require(['./views/index.vue'], resolve);
    },
    subRoutes:{
      '/user/list': {
        name: '/user/list',
        component(resolve) {
          require(['./views/user/index.vue'], resolve);
        }
      },
      '/order/list': {
        name: '/order/list',
        component(resolve) {
          require(['./views/order/index.vue'], resolve);
        }
      },
    }
  },
});
console.info(store);
sync(store, router);
router.start(App, '#app');

