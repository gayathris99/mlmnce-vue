<template>
 <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">ORGANOGRAM</div>
    <div class="column  q-mt-md hero-image" :class="isDesktop ? 'justify-start' : 'justify-center'">
      <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/Organogram.svg" alt="Organogram">
      <small class="text-center q-mt-sm">Organogram of the institution</small>
    </div>
 </div>
</template>

<script>
export default {
  name: 'AboutOrganogram',
  computed: {
    isDesktop () {
      return this.$q.screen.gt.md
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-image{
     width: 100%;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 100%;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      width: 100%;
    }
}
.hero-image {
  img {
  max-width: 90%;
  height: auto;
  max-height: 900px;
  // border: 0.5px solid grey;
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
