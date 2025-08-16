<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <v-main>
      <View/>
    </v-main>  
    <AppFooter />
  </v-app>
</template>

<script setup>
  import View from './view.vue';
  import Alert from '@/components/shared/Alert.vue';

  import { useAlertStore } from '@/stores/alert';

  const alertStore = useAlertStore();
</script>