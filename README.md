# SurferApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Issue with server side rendering (SSR) 

1. Server has `config.json` file. `nconf` reads this file before connecting to MongoDB:
    ```typescript
    nconf.argv().env().file({file: join(__dirname, 'config.json')} );
    ```
    This code leads to that server bundle thries to find `config.json` in **dist** folder. But this file is absent after running `yarn build:ssr`.
    
    Don't forget put this file manually into **dist** folder.
2. `@ng-bootstrap` library isn't built for SSR. [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx) isn't followed. I fixed it generating this library by myself and put it into `node_modules` instead of origin library. But now it's needed to put lib into `node_modules` manually after each  `yarn add` because **yarn** downloads origin lib.
3. `ngx-facebook`. The same problem as with `@ng-bootstrap`.

4. `ERROR ReferenceError: requestAnimationFrame is not defined` during each prerendering of html-pages. **_NOT SOLVED_**

So remember about these issues and fix them manually.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
