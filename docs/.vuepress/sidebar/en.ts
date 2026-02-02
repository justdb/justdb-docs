import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Guide",
      icon: "lightbulb",
      prefix: "/en/guide/",
      link: "/en/guide/",
      children: ["getting-started.md"],
    },
    {
      text: "Demos",
      icon: "laptop-code",
      prefix: "/en/demos/",
      link: "/en/demos/",
      children: [
        "search-demo.md",
        "components-demo.md",
        "theme-features.md"
      ],
    },
  ],
});