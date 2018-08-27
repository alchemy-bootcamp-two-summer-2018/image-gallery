import shortid from 'shortid';
import data from './data.js';

if(!data.albums){
  data.albums = [
    {
      id: shortid.generate(),
      title: 'Toast',
      description: 'A tour through the world of bread, heat, and toppings.',
      images: [
        { 
          id: shortid.generate(),
          title: 'Burnt Toast',
          description: 'A piece of overly cooked bread-- a cautionary tale.',
          url: 'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/05/burnt-toast-for-dad-1200x700.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'Toasty Toast',
          description: 'A piece of perfectly cooked bread',
          url: 'http://www.welldonetoast.com/wp-content/uploads/2012/02/toastC.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'Toast Hawaii',
          description: 'Popular in Germany, Toast Hawaii is toast with ham, pineapple, cheese, and a maraschino cherry.',
          url: 'https://critikinews.files.wordpress.com/2017/07/toast-hawaii1.jpg?w=1024&h=524&crop=1'
        },
        {          
          id: shortid.generate(),
          title: 'Jesus Toast',
          description: 'Remember when this was a thing?',
          url: 'https://cdn.instructables.com/FPQ/PNS0/H9T4LUWE/FPQPNS0H9T4LUWE.LARGE.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'Peanut Butter Toast',
          description: 'Toast with peanut butter, breakfast of kings and queens',
          url: 'https://www.wikihow.com/images/thumb/f/fd/Make-Peanut-Butter-Toast-Step-3-Version-3.jpg/aid2672247-v4-728px-Make-Peanut-Butter-Toast-Step-3-Version-3.jpg'
        },
        {          
          id: shortid.generate(),
          title: 'French Toast',
          description: 'A brunch favorite, custard-soaked bread toasted on a griddle. Often served with fruit.',
          url: 'https://d2gk7xgygi98cy.cloudfront.net/3136-3-large.jpg'
        },
        {
          id: shortid.generate(),
          title: 'Avocado Toast',
          description: 'Toast topped with sliced avocado, goat cheese, and chili flakes.',
          url: 'https://truffle-assets.imgix.net/9f7fc1b6-101-avocadotoast-dishland1.jpg'
        }
      ]
    },
    {
      id: shortid.generate(),
      title: 'Dishes',
      description: 'We put our breakfast on them. Or in them.',
      images: [      
        { 
          id: shortid.generate(),
          title: 'Beaver Plate',
          description: 'A plate with a beaver wearing his best bow tie.',
          url: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201833/0022/img3o.jpg'
        }, 
        { 
          id: shortid.generate(),
          title: 'Fantasy Dish',
          description: 'A plate with a Russian Orthodox church and a princess on a horse. Perfect for caviar and blini.',
          url: 'https://c.pxhere.com/photos/e0/91/epic_porcelain_summer_plate_multicolored-559939.jpg!d'
        },
        { 
          id: shortid.generate(),
          title: 'Egg Cup',
          description: 'A wooden cup made to hold a soft-boiled egg.',
          url: 'https://conorlynchwoodturning.com/wp/wp-content/uploads/2016/02/DSC_1089-3.jpg'
        },
        { 
          id: shortid.generate(),
          title: 'Cereal Bowl',
          description: 'A fancy bowl for your Frosted Flakes.',
          url: 'https://www.wedgwood.com/media/catalog/product/cache/4/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/7/0/701587376495_1.jpg'
        },
        {
          id: shortid.generate(),
          title: 'Petri Dish',
          description: 'A piece of plastic with red jello and a Q-Tip in a pair of disembodied hands. Don\'t eat anything off of this.',
          url: 'https://media.defense.gov/2014/Jan/29/2000880491/-1/-1/0/140123-F-WC654-007.JPG'
        }  
      ]
    },
    {
      id: shortid.generate(),
      title: 'Coffee',
      description: 'The perfect breakfast drink.',
      images: [
        {
          id: shortid.generate(),
          title: 'Black Coffee',
          description: 'It\'s simple, iconic and delicious.',
          url: 'https://www.healthline.com/hlcmsresource/images/AN391-Coffee-Red-Cup-732x549-thumb.jpg'
        },
        {
          id: shortid.generate(),
          title: 'Espresso',
          description: 'Coffee distilled to its purest essence, powerful and intense.',
          url: 'https://static01.nyt.com/images/2018/08/16/business/16COFFEE/16COFFEE-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
        },
        {
          id: shortid.generate(),
          title: 'Cappuccino',
          description: 'Espresso with textured milk. Best when served small and drunk quickly.',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfs-v0jFyFHe5SaCgSc-CVt8HuXkQlgz7aT26pMiIVpobF8Qy7vg'
        },
        {
          id: shortid.generate(),
          title: 'Latte',
          description: 'Milkier than a cappuccino-- the perfect vehicle for a time-consuming picture design.',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSPUXhF-wJr6C44BTkkfd7TRrMwH2eRWIBL05BQI-EJjmZxGh'
        },
        {
          id: shortid.generate(),
          title: 'Bulletproof Coffee',
          description: 'Greasy concoction loved by Joe Rogan fans.',
          url: 'https://roofingbymidsouth.com/wp-content/uploads/2018/03/Bulletproof-coffee.jpg'
        },
        {
          id: shortid.generate(),
          title: 'Cascara',
          description: 'The dried fruit of coffee cherries after the seeds are removed. Makes a tasty tea.',
          url: 'https://static1.squarespace.com/static/5419e3c7e4b090c9db3d42ca/55633abce4b0e7bb1a773710/573363307c65e4dd8e86e38c/1474404695665/wet-cascara-coffee-cherry-husk.JPG?format=1500w'
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