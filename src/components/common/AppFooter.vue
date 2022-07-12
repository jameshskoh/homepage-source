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
          <div>
            <span>Made possible with</span>
          </div>
          <div class="columns is-multiline py-4">
            <div class="column is-8">
              <a href="https://bulma.io">
                <img
                  src="https://bulma.io/images/made-with-bulma.png"
                  alt="Made with Bulma"
                  width="192"
                  height="36"
                />
              </a>
            </div>
            <div class="column is-2">
              <a href="https://vuejs.org/"
                ><figure class="image is-32x32">
                  <img src="@\assets\images\vuejs.png" />
                </figure>
              </a>
            </div>
            <div class="column is-2">
              <a href="https://pages.github.com/"
                ><figure class="image is-32x32">
                  <img src="@\assets\images\GitHub-Mark-Light-64px.png" />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
