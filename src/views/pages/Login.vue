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
                        <CInput
                          id="email"
                          type="number"
                          append="@lamduan.mfu.ac.th"
                          placeholder="Student ID"
                          min="1"
                          max="9999999999"
                          maxlength="10"
                          name="email"
                          v-model="lamduanMail"
                          autocomplete="username email"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-user" />
                          </template>
                        </CInput>
                      </CCol>
                      <CCol col="6">
                        <CButton
                          v-on:click="loginWithLamduanMail()"
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
          this.users.push(doc.data());
        });
      });
  },
  methods: {
    submitLogin() {
      const lamduanEmail = this.lamduanMail + "@lamduan.mfu.ac.th";
      const target = this.users.find(data => {
        return data.email == lamduanEmail;
      });
      if (this.lamduanMail !== "") {
        if (
          this.lamduanPass == "" ||
          this.lamduanPass == null ||
          this.lamduanPass == undefined
        ) {
          this.lamduanPassError = "Please enter your password.";
        } else if (this.lamduanPass != target.password) {
          this.lamduanPassError =
            "Wrong password. Try again or click Forgot password to reset it.";
        } else if (target.status === "block") {
          this.lamduanPassError =
            "Your account have been blocked by admin. Please contact Senior Store System admin directly!";
        } else if (target.status !== "block") {
          const state = {
            loggedIn: true,
            data: {
              displayName: target.username,
              email: target.email,
              role: target.role,
              userId: target.userId
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
        return data.email == lamduanEmail;
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
      const target = this.users.find(data => {
        return (
          data.email == this.form.email && data.password == this.form.password
        );
      });
      console.log(target, this.users);
      if (this.form.email != "" && this.form.password != "") {
        if (target !== undefined && target.data.status !== 'block') {
          const state = {
            loggedIn: true,
            data: {
              displayName: target.username,
              email: target.email,
              role: target.role,
              userId: target.userId
            }
          };
          this.$session.start();
          this.$session.set("user", state);
          this.$router.replace({ name: "Dashboard" });
        } else if (target !== undefined && target.data.status === 'block') {
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
