<script setup lang="ts">
import type { LinkData } from "@/Data.vue";

export interface FooterLinkStat {
  mainLink: LinkData;
}

const props = defineProps<FooterLinkStat>();
</script>

<template>
  <div class="pb-4">
    <router-link :key="mainLink.lid" :to="mainLink.path">
      <p>
        {{ mainLink.name }}
      </p>
    </router-link>
  </div>
</template>
