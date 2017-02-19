import Vue from 'vue';
import Router from 'vue-router';
import {
  sync
} from 'vuex-router-sync';
import store from './vuex/store';
import filters from './filter';
import App from './App.vue';
import index from './views/index.vue';

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
Vue.use(require('./ext/vue_ext.js'));
router.map({
  '/': {
    component: index
  },
  '/index': {
    component: index,
        // 在index下设置一个子路由
        subRoutes: {
          '/': {
            name:'index',
            component: index
          },
        }
      }
    });
console.info(store);
sync(store, router);
router.start(App, '#app');

