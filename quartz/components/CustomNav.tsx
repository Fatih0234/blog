import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"

const CustomNav: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  const isActive = (prefix: string) => slug === prefix || slug.startsWith(prefix + "/")
  const base = pathToRoot(fileData.slug!)
  const assetBase = cfg.baseUrl ? new URL(`https://${cfg.baseUrl}`).pathname.replace(/\/$/, "") : ""

  return (
    <nav class="custom-nav">
      <a href={`${base}/blog`} class={isActive("blog") ? "active" : ""}>
        <img src={`${assetBase}/static/icons/blog-icon.svg`} alt="" class="nav-icon" />
        Blog
      </a>
      <a href={`${base}/brain`} class={isActive("brain") ? "active" : ""}>
        <img src={`${assetBase}/static/icons/brain-icon.svg`} alt="" class="nav-icon" />
        Brain
      </a>
      <a href={`${base}/tags`} class={isActive("tags") ? "active" : ""}>
        <img src={`${assetBase}/static/icons/tags-icon.svg`} alt="" class="nav-icon" />
        Tags
      </a>
    </nav>
  )
}

CustomNav.css = `
  .custom-nav {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 100%;
  }

  .custom-nav a {
    color: var(--gray);
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.25rem 0.7rem;
    border-radius: 4px;
    transition: color 0.15s ease, background-color 0.15s ease;
  }

  .custom-nav a:hover {
    color: var(--secondary);
    background-color: var(--highlight);
  }

  .custom-nav a.active {
    color: var(--secondary);
    font-weight: 600;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 5px;
    opacity: 0.9;
  }
`

export default (() => CustomNav) satisfies QuartzComponentConstructor
