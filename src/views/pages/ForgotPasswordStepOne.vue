<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Forgot password</h1>
                <p class="text-muted">Create your account</p>
                <CInput v-model="username" placeholder="Username" autocomplete="username">
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput
                  v-model="userId"
                  placeholder="Student ID or worker ID"
                  autocomplete="username"
                >
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput v-model="address" placeholder="Address" autocomplete="address">
                  <template #prepend-content>
                    <i class="fa fa-address-card-o" aria-hidden="true"></i>
                  </template>
                </CInput>
                <CInput v-model="handPhone" placeholder="Phone" autocomplete="0881112222">
                  <template #prepend-content>
                    <i class="fa fa-phone"></i>
                  </template>
                </CInput>
                <CInput
                  v-model="companyPhone"
                  placeholder="Company phone (if any)"
                  autocomplete="0881112222"
                >
                  <template #prepend-content>
                    <i class="fa fa-phone"></i>
                  </template>
                </CInput>
                <CInput
                  v-model="bio"
                  placeholder="Job position"
                  autocomplete="Student of Software Engineer"
                >
                  <template #prepend-content>
                    <i class="fa fa-book"></i>
                  </template>
                </CInput>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-flag-o"></i>
                    </span>
                  </div>
                  <select class="form-control" v-model="roleTarget">
                    <option disabled value>Role</option>
                    <option v-for="option in role" v-bind:key="option">{{ option }}</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-question"></i>
                    </span>
                  </div>
                  <select class="form-control" v-model="questionTarget">
                    <option disabled value>Choice your question for password security</option>
                    <option v-for="option in questions" v-bind:key="option.id">{{ option.data }}</option>
                  </select>
                </div>
                <CInput
                  v-model="answer"
                  placeholder="Answer the question what's your choice."
                  autocomplete="yes"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CInput v-model="email" placeholder="Email" autocomplete="email" prepend="@" />
                <CInput
                  v-model="password"
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload your picture</span>
                  </div>
                  <div class="custom-file">
                    <input
                      @change="previewFile"
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                  </div>
                </div>
                <CProgress
                  class="mb-3"
                  :value="uploadValue"
                  :min="0"
                  :max="100"
                  show-percentage
                  animated
                ></CProgress>
                <CButton @click="saveData()" color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="12">
                  <CButton block @click="goBackToLogin()" color="twitter">Go back to login</CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();

export default {
  name: "ForgotPassword",
  data() {
    return {
      username: "",
      email: "",
      handPhone: "",
      userId: "",
      companyPhone: "",
      roleTarget: "",
      address: "",
      users: [],
      answer: "",
      role: ["teacher", "student"],
      questions: [{ id: 1, data: "Waiting for database loading." }],
      password: "",
      questionTarget: "",
      uploadValue: 0,
      profilePhoto: null,
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
          return this.users.push({ id: doc.id, data: doc.data() });
        });
      })
      .catch(error => {
        console.log("Error getting user data: ", error);
      });
  },
  methods: {
    previewFile(e) {
      this.uploadValue = 0;
      this.profilePhoto = null;
      this.userPhoto = e.target.files[0];
    },
    saveData() {
      db.collection("users").add({
        address: this.address,
        companyPhone: this.companyPhone,
        createdAt: new Date(),
        email: this.email,
        handPhone: this.handPhone,
        jobPosition: this.bio,
        password: this.password,
        photo: this.userPhoto.name,
        questionAns: this.answer,
        questionId: this.questionTarget,
        role: this.roleTarget == "student" ? "guest" : this.roleTarget,
        status: "active",
        userId: this.userId,
        username: this.username
      });
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
        .then(url => {return console.log(url),window.alert("Upload successed"),this.$router.replace({ name: "Login" })})
        .catch(error => {
          console.log("Error getting image data: ", error);
        });
    },
    goBackToLogin() {
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>
