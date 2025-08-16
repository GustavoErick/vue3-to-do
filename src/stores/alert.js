import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: '',
    text: '',
  }),

  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)
    },

    notifyAlertCreated() {
      this.type = 'success';
      this.text = 'Atividade criada com sucesso!';
      this.notifyAlert();
    },

    notifyAlertEdited() {
      this.type = 'info';
      this.text = 'Atividade editada com sucesso!';
      this.notifyAlert();
    },

    notifyAlertDeleted() {
      this.type = 'success';
      this.text = 'Atividade deletada com sucesso!';
      this.notifyAlert();
    },

    notifyAlertError() {
      this.type = 'error';
      this.text = 'Erro ao tentar executar tarefa';
      this.notifyAlert();
    },
  }
})
