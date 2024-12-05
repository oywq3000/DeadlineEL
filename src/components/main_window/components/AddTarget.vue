<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <div class="header">
        <span>添加任务</span>
        <button @click="closeAddTargetWin">关闭</button>
      </div>
      <div class="input-content">
        <textarea v-model="text"></textarea>
        <div>
          <input id="date_input" ref="datePick" type="date" v-model="date"/>
          <input id="hours_input" type="number" v-model="hours" />
          <input id="minutes_input" type="number" v-model="minutes" />
        </div>
        <button class="certify_button" @click="handleTargetCreate">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {},
  data() {
    return {
      visible: false,
      hours: 0,
      minutes: 0,
      date:  new Date().toISOString().split("T")[0],
      text: "任务1",
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
    handleTargetCreate(){
      this.$emit("handleTargetCreate", this.text, this.date, this.hours, this.minutes);
      this.visible = false;
    }
  },

  //lifetime function
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
  user-select: none;
}
.header button {
  grid-column: 3;
}

.input-content {
  width: 432px;
  height: 205px;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-items: center;
}
.input-content textarea {
  grid-row: 1;
  height: 100px;
  width: 300px;
  margin-top: 20px;
  resize: none;
}
.input-content div {
  grid-row: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.input-content #date_input {
  width: 80px;
  height: 16px;
  font-size: 9.5px;
  
}
.input-content #hours_input {
  width: 40px;
  height: 16px;
  font-size: 9.5px;
  text-align: center;
}
.input-content #minutes_input {
  width: 40px;
  height: 16px;
  font-size: 9.5px;
  text-align: center;
}
.certify_button {
  width: 60px;
  height: 28px;
  grid-row: 3;
  }
</style>