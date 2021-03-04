# Documentation

## What NodeJS means?

- NodeJS is a Javascript Runtime
- NodeJS is NOT a framework or language
- Written in C++
- Built on the V8 Javascript Engine (like Google Chrome)

## What means NPM and what it does

- NPM is Node Package Manager
- Install 3rd party packages (frameworks, librariers etc)
- All dependencies are listed in a "package.json" file

### Simple example

```
npm init
npm install express
```

## Node Modules

- Example of Node Core Modules (path, fs, http etc)
- 3rd party modules/ packages installed via NPM
- Custom modules (files)

### Simple example

```
const path = require('path');
const myFile = require('./myFile');
```

## Credits

All notes were taken from Traversy Media's youtube channel. 
https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA
