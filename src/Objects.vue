<script type="module" lang="ts">
import type { InjectionKey } from "vue";

export interface LinkData {
  lid: number;
  name: string;
  path: string;
}

export interface SectionData {
  sectionName: string;
  componentDatas: Array<CardData>;
}

// #TODO think of card footer support
export interface CardData {
  headerTitle: string;
  headerIcon?: string;
  imagePath: string;
  content: string;
  date: Date;
}

export const linkDataKey = Symbol() as InjectionKey<Array<LinkData>>;

// #QUEUE accommodate data structure for dropdown lists
export const linkDatas: Array<LinkData> = [
  {
    lid: 0,
    name: "About",
    path: "/about.html",
  },
  {
    lid: 1,
    name: "Projects",
    path: "/projects.html",
  },
  {
    lid: 2,
    name: "Blogs",
    path: "/blogs.html",
  },
];

export const projectSectionDataKey = Symbol() as InjectionKey<SectionData>;

export const projectSectionDatas: SectionData = {
  sectionName: "My Recent Projects",
  componentDatas: [
    {
      headerTitle: "JS Mini-games",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      date: new Date("2022-01-01")
    },
    {
      headerTitle: "LeetCode Solutions",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date("2022-01-01")
    },
  ]
}


export const blogSectionDataKey = Symbol() as InjectionKey<SectionData>;

export const blogSectionDatas: SectionData = {
  sectionName: "My Recent Posts",
  componentDatas: [
    {
      headerTitle: "About Me",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date("2022-01-01")
    },
  ]
}
</script>
