<script setup lang="ts">
import { provide } from "vue";
import type { InjectionKey } from "vue";

interface LinkData {
  id: number;
  name: string;
  path: string;
}

const linkDataKey = Symbol() as InjectionKey<Array<LinkData>>;
</script>

<template></template>

<style></style>
