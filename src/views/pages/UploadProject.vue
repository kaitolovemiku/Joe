<template>
  <div>
    <CCard v-if="this.checkAlreadyHaveProjectOrNot">
      <CCardBody>
          <CRow>
            <CCol sm="12" style="text-align:center;">
              <h1>Done!</h1>
              <h2>You have already submitted the project.</h2>
            </CCol>
          </CRow>
      </CCardBody>
    </CCard>
    <CCard v-if="!this.checkAlreadyHaveProjectOrNot">
      <CCardHeader> <CIcon name="cil-cursor" />Upload File </CCardHeader>
      <CCardBody>
        <CForm>
          <div class="row">
            <div class="col-md-3">
              <p for="projectName">Project Name (English) <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInput
                type="text"
                :description="validation.project_name_eng?'Please enter your project name in English.':''"
                v-model="projectNameEn"
                @change="checkValidation(['project_name_eng'])"
                placeholder="Enter your project name ..."
                required
                :was-validated="validation.project_name_eng"
              />
            </div> 
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="projectName">Project Name (Thai) <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInput
                type="text"
                :description="validation.project_name_th?'Please enter your project name in Thai.':''"
                v-model="projectNameTh"
                @change="checkValidation(['project_name_th'])"
                placeholder="Enter your project name ..."
                required
                :was-validated="validation.project_name_th"
              />
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Member <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Don't forget to add your name before add your friend."
                v-model="projectMember"
                :options="memberName"
                :multiple="true"
                :taggable="true"
                @change="checkValidation(['project_member'])"
                @tag="addTag"
                :allow-empty="false"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Description <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CTextarea
                v-model="projectBg"
                :description="validation.project_background?'Please enter your project background.':''"
                @change="checkValidation(['project_background'])"
                placeholder="Content..."
                required
                :was-validated="validation.project_background"
                rows="9"
              />
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Advisor <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a advisor ..."
                v-model="projectAdvisor"
                :options="teacherShow"
                :multiple="true"
                :taggable="true"
                @change="checkValidation(['project_advisor'])"
                @tag="addTag"
                :allow-empty="false"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Co-Advisor <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a co-advisor ..."
                v-model="projectCoAdvisor"
                :options="teacherShow"
                @change="checkValidation(['project_co_advisor'])"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
                :allow-empty="false"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Committee <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9">
              <multiselect
                placeholder="Search or add a committee ..."
                v-model="projectCommittee"
                :options="teacherShow"
                @change="checkValidation(['project_committee'])"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
                :allow-empty="false"
              ></multiselect>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-md-3">
              <p>Project Type <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9">
              <multiselect
                v-model="projectType"
                :options="options"
                @change="checkValidation(['project_type'])"
                :allow-empty="false"
              ></multiselect>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Project Duration (start date) <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInput
                type="date"
                :description="validation.project_duration_start?'Please enter your project duration (start date).':''"
                v-model="projectDStart"
                placeholder="Enter your project duration ..."
                @change="checkValidation(['project_duration_start'])"
                required
                :was-validated="validation.project_duration_start"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Project Duration (end date) <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInput
                type="date"
                :description="validation.project_duration_end?'Please enter your project duration (end date).':''"
                v-model="projectDEnd"
                placeholder="Enter your project duration ..."
                @change="checkValidation(['project_duration_end'])"
                required
                :was-validated="validation.project_duration_end"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="projectName">Project Academic Year <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInput
                type="number"
                :description="validation.project_academy_year?'Please enter your project academy year.':''"
                v-model="academicYear"
                min="1000"
                :max="new Date().getFullYear()"
                placeholder="Enter your project academy year ..."
                @change="checkValidation('project_academy_year')"
                required
                :was-validated="validation.project_academy_year"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p for="validationServer03">Proeject File <b style="color:red">*</b></p>
            </div>
            <div class="col-md-9 mb-3">
              <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
              <CInputFile
                label="File custom input"
                :description="validation.project_file?'Please upload your project document.':''"
                :placeholder="this.project_file?this.project_file.name:'Upload your project document here ...'"
                @change="previewFile"
                required
                :was-validated="validation.project_file"
                custom
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p>Progress: {{ uploadValue.toFixed() + "%" }}</p>
            </div>
            <div class="col-md-9">
              <CProgress
                :value="uploadValue"
                :max="100"
                show-percentage
                animated
              ></CProgress>
            </div>
          </div>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-on:click="onUpload()"
          type="submit"
          size="sm"
          color="primary"
        >
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
import Vue from "vue";

