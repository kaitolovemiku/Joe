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
                        <CButton
                          class="px-4 btn btn-block"
                          @click="googleLogin()"
                          color="info"
                          >Login as Student</CButton
                        >
                      </CCol>
                      <CCol style="height:10px">
                      </CCol>
                      <CCol col="12">
                        <CCol>
                    <hr />
                  </CCol>
                        <CButton
                          class="px-4 btn btn-block"
                          @click="googleLogin()"
                          color="info"
                          >Login as Advisor</CButton
                        >
                      </CCol>
                      <CCol col="6" class="text-right">
                        <!-- <CButton
                          color="link"
                          v-on:click="forgotPassword()"
                          class="px-0"
                          >Forgot password?</CButton
                        >
                        <CButton
                          color="link"
                          v-on:click="register()"
                          class="px-0"
                          >Register for teacher!</CButton
                        > -->
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
                          >Login</CButton
                        >
                      </CCol>
                      <CCol col="6" class="text-right">
                        <!-- <CButton
                          color="link"
                          v-on:click="forgotPassword()"
                          class="px-0"
                          >Forgot password?</CButton
                        >
                        <CButton
                          color="link"
                          v-on:click="register()"
                          class="px-0"
                          >Register for teacher!</CButton
                        > -->
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
                      >Login as Administrator</CButton
                    >
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
            <h2 style="color: gray">Senior Store</h2>
            <img
              alt="SE"
              src="icon.png"
              style="width: 150px; margin-top: 20px"
            />
            <p v-if="error" class="alert alert-danger">{{ error }}</p>
            <!--<CButton
              color="primary"
              class="active mt-3"
            >
              Register for teacher!
            </CButton>-->
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>


<script>
import firebase from "firebase";

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
        password: "",
      },
      error: null,
    };
  },
  created() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
        .then((result) => this.saveDataToDatabase(result));
    },
    saveDataToDatabase(result) {
      //This gives you a Google Access Token.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      var target = this.users.find((item) => {
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
            role:
              parseInt(
                result.additionalUserInfo.profile.email.substring(0, 2)
              ) <= 60
                ? "senior"
                : "guest",
            questionAns: "",
            questionId: "",
            jobPosition: "Student of software engineering",
            studentId: result.additionalUserInfo.profile.email.substring(0, 10),
            createdAt: new Date(),
            handPhone: "-",
            companyPhone: "-",
            status: "active",
          };
          db.collection("users").add(obj);
          const state = {
            loggedIn: true,
            id: result.additionalUserInfo.profile.id,
            data: {
              displayName: result.additionalUserInfo.profile.name,
              email: result.additionalUserInfo.profile.email,
              role: "guest",
              photo: result.additionalUserInfo.profile.picture,
            },
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else if (result.additionalUserInfo.profile.hd == "mfu.ac.th") {
          let userId = db
            .collection("teachers")
            .add({
              companyPhone: "",
              handPhone: "",
              email: result.additionalUserInfo.profile.email,
              teacherName: result.additionalUserInfo.profile.name,
              createdAt: new Date(),
            })
            .catch((error) => {
              console.log("Error getting test data: ", error);
            });
          let obj = {
            userId: userId.id,
            username: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            password: "",
            photo: result.additionalUserInfo.profile.id,
            // photo: result.additionalUserInfo.profile.picture,
            role: "teacher",
            questionAns: "",
            questionId: "",
            studentId: "",
            jobPosition: "Teacher of software engineering",
            createdAt: new Date(),
            handPhone: "-",
            companyPhone: "-",
            status: "active",
          };
          db.collection("users").add(obj);
          const state = {
            loggedIn: true,
            id: userId.id,
            data: {
              displayName: result.additionalUserInfo.profile.name,
              email: result.additionalUserInfo.profile.email,
              role: "teacher",
              photo: result.additionalUserInfo.profile.picture,
            },
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else {
          window.alert("Sorry, Please login only with Lamduan mail!");
        }
      } else {
        this.$session.start();
        const state2 = {
          loggedIn: true,
          id: target.id,
          data: {
            displayName: target.data.username,
            email: target.data.email,
            role: target.data.role,
            userId: target.data.userId,
            photo: result.additionalUserInfo.profile.picture,
          },
        };
        this.$session.set("user", state2);
        window.location.replace("http://localhost:8080/");
      }
      console.log("Look this ->", result);
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
      const target = this.users.find((data) => {
        return (
          data.data.email === this.form.email &&
          data.data.password === this.form.password
        );
      });
      if (this.form.email !== "" && this.form.password !== "") {
        if (target !== undefined && target.data.status !== "block") {
          const state = {
            loggedIn: true,
            id: target.id,
            data: {
              displayName: target.data.username,
              email: target.data.email,
              role: target.data.role,
              userId: target.data.userId,
            },
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else if (target !== undefined && target.status == "block") {
          window.alert("Ooh no! Your account have been blocked by admin!");
        } else if (target === undefined) {
          window.alert("Incorrect email or password!");
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
    },
  },
};
</script>
