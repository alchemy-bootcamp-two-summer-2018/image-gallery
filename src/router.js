import VueRouter from 'vue-router';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import Thumbnail from './components/Thumbnail.vue';
import ListViewer from './components/ListViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';

export default new VueRouter({
  routes: [
    { path: '/albums', component: Albums },
    { 
      path: '/albums/:key',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: Thumbnail },
        { path: 'list', component: ListViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: '', redirect: 'thumbnail' }
      ]
    }
    
  ]
});