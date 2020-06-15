window.addEventListener('load', () => {


    Vue.component("request-modal", {
        template: '#request-modal',
        props: ["host"],
        data: function() {
            return {
                geocoder: null,
                addPostForm: {
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
        created: () => {
            console.log('request.js present')
        },
        mounted: () => {
            // debugger;
            this.geocoder = new google.maps.Geocoder();
        },
        methods: {
          onSubmit(evt){
            evt.preventDefault();
            $('#addPostModal').modal('toggle')
            this.geocoder = new google.maps.Geocoder();
            this.geocodeAddress(this.addPostForm, (lat_lngs) => {
              const payload = {
                name: this.addPostForm.name,
                email: this.addPostForm.email,
                address: this.addPostForm.address,
                lat: lat_lngs.lat,
                lng: lat_lngs.lng,
                post: this.addPostForm.post,
                requestType: this.addPostForm.requestType,
                // helpType: this.addPostForm.helpType,
                status: 'un-resolved',// this.addPostForm.status, // if we want to control status in the future
              };
              // console.log(payload)
              this.addRequest(payload);
            //   this.initForm();
            });
            console.log('onSubmit')
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
          addRequest(payload) { // actually posts data to db
            // debugger;
            const path = `http://${this.host}/posts`;
            axios.post(path, payload)
              .then((res) => {
                setTimeout(()=>{location.reload()}, 1000);
                // this.getRequests();
                // this.updateMessage(res.data.message, alert_type='success')
              })
              .catch((error) => {              // eslint-disable-next-line
                console.log(error);
                // this.getRequests();
              });
          },

        },
    })




})