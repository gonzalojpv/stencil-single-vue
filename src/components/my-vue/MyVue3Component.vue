<script setup lang="ts">
defineProps({
  title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
  })
</script>

<template>
  <div class="vue-component">
    Form Vu3
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
