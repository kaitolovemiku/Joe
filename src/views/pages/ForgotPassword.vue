<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm v-if="!checkValidate">
                <h1>Forgot password</h1>
                <p
                  class="text-muted"
                >Input your email and answer your password security question to reset a new password.</p>
                <CInput v-model="email" placeholder="Email" autocomplete="email" prepend="@" />
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

                <CButton @click="checkUserData()" color="success" block>Create Account</CButton>
              </CForm>
              <CForm v-if="checkValidate">
                <h1>Reset a new password</h1>
                <p
                  class="text-muted"
                >Almost done, Reset your new password to login in the next time.</p>
                <CInput
                  v-model="password"
                  placeholder="New Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CInput
                  v-model="repassword"
                  placeholder="Confirm Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>

                <CButton @click="saveData()" color="success" block>Reset password</CButton>
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
      targetUser: [],
      checkValidate: false,
      companyPhone: "",
      roleTarget: "",
      address: "",
      users: [],
      answer: "",
      role: ["teacher", "student"],
      questions: [{ id: 1, data: "Waiting for database loading." }],
      password: "",
      repassword: "",
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
    checkUserData() {
      const target = this.users.find(item => {
        return item.data.email == this.email;
      });

      if (target !== undefined) {
        if (
          target.data.questionId == this.questionTarget &&
          target.data.questionAns == this.answer
        ) {
          this.checkValidate = true;
          this.targetUser.push(target);
        } else {
          window.alert("Sorry, your question or answer is incorrect!");
        }
      } else {
        window.alert("Sorry, we have no this email in database!");
      }
    },
    saveData() {
      if (this.password == this.repassword) {
        db.collection("users")
          .doc(this.targetUser[0].id)
          .update({
            password: this.password
          });
          let check = confirm("Update password successed. Do you want to login?");

          if(check == true) {
            this.$router.replace({ name: "Login" });
          }

      } else {
        window.alert(
          "Sorry, the new password and confirmation password do not match!"
        );
      }
    },
    goBackToLogin() {
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>
