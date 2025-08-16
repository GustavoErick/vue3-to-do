<template>
  <!-- <v-main>
    <router-view />
  </v-main> -->
  <v-app>
    <Alert
    v-if="alertStore.showAlert"/>
    <View></View>
  </v-app>

  <AppFooter />
</template>

<script setup>
  import View from './view.vue';
  import Alert from '@/components/shared/Alert.vue';

  import { useAlertStore } from '@/stores/alert';

  const alertStore = useAlertStore();
</script>