window.addEventListener('load', () => {
// outermost tagset

// console.log("Hi from map.js")

Vue.component('google-map', {
    template: '#map-template',
    data: function() {
      return {
        map: null,
      };
    },
    created: function() {
      // debugger;
    },
    mounted: function() {
        this.map = new google.maps.Map(this.$el, {
          center: { lat: 42.3601, lng: -71.0589 },
          zoom: 11
        });
        
        EventBus = this.$eventBus;
        google.maps.event.addListener( map=this.map, 'bounds_changed', function(e, map_vue=this){
          // Note: Without "map=this.map" the map is only available from the "this" object
          // With it, you can access the map with either "map" or "this".
          // debugger;
          console.log(
          map.getBounds().getNorthEast().lat() + " " + map.getBounds().getNorthEast().lng() + "\n\n" +
          map.getBounds().getSouthWest().lat() + " " + map.getBounds().getSouthWest().lng()
          );
          EventBus.$emit('send-bounds-to-table', {
            sw:map.getBounds().getSouthWest(),
            ne:map.getBounds().getNorthEast()
          });

        });
    },
    methods: {
      getMap: function(found) {
        var vm = this;
        // debugger;
        function checkForMap() {
          if (vm.map) {
            // debugger;
            found(vm.map);
          } else {
            // debugger;
            setTimeout(checkForMap, 50);
          }
        }
        checkForMap();
      },
    },
  });
    

// outermost tagset
})