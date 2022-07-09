<script setup lang="ts">
import { provide } from "vue";

import { linkDatas, linkDataKey } from "@/Objects.vue";

import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

provide(linkDataKey, linkDatas);
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <AppFooter />
</template>

<style>
@import "assets/css/mystyles.css";
</style>
