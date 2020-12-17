<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$root.log = function log() {
      for (let i = 0; i < arguments.length; i += 1) {
        if (typeof arguments[i] === "object") {
          try {
            arguments[i] = JSON.parse(JSON.stringify(arguments[i]));
          } catch (e) {
            console.error(e);
          }
        }
      }
      return arguments[0];
    };
  },
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
