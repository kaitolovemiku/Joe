<template>
  <div class="container">
    <h2 v-if="user">Welcome back {{user.data.displayName}}!</h2>
    <div>{{user.data.email}}</div>
    <div class="row">
      <div class="col-md-12">
        <hr />
      </div>
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
                <h2>{{this.projects[0].projectName}}</h2>
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
                <h1 id="p1" style="font-size:40px;margin-top:-10px;text-align:center;">{{progress1[0].point?progress1[0].point:'-'}}</h1>
              </div>
              <div class="col-md-2">
                <p style="font-size:12px;text-align:center;">
                  <b>Progress 2</b>
                </p>
                <h1 id="p2" style="font-size:40px;margin-top:-10px;text-align:center;">{{progress2[0].point?progress2[0].point:'-'}}</h1>
              </div>
              <div class="col-md-2">
                <p style="font-size:12px;text-align:center;">
                  <b>Final Present</b>
                </p>
                <h1 id="p3" style="font-size:40px;margin-top:-10px;text-align:center;">{{finalPresent[0].point?finalPresent[0].point:'-'}}</h1>
              </div>
              <div class="col-md-2">
                <p style="font-size:12px;text-align:center;">
                  <b>Document</b>
                </p>
                <h1 id="p4" style="font-size:40px;margin-top:-10px;text-align:center;">{{document[0].point?document[0].point:'-'}}</h1>
              </div>
              <div class="col-md-4">
                <p style="font-size:12px;text-align:center;">
                  <b>Project Status</b>
                </p>
                <h1 id="pAns" style="font-size:40px;margin-top:-10px;text-align:center;">Pass</h1>
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
                  <p
                    id="inputEmail4"
                  >{{progress1?progress1[0].comment:'-'}}</p>
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
                  <p
                    id="inputEmail4"
                  >{{progress2?progress2[0].comment:'-'}}</p>
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
                    <small class="text-muted">point</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <div class="form-group col-md-12">
                  <label for="inputEmail4">
                    <b>Teacher comment</b>
                  </label>
                  <p
                    id="inputEmail4"
                  >{{finalPresent[0].comment?finalPresent[0].comment:'-'}}</p>
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
                    {{finalPresent[0].point?finalPresent[0].point:'-'}}
                    <small class="text-muted">point</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
                <div class="form-group col-md-12">
                  <label for="inputEmail4">
                    <b>Teacher comment</b>
                  </label>
                  <p
                    id="inputEmail4"
                  >{{finalPresent[0].comment?finalPresent[0].comment:'-'}}</p>
                </div>
              </CCardBody>
            </CCard>
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
import { mapGetters } from "vuex";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  name: "Dashboard",
  components: {
    //MainChartExample,
    //WidgetsDropdown,
    //WidgetsBrand
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  data() {
    return {
      selected: "Month",
      userName: [],
      userData: [],
      projects: [],
      document: [],
      progress1: [],
      progress2: [],
      finalPresent: [],
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
          if (this.user.data.email == doc.data().email) {
            this.userName.push(doc.data());
            this.user.data.displayName = doc.data().username;
          }
        });
        db.collection("projects")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              if (this.user.data.displayName == doc.data().projectMember) {
                this.projects.push({
                  id: doc.id,
                  projectName: doc.data().projectName,
                  projectBg: doc.data().projectBg,
                  projectType: doc.data().projectType,
                  projectDuration: doc.data().projectDuration,
                  projectPoint: doc.data().projectPoint,
                  projectStatus: doc.data().projectStatus
                });
              }
            });
            db.collection("projectProgress")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (this.projects[0].id == doc.data().projectId && doc.data().progressType == 'progress1') {
                    this.progress1.push({
                      id: doc.id,
                      status: doc.data().status,
                      point: doc.data().progressPoint,
                      progressType: doc.data().progressType,
                      comment: doc.data().comment,
                    });
                  }
                  if (this.projects[0].id == doc.data().projectId && doc.data().progressType == 'progress2') {
                    this.progress2.push({
                      id: doc.id,
                      status: doc.data().status,
                      point: doc.data().progressPoint,
                      progressType: doc.data().progressType,
                      comment: doc.data().comment,
                    });
                  }
                });
                return this.progress1,this.progress2,this.finalPresent;
              });
              db.collection("finalPresent")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (this.projects[0].id == doc.data().projectId) {
                    this.finalPresent.push({
                      id: doc.id,
                      status: doc.data().status,
                      point: doc.data().point,
                      comment: doc.data().comment,
                    });
                  }
                });
                return this.finalPresent;
              });
              db.collection("finalDocument")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (this.projects[0].id == doc.data().projectId) {
                    this.document.push({
                      id: doc.id,
                      status: doc.data().status,
                      point: doc.data().point,
                      comment: doc.data().comment,
                    });
                  }
                });
                return this.document;
              });
            return this.projects;
          });
        return (this.userData = this.userName);
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
