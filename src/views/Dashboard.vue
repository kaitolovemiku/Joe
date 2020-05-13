<template>
  <div>
    <h2 v-if="user">Welcome back {{user.data.displayName}}!</h2>
    <div>{{userData.email}}</div>
  </div>
</template>

<script>
//import MainChartExample from './charts/MainChartExample'
//import WidgetsDropdown from './widgets/WidgetsDropdown'
//import WidgetsBrand from './widgets/WidgetsBrand'
import { mapGetters } from "vuex";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  name: "Dashboard",
  components: {
    //MainChartExample,
    //WidgetsDropdown,
    //WidgetsBrand
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  data() {
    return {
      selected: "Month",
      userName: [],
      userData: firebase.auth().currentUser,
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2015"
          },
          country: { name: "USA", flag: "cif-us" },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago"
        }
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user" },
        { key: "country", _classes: "text-center" },
        { key: "usage" },
        { key: "payment", label: "Payment method", _classes: "text-center" },
        { key: "activity" }
      ]
    };
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (this.user.data.email == doc.data().email) {
            this.userName.push(doc.data().username);
            this.user.data.displayName = doc.data().username
          }
        });
        return this.userName;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    }
  }
};
</script>
