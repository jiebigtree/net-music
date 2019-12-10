<template>
  <div class="playing" v-show="playList.length > 0">
    <div class="full-screen" v-show="fullScreen">
      <button @click="small">small</button>
      {{ currentSong }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "playing",
  methods: {
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX"
    }),
    small() {
      this.setFullScreen(false);
    },
    large() {
      this.setFullScreen(true);
    }
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "currentSong",
      "playList",
      "currentIndex",
      "playing"
    ])
  },
  mounted() {
    console.log(this.currentSong);
  }
};
</script>
<style lang="stylus" scoped>
@import "../assets/stylus/playing"
</style>
