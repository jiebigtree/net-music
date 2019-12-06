<template>
  <div class="tab-huge-container">
    <div class="tab">
      <div class="tab-container">
        <router-link
          tag="div"
          v-for="(one, index) in tabButtons"
          :key="index"
          class="tab-item"
          :to="one.to"
        >
          <span class="icon">
            <svg-icon
              :iconClass="one.iconClass"
              style="width:20px;height:20px"
            ></svg-icon>
          </span>
          <span class="tab-span">{{ one.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      tabButtons: [
        {
          iconClass: "music",
          name: "发现",
          to: "/finding"
        },
        {
          iconClass: "vidio",
          name: "视频",
          to: "/vidio"
        },
        {
          iconClass: "mine",
          name: "我的",
          to: "/mine"
        },
        {
          iconClass: "cloud",
          name: "云村",
          to: "/cloud"
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.tab-huge-container
  height 40px
  .tab
    height 40px
    position fixed
    bottom 0
    left 0
    right 0
    background-color rgba(250,250,250,.9)
    .tab-container
      display flex
      justify-content space-around
      height 40px
      .tab-span,.icon
        display block
        text-align center
        font-size 10px
        margin 3px
</style>
