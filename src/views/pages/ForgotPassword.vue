<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="w-100 justify-content-center">
      <CCol md="12">
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <horizontal-stepper
                  :steps="demoSteps"
                  @completed-step="completeStep"
                  @active-step="isStepActive"
                  @stepper-finished="alert"
                ></horizontal-stepper>
              </div>
            </div>
          </div>
        </section>
      </CCol>
      <CCol md="12" style="text-align:center;">
          <CButton color="link" v-on:click="goBackToLogin()" class="px-0">Go back to login</CButton>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import HorizontalStepper from "vue-stepper";
import StepOne from "./ForgotPasswordStepOne";
import StepTwo from "./ForgotPasswordStepTwo";

export default {
  name: "ForgotPassword",
  components: {
    HorizontalStepper
  },
  data() {
    return {
      demoSteps: [
        {
          icon: "mail",
          name: "first",
          title: "Answer a question",
          subtitle: "Answer your personal question to make sure that is you.",
          component: StepOne,
          completed: false
        },
        {
          icon: "report_problem",
          name: "second",
          title: "Change password",
          subtitle: "Set your new password",
          component: StepTwo,
          completed: false
        }
      ]
    };
  },
  methods: {
    goBackToLogin() {
      this.$router.replace({ name: "Login" });
    },
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert(payload);
    }
  }
};
</script>
