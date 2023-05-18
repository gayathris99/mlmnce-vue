<template>
  <q-layout>
    <the-header/>
    <q-page-container>
       <div class="q-pa-lg">
        <div style="color:#303a57" class="fw-500 fs-24">GALLERY</div>
       </div>
    </q-page-container>
    <the-footer class="footer"/>
  </q-layout>
</template>

<script>
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'

export default {
  name: 'AcademiaLayout',
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    isMobile () {
      return this.$q.screen.lt.sm
    },
    isTablet () {
      return this.$q.screen.gt.sm && this.$q.screen.lt.md
    },
    isDesktop () {
      return this.$q.screen.gt.md
    }
  }
}
</script>

<style lang="scss" scoped>
.text-color-blue {
  color: #152141;
}
a {
  text-decoration: none;
  color: $dark;
}
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
</style>
