import Home from './components/Home.vue';
import About from './components/About.vue';
import VueRouter from '../node_modules/vue-router';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/GalleryViewer.vue';
import NewImage from './components/NewImage.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    { path: '/addalbum', component: AddAlbum },
    { 
      path: '/albumdetail',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'list', component: ListViewer },
        { path: 'newimage', component: NewImage }
      ]
    }
  ]
});