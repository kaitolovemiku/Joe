<template>
  <div>
    <CCard class="shadow">
      <CCardHeader>
        <CIcon name="cil-pencil" />
        <strong>Senior Score</strong>
        <div class="card-header-actions">
          <CInput
            class="mb-3 autocomplete"
            type="number"
            v-model="academicYear"
            min="1"
          >
            <template #prepend-content
              ><small class="text-muted"
                >Academic Year/ Posted Year</small
              ></template
            >
            <template #append>
              <CDropdown :togglerText="semesterType" color="warning">
                <CDropdownItem
                  v-on:click="onPickDownloadSemesterType((type = 'Semester 1'))"
                >
                  Semester 1
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem
                  v-on:click="onPickDownloadSemesterType((type = 'Semester 2'))"
                >
                  Semester 2
                </CDropdownItem>
              </CDropdown>
              <CButton color="primary" @click="loadingUserData()"
                ><CIcon
                  style="width: 10px; height: 10px"
                  name="cil-magnifying-glass"
                />
                Search</CButton
              >
            </template>
          </CInput>
        </div>
      </CCardHeader>
      <CCardBody v-if="checkTable < 2">
        <CRow style="text-align:center;">
          <CCol md="12"><h1>Click search to find the senior score report.</h1></CCol>
        </CRow>
      </CCardBody>
      <CCardBody v-if="checkTable >= 2">
        <CDataTable
          hover
          striped
          class="table-align-middle mb-0"
          :items="items"
          :fields="fields"
          no-sorting
        >
          <template #example="{ item }">
            <td>
              <CSwitch
                :variant="item.example.variant"
                :color="item.example.color"
                :size="item.example.size"
                :checked="item.example.checked"
              />
            </td>
          </template>
          <template #size_prop="{ item }">
            <td>
              <span v-html="item.size_prop"></span>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
    <div class="row">
      <div class="col-md-8"></div>
      <div class="col-md-4">
        <button
          class="btn btn-success btn-block"
          v-on:click="downloadStudentScore()"
        >
          <CIcon style="width: 10px; height: 10px" name="cil-file" /> Export
          Excel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import Multiselect from "vue-multiselect";
import firebase from "firebase/app";
import "firebase/firestore";
import XLSX from "xlsx";

const testEmpty = (data) => {
  if (data === undefined || data === null || data === "") {
    return false;
  } else {
    return true;
  }
};

const db = firebase.firestore();

