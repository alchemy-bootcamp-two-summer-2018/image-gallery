import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDashboard from './components/AlbumDashboard.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/ListViewer.vue';
import NewImage from './components/NewImage.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: AlbumDashboard },
    { path: '/add', component: AddAlbum },
    {
      path: '/detail/:key',
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