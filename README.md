# fatih's blog

Personal blog and digital brain built with [Quartz v4](https://quartz.jzhao.xyz/).

Live site: https://fatih0234.github.io/blog/

## Structure

```
content/
  blog/        # blog posts
  brain/       # symlink → /Users/fatihkarahan/Desktop/my-vault (Obsidian vault)
  index.md     # homepage
```

The `brain/` directory is an absolute symlink to the local Obsidian vault. It will not resolve on other machines without updating the symlink target.

## Local dev

```bash
npx quartz build --serve
```

## Deploy

```bash
npx quartz sync
```

Pushes to `main`, which triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) and deploys to GitHub Pages.

## Customization

| File | Purpose |
|------|---------|
| `quartz.config.ts` | Site metadata, plugins, theme colors (Kanagawa) |
| `quartz.layout.ts` | Page layout — which components appear where |
| `quartz/styles/custom.scss` | Custom CSS overrides (navbar, cards, search, etc.) |
