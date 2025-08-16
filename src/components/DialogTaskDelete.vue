<template>
  <div>
    <v-dialog
      v-model="useTaskStore().showDialogTaskDelete"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-trash-can"
        title="Deletar Tarefa"
        text="Tem certeza que deseja deletar a tarefa?"
      >
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text="Cancelar"
            @click="$emit('toggleDelete')"
          ></v-btn>

          <v-btn
            color="red"
            text="Deletar"
            @click="$emit('deleteTask')"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/stores/task';

</script>