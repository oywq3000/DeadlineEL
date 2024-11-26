<template>
  <MainPage @handleClose="close"></MainPage>
</template>


<script setup>
import MainPage from "./components/MainPage/MainPage.vue";
import {provide} from "vue";
function close() {
  window.electronAPI.close();
}

//provide
provide('handleClose', close);
</script>


