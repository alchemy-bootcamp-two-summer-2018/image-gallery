import shortid from 'shortid';
import data from './data.js';

if(!data.albums){
  data.albums = [
    {
      id: shortid.generate(),
      title: 'Toast',
      description: 'A piece of cooked bread',
      images: [
        { 
          id: shortid.generate(),
          title: 'Burnt Toast',
          description: 'A piece of overly cooked bread',
          url: 'https://www.publicdomainpictures.net/pictures/110000/velka/burnt-toast.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'Toasty Toast',
          description: 'A piece of perfectly cooked bread',
          url: 'https://cdn.pixabay.com/photo/2015/12/05/09/19/toast-1077881_960_720.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'Peanuty Toast',
          description: 'A piece of cooked bread with the butter of peanuts applied',
          url: 'https://cdn.pixabay.com/photo/2015/03/21/18/04/peanut-butter-684021_960_720.jpg'
        }
      ]
    },
    {
      id: shortid.generate(),
      title: 'Dishes',
      description: 'A circular piece of porcelain.',
      images: [      
        { 
          id: shortid.generate(),
          title: 'Beaver Dish',
          description: 'A piece of porcelain with a beaver wearing his best bow tie.',
          url: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201833/0022/img3o.jpg'
        }, 
        { 
          id: shortid.generate(),
          title: 'Fantasy Dish',
          description: 'A piece of porcelain with a russian orthodox church and a princess on a horse.',
          url: 'https://c.pxhere.com/photos/e0/91/epic_porcelain_summer_plate_multicolored-559939.jpg!d'
        },
        {
          id: shortid.generate(),
          title: 'Petri Dish',
          description: 'A piece of plastic with red jello and a cue tip in a pair of disembodied hands.',
          url: 'https://media.defense.gov/2014/Jan/29/2000880491/-1/-1/0/140123-F-WC654-007.JPG'
        }  
      ]
    }
  ];
}


export default {
  getAlbums() {
    return data.albums;
  },
  addAlbum(album) {
    album.id = shortid.generate();
    data.albums.push(album);
    return album;
  },
  getAlbum(id) {
    return data.albums.find(album => album.id === id);
  },
  addImage(id, image) {
    const album = this.getAlbum(id);
    image.id = shortid.generate();
    album.images.push(image);
    return image;
  }
};