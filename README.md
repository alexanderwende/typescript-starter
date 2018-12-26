# TypeScript Starter Template

This is a project template for TypeScript projects using
- [TypeScript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/)
- [Karma](http://karma-runner.github.io/latest/index.html)

Webpack is using [ts-loader](https://www.npmjs.com/package/ts-loader) for transpiling and bundling the TypeScript files. Webpack is also configured to serve index.ts via [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server).

Karma is configured to run all *.spec.ts files using [Jasmine](https://jasmine.github.io/) as assertion library and generate a mapped coverage report for all source files using [karma-typescript](https://www.npmjs.com/package/karma-typescript).
