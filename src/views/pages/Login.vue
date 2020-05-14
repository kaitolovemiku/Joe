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
                <CInput
                  id="email"
                  placeholder="Email"
                  name="email"
                  v-model="form.email"
                  autocomplete="username email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  v-model="form.password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton v-on:click="submit()" color="primary" class="px-4">Login</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="px-0">Forgot password?</CButton>
                    <CButton color="link" class="d-md-none">Register now!</CButton>
                  </CCol>
                  <hr/>
                  <CCol col="12">
                    <CButton
                      color="info"
                      class="active mt-3 btn-block"
                    >
                      Login with Lamduan mail
                    </CButton>
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
            <img alt="SE" src="https://bit.ly/3fQQqLQ" style="width:150px;margin-top:20px;"/>
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
  </CContainer>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
