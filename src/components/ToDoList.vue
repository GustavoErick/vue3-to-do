<template>
  <v-text-field
      label="Adicionar Tarefa"
      prepend-icon="mdi-plus"
      variant="solo-filled"
      @keyup.enter="useTaskStore().addTask"
      v-model="useTaskStore().titleTaskCreating"
      clearable
    ></v-text-field>

  <ListTasks/>
</template>

<script setup>
  import { onMounted } from 'vue';
  import ListTasks from './ListTasks.vue';
  import { useTaskStore } from '@/stores/task';

  const taskStore = useTaskStore();

  onMounted(() => {
    taskStore.getTasks();
  });
</script>

<style scoped>
  .v-text-field {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>