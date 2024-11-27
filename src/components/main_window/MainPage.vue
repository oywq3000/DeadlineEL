<template>
  <div class="container">
    <div
      class="bar"
      @mousedown="startDrag"
      @mousemove.prevent="onDrag"
      @mouseup="stopDrag"
    >
      <Bar @handleAddTargetClick="handleAddTargetClick" />
    </div>
    <div class="display"></div>
  </div>
  <AddTarget ref="addTargetWin" />
</template>

<script scoped>
import AddTarget from "@/components/add_target_window/AddTarget.vue";
import Bar from "./components/MainBar.vue";
//@assets/components/add_target_window/AddTarget.vue
export default {
  data() {
    return {
      dragging: false,
      initialMousePos: { x: 0, y: 0 },
      initialWindowPos: { x: 0, y: 0 },
    };
  },
  components: {
    Bar,
    AddTarget,
  },
  methods: {
    handleAddTargetClick() {
      console.log("handleAddTargetClick");
      this.$refs.addTargetWin.openAddTargetWin();
    },
    startDrag(event) {
      console.log("startDrag");
      this.dragging = true;
      this.initialMousePos = { x: event.clientX, y: event.clientY };
      this.initialWindowPos = { x: 0, y: 0 }; // 需要替换为实际窗口位置
    },
    onDrag(event) {
      console.log("deltaX");
      if (!this.dragging) return;
      const deltaX = event.clientX - this.initialMousePos.x;
      const deltaY = event.clientY - this.initialMousePos.y;
    
      // 通过 IPC 发送新的窗口位置到主进程
      ipcRenderer.send('move-window', {
        x: this.initialWindowPos.x + deltaX,
        y: this.initialWindowPos.y + deltaY,
      });
    },
    stopDrag() {
      console.log("stopDrag");
      this.dragging = false;
    },
  },
};
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