# angular-universal-utils

[![npm](https://img.shields.io/npm/v/@exportarts/angular-universal-utils.svg?style=flat-square)](https://www.npmjs.com/package/@exportarts/angular-universal-utils)

> Work in Progress... More featues and docs are coming in the future.

## Installation

```
npm install --save-dev @exportarts/angular-universal-utils

# or

yarn add -D @exportarts/angular-universal-utils
```

## Usage

Use the `prerenderApplication()` function to prerender an [Angular Universal App](https://github.com/angular/universal).

All you have to provide is an array of routes to render and your compiled Universal App
(similar to [this example](https://github.com/angular/universal-starter/blob/master/server.ts#L22)).

Optionally, a simple sitemap can be generated. This feature is really basic at the moment and more
configuration options will eventaully be available.

## Dependency Management

The project in `./lib` has several peer-dependencies. Those are installed
as dev-dependencies in the main project to have them available during
development, but to not have them included in the final `package.json`.
