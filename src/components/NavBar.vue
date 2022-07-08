<script setup lang="ts"></script>

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
            <a href="about.html" class="navbar-item c-navbar-item is-active">
              About
            </a>
            <a href="projects.html" class="navbar-item c-navbar-item">
              Projects
            </a>
            <a href="blogs.html" class="navbar-item c-navbar-item"> Blogs </a>
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
