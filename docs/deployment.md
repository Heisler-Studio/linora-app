# Deployment

```bash
npm run deploy:preview
npm run deploy:production
```

https://docs.expo.dev/eas/hosting/deployments-and-aliases/

## API

To generate only the server code (`no-ssg` excludes web app), compile with:

```bash
eas env:pull [development | preview | production]
npx expo export --platform web [--no-ssg] --clear
eas deploy [--prod] [--alias preview]
```

## TODO

- [x] Configure the origin from EAS deployment
- [ ] Setup env files
