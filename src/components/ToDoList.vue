<template>
  <v-text-field
      label="Adicionar Tarefa"
      prepend-icon="mdi-plus"
      variant="solo-filled"
      @keyup.enter="taskStore.addTask"
      v-model="taskStore.titleTaskCreating"
      clearable
    ></v-text-field>

  <ListTasks 
  :tasks="tasks"
  />
</template>

<script setup>
  import ListTasks from './ListTasks.vue';
  import { useTaskStore } from '@/stores/task';

  const taskStore = useTaskStore();
  const tasks = taskStore.tasks;
</script>

<style scoped>
  .v-text-field {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>