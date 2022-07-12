<script setup lang="ts">
import type { CardData } from "@/Data.vue";

// #QUEUE just a wrapper, due to limitation of imported interface
export interface AppCardData {
  cardData: CardData;
}

const props = defineProps<AppCardData>();
</script>

<template>
  <!-- #TODO handle optional fields -->
  <div class="column is-4">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="`/images/${cardData.imagePath}`"
            :alt="cardData.imageAlt"
          />
        </figure>
      </div>
      <div class="card-content fixed-height">
        <div class="header py-2">
          <h1 class="title is-4">{{ cardData.headerTitle }}</h1>
          <time :datetime="cardData.date.toISOString().split('T')[0]">{{
            cardData.date.toDateString().split("T")[0]
          }}</time>
        </div>
        <div class="content">
          {{ cardData.content }}
        </div>
      </div>
    </div>
  </div>
</template>
