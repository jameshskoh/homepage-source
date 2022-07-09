<script setup lang="ts">
import { provide } from "vue";
import type { InjectionKey } from "vue";

import Objects from "@/Objects.vue";

import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/main/Hero.vue";
import AppSection from "@/components/main/AppSection.vue";
import AppFooter from "@/components/AppFooter.vue";

const linkDataKey = Objects.linkDataKey;

provide(linkDataKey, [
  {
    id: 0,
    name: "About",
    path: "/about.html",
  },
  {
    id: 1,
    name: "Projects",
    path: "/projects.html",
  },
  {
    id: 2,
    name: "Blogs",
    path: "/blogs.html",
  },
]);
</script>

<template>
  <NavBar />
  <Hero />
  <AppSection />
  <AppFooter />
</template>

<style>
@import "assets/css/mystyles.css";
</style>
