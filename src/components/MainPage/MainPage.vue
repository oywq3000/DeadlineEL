<template>
  <div class="container">
    <div class="bar">
      <Bar/>
    </div>
    <div class="display"></div>
  </div>
</template>

<script scoped>

import Bar from './components/MainBar.vue'

export default {
  components: {
    Bar
  },
  methods: {
    
  }
}
</script>

<style scoped>
.container {
  width: 640px;
  height: 360px;
  background-color: #e2d1a0;
  margin: 0;
}
.bar {
  width: 100%;
  height: 45px;
  background-color: #f797a4;
  position: absolute;
  top: 0;
}
.display {
  width: 100%;
  height: 315px;
  background-color: #e2d1a0;
  position: absolute;
  top: 45px;
 
}
</style>