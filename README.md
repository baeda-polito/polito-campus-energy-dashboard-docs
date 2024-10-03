# Polito Campus Energy Dashboard

[![Lifecycle:
deprecated](https://img.shields.io/badge/lifecycle-deprecated-red.svg)](https://www.tidyverse.org/lifecycle/#deprecated)
<!-- badges: end -->

As educational institutions, universities play a crucial role in shaping the future. They not only educate the next
generation of leaders, but they also serve as models of sustainability and environmental responsibility. One of the ways
in which universities can demonstrate their commitment to a cleaner future is through effective energy management on
their campuses.

Energy consumption in universities is a significant contributor to greenhouse gas emissions and global warming. The
energy used for heating, cooling, lighting, and powering equipment in buildings and classrooms can have a significant
impact on the environment. That's why managing energy use in university campuses is not just about reducing costs, but
also about taking a step towards a cleaner and sustainable future.

One of the most effective ways to manage energy consumption on university campuses is through the implementation of
energy-efficient technologies and practices. In particular, by monitoring energy
consumption, universities can identify areas where energy is being wasted and make adjustments to improve efficiency.
They can also set goals for reducing energy consumption and measure their progress over time, helping them to track
their progress towards becoming more sustainable.

This repository contains the documentation of the Polito Campus Energy Dashboard project that aims to deliver a
comprehensive energy management tool for the university campus of Politecnico di Torino.

## Contacts and contributors

* Prof. [Alfonso Capozzoli](mailto:alfonso.capozzoli@polito.it), Coordinator of [BAEDA Lab](http://www.baeda.polito.it/)
  , Politecnico di Torino;
* Ing. [Roberto Chiosa](mailto:roberto.chiosa@polito.it), PhD Student at [BAEDA Lab](http://www.baeda.polito.it/),
  Politecnico di Torino;

## Setup and development

* Install the dependencies
  ```bash
  $ npm install
  ```

* Run locally the website
  ```bash
  $ npm run start
  ```
  This command starts a local development server and opens up a browser window. Most changes are reflected live without
  having to restart the server.

* To build the website
  ```bash
  $ npm run build
  ```
  This command generates static content into the `build` directory and can be served using any static contents hosting
  service.
* In order to automatically deploy the Github pages website GitHub Actions were used. Use a GitHub Actions workflow
  template for GitHub Pages from
  the [`actions/starter-workflows`](https://github.com/actions/starter-workflows) repository. The deployment action was
  adapted
  from [https://github.com/LayZeeDK/github-pages-docusaurus ](https://github.com/LayZeeDK/github-pages-docusaurus). To
  enable this function:
    * Enable this experience in `GitHub.com -> Repository -> Settings -> Pages -> Build and deployment -> Source` by
      selecting `GitHub Actions` instead of the legacy `Deploy from a branch` option.
    * In `GitHub.com -> Repository -> Settings -> Environments` you should see a GitHub Environment named `github-pages`
      .
    * Place the action template in `.github/workflows/<workflow-name>.yml`. Add steps for building the website before
      the GitHub Pages actions are executed and specify the `path` to the `actions/upload-pages-artifact`.


![img.png](/static/img/substations.png)
