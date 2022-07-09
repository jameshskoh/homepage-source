<script setup lang="ts">
import type { LinkData } from "@/Objects.vue";

export interface FooterLinkStat {
  linkData: LinkData;
}

const props = defineProps<FooterLinkStat>();
</script>

<template>
  <div class="pb-4">
    <router-link :key="linkData.lid" :to="linkData.path">
      <p>
        {{ linkData.name }}
      </p>
    </router-link>
  </div>
</template>
