<template>
  <div class="finding">
    <top-header>
      <div slot="one">1</div>
      <input type="text" slot="two" />
      <div slot="three">2</div>
    </top-header>
    <div class="ul">
      <scroll>
        <ul slot="page-content">
          <li v-for="(item, index) in 120" :key="index">{{ item }}</li>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "finding"
};
</script>
<style lang="stylus" scoped>
.ul
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color pink
</style>
