# SurferApp

## Issue with server side rendering (SSR) 

1. The server has the `config.json` file. `nconf` reads this file before connecting to MongoDB:
    ```typescript
    nconf.argv().env().file({file: join(__dirname, 'config.json')} );
    ```
    This code leads to that the server bundle thries to find `config.json` in **dist** folder. But this file is absent after running `yarn build:ssr`.
    
    Don't forget put this file manually into **dist** folder.
2. `ngx-facebook` isn't built for SSR. [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx) isn't followed. I fixed it by generating this library by myself and put it into `node_modules` instead of origin library. But now it's needed to put this lib into `node_modules` manually after each  `yarn add` because **yarn** downloads the origin lib. The same problem was with `@ng-bootstrap`.

3. `ERROR ReferenceError: requestAnimationFrame is not defined` during each prerendering of html-pages. **_NOT SOLVED_**

So remember about these issues and fix them manually.
