# Advanced search

A standalone Next.js port of the Idea 1c advanced-search prototype. It carries its own shadcn/ui components, tokens (`src/app/globals.css`, light mode only) and utilities, and does not depend on `@globaldata/ui` or `@globaldata/design-tokens` yet. Aligning it with the component library is future work.

## Run it

```sh
pnpm install
pnpm --filter @globaldata/advanced-search dev
```

The dev server runs on http://localhost:3100.

## Routes

- `/` redirects to `/start`
- `/[screen]`, one per screen in `src/flow/flow.ts`: `/start`, `/values`, `/manual`, `/picked`, `/results`, `/edit-filter`, `/resolving`, `/filters`

Each screen is a state of the same prototype, so a deep link opens it at that point and the address follows the state from there.

`SCREENS.md` lists every screen and in-between state in plain terms.
