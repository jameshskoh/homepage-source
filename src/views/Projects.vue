<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import {
  type LinkData,
  type ProjectData,
  mainLinks,
  projectDatas,
} from "@/Data.vue";

const homeLink = mainLinks.find((link) => link.lid === 0) as LinkData;
const projectLink = mainLinks.find((link) => link.lid === 2) as LinkData;

const route = useRoute();
const projectId = computed(() => {
  return parseInt(route.params.id as string);
});

function project(): ProjectData {
  return projectDatas.find(
    (project) => project.abstract.id === projectId.value
  ) as ProjectData;
}

const projectData = project();
const projectAbstract = projectData.abstract;
</script>

<template>
  <div class="container is-max-widescreen">
    <section class="section article-header">
      <figure class="image">
        <img
          :src="`/images/${projectAbstract.imagePath}`"
          :alt="projectData.abstract.imageAlt"
        />
      </figure>
      <div class="py-4 px-2">
        <h1 class="title is-1">{{ projectAbstract.headerTitle }}</h1>
        <h2 class="subtitle is-3">{{ projectAbstract.description }}</h2>
        <time :datetime="projectAbstract.date.toISOString().split('T')[0]">{{
          projectAbstract.date.toDateString().split("T")[0]
        }}</time>
      </div>
      <div class="divider"></div>
    </section>
  </div>
  <main class="container is-max-desktop">
    <div class="px-6 py-2">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><router-link :to="homeLink.path">Home</router-link></li>
          <li><router-link :to="projectLink.path">Projects</router-link></li>
          <li class="is-active">
            <a href="#">{{ projectAbstract.headerTitle }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <section class="section">
      <article class="content">
        <p v-for="part in projectData.content">{{ part }}</p>
      </article>
    </section>
    <div class="divider"></div>
    <section class="section">
      <h2 class="subtitle is-3">External Links:</h2>
      <div
        class="pb-4"
        v-for="link in projectData.externalLink"
        :key="link.lid"
      >
        <a :href="link.path">
          {{ link.name }}
        </a>
      </div>
    </section>
  </main>
</template>
