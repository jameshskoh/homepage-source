<script setup lang="ts">
import { projectSectionDatas, blogSectionDatas } from "@/Data.vue";

import Hero from "@/components/home/Hero.vue";
import AppSection from "@/components/home/AppSection.vue";
</script>

<template>
  <Hero />
  <AppSection v-bind="{ sectionData: projectSectionDatas }"></AppSection>
  <AppSection v-bind="{ sectionData: blogSectionDatas }"></AppSection>
</template>
