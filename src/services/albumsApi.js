import data from './data';
import shortid from 'shortid';
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
    album.id = shortid.generate();
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

  addImage(album, image) {
    image.id = image.title;
    album.id = shortid.generate();
    data.album.images.push(image);
    console.log('in api', album);
    return album;
  
  },

};