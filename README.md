# Polito Campus Energy Dashboard documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Local Development

Install the dependencies
```bash
$ npm install
```

Run locally the website
```bash
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

## Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## Deployment with Github Actions and Github Pages

This repository is an example of deploying a Docusaurus website to GitHub Pages using GitHub Actions.

### Configuring the GitHub repository

It uses the _new_ GitHub Pages experience with GitHub Actions to deploy the website.

* Enable this experience in `GitHub.com -> Repository -> Settings -> Pages -> Build and deployment -> Source` by
  selecting `GitHub Actions` instead of the legacy `Deploy from a branch` option.
* In `GitHub.com -> Repository -> Settings -> Environments` you should see a GitHub Environment named `github-pages`.

### Adding a GitHub Actions deployment workflow

Use a GitHub Actions workflow template for GitHub Pages from
the [`actions/starter-workflows`](https://github.com/actions/starter-workflows) repository. Place it
in `.github/workflows/<workflow-name>.yml`.
Add steps for building the website before the GitHub Pages actions are executed and specify the `path` to
the `actions/upload-pages-artifact`. The deployment action was adapted
from [https://github.com/LayZeeDK/github-pages-docusaurus ](https://github.com/LayZeeDK/github-pages-docusaurus)

### Contacts and contributors

Dr. Alfonso Capozzoli
