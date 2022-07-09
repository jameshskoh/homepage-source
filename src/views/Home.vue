<script setup lang="ts">
import { projectSectionDatas, blogSectionDatas } from "@/Objects.vue";

import Hero from "@/components/main/Hero.vue";
import AppSection from "@/components/main/AppSection.vue";
</script>

<template>
  <Hero />
  <AppSection v-bind="{ sectionData: projectSectionDatas }"></AppSection>
  <AppSection v-bind="{ sectionData: blogSectionDatas }"></AppSection>
</template>
