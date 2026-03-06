import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ShareButtons: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? ""
  const url = `https://${cfg.baseUrl}/${fileData.slug}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`

  return (
    <div class="share-buttons">
      <span class="share-label">Share:</span>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" class="share-link share-twitter">
        X / Twitter
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="share-link share-linkedin">
        LinkedIn
      </a>
    </div>
  )
}

ShareButtons.css = `
  .share-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--lightgray);
    flex-wrap: wrap;
  }

  .share-label {
    color: var(--gray);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .share-link {
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.3rem 0.75rem;
    border-radius: 4px;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .share-link:hover {
    opacity: 0.8;
  }

  .share-twitter {
    background-color: #000;
    color: #fff !important;
  }

  .share-linkedin {
    background-color: #0a66c2;
    color: #fff !important;
  }
`

export default (() => ShareButtons) satisfies QuartzComponentConstructor
