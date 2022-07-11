<script setup lang="ts">
import TopicCard from "@/components/home/appsection/TopicCard.vue";
import type { SectionData } from "@/Data.vue";

// #QUEUE just a wrapper, due to limitation of imported interface
export interface AppSectionData {
  sectionData: SectionData;
}

const props = defineProps<AppSectionData>();
</script>

<template>
  <section class="container is-max-desktop block pb-5">
    <div class="container pb-5">
      <h1 class="title is-3 has-text-centered h-rule">
        {{ sectionData.sectionName }}
      </h1>
    </div>
    <div class="columns">
      <TopicCard
        v-for="componentData in sectionData.componentDatas"
        v-bind="{ cardData: componentData }"
      ></TopicCard>
    </div>
  </section>
</template>

<style></style>
