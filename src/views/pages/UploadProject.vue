<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-cursor" />Upload File
      </CCardHeader>
      <CCardBody>
        <CForm>
          <div class="row">
            <div class="col-md-3">
              <p for="projectName">project Name</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectName"
                type="text"
                class="form-control"
                id="projectName"
                placeholder="Enter your project name ..."
                required
              />
            </div>
          </div>
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Project Member</p>
            </div>
            <div class="col-md-9">
              <multiselect placeholder="Search or add a member ..." v-model="projectMember" :options="member" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Project description</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <textarea
                class="form-control"
                v-model="projectBg"
                label="Project description"
                placeholder="Content..."
                horizontal
                rows="9"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Proeject Advisor</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectAdvisor"
                type="text"
                class="form-control"
                id="projectFile"
                placeholder="Mr.Tew Hongtong"
                required
              />
            </div>
          </div>
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Project type</p>
            </div>
            <div class="col-md-9">
              <multiselect v-model="projectType" :options="options"></multiselect>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Project duration (start date)</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectDStart"
                type="date"
                class="form-control"
                id="projectFile"
                placeholder="Mr.Tew Hongtong"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Project duration (end date)</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectDEnd"
                type="date"
                class="form-control"
                id="projectFile"
                placeholder="Mr.Tew Hongtong"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Proeject file</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                type="file"
                class="form-control"
                @change="previewFile"
                id="projectFile"
                placeholder="City"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p>Progress: {{uploadValue.toFixed()+"%"}}</p>
            </div>
            <div class="col-md-9">
              <CProgress :value="uploadValue" :max="100" show-percentage animated></CProgress>
            </div>
          </div>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton v-on:click="onUpload()" type="submit" size="sm" color="primary">
          <CIcon name="cil-check-circle" />Submit
        </CButton>
        <CButton type="reset" size="sm" color="danger">
          <CIcon name="cil-ban" />Reset
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>

<script>
import firebase from "firebase";
import Multiselect from "vue-multiselect";

const db = firebase.firestore();

export default {
  name: "UploadProject",
  components: {
    Multiselect
  },
  data() {
    return {
      value: "",
      projectName: "",
      projectType: "",
      projectPoint: "",
      projectBg: "",
      projectStatus: "",
      projectDuration: "",
      projectAdvisor: "",
      projectMember: "",
      projectDStart: "",
      projectFileName: "",
      member: [],
      projectDEnd: "",
      uploadError: "",
      project: null,
      projectFile: null,
      uploadValue: 0,
      options: [
        "Cinema online booking",
        "Dating",
        "E-commerce",
        "House",
        "Health care",
        "POS system",
        "Pet",
        "Restaurant",
        "Study"
      ]
    };
  },
   created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.member.push(doc.data().username);
        });
        return this.member;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    previewFile(e) {
      this.uploadValue = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
    },
    onUpload() {
      if (
        this.projectName != "" &&
        this.projectType != "" &&
        this.projectDStart != "" &&
        this.projectDEnd != ""
      ) {
        this.projectDuration = this.projectDStart + " - " + this.projectDEnd;
        db.collection("projects")
          .add({
            projectName: this.projectName,
            projectBg: this.projectBg,
            projectType: this.projectType,
            projectMember: this.projectMember,
            projectAdvisor: this.projectAdvisor,
            projectPoint: null,
            projectStatus: "Waiting for teacher acception",
            projectDuration: this.projectDuration,
            projectFileName: this.projectFile.name,
            createdAt: new Date()
          })
          .then(() => {
            console.error("Upload successed");
          })
          .catch(error => {
            console.error("Error writing document: ", error);
          });
        const storageRef = firebase
          .storage()
          .ref(`${this.projectFile.name}`)
          .put(this.projectFile);
        storageRef.on(
          `state_changed`,
          snapshot => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          error => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            this.$router.replace("/menu/seniorProjectStore");
          }
        );
      }
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>