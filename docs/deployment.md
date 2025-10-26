# Deployment

## API

To generate only the server code (excludes web app), compile with:

```bash
npx expo export --platform web --no-ssg
eas deploy
```

## TODO

- [ ] Configure the origin from EAS deployment
- [ ] Setup env files
