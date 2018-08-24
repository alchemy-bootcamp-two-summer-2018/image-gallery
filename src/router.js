import VueRouter from 'vue-router';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import Thumbnail from './components/Thumbnail.vue';

export default new VueRouter({
  routes: [
    { path: '/albums', component: Albums },
    { 
      path: '/albums/:key',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: Thumbnail },
        { path: '', redirect: 'thumbnail' }
      ]
    }
    
  ]
});