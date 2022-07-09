<script setup lang="ts">
import type { LinkData } from "@/Objects.vue";

export interface FooterLinkStat {
  linkData: LinkData;
}

const props = defineProps<FooterLinkStat>();
</script>

<template>
  <div class="pb-4">
    <a :href="linkData.path">
      <p>
        {{ linkData.name }}
      </p>
    </a>
  </div>
</template>
