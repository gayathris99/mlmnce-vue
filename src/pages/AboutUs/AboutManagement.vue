<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">MANAGEMENT</div>
    <div class="row justify-center align-center items-center q-mt-md hero-image">
      <img src=" https://i.ibb.co/xLbWj2f/MES-ADMINISTRATIVE-GROUP-PHOTO.png" alt="MLMNCE">
    </div>
    <div class="team-members row items-start  align-center  q-gutter-y-lg wrap q-my-md justify-start" >
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/ZgTQztz/Keshava-Murthy.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri N Keshava Murthy</div>
        <div class="fs-14 fw-500">President</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/LRT2K5Q/Krishne-Gowda.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Dr. J.P Krishne Gowda</div>
        <div class="fs-14 fw-500">Vice President</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/kMnSgpD/Radha-Sundresh.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Smt. Radha Sundresh</div>
        <div class="fs-14 fw-500">Vice President</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/mJBby2z/Vijaya-Kumar.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Dr. D.L Vijayakumar</div>
        <div class="fs-14 fw-500">Hon Secretary</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/dbn11wf/Nataraj.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri D.H Nataraj</div>
        <div class="fs-14 fw-500">Treasurer</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/8N5VqwS/profile-Picture.png" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri S. Shankaranarayana Bhat</div>
        <div class="fs-14 fw-500">Joint Scretary</div>
      </div>
    </div>
     <div class="q-mt-xl fw-600 fs-20" style="color:#303a57">EC MEMBERS</div>
    <div class="team-members row items-start align-center  q-gutter-y-lg wrap q-my-sm justify-start">
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/z6LbW7q/Raje-Gowda.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri T.D Raje Gowda</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/1LyshL8/Sridevi.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Smt T Sridevi</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/DLvWRmv/Jayashree-Joshi.jpg" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Smt. Jayashree Joshi</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/8N5VqwS/profile-Picture.png" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri S.V Kanakaraj</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/8N5VqwS/profile-Picture.png" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri H.N Nanjegowda</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/8N5VqwS/profile-Picture.png" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Sri M.V Shadakshar</div>
      </div>
      <div class=" col-md-3 col-sm-4 col-xs-6 align-center  justify-start">
        <img src="https://i.ibb.co/8N5VqwS/profile-Picture.png" alt="MLMNCE">
        <div class="fs-16 fw-500 doc-title">Smt Kanthalakshmi</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutManagement',
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
  },
}
</script>

<style lang="scss" scoped>
// .hero-image {
//   img {
//   width: 100%;
//   max-height: 400px;
//   @media only screen and (max-width: $breakpoint-sm-max) {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//   object-position: center;
//   }
// }
// }
.hero-image{
     width: 90%;
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
  max-width: 100%;
  height: auto;
  border: 0.5px solid grey;
  display: row;
  justify-content: center;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 100%;
      height: auto;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      height: auto;
    }
  }
}
.team-members {
  img {
    width: 120px;
    height: 120px;
    @media only screen and (max-width: $breakpoint-xs-max) {
          width: 100px;
    height: 100px;
    }
  }
}
.doc-title {
  max-width: 150px;
}
</style>
