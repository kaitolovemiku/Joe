<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project Details</strong>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                />
                <div class="row">
                  <div class="col-md-12" style="margin-top: 10px">
                    <button
                      class="btn btn-primary btn-block"
                      v-on:click="downloadFile()"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-for="project in projects"
                v-bind:key="project.id"
                class="col-md-9"
              >
                <h1>
                  {{ project.projectNameEn }} ({{ project.projectNameTh }})
                </h1>
                <div class="row">
                  <div class="col-md-12">
                    <form>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Description:</label
                        >
                        <div class="col-sm-9">{{ project.projectBg }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Advisor:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectAdvisor"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Co-Advisor:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectCoAdvisor"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Committee:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectCommittee"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Member:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectMember"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Duration:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectDuration }}
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Type:</label
                        >
                        <div class="col-sm-9">{{ project.projectType }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Downloading Rate:</label
                        >
                        <div class="col-sm-9">{{ project.download }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Status:</label
                        >
                        <div class="col-sm-9">{{ project.projectStatus }}</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

export default {
  name: "Breadcrumbs",
  data() {
    return {
      projects: [],
      students: [],
      teachers: [],
      projectUrl: "",
    };
  },
  methods: {
    test() {
      alert(this.projects[0].id);
    },
    downloadFile() {
      // Create a root reference
      var storageRef = firebase.storage().ref();
      db.collection("projects")
        .doc(this.projects[0].id)
        .update({
          download: parseInt(this.projects[0].download)+1,
          createdAt: new Date(),
        });
      storageRef
        .child(this.projects[0].projectFileName)
        .getDownloadURL()
        .then(function (url) {
          // `url` is the download URL for 'images/stars.jpg'

          window.open(url, "_blank");
          return (this.projectUrl = url);
        })
        .catch((error) => {
          console.log("Error getting files url: ", error);
        });
    },
  },
  created() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          return this.students.push({ id: doc.id, data: doc.data().username });
        });
      });
    db.collection("teachers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          return this.teachers.push({
            id: doc.id,
            data: doc.data().teacherName,
          });
        });
      });
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (this.$route.params.projectId == doc.id) {
            console.log(this.students.includes(doc.data().projectMember));
            this.projects.push({
              id: doc.id,
              projectNameTh: doc.data().projectNameTh,
              projectNameEn: doc.data().projectNameEn,
              projectMember: this.students
                .filter((item) => doc.data().projectMember.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectAdvisor: this.teachers
                .filter((item) => doc.data().projectAdvisor.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectCoAdvisor: this.teachers
                .filter((item) => doc.data().projectCoAdvisor.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectCommittee: this.teachers
                .filter((item) => doc.data().projectCommittee.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectBg: doc.data().projectBg,
              projectFileName: doc.data().projectFileName,
              projectType: doc.data().projectType,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectStatus: doc.data().projectStatus,
              download: doc.data().download
            });
          }
        });
        return this.projects;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>

<style>
.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}
</style>
