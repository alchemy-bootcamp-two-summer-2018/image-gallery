import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';

export default new VueRouter ({
  routes: [
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path:'/albums', component: Albums },
    { path:'/addAlbum', component: AddAlbum },
    { path:'/albums/:id', component: AlbumDetail },
  ]
});