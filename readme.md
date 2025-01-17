# Openbridge Web Components

[![slack](https://img.shields.io/badge/slack-join_chat-brightgreen.svg?logo=slack)](https://join.slack.com/t/openbridgegroup/shared_invite/zt-2e4clvl6s-uZLkN5L3g8O~c1UZCN1reQ)

Welcome to the Openbridge Web Components! This readme file provides an overview of the project and its components.

> **❗Caution❗** This repository is currently in early development and may not be stable. Please use with caution.

# Slack Channel

Join our slack channel to get the latest updates and to ask questions. Click [here](https://join.slack.com/t/openbridgegroup/shared_invite/zt-2e4clvl6s-uZLkN5L3g8O~c1UZCN1reQ) to join the slack workspace, and join the [#openbridge-webcomponents](https://openbridgegroup.slack.com/archives/C06LXTCR269) channel.

# Introduction video

We have made an short introduction to the library. You can watch it [here](https://www.youtube.com/watch?v=5DiEA4voqzI)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=5DiEA4voqzI" target="_blank">
 <img src="https://img.youtube.com/vi/5DiEA4voqzI/0.jpg" alt="Watch the video" width="480" height="360" />
</a>

## Table of Contents

- [Storybook](#storybook)
- [Demo](#demo)
- [CSS file for palettes](#css-file-for-palettes)
- [Components](#components)
- [Installation](#installation)
- [Getting Started Developing](#getting-started-developing)
- [Contributing](#contributing)

## Storybook

[Storybook](https://openbridge-storybook.web.app) is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components in isolation.

## Demo

[The demo](https://openbridge-demo.web.app/) showcases the project's functionality using Vue.js. It provides a live demonstration of the project's features and allows you to interact with the application.

## CSS file for palettes

The CSS file for the palettes is located at [packages/openbridge-webcomponents/src/palettes/variables.css](packages/openbridge-webcomponents/src/palettes/variables.css).
The file is called `variables.css` and contains all the openbridge pallets (bright, day, dusk, night).
It can be used to set the color theme of components.
To select the pallet, set the `data-obc-theme` attribute on the `html` tag:

```html
<html lang="en" data-obc-theme="day"></html>
```

## Components

The components for this project are implemented in the `package/openbridge-webcomponents` folder.

## Installation

To use the components in your project, you can install the package from npm:

```bash
npm install @oicl/openbridge-webcomponents
```

To use the components in your Vue.js project, you can install the package from npm:

```bash
npm install @oicl/openbridge-webcomponents-vue
```

### Setup

1. Add the css file to your project:
   ```javascript
   import "@oicl/openbridge-webcomponents/src/palettes/variables.css";
   ```
2. Select the pallet by setting the `data-obc-theme` attribute on the `html` tag:
   ```html
   <html lang="en" data-obc-theme="day"></html>
   ```
3. Install the Noto Sans font by using the attached `NotoSans.tff` file. Add the following to your css:

   ```css
   @font-face {
     font-family: "Noto Sans";
     src: url("path/to/NotoSans.tff");
   }

   * {
     font-family: Noto Sans;
   }
   ```

4. Import the desired components in your project, for instance:

   ```javascript
   import "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js";
   ```

   or with vue wrapper:

   ```javascript
   import ObcTopBar from "@oicl/openbridge-webcomponents-vue/components/top-bar/ObcTopBar";
   ```

5. Use the components in your project:
   ```html
   <obc-top-bar></obc-top-bar>
   ```
   or with vue wrapper:
   ```html
   <ObcTopBar></ObcTopBar>
   ```

## Getting Started Developing

### With VS Code Dev Container (recommended)

To get started with the project, follow these steps:

1. Clone the repository.
2. Install visual studio code
3. Install Docker (requires license for large organizations)
4. Open visual studio code
5. Open the command palette (Ctrl+Shift+P)
6. Run the command `Dev Container: Open Workspace in Container`
   Select the `openbridge-webcomponents.code-workspace` file in the root folder of the repository.
   This will open the project in a containerized environment with all the necessary dependencies installed.
7. Optional: Go to the `package/openbridge-webcomponents` folder and run `yarn storbook` to start the Storybook development environment.
8. Optional: Go to the `package/vue-demo` folder and run `yarn dev` to run the Vue.js demo application.

### Without VS Code devcontainer, not recommended

1. Clone the repository.
2. Install Node.js (version 20) and Yarn.
3. Run `yarn install` in the root folder to install the dependencies.
4. Run `yarn run build:lib` to build all libraries.
5. Optional: Go to the `package/openbridge-webcomponents` folder and run `yarn storbook` to start the Storybook development environment.
6. Optional: Go to the `package/vue-demo` folder and run `yarn dev` to run the Vue.js demo application.

## Packages:

This mono-repo contains the following packages:

- `openbridge-webcomponents`: The main package containing the web components.
- `openbridge-webcomponents-vue`: A wrapper for the web components to be used in Vue.js projects. It is autogenerated from the `openbridge-webcomponents` package.
- `vue-demo`: A demo application showcasing the web components in a Vue.js project.

## Steps in the development process:

### Formatting:

Run `yarn format:all` to format the code using Prettier.

### Testing:

We use snapshot testing of the components through storybook.
To run the test:

1. Ensure that storybook is running. If it is not running, go to the `package/openbridge-webcomponents` folder and run `yarn storybook` to start storybook.
2. Run `yarn test-storybook` in the `package/openbridge-webcomponents` folder to run the tests.

Use the `yarn test-storybook --watch` command to watch for changes and re-run the tests.
Use the `yarn test-storybook -u` command to update the snapshots.

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute to this project.
