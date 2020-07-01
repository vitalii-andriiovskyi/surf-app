# SurferApp

This is my first testing project based on Angular 6. It was updated to Angular 9 later.
Working example is [here](http://35.158.177.110:8080/)

## Features

This app has several working pages. They are:

- Home page.
- Blog page.
- Post page.
All other links will fallback to the page  `Page not found`.

The app uses Angular Universal and Service Worker. But the project doesn't use SSL and PWA doesn't work.

This app has own implementation of scrolling to top. However, `ViewportScroller` could be used instead. I didn't know about it while developing the test project.

## Issues with the server side rendering (SSR).

1. The server has the `config.json` file. `nconf` reads this file before connecting to MongoDB:

    ```typescript
    nconf.argv().env().file({file: join(__dirname, '../config.json')} );
    ```

    This code leads to that the server bundle tries to find `config.json` in **dist** folder. But this file is absent after running `yarn build:ssr`.

    Don't forget put this file manually into **dist** folder.

2. The line with `const DIST_FOLDER=join(process.cwd(), 'dist')` (`server.ts`) was the culprit of not rendering the `index.html` on the server. The rendering hasn't even started. This is because the value of `DIST_FOLDER` was `/home/ubuntu/dist/browser`. But I deployed the app in the folder `/home/ftpuser/surf-app/dist`. Therefore for production, I set the value of `DIST_FOLDER` as `/home/ftpuser/surf-app/dist`. Don't forget to change the value of `DIST_FOLDER` while moving to another Cloud.

3. `ERROR ReferenceError: requestAnimationFrame is not defined` during each prerendering of html-pages. **_NOT SOLVED_**

4. Error with running `yarn dev:ssr`. The error was:

    ```log
    connect ECONNREFUSED 127.0.0.1:4528
    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    ```

    The problem was with port. The backend was configured to run on the port `4040` and frontend used this port to access api. But the dev server was expecting `4200`.

    The solution is to add `port: 4040`:
    `angular.json`

    ```json
    "serve-ssr": {
        "builder": "@nguniversal/builders:ssr-dev-server",
        "options": {
        "browserTarget": "surfer-app:build",
        "serverTarget": "surfer-app:server",
        "port": 4040
        },
    ```

    But this is not the ending. Angular Universal Live Development Server uses random ports. So to catch them use `const PORT = process.env.PORT`.

5. Using `ts-node`.
    It's good to use `ts-node` for development of `api`. But I wasn't able to configure it to run the frontend part. That is when I load the page printing in the browser: `http://localhost:4040`, I got the error:

    ```log
    {"ngSyntaxError":true,"level":"error"}
    Error: Can't resolve all parameters for ResizeService: (?).
        at syntaxError (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\util.ts:108:17)
        at CompileMetadataResolver._getDependenciesMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:991:27)
        at CompileMetadataResolver._getTypeMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:870:20)
        at CompileMetadataResolver._getInjectableTypeMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:1127:17)
        at CompileMetadataResolver.getProviderMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:1138:16)
        at H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:1059:38
        at Array.forEach (<anonymous>)
        at CompileMetadataResolver._getProvidersMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:1015:15)
        at CompileMetadataResolver.getNgModuleMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:678:30)
        at CompileMetadataResolver.getNgModuleSummary (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:464:31)
        at H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:563:20
        at Array.forEach (<anonymous>)
        at CompileMetadataResolver.getNgModuleMetadata (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:535:43)
        at CompileMetadataResolver.getNgModuleSummary (H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:464:31)
        at H:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\packages\compiler\src\metadata_resolver.ts:563:20
        at Array.forEach (<anonymous>) {
    ngSyntaxError: true,
    level: 'error',
    [Symbol(level)]: 'error',
    [Symbol(message)]: '{"ngSyntaxError":true,"level":"error"}'
    }
    ```

    However, if not to load `http://localhost:4040`, `/api` calls work fine.
    Also remember, to use `ts-node`, change the path to `config.json` in `/nconf/index.ts` to `./config.json`. Otherwise you won't connect to MongoDB.

## How to install and use

To install this project do these actions:

- run `git clone https://github.com/vitalii-andriiovskyi/surf-app.git`
- run `yarn` to install packages
- create the db `surf` in the `MongoDB`
- import files from the folder [`db`](./db) into `MongoDB`. The folder `db` is in the root of the project

To run the `api` use the command `yarn start:express-server`.  
To run the `surfer-app` use the command `ng serve`.  
To run project compiled with Angular Universal use the command `yarn serve:ssr`.
