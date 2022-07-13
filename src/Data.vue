<script type="module" lang="ts">
export interface LinkData {
  lid: number;
  name: string;
  path: string;
}

// #TODO think of card footer support
export interface ContentAbstract {
  id: number;
  headerTitle: string;
  headerIcon?: string;
  imagePath: string;
  imageAlt?: string;
  description: string;
  date: Date;
}

export interface ProjectData {
  abstract: ContentAbstract;
  content: Array<string>;
  externalLink: Array<LinkData>;
  select?: boolean;
}

export interface BlogData {
  abstract: ContentAbstract;
  content: Array<string>;
  select: boolean;
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

export const projectDatas: Array<ProjectData> = [
  {
    abstract: {
      id: 0,
      headerTitle: "JS Mini-games",
      imagePath: "js.png",
      imageAlt: "JavaScript Logo",
      description:
        "Writing games is the fastest way to make something tangible and fun",
      date: new Date("2022-07-01"),
    },
    content: [
      "Blablabla",
      "biubiubiu",
      "boom boom boom",
      "Lorem ipsum dolor sit amet.",
    ],
    externalLink: [
      {
        lid: 0,
        name: "GitHub Project",
        path: "https://www.google.com",
      },
      {
        lid: 1,
        name: "GitHub Project 2",
        path: "https://www.google.com",
      },
    ],
    select: true,
  },
  {
    abstract: {
      id: 1,
      headerTitle: "LeetCode Solutions",
      imagePath: "leetcode.png",
      imageAlt: "LeetCode Logo",
      description:
        'I kept notes on how I approach LeetCode problems. And then I thought, "Why not share it too?"',
      date: new Date("2022-07-01"),
    },
    content: [""],
    externalLink: [
      {
        lid: 0,
        name: "GitHub Project",
        path: "https://www.google.com",
      },
      {
        lid: 1,
        name: "GitHub Project 2",
        path: "https://www.google.com",
      },
    ],
    select: true,
  },
];

export const blogDatas: Array<BlogData> = [
  {
    abstract: {
      id: 0,
      headerTitle: "A Debut",
      imagePath: "facing-a-desktop-with-code.jpg",
      imageAlt: "Person in a white shirt using computer, credit to cottonbro.",
      description: "Why I decided to create a blog?",
      date: new Date("2022-01-01"),
    },
    content: [""],
    select: true,
  },
];
</script>
