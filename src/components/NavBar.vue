<script setup lang="ts">
import { inject } from "vue";
import { linkDataKey } from "@/Objects.vue";
import NavBarLink from "./navbar/NavBarLink.vue";

const localLinks = inject(linkDataKey);
</script>

<template>
  <header>
    <nav class="navbar is-family-sans-serif">
      <div class="container is-max-desktop">
        <div class="navbar-brand">
          <a href="index.html" class="navbar-item">
            <div>
              <figure class="image is-48x48 is-1by1">
                <img class="is-rounded" src="@/assets/images/Profile.jpg" />
              </figure>
            </div>
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <!-- requires JavaScript toggle control! -->
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <NavBarLink
              v-for="localLink in localLinks"
              v-bind="{ linkData: localLink, active: false }"
              :key="localLink.lid"
            ></NavBarLink>
          </div>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-link"> More </span>
              <div class="navbar-dropdown is-right">
                <span class="navbar-item c-navbar-item"
                  >More good stuffs <br />
                  coming soon!</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
