# Deployment

## API

To generate only the server code (`no-ssg` excludes web app), compile with:

```bash
npx expo export --platform web [--no-ssg]
eas deploy [--prod]
```

## TODO

- [x] Configure the origin from EAS deployment
- [ ] Setup env files
