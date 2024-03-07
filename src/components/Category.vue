<script setup lang="ts">
import clsx from "clsx";
import { PropType, defineProps } from "vue";

interface dataType {
  category: string;
  score: number;
  icon: string;
}

defineProps({
  data: { type: Object as PropType<dataType>, required: true },
  theme: { type: String, required: true },
});
</script>

<template>
  <div
    :class="
      clsx('flex gap-3 rounded-lg p-4', {
        ['bg-primary-light-red/5 text-primary-light-red']: theme === 'red',
        ['bg-primary-orangey-yellow/5 text-primary-orangey-yellow']:
          theme === 'yellow',
        ['bg-primary-green-teal/5 text-primary-green-teal']: theme === 'teal',
        ['bg-primary-cobalt-blue/5 text-primary-cobalt-blue']: theme === 'blue',
      })
    "
  >
    <img :src="data.icon" :alt="data.category" />
    <span class="font-semibold">{{ data.category }}</span>
    <span class="ml-auto text-neutral-dark-gray-blue">
      <strong class="font-bold">{{ data.score }}</strong>
      / 100
    </span>
  </div>
</template>
