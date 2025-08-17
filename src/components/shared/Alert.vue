<template>
  <div class="alert-notification">
    <v-alert
      class="animate__animated animate__fadeInUpBig"
      closable
      :text="alertStore.text"
      :type="alertStore.type"
    ></v-alert>
  </div>
</template>

<script setup>
  import 'animate.css';

  import { useAlertStore } from '@/stores/alert';

  const alertStore = useAlertStore();
</script>

<style scoped>
  .alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 90%; 
    max-width: 400px; 
    left: 50%; 
    transform: translateX(-50%);
  }
</style>