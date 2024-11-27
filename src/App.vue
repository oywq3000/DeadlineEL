<template>
  <MainPage @handleClose="close"></MainPage>
</template>


<script setup>
import MainPage from "./components/main_window/MainPage.vue";
import {provide} from "vue";
function close() {
  window.electronAPI.close();
}

//provide
provide('handleClose', close);
</script>


