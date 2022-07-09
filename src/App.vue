<script setup lang="ts">
import { provide } from "vue";

import {
  linkDatas,
  linkDataKey,
  projectSectionDatas,
  projectSectionDataKey,
  blogSectionDatas,
  blogSectionDataKey,
} from "@/Objects.vue";

import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/main/Hero.vue";
import AppSection from "@/components/main/AppSection.vue";
import AppFooter from "@/components/AppFooter.vue";

provide(linkDataKey, linkDatas);
provide(projectSectionDataKey, projectSectionDatas);
provide(blogSectionDataKey, blogSectionDatas);
</script>

<template>
  <NavBar />
  <Hero />
  <AppSection v-bind="{ sectionData: projectSectionDatas }"></AppSection>
  <AppSection v-bind="{ sectionData: blogSectionDatas }"></AppSection>
  <AppFooter />
</template>

<style>
@import "assets/css/mystyles.css";
</style>
