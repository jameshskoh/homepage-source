<script setup lang="ts">
import { type LinkData, blogDatas, mainLinks, projectDatas } from "@/Data.vue";

import Hero from "@/components/home/Hero.vue";
import AppSection from "@/components/home/AppSection.vue";

const shownProjectAbstracts = projectDatas.map((project) => {
  return project.abstract;
});

const shownBlogAbstracts = blogDatas.map((blog) => {
  return blog.abstract;
});
</script>

<template>
  <Hero />
  <AppSection
    v-bind="{
      abstracts: shownProjectAbstracts,
      section: (mainLinks.find((link) => link.lid === 2) as LinkData),
    }"
  ></AppSection>
  <AppSection
    v-bind="{
      abstracts: shownBlogAbstracts,
      section: (mainLinks.find((link) => link.lid === 3) as LinkData),
    }"
  ></AppSection>
</template>
