<p align="center">
  <img src="https://raw.githubusercontent.com/SubZane/flymenu-reactjs/master/public/img/github-img.png" width="400" alt="flymenu-reactjs">
</p>
<p align="center">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/flymenu-reactjs/styled-components?color=%23DB7093">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/flymenu-reactjs/react?color=61DAFB">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/flymenu-reactjs/react-dom?color=61DAFB">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/flymenu-reactjs/react-scripts?color=61DAFB">
	<img src="https://img.shields.io/github/package-json/dependency-version/subzane/flymenu-reactjs/typescript">
</p>
<p align="center">
	<img src="https://img.shields.io/github/v/release/SubZane/flymenu-reactjs?sort=semver">
	<img src="https://img.shields.io/github/workflow/status/subzane/flymenu-reactjs/Build Validation (on Push)/development?label=development%20build">
	<img src="https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen">
</p>
## Description

flymenu-reactjs is an off-canvas menu component written in ReactJS with TypeScript and Styled Components.

## Demo

A demo can be found here: <a href="https://andreasnorman.com/flymenu-reactjs">Demo</a>

## Installation

```
yarn add flymenu-reactjs
# or via npm
npm install flymenu-reactjs --save
```

## Theme Options

There is a small theme settings file located in `/src/helpers/theme.tsx` where you can change colors and such.

### Properties

`<OffCanvasPanel />` component

- `showButton = true`: If the default menu button should be used
- `state = ''`: If the menu should be visible or not. Only used when not using the default menu button `'open' | 'close' | ''`
- `animation = 'door-left'`: Animation effect of the menu. You can choose between `'door-left' | 'door-right' | 'flip-bottom' | 'flip-top'`

`<Slidemenu />` component

- `menuDataSource`: Menudata object used to render the menu
- `backButtonText = 'Go back'`: Text on the back-button

## Local development and usage

Install dependencies and start the development server

```
yarn install
yarn start
```

Open [`localhost:3000`](http://localhost:3000) in your browser.

## Requirements

Requires Node 11 to run
