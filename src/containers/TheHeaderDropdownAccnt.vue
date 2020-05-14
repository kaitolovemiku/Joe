<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img id="photo" src="img/avatars/6.jpg" class="c-avatar-img" />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem v-on:click="profile()">
      <CIcon name="cil-user" />Profile
    </CDropdownItem>
    <CDropdownDivider />
    <CDropdownItem v-on:click="signOut()">
      <CIcon name="cil-lock-locked" />Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import firebase from "firebase/app";
const db = firebase.firestore();
import { mapGetters } from "vuex";

export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42,
      photoUrl: ""
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (this.user.data.email == doc.data().email) {
            this.photoUrl = doc.data().photo;
            this.userData = doc.id;
          }
        });
        firebase
          .storage()
          .ref()
          .child(this.photoUrl)
          .getDownloadURL()
          .then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'

            // Or inserted into an <img> element:
            var img = document.getElementById("photo");
            img.src = url;
          });
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    profile() {
      this.$router.replace("profile");
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/pages/login");
        });
    }
  }
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>