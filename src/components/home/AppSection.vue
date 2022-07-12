<script setup lang="ts">
import TopicCard from "@/components/home/appsection/TopicCard.vue";
import type { LinkData, ContentAbstract } from "@/Data.vue";

export interface AppAbstracts {
  abstracts: Array<ContentAbstract>;
  section: LinkData;
}

const props = defineProps<AppAbstracts>();
</script>

<template>
  <section class="container is-max-desktop block pb-5">
    <div class="container pb-5">
      <h1 class="title is-3 has-text-centered h-rule">
        {{ section.name }}
      </h1>
    </div>
    <div class="columns px-4">
      <TopicCard
        v-for="abstract in abstracts"
        :key="abstract.id"
        v-bind="{ abstract: abstract, section: section }"
      ></TopicCard>
    </div>
  </section>
</template>

<style></style>
