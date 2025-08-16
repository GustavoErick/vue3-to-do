import { defineStore } from 'pinia'

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
        title: this.titleTaskCreating
      });
      this.titleTaskCreating = "";
      this.saveLocalData();
    },

    toggleEdit(index) {
      if (index != null) {
        this.indexTaskSelected = index;
      }
      this.showDialogTaskFields = !this.showDialogTaskFields;
      this.saveLocalData();
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
    },

    saveLocalData() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    getTasks() {
      let items = localStorage.getItem('tasks');
      if (items) {
        this.tasks = JSON.parse(items);
      }
    }
  }
})