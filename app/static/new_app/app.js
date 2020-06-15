
window.addEventListener('load', () => {

// console.log("Hi from app.js")

Vue.prototype.$eventBus = new Vue()

new Vue({
    el: "#app",
    data: {
      host: 'localhost:5000',//'community-help.mgh.harvard.edu',
      posts: null,
      // posts: [

      //   {id: '1',
      //   date: '12-01-1989',
      //   name: 'Testing2',
      //   partnersID: '12345-b',
      //   email: 'bbearce@bu.com',
      //   address: '3318 Piney Forest Dr., Houston, TX 77084',
      //   post: 'Post Body',requestType: 'transportation',
      //   helpType: 'needHelp',
      //   position: {lat: 29.951066,lng: -90.071532}},

      //   {id: '2',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.851066,lng: -90.171532}},
      //   {id: '3',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.751066,lng: -90.271532}},
      //   {id: '4',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.651066,lng: -90.371532}},
      //   {id: '5',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.551066,lng: -90.471532}},
      //   {id: '6',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.451066,lng: -90.571532}},
      //   {id: '7',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.351066,lng: -90.6715319999999}},
      //   {id: '8',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.251066,lng: -90.7715319999999}},
      //   {id: '9',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.151066,lng: -90.8715319999999}},
      //   {id: '10',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 29.051066,lng: -90.9715319999999}},
      //   {id: '11',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.951066,lng: -91.0715319999999}},
      //   {id: '12',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.851066,lng: -91.1715319999999}},
      //   {id: '13',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.751066,lng: -91.2715319999999}},
      //   {id: '14',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.651066,lng: -91.3715319999999}},
      //   {id: '15',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.551066,lng: -91.4715319999999}},
      //   {id: '16',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.451066,lng: -91.5715319999999}},
      //   {id: '17',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.351066,lng: -91.6715319999998}},
      //   {id: '18',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.251066,lng: -91.7715319999998}},
      //   {id: '19',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.151066,lng: -91.8715319999998}},
      //   {id: '20',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 28.051066,lng: -91.9715319999998}},
      //   {id: '21',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.951066,lng: -92.0715319999998}},
      //   {id: '22',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.851066,lng: -92.1715319999998}},
      //   {id: '23',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.751066,lng: -92.2715319999998}},
      //   {id: '24',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.651066,lng: -92.3715319999998}},
      //   {id: '25',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.551066,lng: -92.4715319999998}},
      //   {id: '26',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.451066,lng: -92.5715319999997}},
      //   {id: '27',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.351066,lng: -92.6715319999997}},
      //   {id: '28',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.251066,lng: -92.7715319999997}},
      //   {id: '29',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.151066,lng: -92.8715319999997}},
      //   {id: '30',date: '12-01-1989',name: 'Testing2',partnersID: '12345-b',email: 'bbearce@bu.com',address: '3318 Piney Forest Dr., Houston, TX 77084',post: 'Post Body',requestType: 'transportation',helpType: 'needHelp',position: {lat: 27.051066,lng: -92.9715319999997}},
      // ],
      username: null,
    },
    created: function() {
      this.getRequests();
    },
    mounted: function() {
      // debugger;
    },
    methods: {
      getRequests: function() {
        const path = `http://${this.host}/posts`;
        axios.get(path)
        .then((res) => {
          // debugger;
          this.$eventBus.$emit('posts-have-loaded', res.data.posts)
          this.posts = res.data.posts;
          this.username = res.data.username;
          // console.log(this.username) //shows old posts still...I think we should user this.markers to to loop through the markers and remove off the map...new methode removeMarkers()
          // setTimeout((() => {console.log(this.markers);this.updateMap(this.mg_map)}), 3000);
        })
        .catch((error) => {
          // eslint-disable-next-line
          // console.error(error);
        });

      },
      // getPosts: function(found) {
      //   var vm = this;
      //   function checkForPosts() {
      //     if (vm.posts) {
      //       // debugger;
      //       found(vm.posts);
      //     } else {
      //       // debugger;
      //       console.log('looping...')
      //       setTimeout(checkForPosts, 50);
      //     }
      //   }
      //   checkForPosts();

      // },
    },

});




})