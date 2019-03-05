# SurferApp

This is my first testing project based on Angular 6. It was updated to Angular 7 later.
Working example is [here](http://35.158.177.110:8080/)

## Features

This app has several working pages. They are: 
- Home page.
- Blog page.
- Post page.
All other links will fallback to the page  `Page not found`.

The app uses Angular Universal and Service Worker. But the URL of the app starts from `http://` and PWA doesn't work.  PWA always requires `https://`.

This app has own implementation of scrolling to top. However, `ViewportScroller` could be used instead. I didn't know about it while developing the test project.


## Issues with the server side rendering (SSR) 

1. The server has the `config.json` file. `nconf` reads this file before connecting to MongoDB:
    ```typescript
    nconf.argv().env().file({file: join(__dirname, 'config.json')} );
    ```
    This code leads to that the server bundle tries to find `config.json` in **dist** folder. But this file is absent after running `yarn build:ssr`.
    
    Don't forget put this file manually into **dist** folder.
2. `ngx-facebook` isn't built for SSR. [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx) isn't followed. I fixed it by generating this library by myself and put it into `node_modules` instead of origin library. But now it's needed to put this lib into `node_modules` manually after each  `yarn add` because **yarn** downloads the origin lib. The same problem was with `@ng-bootstrap`.

3. The line with `const DIST_FOLDER=join(process.cwd(), 'dist')` (`server.ts`) was the culprit of not rendering the `index.html` on the server. The rendering hasn't even started. This is because the value of `DIST_FOLDER` was `/home/ubuntu/dist/browser`. But I deployed the app in the folder `/home/ftpuser/surf-app/dist`. Therefore for production, I set the value of `DIST_FOLDER` as `/home/ftpuser/surf-app/dist`. Don't forget to change the value of `DIST_FOLDER` while moving to another Cloud. 

4. `ERROR ReferenceError: requestAnimationFrame is not defined` during each prerendering of html-pages. **_NOT SOLVED_**

So remember about these issues and fix them manually.


## How to install and use

To install this project do these actions:
- run `git clone https://github.com/vitalii-andriiovskyi/surf-app.git`
- run `yarn` to install packages
- create the db `surf` in the `MongoDB`
- import files from the folder [`db`](./db) into `MongoDB`. The folder `db` is in the root of the project

To run the `api` use the command `yarn start:express-server`.  
To run the `surfer-app` use the command `ng serve`.  
To run project compiled with Angular Universal use the command `yarn serve:ssr`.
