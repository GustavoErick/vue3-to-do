<template>
  <v-card
    append-icon="mdi-open-in-new"
    class="mx-auto"
    :href="card.href"
    width="380"
    :prepend-icon="card.icon"
    rel="noopener"
    :subtitle="card.subtitle"
    target="_blank"
    :title="card.title"
  ></v-card>
</template>

<script setup>
  const props = defineProps({
    card: Object
  })
</script>