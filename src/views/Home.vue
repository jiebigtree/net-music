<template>
  <div class="home">
    Home
    <svg-icon iconClass="back" style="width:20px;height:20px"></svg-icon>
    <scroll>
      <ul>
        <li v-for="(item, index) in 100" :key="index">{{ item }}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>
