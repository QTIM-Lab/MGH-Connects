window.addEventListener('load', () => {

  // Note this component has no html as it's technically a map piece

  Vue.component("google-map-marker", {
    props: ["username","posts"],
    data: function() {
      return {
        markers: [], //not really using yet, but could be useful in the future
        iconMap: {
          transportation: 'img/car.png',
          'neighborhood-connection': 'img/house.png',
          'family-connection': 'img/family.png',
          'pet-care': 'img/pet.png',
          // canHelp: 'img/canHelp.png',
        },
        icons: [],
      }
    },
    created: function() {
      // var vm = this;
      // // debugger;
      // vm.$parent.getMap(function(map) {
      //   debugger;
      //   vm.posts.forEach(function(post) {
      //     // debugger;
      //     new google.maps.Marker({
      //       position: post.position,
      //       map: map
      //     });
      //   });
      // });
    },
    mounted: function () {
      // debugger;
      var vm = this;
      // debugger;
      vm.$parent.getMap(function(map) {
        vm.posts.forEach(function(post,i,a) {
          // debugger;
          position = {
            lat:post.lat,
            lng:post.lng,
          };
          // debugger;
          // Icon
          vm.icons.push('../static/' + vm.iconMap[post.requestType])
          // if (post.helpType === 'canHelp') {
          //   vm.icons.push('../static/' + vm.iconMap[post.helpType])
          // } else {
          //   vm.icons.push('../static/' + vm.iconMap[post.requestType])
          // }
          // Info Window
          const contentString = `
          <h5><strong>Name:</strong> ${post.name}</h5>
          <hr>
          <p><strong>Contact Email:</strong> ${vm.username}</p>
          <br>
          <p><strong>Post:</strong></p>
          <p>${post.post}</p>
          `;
          const infowindow = new window.google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200,
          });
          // Marker
          var marker =  new google.maps.Marker({
            position: position,
            map: map,
            icon: vm.icons[i],
          });
          // debugger;
          vm.markers.push(marker);
          // console.log(i)
          // console.log(this.markers[i])
          marker.addListener('click', () => {
            infowindow.open(map, vm.markers[i]);
          });



        });
      });
    },
    methods: {
    },
    render(h) {
      // debugger;
      return null;
    }
  });



})

document.addEventListener("DOMContentLoaded", function(event) {
  // - Code to execute when all DOM content is loaded. 
  // - including fonts, images, etc.
  // debugger;
});