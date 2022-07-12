<script setup lang="ts">
import { type LinkData, mainLinks, projectDatas } from "@/Data.vue";

import AppSection from "@/components/home/AppSection.vue";

const shownProjectAbstracts = projectDatas.map((project) => {
  return project.abstract;
});
</script>

<template>
  <AppSection
    v-bind="{
      abstracts: shownProjectAbstracts,
      section: (mainLinks.find((link) => link.lid === 2) as LinkData),
    }"
  ></AppSection>
</template>
