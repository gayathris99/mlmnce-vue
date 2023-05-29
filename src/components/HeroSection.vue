<template>
  <div class="q-mt-md">
  <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      transition-prev="slide-right"
      transition-next="slide-left"
      transition-duration="1500"
      :autoplay="true"
      infinite
      class="q-mb-md"
    >
      <q-carousel-slide :name="1" img-src="https://i.ibb.co/sWDRFzY/Rank-holders-2020-21-compressed-2.jpg" />
      <q-carousel-slide :name="2" img-src="https://i.ibb.co/PhWTqnb/College-Building-Side-View-1-compressed-2.jpg" />
      <q-carousel-slide :name="3" img-src="https://i.ibb.co/q9mRnhK/6-1-2-1.jpg" />
      <q-carousel-slide :name="4" img-src="https://i.ibb.co/r356FNF/Biology-Lab-min-compressed-2-compressed-1.jpg" />
      <q-carousel-slide :name="5" img-src="https://i.ibb.co/vPcMQRF/college-landscape-1-compressed-3.jpg" />
  </q-carousel>
  <div class="info-section row  items-center no-wrap q-pa-md" :class="isMobile ? '' : 'q-gutter-xl'">
    <div class="fs-16 col-md-8 col-sm-7 col-xs-12" :class="isMobile ? 'q-pa-xs' : 'q-px-xl'">
    We are happy to welcome you to Chikkamagaluru,
    the land of COFFEE. It is also known as 'Kashmir of Karnataka'.
    The contributions of Chikkamagaluru district to the field of education, art, culture, religion etc.,
    are remarkable. The Malnad Education Society was established in 1958,
    under the able leadership of the great freedom fighters
    Sri CMS Sastry,  Ex. MLA and Sri S. Ramachandra Rao, "Coffee Planter.
    The Malnad Education Society runs a bunch of Educational institutions
    right from Nursery to Graduation level. The aims of the institution is to enrich the
    academic wealth and cultural heritage of the Chikkamagaluru district.
    </div>
    <div v-if="!isMobile">
      <div style="color:#ff0302" class="q-mb-sm fs-20 fw-500 q-mt-md">IMPORTANT LINKS</div>
      <div class="important-links q-pa-md column">
        <a href="https://ncte.gov.in/Website/index.aspx/" class="q-py-xs fs-16" target="__blank">NCTE</a>
        <a href="http://www.naac.gov.in/index.php/en/" class="q-py-xs fs-16" target="__blank">NAAC</a>
        <a href="https://www.dsert.kar.nic.in/" class="q-py-xs fs-16" target="__blank">DSERT</a>
        <a href="https://dce.karnataka.gov.in/english" class="q-py-xs fs-16" target="__blank">Collegiate Education</a>
        <a href="http://www.kuvempu.ac.in/kan/index.php" class="q-py-xs fs-16" target="__blank">Kuvempu University</a>
        <a href="https://www.schooleducation.kar.nic.in/index.html" class="q-py-xs fs-16" target="__blank">Dept. of Public Instructions</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data () {
    return {
      slide: 1
    }
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
  },
}
</script>

<style lang="scss" scoped>
.q-carousel__slide {
   -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
a {
  text-decoration: none;
}
// .info-section {
//   // background: url(https://i.ibb.co/XkfDyjw/hallWay.jpg);


//   // height: 200px;


//   // background-attachment: fixed;
//   // background-position: center;
//   // background-repeat: no-repeat;
//   // background-size: cover;
//   // width: 400px;
//   // height: 200px;
//   // filter: opacity(0.4) drop-shadow(0 0 0 red);
//   // img {
//   //   filter: opacity(0.4) drop-shadow(0 0 0 red);
//   // }
// }

.important-links {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: #eadfe0;
}
//         .my_bg {
//             background-image:
//             linear-gradient(45deg,
//               rgba(245,70,66, 0.75),
//               rgba(8,83,156, 0.75)), url(
// 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png');
//             width: 100%;
//             height: 280px;
//             text-align: center;
//               color: #fff;
//         }
</style>
