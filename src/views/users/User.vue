<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>
            {{ username }}
            <p id="userId" style="display: none">
              {{ visibleData[0].value }}
            </p></strong
          >
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/breadcrumb"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"
            >
              <small class="text-muted"
                >Student id: {{ visibleData[10].value }}</small
              >
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="3">
              <img
                alt="Profile photo"
                style="width: 100%"
                id="photo"
                :src="imageSrc"
              />
              <CProgress
                :value="uploadValue"
                :max="100"
                show-percentage
                animated
              ></CProgress>
            </CCol>
            <CCol md="9">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    :placeholder="username"
                    v-model="userName"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="id">Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    disabled
                    v-model="visibleData[10].value"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    class="form-control"
                    id="bio"
                    :placeholder="visibleData[3].value"
                    v-model="bio"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    :placeholder="visibleData[7].value"
                    v-model="email"
                    class="form-control"
                    id="email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="Password">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    :placeholder="visibleData[8].value"
                    v-model="password"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="phone">Hand phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="handPhone"
                    :placeholder="visibleData[1].value"
                    v-model="handPhone"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="phone">Company phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="companyPhone"
                    :placeholder="visibleData[2].value"
                    v-model="companyPhone"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="question">Question</label>
                  <select id="question" class="form-control" v-model="question">
                    <option disabled value>{{ visibleData[4].value }}</option>
                    <option v-for="option in questions" v-bind:key="option.id">
                      {{ option.data }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="answer">Answer</label>
                  <input
                    type="text"
                    class="form-control"
                    id="answer"
                    :placeholder="visibleData[5].value"
                    v-model="answer"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="role">Role</label>
                  <select id="role" class="form-control" v-model="role">
                    <option disabled value>
                      {{ visibleData[11].value }}
                    </option>
                    <option v-for="option in roles" v-bind:key="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="status">Status</label>
                  <select id="status" class="form-control" v-model="status">
                    <option disabled value>
                      {{ visibleData[12].value }}
                    </option>
                    <option v-for="option in statuss" v-bind:key="option.value">
                      {{ option.key }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    :placeholder="visibleData[9].value"
                    v-model="address"
                  />
                </div>
              </div>
              <button
                @click="editData"
                type="submit"
                class="btn btn-warning btn-block"
              >
                Save Profile
              </button>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <div class="row">
            <div class="col-md-4">
              <button
                @click="goBack"
                type="submit"
                class="btn btn-primary btn-block"
              >
                Back
              </button>
            </div>
            <div class="col-md-4">
              <!-- <CButton color="warning" @click="editData">Edit</CButton> -->
            </div>
            <div class="col-md-4">
              <button
                @click="deleteData"
                type="submit"
                class="btn btn-danger btn-block"
              >
                Delete
              </button>
            </div>
          </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from "./UsersData";
import firebase from "firebase";
//py'import Vue from "vue";
const db = firebase.firestore();

export default {
  name: "User",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.usersOpened = from.fullPath.includes("users");
    });
  },
  created() {
    db.collection("questions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.questions.push({ id: doc.id, data: doc.data().questionDetail });
        });
      });
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (this.visibleData[7].value == doc.data().email) {
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
            console.log("this is success", this.visibleData[7].value);
          }
        });
        console.log("this is photo url=>", this.photoUrl);
        if (
          this.photoUrl !== "" ||
          this.photoUrl !== undefined ||
          this.photoUrl !== null
        ) {
          firebase
            .storage()
            .ref("images")
            .child(this.photoUrl)
            .getDownloadURL()
            .then((url) => {
              // `url` is the download URL for 'images/stars.jpg'
              console.log("this is url=>", url);
              // Or inserted into an <img> element:
              if (url == "" || url == undefined || url == null) {
                return (this.imageSrc = "../../../public/default.jpg");
              } else {
                return (this.imageSrc = url);
              }
            });
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  data() {
    return {
      usersOpened: null,
      user_data: [],
      userName: "",
      phone: "",
      email: "",
      question: "",
      answer: "",
      password: "",
      address: "",
      handPhone: "",
      companyPhone: "",
      imageSrc: "default.jpg",
      uploadValue: 0,
      profilePhoto: null,
      questionTarget: "",
      questions: [],
      userPhoto: null,
      photoUrl: "",
      bio: "",
      role: "",
      roles: ["teacher", "senior", "admin", "guest"],
      status: "",
      statuss: [
        { key: "active", value: "online" },
        { key: "suspended", value: "block" },
      ],
    };
  },
  computed: {
    fields() {
      return [
        { key: "key", label: this.username, _style: "width:150px" },
        { key: "value", label: "", _style: "width:150px;" },
      ];
    },
    userData() {
      const id = this.$route.params.id;
      const user = usersData.find((user, index) => index + 1 == id);
      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];
      return userDetails.map(([key, value]) => {
        return { key, value };
      });
    },
    visibleData() {
      return this.userData.filter((param) => param.key !== "username");
    },
    username() {
      return this.userData.filter((param) => param.key === "username")[0].value;
    },
  },
  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/users" });
    },
    testBTN() {
      console.log(
        this.visibleData[7].value,
        usersData
          .filter((item) => item.email === this.visibleData[7].value)
          .map((item) => item.id)[0]
      );
    },
    editData() {
      try {
        const id = this.$route.params.id;
        let user = usersData.find((user, index) => index + 1 == id);
        usersData.forEach((data) => {
          if (data.id == user.id) {
            (data.address = this.address),
              (data.email = this.email),
              (data.handPhone = this.handPhone),
              (data.companyPhone = this.companyPhone),
              (data.questionId = this.question),
              (data.questionAns = this.answer),
              (data.role = this.role),
              (data.status = this.status);
          }
        });

        db.collection("users")
          .doc(
            usersData
              .filter((item) => item.email === this.visibleData[7].value)
              .map((item) => item.id)[0]
          )
          .update({
            handPhone: this.handPhone,
            companyPhone: this.companyPhone,
            questionId: this.question,
            questionAns: this.answer,
            email: this.email,
            jobPosition: this.bio,
            password: this.password,
            address: this.address,
            username: this.username,
            role: this.role,
            status: this.status,
          })
          .then(() => {
            return window.alert("Update success"), this.goBack();
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } catch (error) {
        console.log("Sorry, there is error in editing method:" + error);
      }
    },
    deleteData() {
      if (window.confirm("Do you really want to delete?")) {
        usersData.splice(this.$route.params.id, 1);
        db.collection("users")
          .doc(document.getElementById("userId").innerHTML)
          .delete()
          .then(() => {
            alert("Delete user successed!");
            this.goBack();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>