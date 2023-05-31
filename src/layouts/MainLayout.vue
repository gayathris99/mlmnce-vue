<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <the-header/>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <the-footer/>
  </q-layout>
</template>

<script>
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
