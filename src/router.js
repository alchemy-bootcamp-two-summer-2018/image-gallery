import VueRouter from 'vue-router';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/albums', component: Albums },
    { path: '/albums/:key', component: AlbumDetail }
  ]
});