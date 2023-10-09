## Installing our front end dependencies

Install yarn and Node on your system, then we want to init our project.
Create a `package.json` on the top level that looks like:

```json
{
  scripts: {
    test: jest,
    watch: jest --watch
  }
}
```

Now we can begin adding our depenencies

```
yarn add react react-dom react-router react-router-dom
```

and our dev dependencies

```
yarn add -D typescript jest jest-environment-jsdom ts-node ts-node-dev @babel/core @swc/core @swc/jest
```

Add react testing library

```
yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

Add our types

```
yarn add -D @types/node @types/react @types/react-dom @types/react-router-dom
```

Depending on your project needs, you may also wish to add a component library, like [storybook](https://storybook.js.org/docs/react/get-started/introduction/) or [material ui](https://mui.com/material-ui/getting-started/installation/)

It is also recommended to install a linter and formatter for your front end projects, which will be completed in a later step.

## Cleaning up our frontend folder

Since we're not using import maps, do not need anything in the `frontend/application.js`, so lets delete the following lines, so it's empty

```
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
```

Next lets delete the `frontend/controllers` folder since we're not using hotwire/stimulus

## Configuring Jest

TODO

Next up: We'll add our tsconfig, Vite, and the vite_rails gem
