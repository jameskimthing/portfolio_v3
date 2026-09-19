# AGENTS.md

## Project

- Personal portfolio site built with SvelteKit 1, Svelte 4, TypeScript, Vite, and Tailwind CSS 3.
- It is a client-rendered, prerendered static site: `src/routes/+layout.ts` sets `prerender = true` and `ssr = false`.
- Use pnpm. `pnpm-lock.yaml` is the dependency lockfile; preserve it when dependencies do not change.

## Commands

Run from the repository root:

```sh
pnpm dev       # Vite development server
pnpm check     # Sync SvelteKit types and run svelte-check
pnpm lint      # Prettier check followed by ESLint
pnpm build     # Production build
pnpm preview   # Serve the production build locally
pnpm format    # Apply Prettier to the repository
```

There is no automated test suite or test runner configured. For UI changes, use `pnpm dev` or `pnpm preview` and exercise the changed route in a browser. Run `pnpm check` for TypeScript/Svelte changes; run `pnpm lint` before finalizing a broader change.

## Source layout

- `src/routes/` contains the single-page composition and the top-level portfolio sections. `+page.svelte` composes the visible sections; `+layout.svelte` owns global loading behavior and imports `app.css`.
- `src/lib/components/` contains reusable presentation primitives, especially intersection-observer-based transition wrappers.
- `src/lib/items/` contains navigation UI components.
- `src/lib/sections/` contains feature-specific components and their typed content data. Keep a feature's components and data in its existing subsection, such as `pastProjects/` or `professionalExperience/`.
- `src/lib/menu.ts` owns menu state and section observation; `src/lib/observer.ts` owns the shared `IntersectionObserver` helpers.
- `static/` contains publicly served assets. Reference assets with root-relative paths (for example, `/icons/github.svg`); project screenshots live in `static/pastProjects/` and certificates in `static/certifications/`.
- `src/archive/` is excluded from the rendered page unless it is explicitly reintroduced.

## Implementation conventions

- Write Svelte components with `<script lang="ts">`; TypeScript is strict and JavaScript is checked.
- Prefer the existing `$lib/...` alias for imports under `src/lib`. Keep relative imports only where they already match nearby code.
- Use Tailwind utility classes for styling. The custom palette and `xs` breakpoint are defined in `tailwind.config.js`; extend that file rather than duplicating raw values across components when a new shared token is warranted.
- Follow the existing transition model: browser-only DOM access, `IntersectionObserver`, and animation setup belong in `onMount` or an equivalent client-only lifecycle path.
- Keep portfolio content data typed. The project card schema is in `src/lib/sections/pastProjects/projects.ts`; professional experience data is in `src/lib/sections/professionalExperience/experiences.ts`.
- When adding, removing, or renaming a top-level section, update both its unique `<section id>` and the `sections` array in `src/routes/+page.svelte`. The menu and its active-section tracking depend on those exact IDs.
- Preserve stable public asset paths when changing portfolio content. Add a matching asset under `static/` before referencing it.

## Formatting and generated files

- Prettier uses tabs, single quotes, no trailing commas, and a 100-character print width. The Svelte Prettier plugin is configured in `.prettierrc`.
- ESLint uses the recommended TypeScript and Svelte rules plus Prettier compatibility settings.
- Do not edit generated or local-only paths: `.svelte-kit/`, `build/`, `package/`, or `node_modules/`.
- Do not commit environment files. `.env` and `.env.*` are ignored, except for a future `.env.example`.
