# CLAUDE.md

Este archivo le da contexto a Claude Code (claude.ai/code) al trabajar con el código de este repositorio.

## Comandos

```sh
npm run dev            # servidor de desarrollo en :1027
npm run build           # build de producción (adapter estático) en build/
npm run preview         # sirve el resultado de build/ localmente
npm run check            # svelte-check (correr antes `npx svelte-kit sync` si los tipos se ven desactualizados)
npm run check:watch
npm run lint             # prettier --check + eslint (esto es lo que corre CI)
npm run format           # prettier --write
npx knip                 # detecta archivos/exports/dependencias sin usar (ver README)
```

Este repo no tiene suite de tests (no hay test runner configurado, ni archivos de test). No asumas que existe ni inventes comandos de test.

La versión de Node está fijada en `.nvmrc` (v20.17.0) — `@commitlint/cli`/`@commitlint/config-conventional` están fijados intencionalmente en v20.x en vez de la última versión, porque v21 requiere Node >=22.12.

## Convenciones de rama y commit

Ver `CONTRIBUTING.md` — Conventional Commits (`type(scope): descripción`) se hacen cumplir localmente con un hook `commit-msg` de husky que corre commitlint; un mensaje de commit que no cumple el formato es rechazado antes de crearse. La convención de nombres de rama es `type/scope/issue-slug`.

## Arquitectura

SvelteKit 5 (runes) + `@sveltejs/adapter-static`, desplegado a GitHub Pages. `.github/workflows/deploy.yml` corre `lint` → `svelte-kit sync` → `check` → `build` en cada push/PR a `main`, y solo despliega en push a `main`.

### Pipeline de contenido

Los posts del blog son archivos markdown bajo `src/lib/content/posts/*.md`, compilados vía `mdsvex` (configurado en `svelte.config.js`, con `rehype-slug` + `rehype-autolink-headings`). El glob es **no recursivo**, así que cualquier cosa bajo `src/lib/content/posts/_not-in-use/` (posts borrador/retirados) queda automáticamente excluida del sitio sin necesitar `.gitignore` ni un paso de build que la filtre.

`src/lib/assets/js/utils/fetchPosts.ts` es la única función que carga, ordena y filtra posts (por categoría/año, visibilidad de borradores solo en dev) y aplica offset/limit. Se llama tanto en proceso desde los loaders de página como vía los endpoints REST `/api/posts/*` (`count`, `all`, `offset/[offset]`). Tres rutas de blog distintas implementan cada una su propia estrategia de paginación por encima de esta función, de forma independiente — `blog/+page.ts`, `blog/page/[page]/+page.server.ts`, y `blog/category/[category]/+page.ts` (que actualmente no pagina en absoluto, es decir, renderiza todos los posts de una categoría en una sola página). `src/lib/config.js` exporta `postsPerPage` como la intención de fuente única de verdad para el tamaño de página, pero nada lo importa realmente — el literal `10` está hardcodeado de forma independiente en `fetchPosts.ts`, el endpoint de offset, y `Pagination.svelte`. Ten esto en cuenta antes de asumir que cambiar `postsPerPage` tiene algún efecto.

### Theming — dos mecanismos que hay que manejar ambos

El modo claro/oscuro tiene dos vías de activación independientes, y los estilos de los componentes necesitan manejar **ambas**:

1. Un toggle explícito (`DarkModeToggle.svelte`) que agrega una clase `.dark` o `.light` a `<html>` (`document.documentElement`) y persiste la elección en `localStorage`.
2. Una preferencia de sistema sin que se haya usado el toggle todavía, manejada por bloques `:root:not(.light) { @media (prefers-color-scheme: dark) { ... } }`.

`src/lib/assets/styles/_vars.scss` define ambas variantes para cada custom property consciente de tema. Al agregar una regla de color con tema a un componente, replica ambos bloques (`.dark &` / `:global(.dark ...)` **y** el equivalente con `prefers-color-scheme`) — varios componentes históricamente solo implementaron el caso del toggle explícito y se rompieron silenciosamente para usuarios que dependen solo de la preferencia de sistema (ver `Tag.svelte` como patrón de referencia correcto). `src/lib/assets/styles/_preferences.scss` también define reglas `#app.dark`/`#app.prefers-light` que parecen un mecanismo de theming pero son código muerto — ningún componente aplica esas clases al elemento `#app`; el mecanismo real son las clases a nivel de `<html>` de arriba.

### Tokens de diseño (`_vars.scss`)

Los colores se definen como tripletas crudas `H, S%, L%` (ej. `--navyHSL`) compuestas en swatches (`--navy: hsl(var(--navyHSL))`), a las que luego apuntan los tokens semánticos (`--ink: var(--navy)`). Esta indirección permite reusar/reapuntar un swatch sin tocar cada consumidor. El par base actual es navy/lavender (elegido por un ratio de contraste validado de 8.19:1); los tokens de acento (`--accentColor`, `--linkColor`, `--tagColor`, `--secondaryInk`) tienen cada uno variantes de tema claro/oscuro validadas independientemente en ≥4.5:1 (WCAG AA) contra `--paper` en su tema respectivo. Si introduces un token de color nuevo o reapuntas uno existente, revisa el contraste contra lo que realmente tiene debajo en pantalla (no solo contra `--paper` en abstracto — varios bugs pasados vinieron de un token validado contra `--paper` pero usado luego como texto sobre un fondo _distinto_ y fijo, como `--darkBlue`).

Las fuentes siguen el mismo patrón de swatch: archivos `.woff2` autohospedados en `static/fonts/` con declaraciones `@font-face` en `_fonts.scss`, expuestas como `--headingFont`/`--bodyFont`/`--codeFont`/`--labelFont`. `--codeFont` es solo para bloques de código reales; `--labelFont` es para metadata/etiquetas de UI — no los confundas. Fraunces y Archivo son variable fonts; la API `css2` de Google Fonts devuelve el _mismo_ archivo para cada peso estático pedido individualmente en estas dos familias (no genera cortes estáticos reales para ellas), así que se autohospedan como un solo archivo de rango variable (`font-weight: 300 700`) en vez de archivos por peso.
