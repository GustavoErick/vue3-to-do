<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>A fazer</v-list-subheader>
      <v-list-item
        v-for="(task, index) in useTaskStore().tasks"
        :key="index"
      >
        <template v-slot:prepend="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected" @update:model-value="select"></v-checkbox-btn>
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
              <v-list-item value="1" @click="useTaskStore().toggleEdit(index)">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="useTaskStore().toggleDelete(index)">
                <v-list-item-title>Deletar </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>

  <DialogTaskFields 
  @toggleEdit="useTaskStore().toggleEdit"
  :task="useTaskStore().tasks[useTaskStore().indexTaskSelected]"/>

  <DialogDelete
  @toggleDelete="useTaskStore().toggleDelete"
  @deleteTask="useTaskStore().deleteTask"
  />
</template>

<script setup>
  import { ref, mergeProps } from 'vue';
  import { useTaskStore } from '@/stores/task';

  import DialogTaskFields from './DialogTaskFields.vue';
  import DialogDelete from './DialogTaskDelete.vue';
  
  const settingsSelection = ref([]);

</script>