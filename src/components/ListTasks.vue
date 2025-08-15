<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>A fazer</v-list-subheader>
      <v-list-item
        v-for="(task, index) in props.tasks"
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
              <v-list-item value="1" @click="toggleEdit(index)">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="toggleDelete(index)">
                <v-list-item-title>Deletar </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>
  <DialogTaskFields 
  :dialog="showDialogTaskFields"
  @toggleEdit="toggleEdit"
  :task="tasks[indexTaskSelected]"/>

  <DialogDelete
  :dialog="showDialogTaskDelete"
  @toggleDelete="toggleDelete"
  @deleteTask="deleteTask"
  :task="tasks[indexTaskSelected]"/>
</template>

<script setup>
  import { ref, defineProps, mergeProps } from 'vue';

  import DialogTaskFields from './DialogTaskFields.vue';
  import DialogDelete from './DialogTaskDelete.vue';

  const settingsSelection = ref([]);

  const props = defineProps({
    tasks: Object
  });

  const indexTaskSelected = ref(0);

  const showDialogTaskFields = ref(false);

  const toggleEdit = (index) => {
    if (index != null) {
      indexTaskSelected.value = index;
    }
    showDialogTaskFields.value = !showDialogTaskFields.value;
  }

  const showDialogTaskDelete = ref(false);

  const toggleDelete = (index) => {
    if (index != null) {
      indexTaskSelected.value = index;
    }
    showDialogTaskDelete.value = !showDialogTaskDelete.value;
  }

  const deleteTask = () => {
    props.tasks.splice(indexTaskSelected.value, 1);
    toggleDelete();
  }

</script>