# Contribuir

Convenciones de ramas y commits para este repo.

## Ramas

Una rama por tarea (issue), no por épica. Formato:

```
type/scope/issue-slug
```

- `type`: `feature`, `fix`, `refactor`, `chore`, `docs`
- `scope`: área que toca (`ui`, `ci`, `content`, `tooling`, `a11y`, ...)
- `issue-slug`: número de issue + descripción corta

Ejemplos reales de este repo:

```
feature/ui/18-color-tokens
feature/ui/20-projects-cards
chore/tooling/23-conventional-commits-setup
```

Si una tarea depende de otra (por ejemplo, la auditoría de contraste depende de que
los tokens de color ya estén mergeados), hazlas en secuencia en vez de abrir todas
las ramas en paralelo.

## Commits

Este repo usa [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): descripción en imperativo, presente
```

Tipos disponibles: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`, `ci`,
`build`, `perf`.

Ejemplos:

```
feat(ui): add project card hover effect
fix(ci): run svelte-kit sync before svelte-check
refactor(ui): consolidate pagination into getPosts()
chore(tooling): add commitlint and husky
```

Un commit por cambio lógico — si un cambio toca dos cosas sin relación (por ejemplo,
estilos y una corrección de CI), son dos commits separados.

Los mensajes de commit se validan automáticamente con un hook de `commit-msg`
(`commitlint` + `husky`). Un mensaje que no sigue el formato es rechazado localmente
antes de poder completarse. El hook se instala solo al correr `npm install` (vía el
script `prepare`), sin pasos manuales adicionales.

## Pull requests

- Título del PR: mismo estilo imperativo que los commits.
- En el body del PR, usa `Closes #<issue>` para que el issue se cierre automáticamente
  al mergear.
