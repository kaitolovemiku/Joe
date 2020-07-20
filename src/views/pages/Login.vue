<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <CRow>
                  <CCol v-if="checkLamduanMail" col="12">
                    <CRow>
                      <CCol col="12">
                        <CButton class="px-4 btn btn-block" @click="googleLogin()" color="primary">Login widh Lamduan mail</CButton>
                      </CCol>
                      <CCol col="6">
                      </CCol>
                      <CCol col="6" class="text-right">
                        <CButton
                          color="link"
                          v-on:click="forgotPassword()"
                          class="px-0"
                        >Forgot password?</CButton>
                        <CButton color="link" v-on:click="register()" class="px-0">Register now!</CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol v-if="!checkLamduanMail" col="12">
                    <CRow>
                      <CCol col="12">
                        <CInput
                          id="email"
                          placeholder="Email"
                          name="email"
                          v-model="form.email"
                          autocomplete="username email"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-user" />
                          </template>
                        </CInput>
                        <CInput
                          id="password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          v-model="form.password"
                          autocomplete="curent-password"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-lock-locked" />
                          </template>
                        </CInput>
                      </CCol>
                      <CCol col="6" class="text-left">
                        <CButton
                          v-on:click="submit()"
                          color="primary"
                          class="px-4 btn btn-block"
                        >Login</CButton>
                      </CCol>
                      <CCol col="6" class="text-right">
                        <CButton
                          color="link"
                          v-on:click="forgotPassword()"
                          class="px-0"
                        >Forgot password?</CButton>
                        <CButton color="link" v-on:click="register()" class="px-0">Register now!</CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <hr />
                  </CCol>
                  <CCol col="12">
                    <CButton
                      v-on:click="changeLoginType()"
                      id="loginType"
                      color="info"
                      class="active mt-3 btn-block"
                    >Login as administrator</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="white"
            text-color="white"
            class="text-center py-5 d-sm-down-none"
            body-wrapper
          >
            <h2 style="color:gray">Senior Store</h2>
            <img alt="SE" src="icon.png" style="width:150px;margin-top:20px;" />
            <p v-if="error" class="alert alert-danger">{{error}}</p>
            <!--<CButton
              color="primary"
              class="active mt-3"
            >
              Register Now!
            </CButton>-->
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
    
    <!-- Modal Component -->
    <CModal title="Enter your password" :show.sync="myModal">
      <CRow>
        <CCol col="12" class="text-center">
          <CInput
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            v-model="lamduanPass"
            autocomplete="curent-password"
          >
            <template #prepend-content>
              <CIcon name="cil-lock-locked" />
            </template>
          </CInput>
          <p v-if="lamduanPassError" class="alert alert-danger">{{lamduanPassError}}</p>
        </CCol>
      </CRow>
      <template #footer>
        <CButton @click="darkModal = false" color="danger">Discard</CButton>
        <CButton @click="submitLogin()" color="primary">Login</CButton>
        <!-- <CButton @click="darkModal = false" color="primary">Login</CButton> -->
      </template>
    </CModal>
  </CContainer>
</template>


<script>
import firebase from "firebase";
import axois from "axios";

