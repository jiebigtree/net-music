<template>
  <div class="finding">
    <div class="top">
      <top-header>
        <div slot="one">
          <svg-icon
            iconClass="tinggeshiqu"
            style="width:20px;height:20px"
          ></svg-icon>
        </div>
        <div slot="two" class="input">
          <span>
            <svg-icon
              iconClass="search"
              style="width:35px;height:35px"
            ></svg-icon>
          </span>
          <input type="text" placeholder="听见" />
        </div>
        <div slot="three">
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
          <!-- banner图开始 -->
          <div class="banner-container">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(item, index) in bannerPics" :key="index">
                <img :src="item.pic" width="100%" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 几个小图标菜单开始 -->
          <div class="menu-icon-container">
            <div
              v-for="(item, index) in menuIcon"
              :key="index"
              class="one-menu-icon"
            >
              <span class="icon-outer">
                <span class="icon">
                  <svg-icon
                    :iconClass="item.icon"
                    style="width:22px;height:22px"
                  ></svg-icon>
                </span>
              </span>
              <span class="name">{{ item.name }}</span>
            </div>
          </div>
          <!-- 推荐歌单开始 -->
          <div class="introduce-song-menu">
            <div class="title">
              <h1>推荐歌单</h1>
              <span>歌单广场</span>
            </div>
            <div class="list-container">
              <div
                v-for="(item, index) in songMenu"
                :key="index"
                class="one-menu"
              >
                <div class="up">
                  <img :src="item.picUrl" alt="" width="100%" />
                  <span class="play-count">
                    <svg-icon
                      iconClass="triangle"
                      style="width:10px;height:10px"
                    ></svg-icon>
                    <span class="num">{{ item.playCount | numFilter }}</span>
                  </span>
                </div>
                <div class="down">
                  <span class="down-name">{{ item.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 中间部分开始 -->
          <div class="center-container">
            <div class="center-left">
              <h1 class="center-title">新碟</h1>
              <span class="center-title">|</span>
              <h1 class="center-title">新歌</h1>
            </div>
            <!-- <span class="center-right">更多新碟</span> -->
            <span class="center-right">更多新歌</span>
          </div>
          <!-- 新碟开始 -->
          <div class="dish-container">
            <div class="one-dish" v-for="(item, index) in newDish" :key="index">
              <img :src="item.blurPicUrl" alt="" width="100%" />
              <h1></h1>
              <span></span>
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
  name: "finding",
  data() {
    return {
      bannerPics: [],
      menuIcon: [
        { icon: "introduce", name: "每日推荐" },
        { icon: "gedan", name: "歌单" },
        { icon: "paihangbang", name: "排行榜" },
        { icon: "diantai", name: "电台" },
        { icon: "live", name: "直播" }
      ],
      songMenu: [],
      newDish: []
    };
  },
  created() {
    // 获取banner图
    axios.get("http://localhost:3000/banner?type=2").then(res => {
      // console.log(res.data.banners);
      this.bannerPics = res.data.banners;
    });
    // 获取歌单
    axios.get("http://localhost:3000/personalized?limit=6").then(res => {
      this.songMenu = res.data.result;
      // console.log(res.data.result);
    });
    // 获取专辑
    axios.get("http://localhost:3000/top/album?offset=0&limit=3").then(res => {
      console.log(res.data.albums);
      this.newDish = res.data.albums;
    });
  },
  filters: {
    numFilter(num) {
      if (num > 9999) {
        if (num > 99999999) num = parseInt(num / 100000000) + "亿";
        else num = parseInt(num / 10000) + "万";
      } else return num;
      return num;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/finding"
</style>
