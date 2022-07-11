<script setup lang="ts">
import { mainLinks } from "@/Data.vue";
</script>

<template>
  <header>
    <nav class="navbar is-family-sans-serif">
      <div class="container is-max-desktop">
        <div class="navbar-brand p-2">
          <div>
            <figure class="image is-48x48 is-1by1">
              <img class="is-rounded" src="@/assets/images/Profile.jpg" />
            </figure>
          </div>
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
            <router-link
              v-for="mainLink in mainLinks"
              :key="mainLink.lid"
              :to="mainLink.path"
              class="navbar-item c-navbar-item"
              >{{ mainLink.name }}</router-link
            >
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
