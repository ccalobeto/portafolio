# Carlos León — Blog y Portafolio

🔗 [ccalobeto.github.io](https://ccalobeto.github.io)

El repositorio está aquí para que puedas explorarlo, sugerir mejoras o utilizarlo como un modelo suelto para tu propio blog en SvelteKit. Úsalo de referencia para aprender los conceptos de desarrollo web, no para reutilizarlo tal como está — el contenido (texto, imágenes, proyectos) es personal y no está licenciado para reutilización.

## Stack

- [SvelteKit 5](https://svelte.dev/) con `@sveltejs/adapter-static`, desplegado a [GitHub Pages](https://pages.github.com/)
- Contenido del blog en Markdown, compilado con [mdsvex](https://mdsvex.pngwn.io/)
- Estilos en Sass con un sistema de design tokens (colores/tipografía) en `_vars.scss`

Ver [`CLAUDE.md`](./CLAUDE.md) para el detalle de arquitectura (pipeline de contenido, theming, tokens).

## Desarrollo local

Requiere la versión de Node fijada en [`.nvmrc`](./.nvmrc) (usa `nvm use` si la tienes instalada).

```sh
npm install
npm run dev          # servidor de desarrollo en :1027
```

Otros comandos útiles:

```sh
npm run build        # build de producción (output en build/)
npm run preview       # sirve el build localmente
npm run check         # type-check (svelte-check)
npm run lint          # prettier --check + eslint — esto es lo que corre en CI
npm run format        # prettier --write
```

## Contribuir

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md) para la convención de ramas y de commits (Conventional Commits, exigido localmente con un hook de `commit-msg`).

## Mantenimiento del proyecto

Usa el paquete `knip` para detectar qué componentes, paquetes, funciones o porciones de código no se usan en el presente proyecto.

```sh
npx knip
```
