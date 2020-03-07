# angular-universal-utils (deprecated)

## Deprecation Notice

This project has been discontinued in favor of two better alternatives:
- [The official prerender-builder](https://github.com/angular/universal/tree/master/modules/builders/src/prerender)
- Scully as a Static-Site-Generator (https://github.com/scullyio/scully)

[![npm](https://img.shields.io/npm/v/@exportarts/angular-universal-utils.svg?style=flat-square)](https://www.npmjs.com/package/@exportarts/angular-universal-utils)

> Work in Progress... More featues and docs are coming in the future.

## Installation

```
npm install --save-dev @exportarts/angular-universal-utils

# or

yarn add -D @exportarts/angular-universal-utils
```

## Usage

Use the [`prerenderApplication()`](https://github.com/exportarts/angular-universal-utils/blob/master/lib/prerender/prerender.ts)
function to prerender an [Angular Universal App](https://github.com/angular/universal).

All you have to provide is an array of routes to render and your compiled Universal App
(similar to [this example](https://github.com/angular/universal-starter/blob/master/server.ts#L22)).

Optionally, a simple sitemap can be generated. This feature is really basic at the moment and more
configuration options will eventually be available.

The easiest way is to run the function with `ts-node`. Alternatively, you can build it with webpack and
run it with regular `node`.

## Dependency Management

The project in `./lib` has several peer-dependencies. Those are installed
as dev-dependencies in the main project to have them available during
development, but to not have them included in the final `package.json`.
