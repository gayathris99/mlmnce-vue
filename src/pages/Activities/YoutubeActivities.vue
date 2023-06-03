<template>
  <div class="q-pa-md">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto" id="video">YOUTUBE EVENT UPDATES</div>
    <div class="main-video q-mt-md row justify-center">
      <iframe :src="playerLink" allowfullscreen allow="autoplay" frameBorder="0"/>
    </div>
    <div class="video-list-container q-pa-md q-mt-lg row items-center justify-start align-center wrap q-gutter-x-xl q-gutter-y-md" v-if="youtubeData.length">
      <div v-for="(video, key) in youtubeData" :key="key" class="cursor-pointer" @click="playVideo(video.id)">
        <img v-if="isDesktop" :src="video.thumbnail" alt="" width="300" height="180">
        <img v-else :src="video.thumbnail" alt="" width="250" height="180">
        <div class="row items-center align-center q-mt-sm">
          <img src="~assets/Logo.svg" alt="" width="40" class="q-pr-md">
          <div>
            <div class="fw-500 ellipsis" style="max-width:200px">{{video.title}}</div>
            <div style="font-size: 10px; color: grey">MLMN College of Education - {{video.data}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'YoutubeActivities',
  data () {
    return {
      youtubeData: [],
      monthNames:  [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December" ],
    playerLink: 'https://www.youtube.com/embed/kPJQ6a0M6WU?autoplay=1&mute=0&controls=1'
    }
  },
  methods: {
    async getYoutubeData () {
      const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBr04Kuo2TsePNU-z3aAVXxIxI8j2EhU6Y&channelId=UCyDy78Bss9Mpf6PSVJTWLCw&part=snippet%2Cid&order=date&maxResults=20')
      console.log(data.items)
      data?.items?.forEach(video => {
        const obj = {}
        const thumbnail = video?.snippet?.thumbnails?.medium?.url
        const title = video.snippet?.title
        const date = `${new Date(video.snippet.publishedAt).getDate()} ${this.monthNames[new Date(video.snippet.publishedAt).getMonth()]}`
        const id = video.id.videoId
        Object.assign(obj, {
          thumbnail,
          title,
          date,
          id
        })
        this.youtubeData.push(obj)
      })
    },
    playVideo (id) {
      // window.scrollTo({top: 0, behavior: 'smooth'});
      document.getElementById('video').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      this.playerLink =  `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1`
    }
  },
  computed: {
    isDesktop () {
      return this.$q.screen.gt.sm
    }
  },
  mounted () {
    this.getYoutubeData()
  }
}
</script>

<style lang="scss" scoped>
.main-video {
iframe {
  width: 80vw;
  height: 550px;
  @media only screen and (max-width: $breakpoint-sm-max) {
    height: 300px;
    width: 100%;
  }
  @media only screen and (max-width: $breakpoint-xs-max) {
    height: 250px;
    width: 100%;
  }
}
}
</style>
