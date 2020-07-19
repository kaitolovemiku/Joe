<template>
  <div style="padding: 2rem 3rem; text-align: justify;">
    <div class="field">
      <div class="control">
        <CInput
          v-model="form.demoEmail"
          :class="['input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <p v-if="$v.form.demoEmail.$error" class="help is-danger">This email is invalid</p>
    </div>
    <div class="field">
      <label class="label">Question</label>
      <div class="control">
        <select v-model="form.question" :class="['form-control', ($v.form.demoEmail.$error) ? 'is-danger' : '']">
          <option disabled value>the question that you created when you built this account.</option>
          <option v-for="option in questions" v-bind:key="option['id']" >{{option['data']}}</option>
        </select>
      </div>
      <p v-if="$v.form.question.$error" class="help is-danger">This question is invalid</p>
    </div>
    <div class="field">
      <div class="control">
        <CInput
          v-model="form.message"
          :class="['CInput', ($v.form.message.$error) ? 'is-danger' : '']"
          label="Input your answer"
          type="text"
          placeholder="Enter your answer"
        />
      </div>
      <p v-if="$v.form.message.$error" class="help is-danger">This answer is invalid</p>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  name: "ForgotPassStepOne",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      questionchoice: "",
      users: [],
      questions: [],
      form: {
        question: "",
        demoEmail: "",
        message: ""
      }
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
    db.collection("questions")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.questions.push({ id: doc.id, data: doc.data().questionDetail });
        });
      });
    console.log(this.users, this.questions);
  },
  validations: {
    form: {
      question: {
        required,
        unique: val => {
          
          if (val === '') return true
          return window.alert(val)
        }
      },
      demoEmail: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  methods: {
    test(event) {
      this.form.question = JSON.stringify(event.target.value);
      console.log(this.form.question);
    }
  },
  watch: {
    $v: {
      handler: function(val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
        }
      },
      deep: true
    },
    clickedNext(val) {
      if (val === true) {
        this.$v.form.$touch();
      }
    }
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  }
};
</script>
