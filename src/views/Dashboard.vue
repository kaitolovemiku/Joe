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
        <AdminDashboard />
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
                <div class="col-md-12">
                  <h2 style="text-align:center;">
                    Senior 1
                  </h2>
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
                  >{{progress1[0].advisorPoint?progress1[0].advisorPoint:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Progress 2</b>
                  </p>
                  <h1
                    id="p2"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{progress2[0].advisorPoint?progress2[0].advisorPoint:'-'}}</h1>
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
                   >{{finalDocument[0].point?finalDocument[0].point:'-'}}</h1>
                </div>
                <div class="col-md-4">
                  <p style="font-size:12px;text-align:center;">
                    <b>Project Status</b>
                  </p>
                  <h3
                    id="pAns"
                    style="margin-top:-10px;text-align:center;"
                  >{{projects[0].projectStatusSemester1?projects[0].projectStatusSemester1:'-'}}</h3>
                </div>
                <div class="col-md-12">
                  <hr />
                </div>
                <div class="col-md-12">
                  <h2 style="text-align:center;">
                    Senior 2
                  </h2>
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
                  >{{progress1S2[0].advisorPoint?progress1[0].advisorPoint:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Progress 2</b>
                  </p>
                  <h1
                    id="p2"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{progress2S2[0].advisorPoint?progress2[0].advisorPoint:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;margin-left:-8px;margin-right:-8px">
                    <b>Final Present</b>
                  </p>
                  <h1
                    id="p3"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                 >{{finalPresentS2[0].point?finalPresentS2[0].point:'-'}}</h1>
                </div>
                <div class="col-md-2">
                  <p style="font-size:12px;text-align:center;">
                    <b>Document</b>
                  </p>
                  <h1
                    id="p4"
                    style="font-size:40px;margin-top:-10px;text-align:center;"
                  >{{finalDocumentS2[0].point?finalDocumentS2[0].point:'-'}}</h1>
                </div>
                <div class="col-md-4">
                  <p style="font-size:12px;text-align:center;">
                    <b>Project Status</b>
                  </p>
                  <h3
                    id="pAns"
                    style="margin-top:-10px;text-align:center;"
                  >{{projects[0].projectStatusSemester2?projects[0].projectStatusSemester2:'-'}}</h3>
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
                  <strong>Senior 1</strong>
                  <div class="card-header-actions">
                    <a
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{projects[0].projectPointSP1?projects[0].projectPointSP1:'-'}}
                      <small class="text-muted">point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputProgress1">
                      <b>Progress 1</b>
                    </label>
                    <p id="inputProgress1">(Advisor Comment) {{progress1[0].advisorComment?progress1[0].advisorComment:'-'}}</p>
                    <hr />
                    <label for="inputProgress2">
                      <b>Progress 2</b>
                    </label>
                    <p id="inputProgress2">(Advisor Comment) {{progress2[0].advisorComment?progress2[0].advisorComment:'-'}}</p>
                    <hr />
                    <label for="inputFinalPresent">
                      <b>Final Presentation</b>
                    </label>
                    <p id="inputFinalPresent">(Advisor Comment) {{finalPresent[0].advisorComment?finalPresent[0].advisorComment:'-'}}</p>
                    <p id="inputEmail4">(Committee1 comment) {{finalPresent[0].committee1Comment?finalPresent[0].committee1Comment:'-'}}</p>
                    <p id="inputEmail4">(Committee2 comment) {{finalPresent[0].committee2Comment?finalPresent[0].committee2Comment:'-'}}</p>
                    <hr />
                    <label for="inputFinalDoc">
                      <b>Final Document</b>
                    </label>
                    <p id="inputFinalDoc">(Advisor Comment) {{finalPresent[0].advisorComment?finalPresent[0].advisorComment:'-'}}</p>
                    <p id="inputEmail4">(Committee1 comment) {{finalPresent[0].committee1Comment?finalPresent[0].committee1Comment:'-'}}</p>
                    <p id="inputEmail4">(Committee2 comment) {{finalPresent[0].committee2Comment?finalPresent[0].committee2Comment:'-'}}</p>
                    <hr />
                  </div>
                </CCardBody>
              </CCard>
            </div>
            <div class="col-md-12">
              <CCard>
                <CCardHeader>
                  <CIcon name="cil-justify-center" />
                  <strong>Senior 2</strong>
                  <div class="card-header-actions">
                    <a
                      class="card-header-action"
                      rel="noreferrer noopener"
                      target="_blank"
                      style="color:black"
                    >
                      {{projects[0].projectPointSP2?projects[0].projectPointSP2:'-'}}
                      <small class="text-muted">point</small>
                    </a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="form-group col-md-12">
                    <label for="inputProgress1">
                      <b>Progress 1</b>
                    </label>
                    <p id="inputProgress1">(Advisor Comment) {{progress1S2[0].advisorComment?progress1S2[0].advisorComment:'-'}}</p>
                    <hr />
                    <label for="inputProgress2">
                      <b>Progress 2</b>
                    </label>
                    <p id="inputProgress2">(Advisor Comment) {{progress2S2[0].advisorComment?progress2S2[0].advisorComment:'-'}}</p>
                    <hr />
                    <label for="inputFinalPresent">
                      <b>Final Presentation</b>
                    </label>
                    <p id="inputFinalPresent">(Advisor Comment) {{finalPresentS2[0].advisorComment?finalPresentS2[0].advisorComment:'-'}}</p>
                    <p id="inputEmail4">(Committee1 comment) {{finalPresentS2[0].committee1Comment?finalPresentS2[0].committee1Comment:'-'}}</p>
                    <p id="inputEmail4">(Committee2 comment) {{finalPresentS2[0].committee2Comment?finalPresentS2[0].committee2Comment:'-'}}</p>
                    <hr />
                    <label for="inputFinalDoc">
                      <b>Final Document</b>
                    </label>
                    <p id="inputFinalDoc">(Advisor Comment) {{finalPresentS2[0].advisorComment?finalPresentS2[0].advisorComment:'-'}}</p>
                    <p id="inputEmail4">(Committee1 comment) {{finalPresentS2[0].committee1Comment?finalPresentS2[0].committee1Comment:'-'}}</p>
                    <p id="inputEmail4">(Committee2 comment) {{finalPresentS2[0].committee2Comment?finalPresentS2[0].committee2Comment:'-'}}</p>
                    <hr />
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
import AdminDashboard from "./pages/AdminDashboardPage";
import StudentDownloadReport from "./pages/StudentDownloadReport.vue"

console.log(Vue.prototype.$session.getAll().user.data);
const db = firebase.firestore();

export default {
  name: "Dashboard",
  components: {
    TeacherDashboard,
    StudentDownloadReport,
    AdminDashboard,
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
          semesterType: "",
          progressType: "",
          comment: ""
        }],
      progress1: [
        {
          id: "",
          status: "",
          semesterType: "",
          advisorComment: "",
          advisorPoint: 0,
          progressType: "",
          comment: ""
        }
      ],
      progress1S2: [
        {
          id: "",
          status: "",
          semesterType: "",
          advisorComment: "",
          advisorPoint: 0,
          progressType: "",
          comment: ""
        }
      ],
      progress2: [
        {
          id: "",
          status: "",
          advisorComment: "",
          advisorPoint: 0,
          semesterType: "",
          progressType: "",
          comment: ""
        }
      ],
      progress2S2: [
        {
          id: "",
          status: "",
          semesterType: "",
          advisorComment: "",
          advisorPoint: 0,
          progressType: "",
          comment: ""
        }
      ],
      finalDocument: [
        {
          id: "",
          status: "",
          advisorComment: "",
          advisorPoint: 0,
          committee1Comment: "",
          committee1Point: 0,
          committee2Comment: "",
          committee2Point: 0,
          semesterType: "",
          comment: ""
        }
      ],
      finalDocumentS2: [
        {
          id: "",
          status: "",
          semesterType: "",
          advisorComment: "",
          advisorPoint: 0,
          committee1Comment: "",
          committee1Point: 0,
          committee2Comment: "",
          committee2Point: 0,
          progressType: "",
          comment: ""
        }
      ],
      finalPresent: [
        {
          id: "",
          status: "",
          advisorComment: "",
          advisorPoint: 0,
          committee1Comment: "",
          committee1Point: 0,
          committee2Comment: "",
          committee2Point: 0,
          semesterType: "",
          comment: ""
        }
      ],
      finalPresentS2: [
        {
          id: "",
          status: "",
          advisorComment: "",
          advisorPoint: 0,
          committee1Comment: "",
          committee1Point: 0,
          committee2Comment: "",
          committee2Point: 0,
          semesterType: "",
          comment: ""
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
              console.log('Look at this=>',Vue.prototype.$session.getAll().user.id,doc.data().projectMember)
              if (doc.data().projectMember.find(item => item === Vue.prototype.$session.getAll().user.id)) {
                (this.projects[0].id = doc.id);
                  (this.projects[0].projectNameEn = doc.data().projectNameEn);
                  (this.projects[0].projectNameTh = doc.data().projectNameTh);
                  (this.projects[0].projectBg = doc.data().projectBg);
                  (this.projects[0].projectType = doc.data().projectType);
                  (this.projects[0].projectDuration = doc.data().projectDuration);
                  (this.projects[0].projectPoint = doc.data().projectPoint);
                  (this.projects[0].projectStatus = doc.data().projectStatus);
                  (this.projects[0].projectPointSP1 = doc.data().projectPointSP1);
                  (this.projects[0].projectPointSP2 = doc.data().projectPointSP2);
                  (this.projects[0].projectStatusSemester1 = doc.data().projectStatusSemester1);
                  (this.projects[0].projectStatusSemester2 = doc.data().projectStatusSemester2);
              }
            });
            db.collection("projectProgress")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress1" && doc.data().seniorType == "senior1"
                  ) {
                      this.progress1[0].id = doc.id,
                      this.progress1[0].status = doc.data().status,
                      this.progress1[0].point = doc.data().progressPoint,
                      this.progress1[0].progressType = doc.data().progressType,
                      this.progress1[0].advisorComment = doc.data().advisorComment,
                      this.progress1[0].advisorPoint = doc.data().advisorPoint,
                      this.progress1[0].seniorType = doc.data().seniorType,
                      this.progress1[0].comment = doc.data().comment
                  } 
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress1" && doc.data().seniorType == "senior2"
                  ) {
                      this.progress1S2[0].id = doc.id,
                      this.progress1S2[0].status = doc.data().status,
                      this.progress1S2[0].point = doc.data().progressPoint,
                      this.progress1S2[0].progressType = doc.data().progressType,
                      this.progress1S2[0].advisorComment = doc.data().advisorComment,
                      this.progress1S2[0].advisorPoint = doc.data().advisorPoint,
                      this.progress1S2[0].seniorType = doc.data().seniorType,
                      this.progress1S2[0].comment = doc.data().comment
                  } 
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress2" && doc.data().seniorType == "senior1"
                  ) {
                      this.progress2[0].id = doc.id,
                      this.progress2[0].status = doc.data().status,
                      this.progress2[0].point = doc.data().progressPoint,
                      this.progress2[0].progressType = doc.data().progressType,
                      this.progress2[0].advisorComment = doc.data().advisorComment,
                      this.progress2[0].advisorPoint = doc.data().advisorPoint,
                      this.progress2[0].seniorType = doc.data().seniorType,
                      this.progress2[0].comment = doc.data().comment
                  }
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "progress2" && doc.data().seniorType == "senior2"
                  ) {
                      this.progress2S2[0].id = doc.id,
                      this.progress2S2[0].status = doc.data().status,
                      this.progress2S2[0].point = doc.data().progressPoint,
                      this.progress2S2[0].progressType = doc.data().progressType,
                      this.progress2S2[0].advisorComment = doc.data().advisorComment,
                      this.progress2S2[0].advisorPoint = doc.data().advisorPoint,
                      this.progress2S2[0].seniorType = doc.data().seniorType,
                      this.progress2S2[0].comment = doc.data().comment
                  }
                   if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "Final Documentation" && doc.data().seniorType == "senior1"
                  ) {
                      this.finalDocument[0].id = doc.id,
                      this.finalDocument[0].status = doc.data().status,
                      this.finalDocument[0].point = parseInt(doc.data().advisorPoint?doc.data().advisorPoint:0)+parseInt(doc.data().committee1Comment?doc.data().committee1Comment:0)+parseInt(doc.data().committee2Comment?doc.data().committee2Comment:0),
                      this.finalDocument[0].progressType = doc.data().progressType,
                      this.finalDocument[0].advisorComment = doc.data().advisorComment,
                      this.finalDocument[0].advisorPoint = doc.data().advisorPoint,
                      this.finalDocument[0].committee1Comment = doc.data().committee1Comment,
                      this.finalDocument[0].committee1Point = doc.data().committee1Point,
                      this.finalDocument[0].committee2Comment = doc.data().committee2Comment,
                      this.finalDocument[0].committee2Point = doc.data().committee2Point,
                      this.finalDocument[0].seniorType = doc.data().seniorType,
                      this.finalDocument[0].comment = doc.data().comment,
                      this.finalDocument[0].fileName = doc.data().fileName
                  }
                   if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "Final Documentation" && doc.data().seniorType == "senior2"
                  ) {
                      this.finalDocumentS2[0].id = doc.id,
                      this.finalDocumentS2[0].status = doc.data().status,
                      this.finalDocumentS2[0].point = parseInt(doc.data().advisorPoint?doc.data().advisorPoint:0)+parseInt(doc.data().committee1Comment?doc.data().committee1Comment:0)+parseInt(doc.data().committee2Comment?doc.data().committee2Comment:0),
                      this.finalDocumentS2[0].progressType = doc.data().progressType,
                      this.finalDocumentS2[0].advisorComment = doc.data().advisorComment,
                      this.finalDocumentS2[0].advisorPoint = doc.data().advisorPoint,
                      this.finalDocumentS2[0].committee1Comment = doc.data().committee1Comment,
                      this.finalDocumentS2[0].committee1Point = doc.data().committee1Point,
                      this.finalDocumentS2[0].committee2Comment = doc.data().committee2Comment,
                      this.finalDocumentS2[0].committee2Point = doc.data().committee2Point,
                      this.finalDocumentS2[0].seniorType = doc.data().seniorType,
                      this.finalDocumentS2[0].comment = doc.data().comment,
                      this.finalDocumentS2[0].fileName = doc.data().fileName
                  }
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "Final Presentation" && doc.data().seniorType == "senior1"
                  ) {
                      this.finalPresent[0].id = doc.id,
                      this.finalPresent[0].advisorComment = doc.data().advisorComment,
                      this.finalPresent[0].advisorPoint = doc.data().advisorPoint,
                      this.finalPresent[0].comment = doc.data().comment,
                      this.finalPresent[0].point = parseInt(doc.data().advisorPoint?doc.data().advisorPoint:0)+parseInt(doc.data().committee1Comment?doc.data().committee1Comment:0)+parseInt(doc.data().committee2Comment?doc.data().committee2Comment:0),
                      this.finalPresent[0].committee1Comment = doc.data().committee1Comment,
                      this.finalPresent[0].committee1Point = doc.data().committee1Point,
                      this.finalPresent[0].committee2Comment = doc.data().committee2Comment,
                      this.finalPresent[0].committee2Point = doc.data().committee2Point,
                      this.finalPresent[0].createdAt = doc.data().createdAt,
                      this.finalPresent[0].fileName = doc.data().fileName,
                      this.finalPresent[0].progressPoint = doc.data().progressPoint,
                      this.finalPresent[0].progressType = doc.data().progressType,
                      this.finalPresent[0].projectId = doc.data().projectId,
                      this.finalPresent[0].seniorType = doc.data().seniorType,
                      this.finalPresent[0].status = doc.data().status 
                  }
                  if (
                    this.projects[0].id == doc.data().projectId &&
                    doc.data().progressType == "Final Presentation" && doc.data().seniorType == "senior2"
                  ) {
                      this.finalPresentS2[0].id = doc.id,
                      this.finalPresentS2[0].advisorComment = doc.data().advisorComment,
                      this.finalPresentS2[0].advisorPoint = doc.data().advisorPoint,
                      this.finalPresentS2[0].comment = doc.data().comment,
                      this.finalPresentS2[0].point = parseInt(doc.data().advisorPoint?doc.data().advisorPoint:0)+parseInt(doc.data().committee1Comment?doc.data().committee1Comment:0)+parseInt(doc.data().committee2Comment?doc.data().committee2Comment:0),
                      this.finalPresentS2[0].committee1Comment = doc.data().committee1Comment,
                      this.finalPresentS2[0].committee1Point = doc.data().committee1Point,
                      this.finalPresentS2[0].committee2Comment = doc.data().committee2Comment,
                      this.finalPresentS2[0].committee2Point = doc.data().committee2Point,
                      this.finalPresentS2[0].createdAt = doc.data().createdAt,
                      this.finalPresentS2[0].fileName = doc.data().fileName,
                      this.finalPresentS2[0].progressPoint = doc.data().progressPoint,
                      this.finalPresentS2[0].progressType = doc.data().progressType,
                      this.finalPresentS2[0].projectId = doc.data().projectId,
                      this.finalPresentS2[0].seniorType = doc.data().seniorType,
                      this.finalPresentS2[0].status = doc.data().status 
                  }
                });
                return this.progress1, this.progress2, this.finalDocument, this.finalPresent;
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