import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumForm from './components/AlbumForm.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/ListViewer.vue';
import NewImage from './components/NewImage.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { 
      path: '/aboutus', 
      component: AboutUs, 
    },
    { 
      path: '/albums', 
      component: Albums, 
    },
    { path: '/albums/new', component: AddAlbum,
      children: [{ path: 'form', component: AlbumForm }]
    },
    { path: 'albums/:id', component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'list', component: ListViewer },
        { path: 'new', component: NewImage },
        { path: '*', redirect: '/' }
      ] 
    }
  ]
});