# Repository Guidelines

## Project Structure & Module Organization
- `src/components/`: Componentes React reutilizables.
- `src/pages/`: Páginas principales de la aplicación.
- `src/contexts/`: Contextos de React para manejo de estado global.
- `src/hooks/`: Hooks personalizados de React.
- `src/types/`: Definiciones de tipos TypeScript.
- `src/data/`: Datos estáticos y configuraciones.
- `public/`: Recursos estáticos (iconos, favicons, imágenes).
- `dist/`: Archivos de construcción para producción.

## Build, Test, and Development Commands
- Instalar dependencias: `npm install`.
- Desarrollo local: `npm run dev`.
- Construir para producción: `npm run build`.
- Ejecutar tests: `npm run test`.
- Linting: `npm run lint`.
- Formateo de código: `npm run format`.

## Coding Style & Naming Conventions
- TypeScript/React: Usar TypeScript estricto con React 18+.
- Componentes: `PascalCase` para nombres de componentes, `camelCase` para props.
- Archivos: `kebab-case` para archivos de componentes, `camelCase` para hooks.
- CSS: Usar Tailwind CSS con variables CSS personalizadas.
- Mantener componentes pequeños y enfocados en una responsabilidad.

## Testing Guidelines
- Usar React Testing Library para tests de componentes.
- Tests unitarios para hooks y utilidades.
- Tests de integración para flujos completos.
- Mantener cobertura de tests alta para componentes críticos.
- Usar mocks apropiados para dependencias externas.

## Commit & Pull Request Guidelines
- Commits: mensajes claros en español (ej: "Agregar componente de navegación").
- PRs: incluir descripción, capturas de pantalla si es necesario, lista de cambios.
- Requisitos: `npm run build` y `npm run test` deben pasar.
- Mantener PRs pequeños y enfocados; actualizar documentación cuando sea necesario.

## Security & Configuration Tips
- No hardcodear claves API o información sensible.
- Usar variables de entorno para configuraciones.
- Validar todas las entradas del usuario.
- Implementar sanitización adecuada para prevenir XSS.
- Mantener dependencias actualizadas y revisar vulnerabilidades.
