import data from './data';
import albums from '../assets/albumData.js';

if(!data.albums) {
  data.albums = albums;
}

export default {
  getAlbums() {
    return data.albums;
  },
  getAlbum(id) {
    return data.albums.find(album => album.id === id);
  },
  addAlbum(album) {
    data.albums.push(album);
    return album;
  },
  updateAlbum(updated) {
    const index = data.albums.findIndex(album => {
      return album.id === updated.id;
    });

    if(index !== -1) {
      data.albums.splice(index, 1, updated);
    }
  },

};