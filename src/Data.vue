<script type="module" lang="ts">
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

// #QUEUE accommodate data structure for dropdown lists
export const mainLinks: Array<LinkData> = [
  {
    lid: 0,
    name: "Home",
    path: "/",
  },
  {
    lid: 1,
    name: "About",
    path: "/about",
  },
  {
    lid: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    lid: 3,
    name: "Blogs",
    path: "/blogs",
  },
];

export const projectSectionDatas: SectionData = {
  sectionName: "My Recent Projects",
  componentDatas: [
    {
      headerTitle: "JS Mini-games",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      date: new Date("2022-01-01"),
    },
    {
      headerTitle: "LeetCode Solutions",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date("2022-01-01"),
    },
  ],
};

export const blogSectionDatas: SectionData = {
  sectionName: "My Recent Posts",
  componentDatas: [
    {
      headerTitle: "About Me",
      imagePath: "https://bulma.io/images/placeholders/1280x960.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date("2022-01-01"),
    },
  ],
};
</script>
