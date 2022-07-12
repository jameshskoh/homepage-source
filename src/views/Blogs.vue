<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { type LinkData, type BlogData, mainLinks, blogDatas } from "@/Data.vue";

const homeLink = mainLinks.find((link) => link.lid === 0) as LinkData;
const blogLink = mainLinks.find((link) => link.lid === 3) as LinkData;

const route = useRoute();
const blogId = computed(() => {
  return parseInt(route.params.id as string);
});

function blog(): BlogData {
  return blogDatas.find(
    (blog) => blog.abstract.id === blogId.value
  ) as BlogData;
}

const blogData = blog();
const blogAbstract = blogData.abstract;
</script>

<template>
  <div class="container is-max-widescreen">
    <section class="section article-header">
      <figure class="image">
        <img
          :src="`/images/${blogAbstract.imagePath}`"
          :alt="blogData.abstract.imageAlt"
        />
      </figure>
      <div class="py-4">
        <h1 class="title is-1">{{ blogAbstract.headerTitle }}</h1>
        <h2 class="subtitle is-3">{{ blogAbstract.description }}</h2>
        <time :datetime="blogAbstract.date.toISOString().split('T')[0]">{{
          blogAbstract.date.toDateString().split("T")[0]
        }}</time>
      </div>
    </section>
  </div>
  <main class="container is-max-desktop">
    <div class="px-6">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><router-link :to="homeLink.path">Home</router-link></li>
          <li><router-link :to="blogLink.path">Blogs</router-link></li>
          <li class="is-active">
            <a href="#">{{ blogAbstract.headerTitle }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <section class="section">
      <article class="content">
        <p v-for="part in blogData.content">{{ part }}</p>
      </article>
    </section>
  </main>
</template>
