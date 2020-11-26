<template>
  <CContainer class="d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="12" lg="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center" />
            <strong>Profile</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md="3">
                <img alt="Profile photo" style="width:100%" id="photo" :src="imageSrc" />
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
                      <label for="bio">Role</label>
                      <input type="text" class="form-control" id="bio" v-model="bio" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="email">Email</label>
                      <input type="email" v-model="email" class="form-control" id="email" />
                    </div>
                    
                    <div class="form-group col-md-6">
                      <label for="phone">Phone</label>
                      <input type="text" class="form-control" id="phone" v-model="handPhone" />
                    </div>
                    
                    
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
import Vue from "vue";

const db = firebase.firestore();

const testEmpty = (value) => {
  if (value === '' || value === undefined || value === null ) {
    return false
  } else {
    return true
  }
}

export default {
  name: "Profile",
  data() {
    return {
      username: "",
      email: "",
      handPhone: "",
      companyPhone: "",
      address: "",
      imageSrc: "default.jpg",
      uploadValue: 0,
      password: "",
      profilePhoto: null,
      questionTarget: "",
      questions: [{ id: 1, data: "Loading questions in database." }],
      answer: "",
      userPhoto: null,
      photoUrl: "",
      userData: "",
      bio: ""
    };
  },
  created() {
    db.collection("questions")
      .get()
      .then(querySnapshot => {
        this.questions = [];
        querySnapshot.forEach(doc => {
          return this.questions.push({
            id: doc.id,
            data: doc.data().questionDetail
          });
        });
      });
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (
            Vue.prototype.$session.getAll().user.data.email == doc.data().email
          ) {
            
            this.username = doc.data().username;
            this.email = doc.data().email;
            this.handPhone = doc.data().handPhone;
            this.companyPhone = doc.data().companyPhone;
            this.address = doc.data().address;
            this.bio = doc.data().jobPosition;
            this.questionTarget = doc.data().questionId;
            this.answer = doc.data().questionAns;
            this.photoUrl = doc.data().photo;
            this.userData = doc.id;
            this.password = doc.data().password;
            
          }
        });
        if (Vue.prototype.$session.getAll().user.data.email.substring(10) !== "@lamduan.mfu.ac.th") {
        firebase
          .storage()
          .ref("images")
          .child(this.photoUrl)
          .getDownloadURL()
          .then(url => {
            // `url` is the download URL for 'images/stars.jpg'

            // Or inserted into an <img> element:
            return (this.imageSrc = url);
          });
        } else {
          this.imageSrc = Vue.prototype.$session.getAll().user.data.photo;
        }
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    console.log(this.questionTarget);
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
        .update(
          testEmpty(this.userPhoto)
            ? {
                username: this.username,
                handPhone: this.handPhone,
                companyPhone: this.companyPhone,
                email: this.email,
                address: this.address,
                questionId: this.questionTarget,
                questionAns: this.answer,
                password: this.password,
                jobPosition: this.bio,
                photo: this.userPhoto.name,
                createdAt: new Date()
              }
            : {
                username: this.username,
                handPhone: this.handPhone,
                companyPhone: this.companyPhone,
                email: this.email,
                address: this.address,
                questionId: this.questionTarget,
                questionAns: this.answer,
                password: this.password,
                jobPosition: this.bio,
                createdAt: new Date()
              }
        );
      if (testEmpty(this.userPhoto)) {
        const storageRef = firebase
          .storage()
          .ref("images")
          .child(`${this.userPhoto.name}`)
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
          .ref("images")
          .child(this.userPhoto.name)
          .getDownloadURL()
          .then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'

            var img = document.getElementById("photo");
            img.src = url;
          });
      }
      alert("Upload Success!");
    }
  }
};
</script>
