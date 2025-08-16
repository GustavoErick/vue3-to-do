import { defineStore } from 'pinia'

import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    titleTaskCreating: "",
    indexTaskSelected: 0,
    showDialogTaskDelete: false,
    showDialogTaskFields: false,
  }),

  actions: {
    addTask() {
      if (this.titleTaskCreating.length < 5) return;
      this.tasks.push({
        title: this.titleTaskCreating,
        done: false
      });
      this.titleTaskCreating = "";
      this.saveLocalData();
      alertStore.notifyAlertCreated();
    },

    toggleEdit(index) {
      if (index != null) {
        this.indexTaskSelected = index;
      }
      this.showDialogTaskFields = !this.showDialogTaskFields;
    },

    editTask(taskEdited) {
      this.tasks[this.indexTaskSelected] = taskEdited;
      this.toggleEdit();
      this.saveLocalData();
      alertStore.notifyAlertEdited();
    },

    toggleDelete(index) {
      if (index != null) {
        this.indexTaskSelected = index;
      }
      this.showDialogTaskDelete = !this.showDialogTaskDelete;
    },

    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
      alertStore.notifyAlertDeleted();
    },

    saveLocalData() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    getTasks() {
      let items = localStorage.getItem('tasks');
      if (items) {
        this.tasks = JSON.parse(items);
      }
    },

    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalData();
    }
  }
})