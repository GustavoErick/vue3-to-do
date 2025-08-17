<template>
  <div class="ma-3">
    <h1>Sobre</h1>
    <p>Este projeto foi feito com o intuito de aprender e revisar alguns conceitos de Vue 3, Vuetify e Pinia.</p>
  </div>
  <v-list class="d-flex justify-center flex-wrap">
    <v-list-item
    v-for="card in cards"
    >
    <AboutCard :card="card"/>
    </v-list-item>
  </v-list> 
</template>

<script setup>
  import AboutCard from './AboutCard.vue';

  const cards = [
    { title: 'Github', subtitle: 'Dê uma olhada neste e em outros projetos', href: 'https://github.com/GustavoErick', icon: 'mdi-github' },
    { title: 'Linkedin', subtitle: 'Conecte-se comigo no Linkedin', href: 'https://www.linkedin.com/in/gustavo-erick-806778313/', icon: 'mdi-linkedin' }
  ]
</script>