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
              <p for="projectName">project Name (English)</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectNameEn"
                type="text"
                class="form-control"
                id="projectName"
                placeholder="Enter your project name ..."
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="projectName">project Name (Thai)</p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <input
                v-model="projectNameTh"
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
              <multiselect
                placeholder="Don't forget to add your name before add your friend."
                v-model="projectMember"
                :options="memberName"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
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
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Proeject Advisor</p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a advisor ..."
                v-model="projectAdvisor"
                :options="teacherShow"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Proeject Co-Advisor</p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a co-advisor ..."
                v-model="projectCoAdvisor"
                :options="teacherShow"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom:10px;">
            <div class="col-md-3">
              <p>Proeject Committee</p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a committee ..."
                v-model="projectCommittee"
                :options="teacherShow"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
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
                id="projectDStart"
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
                id="projectDEnd"
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
      testDate: '2017-07-04',
      value: "",
      projectNameEn: "",
      projectNameTh: "",
      projectType: "",
      projectPoint: "",
      teachers: [{ id: 1, data: "Loading tesacher data ..." }],
      projectBg: "",
      projectStatus: "",
      projectDuration: "",
      teacherShow: [],
      projectAdvisor: [],
      projectCoAdvisor: [],
      projectCommittee: [],
      memberName: [],
      advisor_for_save_data: [],
      co_advisor_for_save_data: [],
      committee_for_save_data: [],
      member_for_save_data: [],
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
    db.collection("teachers")
      .get()
      .then(querySnapshot => {
        this.teachers = [];
        querySnapshot.forEach(doc => {
          this.teacherShow.push(doc.data().teacherName);
          this.teachers.push({ id: doc.id, data: doc.data().teacherName });
        });
        return this.teachers;
      })
      .catch(error => {
        console.log("Error getting teachers: ", error);
      });
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.memberName.push(doc.data().username);
          this.member.push({id: doc.id , data: doc.data().username});
        });
        return this.member;
      })
      .catch(error => {
        console.log("Error getting users: ", error);
      });
  },
  methods: {
    testTeacher() {
      this.projectDuration = this.projectDStart + " - " + this.projectDEnd;
      console.log(this.projectDuration)
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    previewFile(e) {
      this.uploadValue = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
    },
    onUpload() {
      if (
        this.projectNameEn != "" &&
        this.projectNameTh != "" &&
        this.projectType != "" &&
        this.projectDStart != "" &&
        this.projectDEnd != ""
      ) {
        this.projectDuration = this.projectDStart + " - " + this.projectDEnd;
        this.member_for_save_data = this.member.filter(item => this.projectMember.includes(item.data)).map(item => {return item.id});
        this.advisor_for_save_data = this.teachers.filter(item => this.projectAdvisor.includes(item.data)).map(item => {return item.id});
        this.co_advisor_for_save_data = this.teachers.filter(item => this.projectCoAdvisor.includes(item.data)).map(item => {return item.id});
        this.committee_for_save_data = this.teachers.filter(item => this.projectCommittee.includes(item.data)).map(item => {return item.id});

        db.collection("projects")
          .add({
            projectNameEn: this.projectNameEn,
            projectNameTh: this.projectNameTh,
            projectBg: this.projectBg,
            projectType: this.projectType,
            projectMember: this.member_for_save_data,
            projectAdvisor: this.advisor_for_save_data,
            projectCoAdvisor: this.co_advisor_for_save_data,
            projectCommittee: this.committee_for_save_data,
            projectPoint: 0,
            projectStatus: "Waiting for acception",
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