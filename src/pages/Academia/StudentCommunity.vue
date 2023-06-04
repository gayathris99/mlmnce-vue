<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">STUDENT COMMUNITY</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(community, key) in communities" :key="key">
        <router-link :to="{ name: 'files', params: { fileName: community.fileName },}" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{community.name}}</div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCommunity',
  data () {
    return {
      communities: [
        {link: 'https://drive.google.com/file/d/1oJPJJOplUyMHViR0quvr4snpnDXg3Ia_/view', name: 'Students List - 2019-20', fileName: 'Students-List-2019-20'},
        {link: 'https://drive.google.com/file/d/1XZ7pEDgNmwx1JoEKESchrmYRQ2dvLq9F/view', name: 'Students List - 2020-21', fileName: 'Students-List-2020-21'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 75px;
  height: 75px;
}
a {
  text-decoration: none;
  color: $dark;
}
</style>