const db = firebase.firestore();
export default {
  data() {
    return {
      lamduanPassError: null,
      users: [],
      myModal: false,
      checkLamduanMail: true,
      lamduanMail: "",
      lamduanPass: "",
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users.push({ id: doc.id, data: doc.data() });
        });
      });
  },
  methods: {
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => this.saveDataToDatabase(result));
    },
    saveDataToDatabase(result) {
      //This gives you a Google Access Token.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      var target = this.users.find(item => {
        return item.data.email == result.additionalUserInfo.profile.email;
      });

      console.log("tartget->", target);

      if (target === undefined) {
        if (result.additionalUserInfo.profile.hd == "lamduan.mfu.ac.th") {
          let obj = {
            userId: result.additionalUserInfo.profile.id,
            username: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            password: "",
            photo: result.additionalUserInfo.profile.id,
            // photo: result.additionalUserInfo.profile.picture,
            role: "guest",
            questionAns: "",
            questionId: "",
            jobPosition: "Student of software engineering",
            createdAt: new Date(),
            handPhone: "-",
            companyPhone: "-",
            status: "online"
          };
          db.collection("users").add(obj);
          const state = {
            loggedIn: true,
            id: result.additionalUserInfo.profile.id,
            data: {
              displayName: result.additionalUserInfo.profile.name,
              email: result.additionalUserInfo.profile.email,
              role: 'guest',
              photo: result.additionalUserInfo.profile.picture
            }
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else {
          window.alert("Sorry, Please login only with Lamduan mail!");
        }
      } else {
        this.$session.start();
        console.log('this is target->', target.data.role)

         const state2 = {
          loggedIn: true,
          id: target.id,
          data: {
            displayName: target.data.username,
            email: target.data.email,
            role: target.data.role,
            userId: target.data.userId,
            photo: result.additionalUserInfo.profile.picture
          }
        };
        this.$session.set("user", state2);
        window.location.replace("http://localhost:8080/");
      }
      console.log("Look this ->", result);
    },
    submitLogin() {
      const lamduanEmail = this.lamduanMail + "@lamduan.mfu.ac.th";
      const target = this.users.find(data => {
        return data.data.email == lamduanEmail;
      });
      if (this.lamduanMail !== "") {
        if (
          this.lamduanPass == "" ||
          this.lamduanPass == null ||
          this.lamduanPass == undefined
        ) {
          this.lamduanPassError = "Please enter your password.";
        } else if (this.lamduanPass != target.data.password) {
          this.lamduanPassError =
            "Wrong password. Try again or click Forgot password to reset it.";
        } else if (target.data.status === "block") {
          this.lamduanPassError =
            "Your account have been blocked by admin. Please contact Senior Store System admin directly!";
        } else if (target.data.status !== "block") {
          const state = {
            loggedIn: true,
            id: target.id,
            data: {
              displayName: target.data.username,
              email: target.data.email,
              role: target.data.role,
              userId: target.data.userId
            }
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else {
          this.lamduanPassError = "Ooh no!! There was something wrong ...";
        }
      }
    },
    loginWithLamduanMail() {
      const lamduanEmail = this.lamduanMail + "@lamduan.mfu.ac.th";
      const target = this.users.find(data => {
        return data.data.email == lamduanEmail;
      });

      if (this.lamduanMail.length == 10 && target !== undefined) {
        if (target.status === "block") {
          window.alert(
            "Oops!... \nYou account have been blocked by admin. Please contact Senior Store System admin directly!"
          );
        } else {
          this.myModal = true;
        }
      } else if (this.lamduanMail.length == 10 && target == undefined) {
        const check = confirm(
          "Oops!... \nYou didn't register to be a membership of Senior Store Application yet. Let’s do it together!"
        );
        if (check == true) {
          this.$router.replace({ name: "Register" });
        }
      } else {
        window.alert("Please input your MFU Student ID correctly!");
      }
    },
    changeLoginType() {
      if (this.checkLamduanMail === true) {
        this.checkLamduanMail = false;
        document.getElementById("loginType").innerHTML = "Login as student";
      } else {
        this.checkLamduanMail = true;
        document.getElementById("loginType").innerHTML =
          "Login as administrator";
      }
    },
    register() {
      this.$router.replace({ name: "Register" });
    },
    forgotPassword() {
      this.$router.replace({ name: "ForgotPassword" });
    },
    submit() {
      const targetl = this.users.find(data => {
        return data.data.email == this.form.email;
      });
      let target = [];
      if (targetl !== undefined) {
        if (targetl.data.password === this.form.password) {
          target = targetl;
        } else {
          window.alert("Incorrect email or password!");
        }
      } else {
        window.alert("Incorrect email or password!");
      }
      console.log(target, this.users);
      if (this.form.email != "" && this.form.password != "") {
        if (target !== undefined && target.data.status !== "block") {
          const state = {
            loggedIn: true,
            id: target.id,
            data: {
              displayName: target.data.username,
              email: target.data.email,
              role: target.data.role,
              userId: target.data.userId
            }
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else if (target !== undefined && target.status == "block") {
          window.alert("Ooh no! Your account have been blocked by admin!");
        } else {
          window.alert("Ooh no! There are no this record in database!");
        }
      } else if (this.lamduanMail.length == 10 && target == undefined) {
        window.alert(
          "Oops!... \nYou didn't register to be a membership of Senior Store Application yet. Let’s do it together!"
        );
      } else {
        window.alert("Incorrect email or password!");
      }
    }
  }
};
</script>
