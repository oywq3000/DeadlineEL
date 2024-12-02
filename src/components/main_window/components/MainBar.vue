<template>
  <div class="mainBar">
    <button @click="handleAddTargetClick"></button>
    <div class="display_text">
      <span class="text" style="color: #0fbf6a">任务已完成：10</span>
      <span class="text" style="color: #ed5752">任务未完成：11</span>
    </div>
    <button @click="handleCloseClick"></button>
  </div>
  
</template>
<script scoped>
import { inject } from "vue";

export default {
  setup() {
   const close = inject("handleClose");
  },
  methods: {
    handleCloseClick() {
      close();
    },
    handleAddTargetClick() {
      this.$emit("handleAddTargetClick");
    },
  },
};
</script>
<style scoped>
@import url(@/assets/styles/global.css);
/*import global css*/
.mainBar {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  justify-items: center;
  align-items: center;
}
button {
  width: 52px;
  height: 24px;
  background-color: #e2d1a0;
  border: none;
  border-radius: 20px;
}
button.clicked {
  background-color: white;
  color: #000;
}

.display_text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  user-select: none;
}

.text {
  font-size: 18px;
  font-family: DingTalkJinBuTi;
}
</style>