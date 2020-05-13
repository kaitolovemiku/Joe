<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project Details</strong>
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/breadcrumb"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                />
              </div>
              <div v-for="project in projects" v-bind:key="project.id" class="col-md-9">
                <h1>{{project.projectName}}</h1>
                <div class="row">
                  <div class="col-md-12">
                    <form>
                      <div class="form-group row">
                        <label
                          for="staticEmail"
                          class="col-sm-3 col-form-label"
                        >Project Description:</label>
                        <div class="col-sm-9">{{project.projectBg}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Advisor:</label>
                        <div class="col-sm-9">{{project.projectAdvisor}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Member:</label>
                        <div class="col-sm-9">{{project.projectMember}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Duration:</label>
                        <div class="col-sm-9">{{project.projectDuration}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Type:</label>
                        <div class="col-sm-9">{{project.projectType}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Point:</label>
                        <div class="col-sm-9">{{totalPoint =totalPoint+1}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Status:</label>
                        <div class="col-sm-9">{{project.projectStatus}}</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project progress document</strong>
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
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                  style="width:100px;"
                />
              </div>
              <div class="col-md-9">
                <div>
                  <h3 class="center">Progress 1</h3>
                </div>
                <div v-for="progress in projectProgress" v-bind:key="progress.id">
                  <div v-if="progress.progressType == 'progress1'">
                    <div class="col-md-12">
                      <form class="form-group row">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Point:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <input
                            type="number"
                            min="0"
                            v-model="point1"
                            class="form-control"
                            id="colFormLabel"
                            :placeholder="progress.progressPoint"
                          />
                        </div>
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Status:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <select v-model="status1" class="form-control">
                            <option disabled value>{{progress.status}}</option>
                            <option v-for="option in options" v-bind:key="option">{{option}}</option>
                          </select>
                        </div>
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Comment:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <input
                            type="text"
                            v-model="comment1"
                            class="form-control"
                            id="colFormLabel"
                            :placeholder="progress.comment"
                          />
                        </div>
                        <button
                          type="submit"
                          v-on:click="updateProgress1()"
                          class="btn btn-primary mb-2 float-right"
                        >Update</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <hr />
              </div>
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                  style="width:100px;"
                />
              </div>
              <div class="col-md-9">
                <h3 class="center">Progress 2</h3>
                <div v-for="progress in projectProgress" v-bind:key="progress.id">
                  <div v-if="progress.progressType == 'progress2'">
                    <div class="col-md-12">
                      <form class="form-group row">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Point:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <input
                            type="number"
                            min="0"
                            v-model="point2"
                            class="form-control"
                            id="colFormLabel"
                            :placeholder="progress.progressPoint"
                          />
                        </div>
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Status:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <select v-model="status2" class="form-control">
                            <option disabled value>{{progress.status}}</option>
                            <option v-for="option in options" v-bind:key="option">{{option}}</option>
                          </select>
                        </div>
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Comment:</label>
                        <div class="col-sm-10" style="margin-bottom:10px;">
                          <input
                            type="text"
                            v-model="comment2"
                            class="form-control"
                            id="colFormLabel"
                            :placeholder="progress.comment"
                          />
                        </div>
                        <button
                          type="submit"
                          v-on:click="updateProgress2()"
                          class="btn btn-primary mb-2 float-right"
                        >Update</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <hr />
              </div>
              <div class="col-md-12">
                <h3 class="center">Final Present</h3>
                <div class="col-md-12">
                  <form class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Point:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <input
                        type="number"
                        min="0"
                        v-model="point3"
                        class="form-control"
                        id="colFormLabel"
                        :placeholder="this.finalPresent[0].point"
                      />
                    </div>
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Status:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <select v-model="status3" class="form-control">
                        <option disabled value>{{this.finalPresent[0].status}}</option>
                        <option v-for="option in options" v-bind:key="option">{{option}}</option>
                      </select>
                    </div>
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Comment:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <input
                        type="text"
                        v-model="comment3"
                        :placeholder="this.finalPresent[0].comment"
                        class="form-control"
                        id="colFormLabel"
                      />
                    </div>
                    <button
                      type="submit"
                      v-on:click="updateFinalProject()"
                      class="btn btn-primary mb-2 float-right"
                    >Update</button>
                  </form>
                </div>
              </div>
              <div class="col-md-12">
                <hr />
              </div>
              <div class="col-md-12">
                <h3 class="center">Final Document</h3>
                <div class="col-md-12">
                  <form class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Point:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <input
                        type="number"
                        min="0"
                        v-model="point4"
                        class="form-control"
                        id="colFormLabel"
                        :placeholder="this.finalDocument[0].point"
                      />
                    </div>
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Status:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <select v-model="status4" class="form-control">
                        <option disabled value>{{this.finalDocument[0].status}}</option>
                        <option v-for="option in options" v-bind:key="option">{{option}}</option>
                      </select>
                    </div>
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Comment:</label>
                    <div class="col-sm-10" style="margin-bottom:10px;">
                      <input
                        type="text"
                        v-model="comment4"
                        :placeholder="this.finalDocument[0].comment"
                        class="form-control"
                        id="colFormLabel"
                      />
                    </div>
                    <button
                      type="submit"
                      v-on:click="updateFinalDocument()"
                      class="btn btn-primary mb-2 float-right"
                    >Update</button>
                  </form>
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
      projectProgress: [],
      finalPresent: [],
      finalDocument: [],
      options: [
        "Waiting for teacher acception",
        "Passed",
        "Reject",
        "Pending",
        "Closed"
      ],
      comment4: "",
      status4: "",
      totalPoint: 0,
      point4: "",
      status3: "",
      point3: "",
      comment3: "",
      comment2: "",
      status2: "",
      point2: "",
      comment1: "",
      status1: "",
      point1: ""
    };
  },
  created() {
    db.collection("projects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (this.$route.params.projectId == doc.id) {
            this.projects.push({
              id: doc.id,
              projectName: doc.data().projectName,
              projectMember: doc.data().projectMember,
              projectAdvisor: doc.data().projectAdvisor,
              projectBg: doc.data().projectBg,
              projectType: doc.data().projectType,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectStatus: doc.data().projectStatus
            });
          }
          console.log(this.projects);
        });
        return this.projects;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    db.collection("projectProgress")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().projectId == this.projects[0].id) {
            this.projectProgress.push({
              id: doc.id,
              comment: doc.data().comment,
              fileName: doc.data().fileName,
              progressPoint: doc.data().progressPoint,
              progressType: doc.data().progressType,
              projectId: doc.data().projectId,
              status: doc.data().status
            });
          }
        });
        return this.projectProgress;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    db.collection("finalPresent")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().projectId == this.projects[0].id) {
            this.finalPresent.push({
              id: doc.id,
              comment: doc.data().comment,
              point: doc.data().point,
              status: doc.data().status,
              projectId: doc.data().projectId
            });
          }
        });
        return this.finalPresent;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    db.collection("finalDocument")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().projectId == this.projects[0].id) {
            this.finalDocument.push({
              id: doc.id,
              comment: doc.data().comment,
              point: doc.data().point,
              status: doc.data().status,
              projectId: doc.data().projectId
            });
          }
        });
        return this.finalDocument;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    updateProgress1() {
      db.collection("projectProgress")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (
              doc.data().projectId == this.projectProgress[0].projectId &&
              doc.data().progressType == "progress1"
            ) {
              db.collection("projectProgress")
                .doc(doc.id)
                .update({
                  comment: this.comment1,
                  status: this.status1,
                  progressPoint: this.point1,
                  createdAt: new Date()
                });
            }
          });
          alert("Update success");
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    },
    updateProgress2() {
      db.collection("projectProgress")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (
              doc.data().projectId == this.projectProgress[0].projectId &&
              doc.data().progressType == "progress2"
            ) {
              db.collection("projectProgress")
                .doc(doc.id)
                .update({
                  comment: this.comment2,
                  status: this.status2,
                  progressPoint: this.point2,
                  createdAt: new Date()
                });
            }
          });
          alert("Update success");
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    },
    updateFinalProject() {
      db.collection("finalPresent")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id == this.finalPresent[0].id) {
              db.collection("finalPresent")
                .doc(doc.id)
                .update({
                  comment: this.comment3,
                  status: this.status3,
                  point: this.point3,
                  createdAt: new Date()
                });
            } else {
              db.collection("finalPresent").add({
                comment: this.comment3,
                status: this.status3,
                point: this.point3,
                projectId: this.projectProgress[0].projectId,
                createdAt: new Date()
              });
            }
          });
          alert("Update success");
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    },
    updateFinalDocument() {
      db.collection("finalDocument")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id == this.finalDocument[0].id) {
              db.collection("finalDocument")
                .doc(doc.id)
                .update({
                  comment: this.comment4,
                  status: this.status4,
                  point: this.point4,
                  createdAt: new Date()
                });
            } else {
              db.collection("finalDocument").add({
                comment: this.comment4,
                status: this.status4,
                point: this.point4,
                projectId: this.projectProgress[0].projectId,
                createdAt: new Date()
              });
            }
          });
          alert("Update success");
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<style>
.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}
</style>