const db = firebase.firestore();

export default {
  name: "UploadProject",
  components: {
    Multiselect,
  },
  data() {
    return {
      validation: {
        project_name_eng: false,
        project_name_th: false,
        project_member: false,
        project_background: false,
        project_description: false,
        project_advisor: false,
        project_co_advisor: false,
        project_committee: false,
        project_type: false,
        project_duration_start: false,
        project_duration_end: false,
        project_academy_year: false,
        project_file: false
      },
      testDate: "2017-07-04",
      value: "",
      user: Vue.prototype.$session.getAll().user.data,
      projectNameEn: "",
      projectNameTh: "",
      projectType: "",
      projectPoint: "",
      teachers: [{ id: 1, data: "Loading tesacher data ..." }],
      projectBg: "",
      projectStatus: "",
      projectStatusSemester1: "",
      projectStatusSemester2: "",
      projectDuration: "",
      checkAlreadyHaveProjectOrNot: false,
      academicYear: new Date().getFullYear(),
      teacherShow: [],
      projectAdvisor: [],
      projectCoAdvisor: [],
      projectCommittee: [],
      userData: [],
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
        "Study",
      ],
    };
  },
  created() {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((projectsDoc) => {
          db.collection("users")
            .get()
            .then((usersQuerySnapshot) => {
              usersQuerySnapshot.forEach((usersDoc) => {
                if (projectsDoc.data().isTeacherProject == 0 && usersDoc.data().email == Vue.prototype.$session.getAll().user.data.email && usersDoc.data().role == 'senior') {
                  for (
                    let i = 0;
                    i < projectsDoc.data().projectMember.length;
                    i++
                  ) {
                    if (
                      usersDoc.id == projectsDoc.data().projectMember[i]
                    ) {
                      this.checkAlreadyHaveProjectOrNot = true;
                    }
                  }
                }
              });
            });
          });
        }
      );
    db.collection("teachers")
      .get()
      .then((querySnapshot) => {
        this.teachers = [];
        querySnapshot.forEach((doc) => {
          this.teacherShow.push(doc.data().teacherName);
          this.teachers.push({ id: doc.id, data: doc.data().teacherName });
        });
        return this.teachers;
      })
      .catch((error) => {
        console.log("Error getting teachers: ", error);
      });
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().role == "senior") {
            this.memberName.push(doc.data().username);
            this.member.push({ id: doc.id, data: doc.data().username });
          }
          if (this.user.email == doc.data().email) {
            this.userData.push(doc.data());
          }
        });
        return this.member, this.userData;
      })
      .catch((error) => {
        console.log("Error getting users: ", error);
      });
  },
  methods: {
    testEmpty(data) {
      if (data === ''|| data === [] || data === undefined || data === null || data === 0) {
        return true
      } else {
        return false
      }
    },
    checkValidation(type=[]) {
      type.map(item => {
      if (item === "project_name_eng") {
        if (this.projectNameEn === '') {
          this.validation.project_name_eng = true;
        } else {
          this.validation.project_name_eng = false;
        }
      } else if (item === "project_name_th") {
        if (this.projectNameTh === '') {
          this.validation.project_name_th = true;
        } else {
          this.validation.project_name_th = false;
        }
      } else if (item === "project_member") {
        if (this.projectMember === ''|| this.projectMember === [] || this.projectMember === undefined || this.projectMember === null) {
          this.validation.project_member = true;
        } else {
          this.validation.project_member = false;
        }
      } else if (item === "project_background") {
        if (this.projectBg === '') {
          this.validation.project_background = true;
        } else {
          this.validation.project_background = false;
        }
      } else if (item === "project_advisor") {
        if (this.projectAdvisor === '' || this.projectAdvisor === [] || this.projectAdvisor === undefined || this.projectAdvisor === null) {
          this.validation.project_advisor = true;
        } else {
          this.validation.project_advisor = false;
        }
      } else if (item === "project_co_advisor") {
        if (this.projectCoAdvisor === '' || this.projectCoAdvisor === [] || this.projectCoAdvisor === undefined || this.projectCoAdvisor === null) {
          this.validation.project_co_advisor = true;
        } else {
          this.validation.project_co_advisor = false;
        }
      } else if (item === "project_committee") {
        if (this.projectCommittee === '' || this.projectCommittee === [] || this.projectCommittee === undefined || this.projectCommittee === null) {
          this.validation.project_committee = true;
        } else {
          this.validation.project_committee = false;
        }
      } else if (item === "project_type") {
        if (this.projectType === '' || this.projectType === [] || this.projectType === undefined || this.projectType === null) {
          this.validation.project_type = true;
        } else {
          this.validation.project_type = false;
        }
      } else if (item === "project_duration_start") {
        if (this.projectDStart === '' || this.projectDStart === [] || this.projectDStart === undefined || this.projectDStart === null) {
          this.validation.project_duration_start = true;
        } else {
          this.validation.project_duration_start = false;
        }
      } else if (item === "project_duration_end") {
        if (this.projectDEnd === '' || this.projectDEnd === [] || this.projectDEnd === undefined || this.projectDEnd === null) {
          this.validation.project_duration_end = true;
        } else {
          this.validation.project_duration_end = false;
        }
      } else if (item === "project_academy_year") {
        if (this.academicYear === '' || this.academicYear === [] || this.academicYear === undefined || this.academicYear === null) {
          this.validation.project_academy_year = true;
        } else {
          this.validation.project_academy_year = false;
        }
      } else if (item === "project_file") {
        this.previewFile()
        if (this.projectFile.name === '' || this.projectFile.name === [] || this.projectFile.name === undefined || this.projectFile.name === null) {
          this.validation.project_file = true;
        } else {
          this.validation.project_file = false;
        }
      }
      });
    },
    testTeacher() {
      this.projectDuration = this.projectDStart + " - " + this.projectDEnd;
      console.log(this.projectDuration);
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    previewFile(e) {
      this.uploadValue = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
      if (this.projectFile.name === '' || this.projectFile.name === [] || this.projectFile.name === undefined || this.projectFile.name === null) {
        this.validation.project_file = true;
      } else {
        this.validation.project_file = false;
      }
    },
    onUpload() {
      if (
        this.projectNameEn != "" &&
        this.projectNameTh != "" &&
        this.projectMember !== [] &&
        this.projectBg != "" &&
        this.projectAdvisor !== [] &&
        this.projectCoAdvisor !== [] &&
        this.projectCommittee !== [] &&
        this.projectType != "" &&
        this.projectDStart != "" &&
        this.projectDEnd != "" &&
        this.academicYear != "" &&
        this.projectFile !== []
      ) {
        this.projectDuration = this.projectDStart + " - " + this.projectDEnd;
        this.member_for_save_data = this.member
          .filter((item) => this.projectMember.includes(item.data))
          .map((item) => {
            return item.id;
          });
        this.advisor_for_save_data = this.teachers
          .filter((item) => this.projectAdvisor.includes(item.data))
          .map((item) => {
            return item.id;
          });
        this.co_advisor_for_save_data = this.teachers
          .filter((item) => this.projectCoAdvisor.includes(item.data))
          .map((item) => {
            return item.id;
          });
        this.committee_for_save_data = this.teachers
          .filter((item) => this.projectCommittee.includes(item.data))
          .map((item) => {
            return item.id;
          });

        db.collection("projects")
          .add({
            academicYear: this.academicYear,
            projectNameEn: this.projectNameEn,
            projectNameTh: this.projectNameTh,
            projectBg: this.projectBg,
            projectType: this.projectType,
            projectMember: this.member_for_save_data,
            projectAdvisor: this.advisor_for_save_data,
            projectCoAdvisor: this.co_advisor_for_save_data,
            projectCommittee: this.committee_for_save_data,
            projectPoint: 0,
            projectPointSP1: 0,
            projectPointSP2: 0,
            download: 0,
            projectStatus: "Waiting for acception",
            projectStatusSemester1: "Waiting",
            projectStatusSemester2: "Waiting",
            isTeacherProject: this.userData[0].role == "advisor" ? 1 : 0,
            projectDuration: this.projectDuration,
            projectFileName: this.projectFile.name,
            createdAt: new Date(),
          })
          .then(() => {
            console.error("Upload successed");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        const storageRef = firebase
          .storage()
          .ref(`${this.projectFile.name}`)
          .put(this.projectFile);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            this.$router.replace("/menu/seniorProjectStore");
          }
        );
      } else {
        alert("Please fill the information in '*' boxes.")
        this.checkValidation(['project_name_eng','project_name_th','project_member','project_background','project_description','project_advisor','project_co_advisor','project_committee','project_type','project_duration_start','project_duration_end','project_academy_year','project_file'])
      }
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>