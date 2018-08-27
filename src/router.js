import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer';
import GalleryViewer from './components/GalleryViewer';
import ListViewer from './components/ListViewer';
import NewImage from './components/NewImage';

export default new VueRouter ({
  routes: [
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path:'/albums', component: Albums },
    { path:'/addAlbum', component: AddAlbum },
    { path:'/albums/:id', component: AlbumDetail },
    {
      path: '/albums/:id',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'list', component: ListViewer },
        { path: 'new', component: NewImage },
        { path: '', redirect: 'thumbnail' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});