<template>
  <div class="finding">
    <scroll>
      <ul>
        <li v-for="(item, index) in 120" :key="index">{{ item }}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "finding"
};
</script>
