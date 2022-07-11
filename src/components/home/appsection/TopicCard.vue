<script setup lang="ts">
import type { CardData } from "@/Data.vue";

// #QUEUE just a wrapper, due to limitation of imported interface
export interface AppCardData {
  cardData: CardData;
}

const props = defineProps<AppCardData>();
</script>

<template>
  <!-- #TODO improve title styling -->
  <!-- #TODO handle optional fields -->
  <!-- #TODO set size limit, add ellipsis to overflowing content -->
  <div class="column is-3">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="cardData.imagePath" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-header">
        <h1 class="title is-5">{{ cardData.headerTitle }}</h1>
      </div>
      <div class="card-content">
        <div class="content">
          {{ cardData.content }}
          <br />
          <time :datetime="cardData.date.toISOString().split('T')[0]">{{
            cardData.date.toISOString().split("T")[0]
          }}</time>
        </div>
      </div>
    </div>
  </div>
</template>
