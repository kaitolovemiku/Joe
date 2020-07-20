<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            id="photo"
            :src="imageSrc"
            class="c-avatar-img"
          />
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
import Vue from "vue";

export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      user: Vue.prototype.$session.getAll().user.data,
      userData: "",
      itemsCount: 42,
      photoUrl: "",
      imageSrc: "default.jpg"
    };
  },
  created() {
    this.imageSrc = Vue.prototype.$session.getAll().user.data.photo;
  },
  methods: {
    profile() {
      this.$router.replace("profile");
    },
    signOut() {
      Vue.prototype.$session.destroy();
      this.$router.replace("/pages/login");
    }
  }
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>