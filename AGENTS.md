# Agent Guidelines for Linora App

## Build/Lint/Test Commands
- **Start development server**: `expo start`
- **Run on Android**: `expo run:android`
- **Run on iOS**: `expo run:ios`
- **Run on web**: `expo start --web`
- **Lint code**: `expo lint`
- **No test framework configured** - add Jest or similar if needed

## Code Style Guidelines

### Imports
- Use `@/` path alias for all internal imports
- Group imports: React/React Native first, then third-party, then internal
- Use named imports over default imports

### Types & Interfaces
- Use TypeScript with strict mode enabled
- Define prop types with proper interfaces (e.g., `ThemedTextProps`)
- Use union types for component variants (e.g., `'default' | 'title'`)

### Naming Conventions
- **Components**: PascalCase (e.g., `ThemedText`, `IconButton`)
- **Functions/Variables**: camelCase (e.g., `useThemeColor`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `JWT_SECRET`)
- **Files**: kebab-case for API routes (e.g., `session+api.ts`)

### Error Handling
- Wrap API routes in try/catch blocks
- Return appropriate HTTP status codes (401 for auth, 500 for server errors)
- Log errors to console for debugging

### React Native Specific
- Use `StyleSheet.create()` for component styles
- Prefer functional components with hooks
- Centralize constants in `constants/index.ts`
- Use theme hooks for consistent theming

### Code Organization
- Keep components in `components/` directory
- API routes in `app/api/` with `+api.ts` suffix
- Utilities in `utils/`, hooks in `hooks/`
- Constants and types centralized appropriately</content>
<parameter name="filePath">/Users/evanheisler/dev/linora-app/AGENTS.md