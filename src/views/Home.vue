<template>
  <div class="home-layout">
    <Header />
    <div class="content">
      <div class="container">
        <div class="row d-flex flex-wrap">
          <div class="column description xs-12 md-4">
            <p>
              <span class="label mr-10">#GAMER</span>
              <span class="label label-warning">#SOCIALMEDIA</span>
            </p>
            <h1>Gamer Social Media</h1>
            <p>
              It is a Social Media App based on games for gamers.
            </p>
            <p>
              You can find the closest gamers to you easily. Explore new games
              and meet with gamers around you.
            </p>
            <p>Create your account and interact to other gamers!</p>
          </div>
          <div class="column xs-12 md-4">
            <div class="iphone-x">
              <i>Speaker</i>
              <b>Camera</b>
              <video
                autoplay=""
                autobuffer=""
                muted=""
                playsinline=""
                poster="@/assets/iphone_welcome_bg.jpg"
              >
                <source src="@/assets/iphone_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="download-btn">
              <a
                href="https://apps.apple.com/us/app/id1527982009"
                target="blank"
                ><img
                  height="50"
                  src="@/assets/appstore.svg"
                  alt="Apple App Store"
              /></a>
              <a
                href="https://play.google.com/store/apps/details?id=com.gasome.android&hl=tr"
                target="blank"
                ><img
                  height="50"
                  src="@/assets/googleplay.png"
                  alt="Google Play Store"
              /></a>
            </div>
          </div>
          <div class="column description align-left xs-12 md-4">
            <p>
              <span class="label label-warning mr-10">#SWAP</span>
              <span class="label">#GAMES</span>
            </p>
            <h1>Swap Games</h1>
            <p>
              It is also a game swapping App for gamers.
            </p>
            <p>
              Users can swap their games with other users and they can reach
              thousands of games easily.
            </p>
            <p>Create your account and start to swapping games!</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Header,
    Footer
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
