<script setup lang="ts">
import { mainLinks } from "@/Data.vue";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const isActive = ref(false);

function toggleNavBarActive() {
  isActive.value = !isActive.value;
}

function disableNavBarActive() {
  isActive.value = false;
}

const activeNavBar = computed(() => ({
  "is-active": isActive.value,
}));
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
            @click="toggleNavBarActive"
            role="button"
            class="navbar-burger"
            :class="activeNavBar"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" :class="activeNavBar">
          <div class="navbar-start">
            <router-link
              v-for="mainLink in mainLinks"
              :key="mainLink.lid"
              :to="mainLink.path"
              @click="disableNavBarActive"
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
