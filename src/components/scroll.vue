<template>
  <div class="scroll-container">
    <div class="wrapper" ref="wrapper">
      <div ref="content" class="content" :class="{ hasFooter: hasFooter }">
        <div>
          <slot name="page-content"></slot>
        </div>
        <div>
          <slot name="list-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    hasFooter:{
      type:Boolean,
      default:true
    }
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
  bottom 0
  left: 0;
  right: 0;
  .hasFooter
    padding-bottom 40px
</style>
