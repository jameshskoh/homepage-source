<script setup lang="ts">
import { mainLinks } from "@/Data.vue";
import AppFooterLink from "@/components/appfooter/AppFooterLink.vue";
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
            v-for="mainLink in mainLinks"
            v-bind="{ mainLink: mainLink }"
            :key="mainLink.lid"
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
