import shortid from 'shortid';
import data from './data.js';

if(!data.albums) {
  data.albums = [
    {
      key: shortid.generate(),
      title: 'dogs', 
      description: 'These are cute dogs',
      images: [
        {
          key: shortid.generate(),
          title: 'pug',
          description: 'cute pug',
          url: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          key: shortid.generate(),                
          title: 'sea dog',
          description: 'seal, otherwise known as sea dog',
          url: 'http://raredelights.com/wp-content/uploads/2013/10/Top-20-Worlds-Cutest-Animals.jpg'
        },
      ] 
    },
    {
      key: shortid.generate(),
      title: 'hedgehogs', 
      description: 'These are cute hedgehogs',
      images: [
        {
          key: shortid.generate(),
          title: 'hedgehog',
          description: 'cute hedgehog',
          url: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          key: shortid.generate(),
          title: 'hedgehog with watermelon',
          description: 'cute hedgehog2',
          url: 'https://i.ytimg.com/vi/7TQYnZ9He_Q/maxresdefault.jpg'
        }
       
      ]  
    } 
  ];
}

export default {
  getAlbums() {
    return data.albums;
  },
  getAlbum(key) {
    return data.albums.find(album => album.key === key);
  },
};