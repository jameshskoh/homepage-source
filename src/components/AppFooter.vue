<script setup lang="ts">
import { inject } from "vue";
import { linkDataKey } from "@/Objects.vue";
import AppFooterLink from "./appfooter/AppFooterLink.vue";

const localLinks = inject(linkDataKey);
</script>

<template>
  <footer class="footer">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-4">
          <span>&copy; 2022 Koh Hui Soon</span>
        </div>
        <div class="column is-4 is-family-sans-serif">
          <AppFooterLink
            v-for="localLink in localLinks"
            v-bind="{ linkData: localLink }"
            :key="localLink.lid"
          ></AppFooterLink>
        </div>
        <div class="column is-4">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with Bulma"
              width="192"
              height="36"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
