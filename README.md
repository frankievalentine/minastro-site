# Minastro static preview

A fixture-driven presentation snapshot of the public Minastro frontend. It mirrors the template’s public routes and visual language without EmDash, Cloudflare bindings, a Worker adapter, or any server-side content access.

## Commands

```sh
bun install
bun run dev
bun run build
```

The production build is written to `dist/`. For Cloudflare Pages, use `bun run build` as the build command and `dist` as the output directory.

## Preview routes

- `/`
- `/posts`
- `/posts/example`
- `/projects`
- `/projects/example`
- `/newsletter`

Seeded posts and projects also receive static detail pages. Search runs entirely in the browser against the bundled fixture index.
