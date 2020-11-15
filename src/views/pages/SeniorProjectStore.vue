<template>
  <div>
    <CCard class="shadow">
      <CCardHeader>
        <CIcon name="cil-pencil" />
        <strong>Senior Project Store</strong>
      </CCardHeader>
      <CCardBody>
        <div class="input-group mb-3">
          <multiselect
            v-model="search"
            :options="options"
            placeholder="Input a project name ..."
            style="width: 90%"
          ></multiselect>
          <div class="input-group-append" style="width: 10%">
            <button
              v-on:click="searchProject()"
              class="btn btn-info"
              type="button"
            >
              <CIcon name="cil-magnifying-glass" /> Search
            </button>
          </div>
        </div>
      </CCardBody>
    </CCard>
    <div v-for="project in searchObject" v-bind:key="project.id">
      <CCard class="zoom" v-on:click="routePage(project.id)">
        <CCardBody>
          <h3 style="padding: 20px">
            {{ project.projectNameEn }} <i>({{ project.projectNameTh }})</i>
          </h3>
          <p style="padding-left: 20px; paddig-bottom: 10px">
            {{ project.projectBg }}
          </p>
          <p style="padding-left: 20px; paddig-bottom: 10px">
            <b>Project type:</b>
            {{ project.projectType }}
            <b>Project duration:</b>
            {{ project.projectDuration }}
            <!-- <b>Project point:</b>
            {{project.projectPoint}}
            <b>Project status:</b>
            {{project.projectStatus}} -->
          </p>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

export default {
  name: "SeniorProjectStore",
  components: {
    Multiselect,
  },
  data() {
    return {
      projects: [],
      search: "",
      searchObject: [],
      options: [],
    };
  },
  created() {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().isTeacherProject == 1 ||
            doc.data().projectStatusSemester1 == "S" ||
            doc.data().projectStatusSemester2 == "S"
          ) {
            this.projects.push({
              id: doc.id,
              projectNameTh: doc.data().projectNameTh,
              projectNameEn: doc.data().projectNameEn,
              projectBg: doc.data().projectBg,
              projectType: doc.data().projectType,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectStatus: doc.data().projectStatus,
            });
          }
          console.log(doc.id, " => ", doc.data());
        });
        return (this.searchObject = this.projects);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.options.push(doc.data().projectNameEn);
          this.options.push(doc.data().projectNameTh);
        });
      });
  },
  methods: {
    searchProject() {
      this.searchObject = [];
      if (this.search) {
        this.projects.forEach((doc) => {
          if (
            this.search == doc.projectNameTh ||
            this.search == doc.projectNameEn
          ) {
            this.searchObject.push(doc);
          }
        });
      } else {
        this.searchObject = this.projects;
      }
      return this.searchObject;
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