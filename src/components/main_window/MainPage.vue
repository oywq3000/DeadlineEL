<template>
  <div class="container">
    <div class="bar" @mousedown="startDrag">
      <Bar @handleAddTargetClick="handleAddTargetClick" />
    </div>
    <div class="display"></div>
  </div>
  <AddTarget ref="addTargetWin" />
</template>

<script scoped>
import AddTarget from "@/components/main_window/components/AddTarget.vue";
import Bar from "./components/MainBar.vue";
import { DragWindowMixins } from "@/components/mixins/DragWindowMixins";
import axios from "axios";
//@assets/components/add_target_window/AddTarget.vue
export default {
  mixins:[DragWindowMixins],//expose method startDrag for window drag
  components: {
    Bar,
    AddTarget,
  },
  methods: {
    handleAddTargetClick() {
      console.log("handleAddTargetClick");
      this.$refs.addTargetWin.openAddTargetWin();
    },
  },
  mounted() {
    console.log(axios.name);
  },
};
</script>

<style scoped>
.container {
  width: 640px;
  height: 360px;
  background-color: #e2d1a0;
  margin: 0,0,0,0;
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