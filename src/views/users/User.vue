<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>User id: {{ $route.params.id }}</CCardHeader>
        <CCardBody>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">phone</th>
                <th scope="col">email</th>
                <th scope="col">address</th>
                <th scope="col">role</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <td scope="col">
                #
                <p id="userId" style="display:none">{{visibleData[0].value}}</p>
              </td>
              <td scope="col">
                <input id="phone" class="form-control" v-model="visibleData[1].value" />
              </td>
              <td scope="col">
                <input id="email" class="form-control" v-model="visibleData[2].value" />
              </td>
              <td scope="col">
                <input id="address" class="form-control" v-model="visibleData[3].value" />
              </td>
              <td scope="col">
                <select
                  id="role"
                  class="form-control"
                  :value="visibleData[4].value"
                  :options="role"
                >
                  <option v-for="option in role" v-bind:key="option">{{ option }}</option>
                </select>
              </td>
              <td scope="col">
                <select id="status" class="form-control" :value="visibleData[5].value">
                  <option v-for="option in status" v-bind:key="option">{{ option }}</option>
                </select>
              </td>
            </tbody>
          </table>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
          <CButton color="warning" @click="editData">Edit</CButton>
          <CButton color="danger" @click="deleteData">Delete</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from "./UsersData";
import firebase from "firebase";
const db = firebase.firestore();

export default {
  name: "User",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes("users");
    });
  },
  data() {
    return {
      usersOpened: null,
      user_data: [],
      phone: "",
      email: "",
      address: "",
      role: ["teacher", "senior", "admin", "guest"],
      status: ["online", "block"]
    };
  },
  computed: {
    fields() {
      return [
        { key: "key", label: this.username, _style: "width:150px" },
        { key: "value", label: "", _style: "width:150px;" }
      ];
    },
    userData() {
      const id = this.$route.params.id;
      const user = usersData.find((user, index) => index + 1 == id);
      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];
      return userDetails.map(([key, value]) => {
        return { key, value };
      });
    },
    visibleData() {
      return this.userData.filter(param => param.key !== "username");
    },
    username() {
      return this.userData.filter(param => param.key === "username")[0].value;
    }
  },
  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/users" });
    },
    editData() {
      const id = this.$route.params.id;
      let user = usersData.find((user, index) => index + 1 == id);
      usersData.forEach((data) => {
        if (data.id == user.id) {
          (data.address = document.getElementById("address").value),
            (data.email = document.getElementById("email").value),
            (data.phone = document.getElementById("phone").value),
            (data.role = document.getElementById("role").value),
            (data.status = document.getElementById("status").value);
        }
      });

      db.collection("users")
      .doc(document.getElementById("userId").innerHTML)
      .update({
        handPhone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        role: document.getElementById("role").value,
        status: document.getElementById("status").value
      })
      .then(() => {return window.alert("Update success"),this.goBack()})
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    },
    deleteData() {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(document.getElementById("userId").innerHTML)
          .delete()
          .then(() => {
            alert("Document deleted!");
            this.goBack();
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>
