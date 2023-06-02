<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">TOPPERS</div>
    <div class="column  q-mt-md hero-image" :class="isDesktop ? 'justify-start' : 'justify-center'">
      <img src="https://i.ibb.co/sWDRFzY/Rank-holders-2020-21-compressed-2.jpg" alt="MLMNCE">
      <small class="text-center q-mt-sm">Rank Toppers of Batch 2020-21</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutToppers',
  computed: {
    isDesktop () {
      return this.$q.screen.gt.md
    },
  }
}
</script>

<style lang="scss" scoped>
// img {
//   width: 85%;
//   max-height: 450px;
// }

.hero-image{
     width: 100%;
  // height: 500px;
  // border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      // width: 250px;
      width: 100%;
      //  height: 200px;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      // width: 250px;
      width: 100%;
      // height: 200px;
    }
}
.hero-image {
  img {
  max-width: 90%;
  height: auto;
  max-height: 600px;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      height: auto;
    }
  }
}
</style>
