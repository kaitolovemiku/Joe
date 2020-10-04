<template>
  <div class="container">
    <div v-if="this.isLoading" id="loader"></div>
    <div v-if="!this.isLoading" class="animate-bottom">
      <h2>Welcome back {{this.user.displayName}}!</h2>
      <div>{{this.user.email}}</div>
      <div class="row">
        <div class="col-md-12">
          <hr />
        </div>
        <TeacherDashboard />
        <StudentDownloadReport />
        <div class="col-md-8" v-if="userData[0].role == 'senior'">
          <CCard>
            <CCardHeader>
              <CIcon name="cil-justify-center" />
              <strong>My Project</strong>
              <div class="card-header-actions">
                <a
                  href="https://coreui.io/vue/docs/components/breadcrumb"
                  class="card-header-action"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <small class="text-muted"></small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <div class="row">
                <div class="col-md-12">
                  <h2>{{this.projects[0].projectNameEn}} ({{this.projects[0].projectNameTh}})</h2>
                </div>
                <div class="col-md-12">{{this.projects[0].projectBg}}</div>
                <div class="col-md-12">
                  <b>Project Duration</b>
                  <p>{{this.projects[0].projectDuration}}</p>
                </div>
                <div class="col-md-12">
                  <hr />
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Progress 1</b>
                  </p>
                  <h1
                    id="p1"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{progress1[0].point?progress1[0].point:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Progress 2</b>
                  </p>
                  <h1
                    id="p2"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{progress2[0].point?progress2[0].point:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;margin-left:-8px;margin-right:-8px">
                    <b>Final Present</b>
                  </p>
                  <h1
                    id="p3"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{finalPresent[0].point?finalPresent[0].point:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Document</b>
                  </p>
                  <h1
                    id="p4"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{document[0].point?document[0].point:'-'}}</h1>
                </div>
                <div class="col-md-4">
                  <p style="font-size:12px;text-align:center;">
                    <b>Project Status</b>
                  </p>
                  <h1
                    id="pAns"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{projects[0].projectStatus?projects[0].projectStatus:'-'}}</h1>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </div>
        <div class="col-md-4" v-if="userData[0].role == 'senior'">
          <div class="row">
            <div class="col-md-12">
              <CCard>
                <CCardHeader>
                  <CIcon name="cil-justify-center" />
                  <strong>Progress 1</strong>
                  <div class="card-header-actions">
                    <a
                      href="https://coreui.io/vue/docs/components/breadcrumb"
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{progress1[0].point?progress1[0].point:'-'}}
                      <small class="text-muted">point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">
                      <b>Teacher comment</b>
                    </label>
                    <p id="inputEmail4">{{progress1[0].comment?progress1[0].comment:'-'}}</p>
                  </div>
                </CCardBody>
              </CCard>
            </div>
            <div class="col-md-12">
              <CCard>
                <CCardHeader>
                  <CIcon name="cil-justify-center" />
                  <strong>Progress 2</strong>
                  <div class="card-header-actions">
                    <a
                      href="https://coreui.io/vue/docs/components/breadcrumb"
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{progress2[0].point?progress2[0].point:'-'}}
                      <small class="text-muted">point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">
                      <b>Teacher comment</b>
                    </label>
                    <p id="inputEmail4">{{progress2[0].comment?progress2[0].comment:'-'}}</p>
                  </div>
                </CCardBody>
              </CCard>
            </div>
            <div class="col-md-12">
              <CCard>
                <CCardHeader>
                  <CIcon name="cil-justify-center" />
                  <strong>Final present</strong>
                  <div class="card-header-actions">
                    <a
                      href="https://coreui.io/vue/docs/components/breadcrumb"
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{finalPresent[0].point?finalPresent[0].point:'-'}}
                      <small
                        class="text-muted"
                      >point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">
                      <b>Teacher comment</b>
                    </label>
                    <p id="inputEmail4">{{finalPresent[0].comment?finalPresent[0].comment:'-'}}</p>
                  </div>
                </CCardBody>
              </CCard>
            </div>
            <div class="col-md-12">
              <CCard>
                <CCardHeader>
                  <CIcon name="cil-justify-center" />
                  <strong>Final Document</strong>
                  <div class="card-header-actions">
                    <a
                      href="https://coreui.io/vue/docs/components/breadcrumb"
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{document[0].point?document[0].point:'-'}}
                      <small class="text-muted">point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">
                      <b>Teacher comment</b>
                    </label>
                    <p id="inputEmail4">{{document[0].comment?document[0].comment:'-'}}</p>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import MainChartExample from './charts/MainChartExample'
