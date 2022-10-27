# URL Shortener

## Prompt

Create a [url shortening](https://en.wikipedia.org/wiki/URL_shortening) service.

### Deliverables

- [ ] Users can submit URLs to the service and are given a shortened URL
- [ ] Visiting a shortened URL redirects the user to the original longer URL

## Getting Started

1. Fork this repo

2. Start the project. See instructions for getting started with `create-react-app`:

```bash
# grab the clone URL from your forked repo
git clone git@github.com:<your_username>/fe-projects.git
cd fe-projects
rm -r *
git add .
commit -m cleanup
npx create-next-app@latest
cd url-shortener
git commit -am first commit
npm install
npm start
```

## Additional Features

Take your service in a unique direction. Feel free to implement any of these optional features, or have them inspire other features you add.

- [ ] creators can create an account and manage their links
- [ ] analytics for link creator
- [ ] redirect by platform (eg: redirect android to app store, iOS to iOS store)
- [ ] finite visits / unique visitors
- [ ] expiration time for links
- [ ] redirect behind captcha
- [ ] randomly choose between multiple links

## Getting Feedback

Submit a PR to [/coachmatt-io/fe-projects](https://github.com/coachmatt-io/fe-projects)
