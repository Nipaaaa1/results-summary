<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { data } from "./data.json";
import Category from "./components/Category.vue";

const themes = ["red", "yellow", "teal", "blue"];

useHead({
  title: "Results Summary Component",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/results-summary/images/favicon-32x32.png",
    },
  ],
});
</script>

<template>
  <main
    class="flex min-h-svh w-full flex-col font-hanken-grotesk md:items-center md:justify-center"
  >
    <div
      class="md:max-h-sm max-w-2xl overflow-clip md:flex md:rounded-3xl md:shadow-2xl md:shadow-neutral-light-lavender/40"
    >
      <div
        class="flex min-h-80 w-full flex-col items-center gap-6 rounded-b-3xl bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue px-6 pb-10 pt-6 md:flex-1 md:rounded-3xl"
      >
        <h3 class="text-xl text-white/80">Your Result</h3>
        <div
          class="flex flex-col items-center gap-2 rounded-full bg-gradient-to-b from-gradient-violet-blue to-gradient-persian-blue px-12 py-8"
        >
          <h1 class="text-6xl font-bold text-white">76</h1>
          <span class="text-lg font-semibold text-neutral-light-lavender">
            of 100
          </span>
        </div>
        <h2 class="text-3xl font-bold text-white">Great</h2>
        <p
          class="text-balance text-center text-lg text-neutral-pale-blue/85 md:text-pretty"
        >
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div class="flex flex-col gap-4 p-8 md:flex-1">
        <h3 class="text-xl font-bold">Summary</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="(result, index) in data">
            <Category :theme="themes[index]" :data="result" />
          </li>
        </ul>
        <button
          class="relative z-[1] overflow-clip rounded-full bg-neutral-dark-gray-blue py-4 text-lg text-white transition ease-in-out before:absolute before:inset-0 before:z-[-1] before:grid before:place-content-center before:bg-gradient-to-b before:from-gradient-light-slate-blue before:to-gradient-light-royal-blue before:opacity-0 before:transition-opacity before:content-[''] before:hover:opacity-100"
        >
          Continue
        </button>
      </div>
    </div>
  </main>
</template>