export default {
  name: "SeniorScore",
  components: {
    //Multiselect,
  },
  data() {
    return {
      projects: [],
      search: "",
      academicYear: "2020",
      semesterType: "Semester 1",
      semesterList: ["Semester 1", "Semester 2"],
      searchObject: [],
      projectProgressData: [],
      exportExcelData: [],
      options: [],
      checkTable: 0,
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "progress1", label: "Progress 1" },
        { key: "progress2", label: "Progress 2" },
        { key: "finalPresentation", label: "Final Presentation" },
        { key: "finalDocument", label: "Final Document" },
        { key: "score", label: "Total" },
        { key: "grade", label: "Grade" },
      ],
      items: [],
    };
  },
  created() {
    this.loadingProjectProgress()
  },
  methods: {
    loadingProjectProgress() {
    this.projectProgressData = []
     db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((projectsDoc) => {
            if (this.academicYear == projectsDoc.data().academicYear) {
              if (this.semesterType === "Semester 1") {
                  db.collection('projectProgress').where('seniorType','==','senior1').get().then((querySnapshotPP)=>{
                    querySnapshotPP.forEach((ppqs)=>{
                    if (this.projectProgressData.length === 0 || !this.projectProgressData.map(item=>item.id).includes(projectsDoc.id)) {
                      if (ppqs.data().progressType == 'progress1') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: parseInt(ppqs.data().advisorPoint),
                        progress2: 0,
                        finalPresentation: 0,
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'progress2') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: parseInt(ppqs.data().advisorPoint),
                        finalPresentation: 0,
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'Final Presentation') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: 0,
                        finalPresentation: parseInt(ppqs.advisorPoint) + parseInt(ppqs.committee1Point) + parseInt(ppqs.committee2Point),
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'Final Documentation') {
                      this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: 0,
                        finalPresentation: 0,
                        finalDocument: parseInt(ppqs.advisorPoint) + parseInt(ppqs.committee1Point) + parseInt(ppqs.committee2Point),
                      });
                      }
                    } else if (this.projectProgressData.length != 0) {
                      if (ppqs.data().progressType == 'progress1') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            console.log('work progress1',parseInt(ppqs.data().advisorPoint))
                            this.projectProgressData[index].progress1 = parseInt(ppqs.data().advisorPoint);
                          }
                        });
                      } else if (ppqs.data().progressType == 'progress2') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            console.log('work progress2')
                            this.projectProgressData[index].progress2 = parseInt(ppqs.data().advisorPoint);
                          }
                        });
                      } else if (ppqs.data().progressType == 'Final Presentation') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            console.log('work finalPresentation')
                            this.projectProgressData[index].finalPresentation = parseInt(ppqs.data().advisorPoint) + parseInt(ppqs.data().committee1Point) + parseInt(ppqs.data().committee2Point);
                          }
                        });
                      } else if (ppqs.data().progressType == 'Final Documentation') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            console.log('work finalDocument')
                            this.projectProgressData[index].finalDocument = parseInt(ppqs.data().advisorPoint) + parseInt(ppqs.data().committee1Point) + parseInt(ppqs.data().committee2Point);
                          }
                        });
                      }
                    }
                  });
                  }); 
                } else if (this.semesterType === "Semester 2") {
                  db.collection('projectProgress').where('seniorType','==','senior2').get().then((querySnapshotPP)=>{
                    querySnapshotPP.forEach((ppqs)=>{
                    if (this.projectProgressData.length == 0) {
                      if (ppqs.data().progressType == 'progress1') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: parseInt(ppqs.data().advisorPoint),
                        progress2: 0,
                        finalPresentation: 0,
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'progress2') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: parseInt(ppqs.data().advisorPoint),
                        finalPresentation: 0,
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'Final Presentation') {
                        this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: 0,
                        finalPresentation: parseInt(ppqs.advisorPoint) + parseInt(ppqs.committee1Point) + parseInt(ppqs.committee2Point),
                        finalDocument: 0,
                      });
                      } else if (ppqs.data().progressType == 'Final Documentation') {
                      this.projectProgressData.push({
                        id: projectsDoc.id,
                        progress1: 0,
                        progress2: 0,
                        finalPresentation: 0,
                        finalDocument: parseInt(ppqs.advisorPoint) + parseInt(ppqs.committee1Point) + parseInt(ppqs.committee2Point),
                      });
                      }
                    } else if (this.projectProgressData.length != 0) {
                      if (ppqs.data().progressType == 'progress1') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            this.projectProgressData[index].progress1 = parseInt(ppqs.data().advisorPoint);
                          }
                        });
                      } else if (ppqs.data().progressType == 'progress2') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            this.projectProgressData[index].progress2 = parseInt(ppqs.data().advisorPoint);
                          }
                        });
                      } else if (ppqs.data().progressType == 'Final Presentation') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            this.projectProgressData[index].finalPresentation = parseInt(ppqs.data().advisorPoint) + parseInt(ppqs.data().committee1Point) + parseInt(ppqs.data().committee2Point);
                          }
                        });
                      } else if (ppqs.data().progressType == 'Final Documentation') {
                        this.projectProgressData.map((item,index)=>{ 
                          if (item.id == ppqs.data().projectId) {
                            this.projectProgressData[index].finalDocument = parseInt(ppqs.data().advisorPoint) + parseInt(ppqs.data().committee1Point) + parseInt(ppqs.data().committee2Point);
                          }
                        });
                      }
                    }
                  });
                  }); 
                }
              }
            })
        })
    },
    loadingUserData() {
      this.checkTable += 1;
      console.log('this is project data =>',this.projectProgressData)
      this.items = [];
      db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((projectsDoc) => {
            if (this.academicYear == projectsDoc.data().academicYear) {
              if (this.semesterType === "Semester 1") {
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let test = [];
                            test = this.$root.log(this.projectProgressData)
                            console.log('this is what inside test=>', test.filter(item=>item.id == projectsDoc.id))
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1),
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2),
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation),
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument),
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.items.push(data);
                          }
                        }
                      }
                    });
                  });
              } else if (this.semesterType === "Semester 2") {
                this.loadingProjectProgress()
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let test = [];
                            test = this.$root.log(this.projectProgressData)
                            console.log('this is what inside test=>', test.filter(item=>item.id == projectsDoc.id))
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1),
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2),
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation),
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument),
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.items.push(data);
                          }
                        }
                      }
                    });
                  });
              }
            }
          });
        });
    },
    searchRecord() {
      db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((projectsDoc) => {
            if (this.academicYear == projectsDoc.data().academicYear) {
              if (this.semesterType === "Semester 1") {
                this.items = [];
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let test = [];
                            test = this.$root.log(this.projectProgressData)
                            console.log('this is what inside test=>', test.filter(item=>item.id == projectsDoc.id))
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1),
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2),
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation),
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument),
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.items.push(data);
                          }
                        }
                      }
                    });
                  });
              } else if (this.semesterType === "Semester 2") {
                this.items = [];
                this.loadingProjectProgress()
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let test = [];
                            test = this.$root.log(this.projectProgressData)
                            console.log('this is what inside test=>', test.filter(item=>item.id == projectsDoc.id))
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1),
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2),
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation),
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument),
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.items.push(data);
                          }
                        }
                      }
                    });
                  });
              }
            } else {
              alert("Sorry, there is no record in that year!");
            }
          });
        });
    },
    checkProgressTypeIsProgress1(data) {
      if (data.progressType == "progress1") {
        if (
          data.advisorPoint == 0 ||
          data.advisorPoint == undefined ||
          data.advisorPoint == null
        ) {
          return 0;
        } else {
          return parseInt(data.advisorPoint);
        }
      }
    },
    checkProgressTypeIsProgress2(data) {
      if (data.progressType == "progress2") {
        if (
          data.advisorPoint == 0 ||
          data.advisorPoint == undefined ||
          data.advisorPoint == null
        ) {
          return 0;
        } else {
          return parseInt(data.advisorPoint);
        }
      }
    },
    checkProgressTypeIsFinalPre(data) {
      let total =
        parseInt(data.advisorPoint) +
        parseInt(data.committee1Point) +
        parseInt(data.committee2Point);
      if (data.progressType == "Final Presentation") {
        if (total == 0 || total == undefined || total == null) {
          return 0;
        } else {
          return (
            parseInt(data.advisorPoint) +
            parseInt(data.committee1Point) +
            parseInt(data.committee2Point)
          );
        }
      }
    },
    checkProgressTypeIsFinalDoc(data) {
      let total =
        parseInt(data.advisorPoint) +
        parseInt(data.committee1Point) +
        parseInt(data.committee2Point);
      if (data.progressType == "Final Documentation") {
        if (total == 0 || total == undefined || total == null) {
          return 0;
        } else {
          return (
            parseInt(data.advisorPoint) +
            parseInt(data.committee1Point) +
            parseInt(data.committee2Point)
          );
        }
      }
    },
    downloadStudentScore() {
      let test = [];
      test = this.$root.log(this.projectProgressData)
      if (testEmpty(this.semesterType) || testEmpty(this.academicYear)) {
        db.collection("projects")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((projectsDoc) => {
              if (this.academicYear == projectsDoc.data().academicYear) {
                if (this.semesterType === "Semester 1") {
                 db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1)[0],
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2)[0],
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation)[0],
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument)[0],
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.exportExcelData.push(data);
                          }
                        }
                      }
                    });
                  });
                } else if (this.semesterType === "Semester 2") {
                  this.loadingProjectProgress()
                  db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
                      if (projectsDoc.data().isTeacherProject == 0) {
                        for (
                          let i = 0;
                          i < projectsDoc.data().projectMember.length;
                          i++
                        ) {
                          if (
                            usersDoc.id == projectsDoc.data().projectMember[i]
                          ) {
                            let data = {
                              id: usersDoc.data().studentId,
                              name: usersDoc.data().username,
                              progress1: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress1)[0],
                              progress2: test.filter(item=>item.id == projectsDoc.id).map(item=>item.progress2)[0],
                              finalPresentation: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalPresentation)[0],
                              finalDocument: test.filter(item=>item.id == projectsDoc.id).map(item=>item.finalDocument)[0],
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.exportExcelData.push(data);
                          }
                        }
                      }
                    });
                  });
                }
              }
            });
          });
        let res = this.$root.log(this.exportExcelData);
        if (res.length >= 1) {
          console.log('this is what inside test=>', res)
          this.onExport(res);
        }
      } else {
        alert("Please insert data before click download report.");
      }
    },
    onPickDownloadSemesterType(type) {
      if (type === "Semester 1") {
        this.semesterType = "Semester 1";
      } else if (type === "Semester 2") {
        this.semesterType = "Semester 2";
      } else {
        alert(
          "Sorry! there are something wrong in downloading score report system."
        );
      }
    },
    onExport(data) {
      const dataWS = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(
        wb,
        `SP_Score_${this.academicYear}-${this.semesterType}.xlsx`
      );
      this.exportExcelData = [];
    },
    routePage(id) {
      this.$router.replace("/menu/seniorProjectStore/" + id);
    },
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
  },
};
</script>

<style>
.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}
.zoom:hover {
  box-shadow: 2px 2px rgba(65, 60, 60, 0.678);
  transition: transform 0.25s, visibility 0.25s ease-in;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>