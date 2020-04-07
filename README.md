<p align="center">
  <img src="https://raw.githubusercontent.com/SubZane/flymenu-reactjs/master/public/img/github-img.png" width="400" alt="flymenu-reactjs">

## Description

flymenu-reactjs is an off-canvas menu component written in ReactJS with TypeScript and Styled Components.

## Demo

A demo can be found here: <a href="https://andreasnorman.com/flymenu-reactjs">Demo</a>

## Installation

```
yarn install flymenu-reactjs
# or via npm
npm install flymenu-reactjs
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
