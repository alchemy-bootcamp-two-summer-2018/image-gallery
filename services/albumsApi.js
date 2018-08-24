import data from './App.vue';

if(!data.selfies) {
  data.selfies = [
    {
      id: 1,
      title: 'celebrity',
      description: 'celebrities taking selfies',
      image:[{
        id: 2,
        title: 'oscars',
        description: 'group oscar selfie',
        url: 'https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-85019-oscar--2x1--940.jpg'
      },
      {
        id: 3,
        title: 'na',
        description: 'idk selfie',
        url: 1
      }
      ]


    }
  ];
}
export default {
  getSelfies() {
    return data.selfies;
  }
};