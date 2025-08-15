import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      { title: 'tarefa 1', subtitle: 'lavar a louça' },
      { title: 'tarefa 2', subtitle: 'jogar o lixo' },
      { title: 'tarefa 3', subtitle: 'varrer a casa' },
      { title: 'tarefa 4', subtitle: 'comprar mantimentos' },
    ],

    titleTaskCreating: ""
  }),

  actions: {
    addTask() {
    if (!this.titleTaskCreating) return;

    this.tasks.push({
      title: this.titleTaskCreating
    });

    this.titleTaskCreating = "";
  }
  }
})