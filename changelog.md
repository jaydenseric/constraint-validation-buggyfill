# constraint-validation-buggyfill changelog

## Next

### Major

- Support Node.js v10+, from v8+. The script is pretty simple, so this mostly applies to this project’s development environment.

### Patch

- Updated dev dependencies.
- Removed the now redundant [`eslint-plugin-import-order-alphabetical`](https://npm.im/eslint-plugin-import-order-alphabetical) dev dependency.
- Stop using [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).

## 1.0.0

### Major

- Support Node.js >= v8. The script is pretty simple, so this mostly applies to this project’s development environment.
- New project file structure.
- Dropped the package `jsnext:main` field.
- Stopped publishing separate `.js` and `.mjs` files.
- Stopped publishing source code and source maps.

### Minor

- Added a `typeof window` check to support server environments.

### Patch

- Added `changelog.md`.
- Redid the readme and added [jsDelivr CDN](https://jsdelivr.com) setup instructions.
- More specific browser support documented using [browserl.ist](https://browserl.ist).
- Setup Travis.
- Removed the JSDoc comment block containing `@licence`.
- Refactored source code syntax so it can be consumed directly by supported browsers.
- Added correct sentence punctuation to source code comments.
- Stopped using Rollup and Babel to build distribution code.
- Overhauled the package scripts and added a `test` script.
- Replaced [`standard`](https://npm.im/standard) with [`eslint-config-env`](https://npm.im/eslint-config-env).
- Use [`prettier`](https://npm.im/prettier) lint a variety of project files.
- Use [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged) to lint on commit.
- Updated the `.gitignore` file.
- Removed the `.npmignore` file in favor of a package `files` field.
- Added an `.npmrc` file to prevent `package-lock.json` file creation.
- Moved dev tool config from `package.json` to separate files, except for a new `browserslist` field.
- Simplified the `package.json` `repository` field.
- Use HTTPS for the `package.json` `author.url` field.

## 0.1.1

Initial release.
