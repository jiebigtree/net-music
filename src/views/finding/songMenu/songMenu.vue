<template>
  <div class="songMenu">
    <div class="top">
      <img :src="menuList.coverImgUrl" class="bg-img" alt="" width="100%" />
      <top-header>
        <div slot="one" @click="goBack">
          <svg-icon iconClass="back" style="width:20px;height:20px"></svg-icon>
        </div>
        <div slot="two">
          <span>歌单</span>
        </div>
        <div slot="three">
          <svg-icon
            iconClass="playing"
            style="width:20px;height:20px"
          ></svg-icon>
        </div>
        <div slot="four" four="true">
          <svg-icon
            iconClass="playing"
            style="width:20px;height:20px"
          ></svg-icon>
        </div>
      </top-header>
    </div>
    <div class="center">
      <scroll>
        <div slot="page-content">
          <div class="menu-detail-container">
            <img
              class="menu-pic"
              :src="menuList.coverImgUrl"
              width="100%"
              alt=""
            />
            <div class="text-detail">
              <h1 class="title">{{ menuList.name }}</h1>
              <!-- <div class="authour">
                <img
                  v-if="menuList.creator.avatarUrl"
                  :src="menuList.creator.avatarUrl"
                  alt=""
                  width="100%"
                />
                <span>{{ menuList.creator.nickname }}</span>
              </div> -->
              <div class="description">
                <span>{{ menuList.description }}</span>
              </div>
            </div>
          </div>
          <!-- list开始 -->
          <div class="outer-list-container">
            <div class="list" v-for="(item, index) in menuNum" :key="index">
              <list :id="item.id" :index="index"> </list>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "songMenu",
  data() {
    return {
      menuList: "",
      menuNum: [],
      menuArray: []
    };
  },
  created() {
    // 获取banner图
    let url =
      "http://localhost:3000/playlist/detail?id=" + this.$route.params.id;
    axios.get(url).then(res => {
      this.menuList = res.data.playlist;
      this.menuNum = res.data.privileges;
      console.log(res.data);
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
// @import "../../assets/stylus/finding"
.songMenu
  background-color #777
.bg-img
  filter blur(20px)
.menu-detail-container
  display flex
  justify-content space-between
  height 100px
  overflow hidden
  width 95%
  margin 0 auto
  .menu-pic
    width 35%
    border-radius:10px
  .text-detail
    width 60%
    .title
      font-size 14px
      color white
    .description
      font-size 10px
      margin-top 15px
      color #ddd
.outer-list-container
  margin-top 20px
  border-radius:15px 15px 0 0
  overflow hidden
</style>
