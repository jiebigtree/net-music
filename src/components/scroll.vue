<template>
  <div class="scroll-container">
    <div class="wrapper" ref="wrapper" :class="{ nofooter: nofooter }">
      <div ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
  },
  data(){
    return{
      scroll:'',
      scrollY:''
    }
  },
  mounted() {
    setTimeout(()=>{
      this.initScroll()
    },600)
  },
  methods: {
      initScroll(){
        this.listScroll = new BScroll(this.$refs.wrapper,{
          probeType: 3,
          scrollY: true,
          click: true,
          useTransition:false,  // 防止iphone微信滑动卡顿
          bounce:true,
          momentumLimitDistance: 5
        });
        this.listScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));

          })
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow: hidden;
  position: absolute;
  top: 50px;
  bottom 50px
  left: 0;
  right: 0;
</style>
