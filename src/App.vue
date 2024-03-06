<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { data } from "./data.json";

useHead({
  title: "vueTest",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/src/assets/images/favicon-32x32.png",
    },
  ],
});
</script>

<template>
  <div>
    <h1>Hellow World</h1>
  </div>
</template>
