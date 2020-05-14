<template>
  <CContainer class="d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="12" lg="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center" />
            <strong>Profile</strong>
            <div class="card-header-actions">
              <a
                href="https://coreui.io/vue/docs/components/breadcrumb"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md="3">
                <img
                  alt="Profile photo"
                  style="width:100%"
                  id="photo"
                  src="data:image/png;base64,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"
                />
                <CProgress :value="uploadValue" :max="100" show-percentage animated></CProgress>
              </CCol>
              <CCol md="9">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">Name</label>
                      <input type="text" v-model="username" class="form-control" id="name" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="email">Email</label>
                      <input type="email" v-model="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone">phone</label>
                      <input type="text" class="form-control" id="phone" v-model="phone" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="bio">Bio</label>
                      <input type="text" class="form-control" id="bio" v-model="bio" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Address</label>
                    <input type="text" class="form-control" id="inputAddress2" v-model="address" />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Upload photo</label>
                    <input
                      type="file"
                      @change="previewFile"
                      class="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <button
                    v-on:click="uploadProfile()"
                    type="submit"
                    class="btn btn-primary btn-block"
                  >Save Profile</button>
                </form>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

const db = firebase.firestore();

export default {
  name: "Profile",
  data() {
    return {
      username: "",
      email: "",
      phone: "",
      address: "",
      uploadValue: 0,
      profilePhoto: null,
      userPhoto: null,
      photoUrl: "",
      userData: "",
      bio: ""
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (this.user.data.email == doc.data().email) {
            this.username = doc.data().username;
            this.email = doc.data().email;
            this.phone = doc.data().handPhone;
            this.address = doc.data().address;
            this.bio = doc.data().jobPosition;
            this.photoUrl = doc.data().photo;
            this.userData = doc.id;
          }
        });
        firebase
          .storage()
          .ref()
          .child(this.photoUrl)
          .getDownloadURL()
          .then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'

            // Or inserted into an <img> element:
            var img = document.getElementById("photo");
            img.src = url;
          });
        return this.userData;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    previewFile(e) {
      this.uploadValue = 0;
      this.profilePhoto = null;
      this.userPhoto = e.target.files[0];
    },
    uploadProfile() {
      db.collection("users")
        .doc(this.userData)
        .update({
          username: this.username,
          handPhone: this.phone,
          address: this.address,
          jobPosition: this.bio,
          photo: this.userPhoto.name
        });
      const storageRef = firebase
        .storage()
        .ref(`${this.userPhoto.name}`)
        .put(this.userPhoto);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
        }
      );
      firebase
        .storage()
        .ref()
        .child(this.userPhoto.name)
        .getDownloadURL()
        .then(function(url) {
          // `url` is the download URL for 'images/stars.jpg'

          var img = document.getElementById("photo");
          img.src = url;
        });
      alert("Upload Success!");
    }
  }
};
</script>
