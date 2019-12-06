<template>
  <div class="top-header-container">
    <div class="headers">
      <div class="one" v-if="one">
        <slot name="one"></slot>
      </div>
      <div class="two" v-if="two">
        <slot name="two"></slot>
      </div>
      <div class="three" v-if="three">
        <slot name="three"></slot>
      </div>
      <div class="four" v-if="four">
        <slot name="four"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-header",
  props: {
    one: {
      type: Boolean,
      default: true
    },
    two: {
      type: Boolean,
      default: true
    },
    three: {
      type: Boolean,
      default: true
    },
    four: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="stylus" scoped>
.headers
  width 100%
  height 50px
  position fixed
  top 0
  left 0
  right 0
  text-align center
  z-index 1
  .one,.two,.three,.four
    float left
    // border 1px solid yellow
    // box-sizing border-box
    width 12%
    text-align center
    line-height 50px
  .two
    width 60%
    margin 0 8%
</style>
