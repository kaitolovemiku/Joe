<template>
  <div
    class="col-md-12"
    v-if="userData[0].role == 'teacher' || userData[0].role == 'admin'"
  >
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center" />
        <strong>Document Downloading Report</strong>
      </CCardHeader>
      <CCardBody>
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
            :fields="fields"
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
export default {
  name: "StudentDownloadReport",
  components: {
    Multiselect,
  },
  data() {
    return {
      user: Vue.prototype.$session.getAll().user.data,
      isLoading: false,
      searchData: [],
      userName: [],
      searchProjectNameData: "",
      userData: [],
      json: [
        { id: "1", name: "Dady", score: "21", grade: "I" },
        { id: "2", name: "Jonh", score: "25", grade: "I" },
        { id: "3", name: "James", score: "17", grade: "I" },
      ],
      fields: [
        { key: "projectNameEn", label: "Project Name" },
        { key: "download", label: "Downloading Rate" },
      ],
      items: projectData,
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
  },
  methods: {
    addUser() {
      this.$router.replace({ name: "Add new user" });
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
.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>