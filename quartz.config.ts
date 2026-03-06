import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "fatih karahan",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "fatih0234.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian", "*.canvas"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      // Kanagawa Wave (dark) / Kanagawa Paper (light)
      colors: {
        lightMode: {
          light: "#f2ecbc",       // sumiInk0 / paper bg
          lightgray: "#e7dba0",   // sumiInk1
          gray: "#9e9b93",        // fujiGray
          darkgray: "#545464",    // sumiInk6
          dark: "#1f1f28",        // sumiInk0 dark text
          secondary: "#7e9cd8",   // waveBlue2 (links)
          tertiary: "#76946a",    // springGreen
          highlight: "rgba(126, 156, 216, 0.12)",
          textHighlight: "#e6c38488",
        },
        darkMode: {
          light: "#1f1f28",       // sumiInk0
          lightgray: "#2a2a37",   // sumiInk2
          gray: "#727169",        // fujiGray
          darkgray: "#c8c093",    // oldWhite
          dark: "#dcd7ba",        // fujiWhite
          secondary: "#7e9cd8",   // waveBlue2
          tertiary: "#76946a",    // springGreen
          highlight: "rgba(126, 156, 216, 0.12)",
          textHighlight: "#e6c38488",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
