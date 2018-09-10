import shortid from 'shortid';
// import data from '../data';

// if(!data.albums) {
let albums = [
  {
    id: shortid.generate(),
    title: 'Celebrity',
    description: 'celebrities taking selfies',
    image:[
      {
        id: shortid.generate(),
        title: 'oscars',
        description: 'group oscar selfie',
        url: 'https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-85019-oscar--2x1--940.jpg'
      },
      {
        id: shortid.generate(),
        title: 'smart guys',
        description: 'Bill Nye, Barrack Obama, and Neil Degrasse Tyson',
        url: 'https://borrowbits.com/wp-content/uploads/2015/04/Bh6FMg9IgAEp7yQ-1900x1426_c.jpg'
      },
      {
        id: shortid.generate(),
        title: 'oscars',
        description: 'BeyonceBlackish',
        url: 'https://s3.amazonaws.com/hiphopdx-production/2017/02/BeyonceBIBLackish-e1487987333135-867x620.jpg'
      },
      {
        id: shortid.generate(),
        title: 'smart guys',
        description: 'GameOfThrones',
        url: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/08/07/Pictures/_e9f04846-7b32-11e7-b5e3-d817f67cfdf5.jpg'
      }

    ]
  },
  {
    id: shortid.generate(),
    title: 'Funny',
    description: 'funny selfies',
    image:[
      {
        id: shortid.generate(),
        title: 'dynamite',
        description: 'Napoleon and Kip',
        url: 'https://www.50-best.com/images/funny_selfies/napoleon.jpg'
      },
      {
        id: shortid.generate(),
        title: 'bath baby',
        description: 'never too young to selfie',
        url: 'https://www.oddee.com/wp-content/uploads/_media/imgs/articles2/a98636_selfie_7-baby-duck-face.jpg'
      },
      {
        id: shortid.generate(),
        title: 'dynamite',
        description: 'Napoleon and Kip',
        url: 'https://i.imgur.com/ZP2B68m.jpg'
      },
      {
        id: shortid.generate(),
        title: 'bath baby',
        description: 'never too young to selfie',
        url: 'http://justsomething.co/wp-content/uploads/2014/01/23-funniest-animal-selfies-4.jpg'
      },
    ]
  },
]; 
// }
export default {
  getAlbums() {
    return albums;
  },
  getAlbum(id) {
    return albums.find(album => album.id === id);
  }
};