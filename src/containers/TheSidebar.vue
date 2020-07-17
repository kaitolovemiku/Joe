<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <img alt="SE" src="https://bit.ly/3fQQqLQ" style="width:40px;"/> <h3 style="margin-left:10px;">Senior Store</h3>
    </CSidebarBrand>

    <CRenderFunction v-if="userRole=='guest'" flat :content-to-render="$options.nav"/>
    <CRenderFunction v-if="userRole=='admin'" flat :content-to-render="$options.navAdmin"/>
    <CRenderFunction v-if="userRole=='senior'" flat :content-to-render="$options.navSenior"/>
    <CRenderFunction v-if="userRole=='teacher'" flat :content-to-render="$options.navTeacher"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import navAdmin from './_navAdmin'
import navTeacher from './_navTeacher'
import navSenior from './_navSenior'
import Vue from "vue";

export default {
  name: 'TheSidebar',
  nav,
  navAdmin,
  navTeacher,
  navSenior,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
  },
  data() {
    return {
      selected: "Month",
      userRole: [],
    };
  },
  created() {
    this.userRole.push(Vue.prototype.$session.getAll().user.data.role);
  }
}
</script>
