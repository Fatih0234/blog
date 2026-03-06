import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Flex({
      components: [
        { Component: Component.CustomNav(), grow: true },
        { Component: Component.Search() },
        { Component: Component.Darkmode() },
      ],
      gap: "0.5rem",
    }),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.ShareButtons(),
      condition: (page) => {
        const slug = page.fileData.slug ?? ""
        return slug !== "index" && !slug.endsWith("/index") && !slug.startsWith("tags")
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Fatih0234",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: true }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [{ Component: Component.ReaderMode() }],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer(),
  ],
  right: [],
}
