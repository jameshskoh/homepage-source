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
  imageAlt?: string;
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
      imagePath: "/src/assets/images/js.png",
      imageAlt: "JavaScript Logo",
      content:
        "This is the first time I am getting serious at learning JavaScript.",
      date: new Date("2022-07-01"),
    },
    {
      headerTitle: "LeetCode Solutions",
      imagePath: "/src/assets/images/leetcode.png",
      imageAlt: "LeetCode Logo",
      content:
        'I kept notes on how I approach LeetCode problem. And then I thought, "Why not share it too?" So here it is.',
      date: new Date("2022-07-01"),
    },
  ],
};

export const blogSectionDatas: SectionData = {
  sectionName: "My Recent Posts",
  componentDatas: [
    {
      headerTitle: "A Debut",
      imagePath: "/src/assets/images/facing-a-desktop-with-code.jpg",
      imageAlt: "Person in white shirt using computer, credit to cottonbro.",
      content: "Why create a blog?",
      date: new Date("2022-01-01"),
    },
  ],
};
</script>
