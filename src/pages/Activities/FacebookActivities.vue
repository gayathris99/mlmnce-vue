<template>
  <div class="q-pa-lg page-container">
    <div style="color:#303a57" class="fw-500 fs-24">FACEBOOK EVENT UPDATES</div>
    <div class="facebook-post-container q-mt-sm row items-center justify-start align-center wrap q-gutter-x-xl q-gutter-y-xl" v-if="facebookData.length">
      <div v-for="(post, key) in facebookData" :key="key">
        <a :href="post.postLink" target="_blank">
          <div class="row q-gutter-x-sm">
            <img src="~assets/Logo.svg"  width="20" alt="">
            <div class="column ">
              <div class="fs-12 fw-600">MLMN College of Education</div>
              <div class="row q-gutter-x-sm items-center"  style="color:grey">
                <div class="fs-10">{{post.date}}</div>
                <div>&#xb7;</div>
                <q-icon name="public"></q-icon>
              </div>
            </div>
          </div>
          <div class="description ellipsis q-pb-sm fs-12">{{post.description}} &nbsp;</div>
          <div class="image-container">
            <img :src="post.picture" alt="">
          </div>
          <div class="controls">
            <div class="row items-center justify-between">
              <div class="row items-center justify-between">
                <q-icon name="thumb_up" style="color:#1677f2"></q-icon>
                <div class="fs-10 q-ml-xs" style="color:grey">{{post.likesCount}}</div>
              </div>
              <div class="row items-center justify-between fs-10" style="color:grey">
                <div>{{post.commentsCount}} comments</div>
                <div class="q-ml-sm">{{post.sharesCount}} shares</div>
              </div>
            </div>
          </div>
          <div class="bordered-class q-my-sm"></div>
          <div class="row items-center justify-between q-gutter-x-sm">
            <div class="row items-center q-gutter-x-sm">
              <q-icon name="thumb_up"></q-icon>
              <div class="fs-12">Like</div>
            </div>
            <div class="row items-center q-gutter-x-sm">
              <q-icon name="chat_bubble"></q-icon>
              <div class="fs-12">Comment</div>
            </div>
            <div class="row items-center q-gutter-x-sm">
              <q-icon name="send" class="material-symbols-outlined"></q-icon>
              <div class="fs-12">Share</div>
            </div>
          </div>
        </a>
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
      facebookData: [],
      monthNames:  [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December" ],
    }
  },
  methods: {
    async getFacebookData () {
        const { data } =  await axios.get('https://graph.facebook.com/103126739218961/feed?access_token=EABJ7WcHrZCq4BALpfvjj4fGg9rk22YAPSE0ZCvwfoUndOFCwvK17hj2aVzAL4NixzTBVHquZA8Sb8bHbIzeP9usmsp2dsljNeMWZACZC4aNgIr8uZAgIpWQ8ZAD7ZC5jaj93RWzkluBkO1TVkyrBZBPjpAR514SQLr8cFqCQDxv6qRvuks8m4069z&fields=created_time%2Cmessage%2Cshares%2Cpermalink_url%2Cfull_picture%2Clikes.limit(0).summary(true)%2Ccomments.limit(0).summary(true)%0A')
        data?.data.forEach(post => {
          const postObj = {}
          const picture = post.full_picture
          const date = `${new Date(post.created_time).getDate()} ${this.monthNames[new Date(post.created_time).getMonth()]}`
          const likesCount = post?.likes?.summary?.total_count
          const commentsCount = post?.comments?.summary?.total_count
          const sharesCount = post?.shares?.count
          const description = post?.message
          const postLink = post?.permalink_url
          Object.assign(postObj, {
            picture,
            date,
            likesCount,
            commentsCount,
            sharesCount,
            description,
            postLink
          })
          this.facebookData.push(postObj)
        })
    }
  },
  computed: {
    isDesktop () {
      return this.$q.screen.gt.sm
    }
  },
  mounted () {
    this.getFacebookData()
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.bordered-class {
  border-top: 0.5px solid grey;
}
.image-container {
  img {
    width: 300px;
    height: 200px;

   @media only screen and (max-width: $breakpoint-sm-max) {
    width: 250px;
    height: 150px;
   }
  }
}
.description {
    max-width: 300px;

   @media only screen and (max-width: $breakpoint-sm-max) {
    max-width: 250px;
   }
}
</style>
