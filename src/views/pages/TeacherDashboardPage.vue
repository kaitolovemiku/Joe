<template>
  <div
    class="col-md-12"
    v-if="userData[0].role == 'teacher'"
  >
    <CCard>
      <CCardHeader>
        <CIcon name="cil-file" />
        <strong>Dashboard</strong>
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
              <CButton color="primary" @click="searchAcademicYear()"
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
        <div class="col-md-12">
          <h3>Semester 1</h3>
          <hr />
        </div>
        <CNav justified variant="tabs">
          <div v-on:click="filterProjectData('semester1', 'All Project')">
            <CNavItem active>
              <CCallout color="info">
                <small class="text-muted">All Project</small><br />
                <strong class="h4">{{ allProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1', 'S')">
            <CNavItem>
              <CCallout color="success">
                <small class="text-muted">Satisfactory Projects</small><br />
                <strong class="h4">{{ passedProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1', 'P')">
            <CNavItem>
              <CCallout color="info">
                <small class="text-muted">In Progress Projects</small><br />
                <strong class="h4">{{ inprogressProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1', 'I')">
            <CNavItem>
              <CCallout color="warning">
                <small class="text-muted">Incomplete Projects</small><br />
                <strong class="h4">{{ inCompleteProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1', 'U')">
            <CNavItem>
              <CCallout color="danger">
                <small class="text-muted">Unsatisfactory Projects</small><br />
                <strong class="h4">{{ unPassProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
        </CNav>
        <div class="row">
          <div class="col-md-12">
            <hr class="mt-0" />
          </div>
          <br />
        </div>
        <div class="col-md-12" style="margin-bottom: 20px">
          <multiselect
            v-model="searchProjectNameData"
            @input="rowClicked"
            :options="items1"
            placeholder="Search a project ..."
            label="projectNameEn"
            track-by="projectNameEn"
          ></multiselect>
        </div>
        <div class="col-md-12">
          <CDataTable
            hover
            striped
            :items="items1"
            :fields="fieldsS1"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
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
        </div>
        <div class="col-md-12">
          <hr />
          <h3>Semester 2</h3>
          <hr />
        </div>
        <CNav justified variant="tabs">
          <div v-on:click="filterProjectData('semester2', 'All Project')">
            <CNavItem active>
              <CCallout color="info">
                <small class="text-muted">All Project</small><br />
                <strong class="h4">{{ allProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2', 'S')">
            <CNavItem>
              <CCallout color="success">
                <small class="text-muted">Satisfactory Projects</small><br />
                <strong class="h4">{{ passedProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2', 'P')">
            <CNavItem>
              <CCallout color="info">
                <small class="text-muted">In Progress Projects</small><br />
                <strong class="h4">{{ inprogressProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2', 'I')">
            <CNavItem>
              <CCallout color="warning">
                <small class="text-muted">Incomplete Projects</small><br />
                <strong class="h4">{{ inCompleteProject2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2', 'U')">
            <CNavItem>
              <CCallout color="danger">
                <small class="text-muted">Unsatisfactory Projects</small><br />
                <strong class="h4">{{ unPassProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
        </CNav>
        <div class="row">
          <div class="col-md-12">
            <hr class="mt-0" />
          </div>
          <br />
        </div>
        <div class="col-md-12" style="margin-bottom: 20px">
          <multiselect
            v-model="searchProjectNameData"
            @input="rowClicked"
            :options="items2"
            placeholder="Search a project ..."
            label="projectNameEn"
            track-by="projectNameEn"
          ></multiselect>
        </div>
        <div class="col-md-12">
          <CDataTable
            hover
            striped
            :items="items2"
            :fields="fieldsS2"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
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
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import firebase from "firebase";
import Vue from "vue";
import Multiselect from "vue-multiselect";
import projectData from "./projectData";
import XLSX from "xlsx";

const db = firebase.firestore();
let itemProject1 = projectData;
let itemProject2 = projectData;

const testEmpty = (data) => {
  if (data === undefined || data === null || data === "") {
    return false;
  } else {
    return true;
  }
};

export default {
  name: "TeacherDashboard",
  components: {
    Multiselect,
  },
  data() {
    return {
      user: Vue.prototype.$session.getAll().user.data,
      isLoading: false,
      userName: [],
      filterProjectNameData: [],
      searchProjectNameData: "",
      searchKey: "",
      academicYear: new Date().getFullYear(),
      downloadSemesterType: "Semester 1",
      downloadAcademicYear: "2020",
      exportExcelData: [],
      allProject: 0,
      allProjectS2: 0,
      passedProject: 0,
      inprogressProject: 0,
      inCompleteProject: 0,
      unPassProject: 0,
      passedProjectS2: 0,
      inprogressProjectS2: 0,
      inCompleteProject2: 0,
      unPassProjectS2: 0,
      userData: [],
      fieldsS1: [
        { key: "projectNameEn", label: "Project Name" },
        { key: "projectPointSP1", label: "Semester 1 (Score)" },
        { key: "projectStatusSemester1", label: "Status" },
      ],
      fieldsS2: [
        { key: "projectNameEn", label: "Project Name" },
        { key: "projectPointSP2", label: "Semester 2 (Score)" },
        { key: "projectStatusSemester2", label: "Status" },
      ],
      items1: itemProject1,
      items2: itemProject2,
      activePage: 1,
    };
  },
  created() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (this.user.email == doc.data().email) {
            this.userData.push(doc.data());
          }
        });
      });
    this.allProject = projectData.length;
    this.allProjectS2 = projectData.length;
    this.passedProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "S"
    ).length;
    this.inprogressProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "P"
    ).length;
    this.inCompleteProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "I"
    ).length;
    this.unPassProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "U"
    ).length;
    this.passedProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "S"
    ).length;
    this.inprogressProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "P"
    ).length;
    this.inCompleteProject2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "I"
    ).length;
    this.unPassProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "U"
    ).length;
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      },
    },
  },
  methods: {
    onPickDownloadSemesterType(type) {
      if (type === "Semester 1") {
        this.downloadSemesterType = "Semester 1";
      } else if (type === "Semester 2") {
        this.downloadSemesterType = "Semester 2";
      } else {
        alert(
          "Sorry! there are something wrong in downloading score report system."
        );
      }
    },
    filterDownloadStudentScore() {
      if (
        testEmpty(this.downloadSemesterType) ||
        testEmpty(this.downloadAcademicYear)
      ) {
        db.collection("projects")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((projectsDoc) => {
              if (this.academicYear == projectsDoc.data().academicYear) {
                if (this.downloadSemesterType === "Semester 1") {
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
                } else if (this.downloadSemesterType === "Semester 2") {
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
    log(data) {
      for (let i = 0; i < data.length; i += 1) {
        if (typeof data[i] === "object") {
          try {
            data[i] = JSON.parse(JSON.stringify(data[i]));
          } catch (e) {
            console.error(e);
          }
        }
      }
      return data;
    },
    wait(ms) {
      var start = new Date().getTime();
      var end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
    },
    onExport(data) {
      const dataWS = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(
        wb,
        `seniorProjectStudentAcademicYear${this.downloadAcademicYear}${this.downloadSemesterType}.xlsx`
      );
      this.exportExcelData = [];
    },
    filterProjectData(semester, type) {
      if (semester === "semester1") {
        if (type === "All Project") {
          this.items1 = itemProject1;
        } else if (type === "S") {
          this.items1 = itemProject1.filter(
            (item) => item.projectStatusSemester1 === "S"
          );
        } else if (type === "P") {
          this.items1 = itemProject1.filter(
            (item) => item.projectStatusSemester1 === "P"
          );
        } else if (type === "I") {
          this.items1 = itemProject1.filter(
            (item) => item.projectStatusSemester1 === "I"
          );
        } else if (type === "U") {
          this.items1 = itemProject1.filter(
            (item) => item.projectStatusSemester1 === "U"
          );
        } else {
          this.items1 = itemProject1;
        }
      } else if (semester === "semester2") {
        if (type === "All Project") {
          this.items2 = itemProject2;
        } else if (type === "S") {
          this.items2 = projectData.filter(
            (item) => item.projectStatusSemester2 === "S"
          );
        } else if (type === "P") {
          this.items2 = itemProject2.filter(
            (item) => item.projectStatusSemester2 === "P"
          );
        } else if (type === "I") {
          this.items1 = itemProject1.filter(
            (item) => item.projectStatusSemester1 === "I"
          );
        } else if (type === "U") {
          this.items2 = itemProject2.filter(
            (item) => item.projectStatusSemester2 === "U"
          );
        } else {
          this.items2 = itemProject2;
        }
      } else {
        this.items1 = itemProject1;
        this.items2 = itemProject2;
      }
    },
    searchAcademicYear() {
      this.items1 = itemProject1.filter(
        (item) => item.academicYear == this.academicYear
      );
      this.items2 = itemProject2.filter(
        (item) => item.academicYear == this.academicYear
      );
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
    rowClicked(item) {
      this.$router.push({ path: `menu/projectCheckingSystem/${item.id}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
  },
};
</script>

<style>
/*the container must be positioned relative:*/
.autocomplete {
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  width: 97%;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}

.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}

.joecard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-color: purple;
}

.default:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
