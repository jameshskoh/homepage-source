<script setup lang="ts">
import type {
  BlogData,
  ContentAbstract,
  LinkData,
  ProjectData,
} from "@/Data.vue";

export interface AppAbstract {
  abstract: ContentAbstract;
  section: LinkData;
}

const props = defineProps<AppAbstract>();
</script>

<template>
  <!-- #TODO handle optional fields -->
  <div class="column is-4">
    <router-link :to="`${section.path}/${abstract.id}`">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              :src="`/images/${abstract.imagePath}`"
              :alt="abstract.imageAlt"
            />
          </figure>
        </div>
        <div class="card-content fixed-height">
          <div class="header py-2">
            <h1 class="title is-4">{{ abstract.headerTitle }}</h1>
            <time :datetime="abstract.date.toISOString().split('T')[0]">{{
              abstract.date.toDateString().split("T")[0]
            }}</time>
          </div>
          <div class="content">
            {{ abstract.description }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
