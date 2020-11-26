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
              <CButton color="primary" @click="searchRecord()"
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
      <CCardBody>
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
      exportExcelData: [],
      options: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "score", label: "Score" },
        { key: "grade", label: "Grade" },
      ],
      items: [],
    };
  },
  created() {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((projectsDoc) => {
          if (this.academicYear == projectsDoc.data().projectAcademicYear) {
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
                            score: projectsDoc.data().projectPointSP2,
                            grade: projectsDoc.data().projectStatusSemester2,
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
  methods: {
    searchRecord() {
      db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((projectsDoc) => {
            if (this.academicYear == projectsDoc.data().projectAcademicYear) {
              if (this.semesterType === "Semester 1") {
                this.items = [];
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
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
                            score: projectsDoc.data().projectPointSP1,
                            grade: projectsDoc.data().projectStatusSemester1,
                          };
                          this.items.push(data);
                        }
                      }
                    });
                  });
              } else if (this.semesterType === "Semester 2") {
                this.items = [];
                db.collection("users")
                  .get()
                  .then((usersQuerySnapshot) => {
                    usersQuerySnapshot.forEach((usersDoc) => {
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
                            score: projectsDoc.data().projectPointSP2,
                            grade: projectsDoc.data().projectStatusSemester2,
                          };
                          this.items.push(data);
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
    downloadStudentScore() {
      if (testEmpty(this.semesterType) || testEmpty(this.academicYear)) {
        db.collection("projects")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((projectsDoc) => {
              if (this.academicYear == projectsDoc.data().projectAcademicYear) {
                if (this.semesterType === "Semester 1") {
                  db.collection("users")
                    .get()
                    .then((usersQuerySnapshot) => {
                      usersQuerySnapshot.forEach((usersDoc) => {
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
                              score: projectsDoc.data().projectPointSP1,
                              grade: projectsDoc.data().projectStatusSemester1,
                            };
                            this.exportExcelData.push(data);
                          }
                        }
                      });
                    });
                } else if (this.semesterType === "Semester 2") {
                  db.collection("users")
                    .get()
                    .then((usersQuerySnapshot) => {
                      usersQuerySnapshot.forEach((usersDoc) => {
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
                              score: projectsDoc.data().projectPointSP2,
                              grade: projectsDoc.data().projectStatusSemester2,
                            };
                            this.exportExcelData.push(data);
                          }
                        }
                      });
                    });
                }
              }
            });
          });
        let res = JSON.parse(JSON.stringify(this.exportExcelData));
        if (res.length >= 1) {
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