//import WidgetsDropdown from './widgets/WidgetsDropdown'
//import WidgetsBrand from './widgets/WidgetsBrand'
import firebase from "firebase";
import Vue from "vue";
import TeacherDashboard from "./pages/TeacherDashboardPage";
import StudentDownloadReport from "./pages/StudentDownloadReport.vue"

console.log(Vue.prototype.$session.getAll().user.data);
const db = firebase.firestore();

export default {
  name: "Dashboard",
  components: {
    TeacherDashboard,
    StudentDownloadReport,
    //MainChartExample,
    //WidgetsDropdown,
    //WidgetsBrand
  },
  data() {
    return {
      selected: "Month",
      isLoading: true,
      user: Vue.prototype.$session.getAll().user.data,
      userName: [],
      userData: [],
      projects: [
        {
          id: "",
          projectName: "",
          projectBg: "",
          projectType: "",
          projectDuration: "",
          projectPoint: 0,
          projectStatus: ""
        }
      ],
      document: [{
          id: "",
          status: "",
          point: 0,
          progressType: "",
          comment: ""
        }],
      progress1: [
        {
          id: "",
          status: "",
          point: 0,
          progressType: "",
          comment: ""
        }
      ],
      progress2: [
        {
          id: "",
          status: "",
          point: 0,
          progressType: "",
          comment: ""
        }
      ],
      finalDocument: [
        {
          id: "",
          status: "",
          point: 0,
          comment: ""
        }
      ],
      finalPresent: [
        {
          id: "",
          status: "",
          point: 0,
          comment: ""
        }
      ],
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2015"
          },
          country: { name: "USA", flag: "cif-us" },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago"
        }
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user" },
        { key: "country", _classes: "text-center" },
        { key: "usage" },
        { key: "payment", label: "Payment method", _classes: "text-center" },
        { key: "activity" }
      ]
    };
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (this.user.email == doc.data().email) {
            this.userName.push(doc.data());
          }
        });
        db.collection("projects")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              if (Vue.prototype.$session.getAll().user.id == doc.data().projectMember) {
                (this.projects[0].id = doc.id),
                  (this.projects[0].projectNameEn = doc.data().projectNameEn),
                  (this.projects[0].projectNameTh = doc.data().projectNameTh),
                  (this.projects[0].projectBg = doc.data().projectBg),
                  (this.projects[0].projectType = doc.data().projectType),
                  (this.projects[0].projectDuration = doc.data().projectDuration),
                  (this.projects[0].projectPoint = doc.data().projectPoint),
                  (this.projects[0].projectStatus = doc.data().projectStatus);
              }
            });
            db.collection("projectProgress")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress1"
                  ) {
                      this.progress1[0].id = doc.id,
                      this.progress1[0].status = doc.data().status,
                      this.progress1[0].point = doc.data().progressPoint,
                      this.progress1[0].progressType = doc.data().progressType,
                      this.progress1[0].comment = doc.data().comment
                  }
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress2"
                  ) {
                      this.progress2[0].id = doc.id,
                      this.progress2[0].status = doc.data().status,
                      this.progress2[0].point = doc.data().progressPoint,
                      this.progress2[0].progressType = doc.data().progressType,
                      this.progress2[0].comment = doc.data().comment
                  }
                });
                return this.progress1, this.progress2, this.finalPresent;
              });
            db.collection("finalPresent")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  console.log(this.projects[0].id, doc.data().projectId);
                  if (this.projects[0].id == doc.data().projectId) {
                      this.finalPresent[0].id = doc.id,
                      this.finalPresent[0].status = doc.data().status,
                      this.finalPresent[0].point = doc.data().point,
                      this.finalPresent[0].comment = doc.data().comment
                  }
                });
                return this.finalPresent;
              });
            db.collection("finalDocument")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (this.projects[0].id == doc.data().projectId) {
                      this.document[0].id = doc.id,
                      this.document[0].status = doc.data().status,
                      this.document[0].point = doc.data().point,
                      this.document[0].comment = doc.data().comment
                  }
                });
                return this.document;
              });
            return this.projects;
          });
        return (this.userData = this.userName), (this.isLoading = false);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    }
  }
};
</script>
<style>
/* Center the loader */
#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 60px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s;
}

@-webkit-keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

#myDiv {
  text-align: center;
}
</style>