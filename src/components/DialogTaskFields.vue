<template>
  <div>
    <v-dialog
      v-model="useTaskStore().showDialogTaskFields"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-list-box"
        title="Editar Tarefa"
      >
        <v-card-text>
          <v-text-field
            label="Nome*"
            v-model="props.task.title"
            required
          ></v-text-field>

          <v-text-field
            label="Descrição da tarefa"
            v-model="props.task.subtitle"
          ></v-text-field>

          <small class="text-caption text-medium-emphasis">*Campos obrigatórios</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text="Ok"
            variant="tonal"
            @click="$emit('toggleEdit')"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import { useTaskStore } from '@/stores/task';

  const props = defineProps({
    task: Object
  });

</script>