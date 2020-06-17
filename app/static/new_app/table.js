window.addEventListener('load', () => {

  Vue.component('post-table', {
      template: '#post-table',
      props: ["posts"],
      data() {
        return {
          message: "table",
          postTable: {
            currentSort: 'date', // for post table
            currentSortDir: 'desc', // for post table
            pageSize: 10, // for post table
            currentPage: 1, // for post table
            searchQuery: null, // for post table
          },
          mapViewPosts: [],
        }
      },
      mounted: function() {
        var vm = this;
        vm.$eventBus.$on('send-bounds-to-table', ({sw, ne}) => {
          if(vm.posts === null){ // wait on posts to load
            setTimeout(() => {this.refresh_table({sw,ne})}, 500)
          }else{
            this.refresh_table({sw,ne})
          };


        })
        // vm.$parent.getPosts(function(posts) {


        // })
        
      },
      methods: {
        sort(s) { // For Post Table
          //if s == current sort, reverse
          if(s === this.postTable.currentSort) {
            this.postTable.currentSortDir = this.postTable.currentSortDir==='asc'?'desc':'asc';
          }
          this.postTable.currentSort = s;
        },
        refresh_table: function({sw,ne}) {
          // debugger;
          const posts = this.posts
          this.mapViewPosts = [];
          var new_bounds = new google.maps.LatLngBounds(sw,ne)
          // console.log(new_bounds.contains({lat:-33.8599358, lng:151.2090295}))
          for(var i = 0; i < posts.length; i++) {
            // debugger;
            post = posts[i]
            const lat = post.lat;
            const lng = post.lng;
            // console.log(new_bounds.contains({lat:lat,lng:lng}))
            if ( new_bounds.contains({lat:lat,lng:lng}) ) {
              // debugger
              this.mapViewPosts.push(post)
            }
            // debugger;
          }
        },
        editPost(post) {
          EventBus.$emit('send-post-to-edit-modal', {post})
        },
      },
      computed: {
        sortedPosts:function() {
          // debugger;
          return this.mapViewPosts.filter((post, index) => { // first we bake in the search
            if (this.postTable.searchQuery) {
              return this.postTable.searchQuery.toLowerCase().split(' ').every(v => post.post.toLowerCase().includes(v))
            } else {
              return true
            }
          }).sort((a,b) => { //now the sort
            let modifier = 1;
            if(this.postTable.currentSortDir === 'desc') modifier = -1;
            if (this.postTable.currentSort === 'date') {
              if(Date.parse(a[this.postTable.currentSort]) < Date.parse(b[this.postTable.currentSort])) return -1 * modifier;
              if(Date.parse(a[this.postTable.currentSort]) > Date.parse(b[this.postTable.currentSort])) return 1 * modifier;            
            } 
            if(a[this.postTable.currentSort] < b[this.postTable.currentSort]) return -1 * modifier;
            if(a[this.postTable.currentSort] > b[this.postTable.currentSort]) return 1 * modifier;
            return 0;
          }).filter((row, index) => {
            let start = (this.postTable.currentPage-1)*this.postTable.pageSize;
            let end = this.postTable.currentPage*this.postTable.pageSize;
            if(index >= start && index < end) return true;
          });
        },
      },
    });
  


})