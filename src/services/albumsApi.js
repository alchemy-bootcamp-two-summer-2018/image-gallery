// import data from '../data';
import shortid from 'shortid';

// if(!data.albums) {
let albums = [
  {
    id: shortid.generate(),
    title: 'celebrity',
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
      }
    ]
  },
  {
    id: shortid.generate(),
    title: 'funny',
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
      }
    ]
  },
]; 
// }
export default {
  getAlbums() {
    return albums;
  }
};