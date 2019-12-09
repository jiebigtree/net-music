<template>
  <div class="list-container">
    <!-- {{ alName }} -->
    <div class="left">{{ index + 1 }}</div>
    <div class="center">
      <h1 class="song-name">{{ name }}</h1>
      <span class="singer-albulm">{{ singerName }}-{{ alName }}</span>
    </div>
    <div class="right">
      <span v-if="mv">
        <svg-icon iconClass="mv" style="width:20px;height:20px"></svg-icon>
      </span>
      <span>
        <svg-icon iconClass="more" style="width:20px;height:20px"></svg-icon>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "list",
  props: {
    id: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: "",
      picUrl: "",
      alName: "",
      singerName: "",
      mv: ""
    };
  },
  created() {
    let url = "http://localhost:3000/song/detail?ids=" + this.id;
    axios.get(url).then(res => {
      // console.log(res.data.data[0].url);
      // console.log(res.data.songs);
      this.alName = res.data.songs[0].al.name;
      this.picUrl = res.data.songs[0].al.picUrl;
      this.singerName = res.data.songs[0].ar[0].name;
      this.name = res.data.songs[0].name;
      this.mv = res.data.songs[0].mv;
    });
  }
};
</script>
<style lang="stylus" scoped>
.list-container
  background-color white
  display flex
  height 40px
  line-height 40px
  color #888
  .left
    width 10%
    text-align center
    line-height 40px
  .center
    width 70%
    .song-name
      line-height 24px
      font-size 14px
      font-weight bold
      color #333
    .singer-albulm
      line-height 12px
      font-size 10px
      display block
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
  .right
    width 20%
    text-align right
</style>
