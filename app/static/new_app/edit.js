window.addEventListener('load', () => {
    console.log('edit.js present---')

    Vue.component("edit-modal", {
        template: '#edit-modal',
        props: ['username','host'],
        data: function() {
            return {
                editPostForm: {
                    id: '',
                    name: '',
                    email: '',
                    address: '',
                    post: '',
                    requestType: '',
                    // helpType: false,
                    status: '',
                  },
            }
        },
        created: function() {
            // debugger;
        },
        mounted: function() {
            // debugger;
            this.$eventBus.$on('send-post-to-edit-modal', (post) => {
                // debugger;
                this.editPost(post);
            })
        },
        methods: {
            editPost(post) {
                // debugger;
                if (post.post.partnersID === this.username) {
                  this.editPostForm = {
                    id: post.post.id,
                    name: post.post.name,
                    email: post.post.email,
                    address: post.post.address,
                    post: post.post.post,
                    requestType: post.post.requestType,
                    // helpType: post.post.helpType,
                    status: post.post.status,
                  }
                //   debugger;
                } else {
                  $('#editPostModal').modal('toggle')
                //   this.updateMessage("This is not your post. Please don't edit others posts.", alert_type='warning')
                }
              },
              onSubmitUpdate(evt) {
                $('#editPostModal').modal('toggle')
                evt.preventDefault();
                this.geocoder = new window.google.maps.Geocoder();
                debugger;
                this.geocodeAddress(this.editPostForm, (lat_lngs) => {
                  const payload = {
                    name: this.editPostForm.name,
                    email: this.editPostForm.email,
                    address: this.editPostForm.address,
                    lat: lat_lngs.lat,
                    lng: lat_lngs.lng,
                    post: this.editPostForm.post,
                    requestType: this.editPostForm.requestType,
                    // helpType: this.editPostForm.helpType,
                    status: this.editPostForm.status,
                  };
                  // console.log(payload)
                  debugger;
                  this.updateRequest(payload, this.editPostForm.id);
                //   this.initForm();
                });
              },
              geocodeAddress(request, callback) {
                const street = request.address;
                this.geocoder.geocode({ address: street }, (results) => {
                  // debugger;
                  const lat_lngs = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng(),
                  };
                  callback(lat_lngs);
                });
              },
              updateRequest(payload, requestID) {
                debugger;
                const path = `http://${this.host}/posts/${requestID}`;
                axios.put(path, payload)
                  .then(() => {
                    setTimeout(()=>{location.reload()}, 1000);
                    // this.updateMessage('Request updated!', alert_type='success')
                  }).catch((error) => {              // eslint-disable-next-line
                    console.error(error);
                  });
              },


        },
    })




})