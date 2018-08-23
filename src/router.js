import VueRouter from 'vue-router';
import Albums from './components/Albums.vue';

export default new VueRouter({
  routes: [
    { path: '/albums', component: Albums }
  ]
});