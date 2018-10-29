<p align="center"><img src="https://raw.githubusercontent.com/jbeguna04/vue-electron-template/master/LogoDesigns/logotype1blue.png"></p>

# Vue-Electron-Template

[![Build status](https://ci.appveyor.com/api/projects/status/cjua6pdhjp9rqa1o?svg=true)](https://ci.appveyor.com/project/mubaidr/vue-electron-template)
[![Build Status](https://travis-ci.org/mubaidr/vue-electron-template.svg?branch=master)](https://travis-ci.org/mubaidr/vue-electron-template)

The boilerplate for electron applications using vue.js

## Overview

`vue-electron` takes advantage of `rollup.js`, `electron-builder`, and some of the most used plugins like `vue-router`, `vuex` and so much more to provide an easy to use development and building enviroment.

### What does it offer?

- Ready to use Vue plugins \([vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex), [vue-electron](https://github.com/SimulatedGREG/vue-electron)\)
- Installed [vue-devtools](https://github.com/vuejs/vue-devtools) and [devtron](https://github.com/electron/devtron) tools for development
- [Bulma-Pro](https://mubaidr.github.io/bulma-pro/), a theme suitable for desktop application based on [Bulma](https://bulma.io/)
- [Font-awesomse-5](https://fontawesome.com) installed
- Easily package your electron app using [electron-builder](https://github.com/electron-userland/electron-builder)
- `DEV` & `BUILD` NPM scripts using [rollup.js](https://rollupjs.org/guide/en)
- Process restarting when working in main process & hot reloading for content
- CSS (SASS/SCSS etc)/JS pre-processor support
- ES7 with [`env`](https://babeljs.io/docs/en/babel-preset-env/) by default
- ESLint configured
- Babel configured

### Getting Started

Clone this repository, install dependencies and run using either `dev` or `build` command.

```bash
# Clone this repository
git clone https://github.com/mubaidr/vue-electron

# change directory to cloned path
cd vue-electron

# Install dependencies
yarn

# Run in `DEV` mode
yarn run dev

# Build installer for this app
yarn run build

# Build directory for this app with executeable
yarn run build:dir

# Lint all source files using ESLINT
yarn run lint
```

### Project structure

`src` contains all the source files.

`src/main` contains electron main script.

`src/renderer` contains vue-js application.

`vue-electron` contains dev and build scripts

#### Credits

All credits to authors of packages and tools used in the project.

\* This template is inspired by [electron-vue](https://github.com/SimulatedGREG/electron-vue)
