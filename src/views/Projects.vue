<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { type ProjectData, projectDatas } from "@/Data.vue";

const route = useRoute();
const projectId = computed(() => {
  return parseInt(route.params.id as string);
});

function project(): ProjectData | undefined {
  return projectDatas.find((project) => project.id == projectId.value);
}

const projectData = project();
</script>

<template>
  <div>
    <h2>{{ $route.params.id }}</h2>
    <h2>{{ projectId }}</h2>
    <h2>{{ projectData?.id }}</h2>
    <h2>{{ projectData?.title }}</h2>
    <h2>{{ projectData?.description }}</h2>
  </div>
</template>
