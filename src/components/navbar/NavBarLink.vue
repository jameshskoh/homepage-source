<script setup lang="ts">
import type { LinkData } from "@/Objects.vue";

// #QUEUE
// should be with LinkData, but feature limitation disallows imported interface be passed to defineProps<>()
export interface LinkStat {
  linkData: LinkData;
  active: boolean;
}

const props = defineProps<LinkStat>();
</script>

<template>
  <a :href="linkData.path" class="navbar-item c-navbar-item is-active">{{
    linkData.name
  }}</a>
</template>
