<script setup lang="ts">
import { type LinkData, blogDatas, mainLinks } from "@/Data.vue";

import AppSection from "@/components/home/AppSection.vue";

const shownProjectAbstracts = blogDatas.map((blog) => {
  return blog.abstract;
});
</script>

<template>
  <!-- #TODO Refactor and use Enum for link.lid-->
  <AppSection
    v-bind="{
      abstracts: shownProjectAbstracts,
      section: (mainLinks.find((link) => link.lid === 3) as LinkData),
    }"
  ></AppSection>
</template>
