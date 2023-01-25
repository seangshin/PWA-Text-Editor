# PWA-Text-Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 ![](/screenshot.JPG)

Link to deployed application: https://afternoon-fortress-07309.herokuapp.com/

## Description
The motivation of this project is to build a text editor web application that meets the criteria of a progressive web application (PWA). The application features webpack, a popular JavaScript module bundler, to bundle all of its JavaScript, CSS, and other assets into a single, optimized bundle that can be served to the browser. It uses workbox, a set of libraries and Node modules developed by Google, to add service worker and offline capabilities as well. The data persistence techniques used in this application is supported by IndexedDB, a NoSQL database built into the browser.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
  
## Installation
The following tools were used for development and testing of this project: Code development IDE (Microsoft VS Code), node.js (JavaScript runtime environment), npm (software registry containing inquirer). See below for the full list of dependencies.

The following npm packages are required:
* express ^4.17.1
* babel-loader: ^8.2.2,
* babel/core: ^7.15.0,
* babel/plugin-transform-runtime: ^7.15.0,
* babel/preset-env: ^7.15.0,
* babel/runtime: ^7.15.3,
* css-loader: ^6.2.0,
* style-loader: ^3.2.1,
* html-webpack-plugin: ^5.3.2,
* http-server: ^0.11.1,
* webpack: ^5.51.1,
* webpack-cli: ^4.8.0,
* webpack-dev-server: ^4.0.0,
* webpack-pwa-manifest: ^4.3.0,
* workbox-webpack-plugin: ^6.2.4
* concurrently: ^5.2.0,
* nodemon: ^2.0.4
  
## Usage
Open the URL using a browser (Google Chrome preferred). Add text to the text editor and the data will persist when the editor loses focus. Install the editor to your local PC by selecting the install button and following the prompts.
  
## Credits
Georgia Tech Coding Bootcamp instructors, TA's, and other faculty.

## License
MIT
  
## Questions
GitHub URL: https://github.com/seangshin
Reach out additional questions at shin.seang@gmail.com
