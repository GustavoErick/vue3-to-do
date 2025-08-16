<template>
  <div>
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-list-box"
        title="Editar Tarefa"
      >
        <v-card-text>
          <v-text-field
            label="Nome*"
            v-model="taskEdited.title"
            required
          ></v-text-field>

          <v-text-field
            label="Descrição da tarefa"
            v-model="taskEdited.subtitle"
          ></v-text-field>

          <small class="text-caption text-medium-emphasis">*Campos obrigatórios</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text="Cancelar"
            variant="outlined"
            @click="taskStore.toggleEdit()"
          ></v-btn>
          <v-btn
            color="primary"
            text="Ok"
            variant="elevated"
            @click="taskStore.editTask(taskEdited)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { defineProps, ref, watch } from 'vue';
  import { useTaskStore } from '@/stores/task';
  
  const props = defineProps({
    task: Object
  });

  const taskEdited = ref({});
  
  const taskStore = useTaskStore();

  watch(
    () => taskStore.showDialogTaskFields,
    (isOpen) => {  // isOpen é o valor de showDialogTaskFields, que pode ser true ou false. O watch observa quando esse valor é alterado, ou seja, quando o dialog é aberto ou fechado.
      if (isOpen) {
        taskEdited.value = { ...props.task };
      }
    }
  );

</script>