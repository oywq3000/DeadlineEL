<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <div class="header">
        <span>添加任务</span>
        <button @click="closeAddTargetWin">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrag: false,
      visible: false,
      username: "",
      password: "",
    };
  },
  methods: {
    openAddTargetWin() {
      console.log("openAddTargetWin");
      this.visible = true;
    },
    closeAddTargetWin() {
      this.visible = false;
    },
    handleLogin() {
      // Handle login logic here
      console.log("Username:", this.username, "Password:", this.password);
      this.closeModal();
    },
  },
};
</script>
<style scoped>
@import url(@/assets/styles/global.css);

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #e0d4ad;
  border-radius: 5px;
  height: 243px;
  width: 432px;
}

.header {
  width: 100%;
  height: 38px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #edc384;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  justify-items: center;
  align-items: center;
}
.header span {
  font-size: 18px;
  font-family: DingTalkJinBuTi;
  grid-column: 2;
}
.header button {
  grid-column: 3;
}
</style>