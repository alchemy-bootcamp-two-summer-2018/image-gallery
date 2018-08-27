import shortid from 'shortid';
import data from './data';

if(!data.albums) {
  data.albums = [
    {
      key: shortid.generate(),
      title: 'Football',
      description: 'On any given Sunday you\'re gonna win or you\'re gonna lose. The point is - can you win or lose like a man?',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url:'http://bostonspiritmagazine.com/wp-content/uploads/2015/02/Brady_Patriots_Superbowl_XLIX.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url:'https://1.bp.blogspot.com/_SeggsIl9ILQ/SHQPvXkYN0I/AAAAAAAAAAU/mfD1w_rn_AU/w1200-h630-p-k-no-nu/Sean%2BTaylor%2Bwalking%2Boff%2Bthe%2Bfield%2Bfor%2Bthe%2Blast%2Btime%5B1%5D.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url:'https://alchetron.com/cdn/dante-hall-8316f4be-3757-4efe-a3b2-f7133969904-resize-750.jpeg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url:'https://sports.cbsimg.net/images/blogs/brian-urlacher-retires.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url:'https://cdn.vox-cdn.com/thumbor/QjDknDMzSypMDHJPI_m1JAYgTSY=/0x0:4000x2667/1200x800/filters:focal(0x0:4000x2667)/cdn.vox-cdn.com/uploads/chorus_image/image/13283525/160620078.0.jpg',
        },   
      ],
    },
    {
      key: shortid.generate(),
      title: 'Trucks',
      description: 'The right tool for the job',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.carid.com/images/black-rhino/wheels/black-rhino-armory-desert-sand-toyota-tacoma.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://assets3.thrillist.com/v1/image/1436886/size/tmg-facebook_social.jpg',

        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://i.ytimg.com/vi/XS_1bBXrxww/maxresdefault.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.ford-trucks.com/wp-content/uploads/2015/04/96dually.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://i.pinimg.com/originals/b2/f3/41/b2f341ea6805e4260b16b73fe5764c68.jpg',
        },

        
      ],
    },
    {
      key: shortid.generate(),
      title: 'Great Generals',
      description: 'Far better it is to dare mighty things...',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.shambhala.com/media/catalog/category/Sun_Tzu_open_rights.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://nationalinterest.org/sites/default/files/styles/desktop__1486_x_614/public/main_images/Clausewitz.jpg?itok=dTn7sWwl',

        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.biography.com/.image/t_share/MTQ1MTQxMjMyNjc3NDMwNjgw/napoleon---mini-biography.jpg',

        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Alexander_the_Great_mosaic.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://sudburybeach.files.wordpress.com/2016/01/farragut.jpg?w=545'
        },
      ],
    },
    {
      key: shortid.generate(),
      title: 'Predatory Cats',
      description: '*silence* \n this is *too* quiet',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/An_Indian_tiger_in_the_wild._Royal%2C_Bengal_tiger_%2827466438332%29.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Panthera_onca_at_the_Toronto_Zoo_2.jpg/1024px-Panthera_onca_at_the_Toronto_Zoo_2.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canadian_lynx_by_Keith_Williams.jpg/800px-Canadian_lynx_by_Keith_Williams.jpg',

        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.chewy.com/petcentral/wp-content/uploads/2018/05/things-to-know-about-hairless-cats-skin-conditions-x-670-440x.jpg'
        },
      ],
    },
    {
      key: shortid.generate(),
      title: 'Mountains',
      description: '\'There are three sports... racing, bullfighting, and mountaineering\' - Ernest Hemingway',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/original/222602.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/280px-K2_2006b.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c3/55/d1/shutterstock-258841592.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.ultraadventures.co.uk/wp-content/uploads/2017/08/kilimanjaro-1500x900-1.jpg'

        },
      ],
    },
    {
      key: shortid.generate(),
      title: 'Cookies',
      description: 'Just like mama made...',
      images: [
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://www.mybakingaddiction.com/wp-content/uploads/2016/04/mm-cookies-4-1500-1-600x900.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://assets.marthastewart.com/styles/wmax-1500/d32/ideal-sugar-cookies-6379807-0717/ideal-sugar-cookies-6379807-0717_horiz.jpg?itok=OsDicfnW',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://d2gk7xgygi98cy.cloudfront.net/178-3-large.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://s3.amazonaws.com/lowres.cartoonstock.com/computers-cookie-computer_cookie-computer_password-computer_problem-biscuit-nfkn1529_low.jpg',
        },
        {
          key: shortid.generate(),
          title: 'title',
          description: 'description',
          url: 'https://pbs.twimg.com/profile_images/552145045663408129/egywNuyx.png',
        },
      ],
    },
  ];
}

export default {
  getAlbums() {
    return data.albums;
  },
  getAlbum(key) {
    return data.albums.find(album => album.key === key);
  },
  addAlbum(album) {
    album.key = shortid.generate();
    data.albums.push(album);
    return album;
  },
  addImage(key, image) {
    image.key = shortid.generate();
    const album = data.albums.find(element => 
    {return element.key === key;}
    );
    album.images.push(image);    
  }
};


