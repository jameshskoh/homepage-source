<script setup lang="ts">
import NavBar from "@/components/common/NavBar.vue";
import AppFooter from "@/components/common/AppFooter.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <AppFooter />
</template>

<style>
@import "assets/css/mystyles.css";
</style>
