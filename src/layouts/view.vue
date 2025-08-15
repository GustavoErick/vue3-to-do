<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
        <v-list>
            <v-list-item
                prepend-avatar="https://avatars.githubusercontent.com/u/105515712?v=4"
                subtitle="Lista de Tarefas"
                title="Gustavo Erick"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                color="primary"
                :to="item.to"
                :icon="item.icon"
                >
                
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Lista de Tarefas</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(true);

  const items = [
    { text: "Home", icon: "mdi-home", to: "/home" },
    { text: "Sobre", icon: "mdi-information", to: "/about" }

  ]
</script>