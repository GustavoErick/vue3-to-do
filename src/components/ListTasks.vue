<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>A fazer</v-list-subheader>
      <v-list-item
        v-for="(task, index) in taskStore.tasks"
        :key="index"
        @click="taskStore.toggleDoneTask(index)"
      >
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title> {{ task.title }} </v-list-item-title>
        <v-list-item-subtitle> {{ task.subtitle }} </v-list-item-subtitle>

        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props: menu }">
              <v-tooltip location="top">
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn
                    v-bind="mergeProps(menu, tooltip)"
                    color="grey-lighten-1"
                    icon="mdi-dots-vertical"
                    variant="text"
                  ></v-btn>
                </template>
                <span>Menu</span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                <v-list-item-title>Deletar </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>

  <DialogTaskFields 
  :task="taskStore.tasks[taskStore.indexTaskSelected]"
  />

  <DialogDelete/>
</template>

<script setup>
  import { ref, mergeProps } from 'vue';
  import { useTaskStore } from '@/stores/task';

  import DialogTaskFields from './DialogTaskFields.vue';
  import DialogDelete from './DialogTaskDelete.vue';
  
  const settingsSelection = ref([]);
  const taskStore = useTaskStore();
</script>