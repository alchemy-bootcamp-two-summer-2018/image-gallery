import shortid from 'shortid';
import data from './data.js';

if(!data.albums) {
  data.albums = [
    {
      key: shortid.generate(),
      title: 'Dogs Album', 
      description: 'These are some of my favorite dog pictures.',
      images: [
        {
          key: shortid.generate(),
          title: 'Pug',
          description: 'Look at that face!',
          url: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          key: shortid.generate(),                
          title: 'Sea Dog',
          description: 'This is a seal, otherwise known as a sea dog.',
          url: 'http://raredelights.com/wp-content/uploads/2013/10/Top-20-Worlds-Cutest-Animals.jpg'
        },
        {
          key: shortid.generate(),                
          title: 'Puppy',
          description: 'He\'s beautiful when he\'s sleeping',
          url: 'https://i.chzbgr.com/full/8820513536/hBDD906B6/'
        },
      ] 
    },
    {
      key: shortid.generate(),
      title: 'Hedgehogs', 
      description: 'How is it possible for an animal covered in spikes to be this adorable?',
      images: [
        {
          key: shortid.generate(),
          title: 'Hedgehog',
          description: 'Cute hedgehog',
          url: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          key: shortid.generate(),
          title: 'Hedgehog with watermelon',
          description: 'Perhaps ready for a treat?',
          url: 'https://i.ytimg.com/vi/7TQYnZ9He_Q/maxresdefault.jpg'
        },
        {
          key: shortid.generate(),
          title: 'Modern Hedgehog',
          description: 'A hedgehog of discerning taste',
          url: 'https://images-na.ssl-images-amazon.com/images/I/71HjeS8rh9L._SX425_.jpg'
        },
        {
          key: shortid.generate(),
          title: 'Garden Hedgehog',
          description: 'Chilling in the flowers',
          url: 'http://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_hedgehog.jpg'
        },
        {
          key: shortid.generate(),
          title: 'Awwww...',
          description: 'Hedgehog to go.',
          url: 'http://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_hedgehog.jpg'
        },
        
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