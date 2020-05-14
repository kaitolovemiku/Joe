<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.mfu.ac.th/mfu-landing-page.html" target="_blank">MFU</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Mae Fah Luang University</span>
    </div>
    <div class="ml-auto">
      <a href="https://www.mfu.ac.th/mfu-landing-page.html" target="_blank">Senior Store</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
