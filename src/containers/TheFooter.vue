<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.mfu.ac.th/mfu-landing-page.html" target="_blank"
        >MFU</a
      >
      <span class="ml-1"
        >&copy; {{ new Date().getFullYear() }} Mae Fah Luang University</span
      >
    </div>
    <div class="ml-auto">
      <CButton color="primary" v-on:click="goToAboutUsPage()" >Senior Store</CButton>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter",
  methods: {
    goToAboutUsPage() {
      this.$router.replace({ name: "About Us" });
    },
  },
};
</script>

<style>
a {
  color: rgb(0, 32, 216);
}

a:hover {
  color:blueviolet;
  text-decoration: underline;
}
</style>
