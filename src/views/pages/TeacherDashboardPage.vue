<template>
  <div class="col-md-12" v-if="userData[0].role == 'teacher'">
    <CCard>
      <CCardHeader>
        <CIcon name="cil-file" />
        <strong>Project Score Chart</strong>
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
          <div v-on:click="filterProjectData('semester1','All Project')">
            <CNavItem active>
              <CCallout color="info">
                <small class="text-muted">All Project</small><br />
                <strong class="h4">{{ allProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1','Passed')">
            <CNavItem>
              <CCallout color="success">
                <small class="text-muted">Passed Projects</small><br />
                <strong class="h4">{{ passedProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1','In progress')">
            <CNavItem>
              <CCallout color="warning">
                <small class="text-muted">Inprogress Projects</small><br />
                <strong class="h4">{{ inprogressProject }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester1','Failed')">
            <CNavItem>
              <CCallout color="danger">
                <small class="text-muted">Fail Projects</small><br />
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
            :options="items"
            placeholder="Search a project ..."
            label="projectNameEn"
            track-by="projectNameEn"
          ></multiselect>
        </div>
        <div class="col-md-12">
          <CDataTable
            hover
            striped
            :items="items"
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
          <div v-on:click="filterProjectData('semester2','All Project')">
            <CNavItem active>
              <CCallout color="info">
                <small class="text-muted">All Project</small><br />
                <strong class="h4">{{ allProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2','Passed')">
            <CNavItem>
              <CCallout color="success">
                <small class="text-muted">Passed Projects</small><br />
                <strong class="h4">{{ passedProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2','In progress')">
            <CNavItem>
              <CCallout color="warning">
                <small class="text-muted">Inprogress Projects</small><br />
                <strong class="h4">{{ inprogressProjectS2 }}</strong>
              </CCallout>
            </CNavItem>
          </div>
          <div v-on:click="filterProjectData('semester2','Failed')">
            <CNavItem>
              <CCallout color="danger">
                <small class="text-muted">Fail Projects</small><br />
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
            :options="items"
            placeholder="Search a project ..."
            label="projectNameEn"
            track-by="projectNameEn"
          ></multiselect>
        </div>
        <div class="col-md-12">
          <CDataTable
            hover
            striped
            :items="items"
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

const db = firebase.firestore();
let searchData = projectData;

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
      allProject: 0,
      allProjectS2: 0,
      passedProject: 0,
      inprogressProject: 0,
      unPassProject: 0,
      passedProjectS2: 0,
      inprogressProjectS2: 0,
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
      items: searchData,
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
      (item) => item.projectStatusSemester1 === "Passed"
    ).length;
    this.inprogressProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "In progress"
    ).length;
    this.unPassProject = projectData.filter(
      (item) => item.projectStatusSemester1 === "Failed"
    ).length;
    this.passedProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "Passed"
    ).length;
    this.inprogressProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "In progress"
    ).length;
    this.unPassProjectS2 = projectData.filter(
      (item) => item.projectStatusSemester2 === "Failed"
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
    filterProjectData(semester, type) {
      if (semester === "semester1") {
        if (type === "All Project") {
          this.items = projectData;
        } else if (type === "Passed") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester1 === "Passed"
          );
        } else if (type === "In progress") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester1 === "In progress"
          );
        } else if (type === "Failed") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester1 === "Failed"
          );
        } else {
          this.items = projectData;
        }
      } else if (semester === "semester2") {
        if (type === "All Project") {
          this.items = projectData;
        } else if (type === "Passed") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester2 === "Passed"
          );
        } else if (type === "In progress") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester2 === "In progress"
          );
        } else if (type === "Failed") {
          this.items = projectData.filter(
            (item) => item.projectStatusSemester2 === "Failed"
          );
        } else {
          this.items = projectData;
        }
      } else {
        this.items = projectData;
      }
    },
    searchAcademicYear() {
      this.items = projectData.filter(
        (item) => item.academicYear == this.academicYear
      );
    },
    // searchProject() {
    //   var logTime = {};
    //   logTime.start = Date.now();
    //   let result = [];
    //   let searchDataInFunction = this.searchProjectNameData;
    //   let key = this.searchKey;
    //   let data = 'Test002'
    //   projectData.forEach(search);
    //   function search(i, item) {
    //     //console.log(this[searchKey].indexOf(searchString));

    //     if (key === "" || key === undefined || key === null) {
    //       if (data.toLowerCase().indexOf(searchDataInFunction) > 0) {
    //         result.push(item);
    //       }
    //     } else {
    //       if (key.toLowerCase().indexOf(searchDataInFunction) > 0) {
    //         result.push(item);
    //       }
    //     }
    //     searchData = result;
    //   }
    // },
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
    rowClicked(item, index) {
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
