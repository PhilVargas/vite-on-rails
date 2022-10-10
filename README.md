# README

Rails application using typescript, react, built using [Vite](https://vitejs.dev/guide/) and the [vite_rails](https://vite-ruby.netlify.app/guide/rails.html) gem.

### Versions

- Rails 7
- Ruby 3.1
- Node 18.7

### Setting up the application

- Here we use an `app/frontend` folder to store our front end application. Rails will generate an `app/javascript` folder by default

- `prettier` and `eslint` are configured with several recommended base templates. Custom eslint rules can be configured in the `.eslintrc.rules.cjs` file

- We've opted to build the front end using `Vite`, which comes with two configuration files: [`vite.config.ts`](https://vite-ruby.netlify.app/config/index.html#configuring-vite-%E2%9A%A1) and [`config/vite.json`](https://vite-ruby.netlify.app/config/index.html#shared-configuration-file-%F0%9F%93%84)

  - The `vite.config.ts` is used to configure the vite package provided by our node_modules. Here we include any plugins that run along side vite
  - The `config/vite.json` file is our configuration for the `vite_rails` gem.

## Configuration

---

- Install postgres

  `brew install postgresql`

  `brew services start postgresql`

- Install ruby version

  `rvm install 3.1.0`

  `rvm use`

- Install node

  `nvm install`

  `nvm use`

- Install bundler

  `gem install bundler`

- Install rails and node modules

  `bundle install`

  `yarn`

- Setup the database

  `bundle exec rails db:prepare`

  `bundle exec rails db:migrate`

  `bundle exec rails db:migrate`

- Start the rails server

  `bin/rails server`

- In a separate tab, start the frontend app

  `bin/vite dev`

- Visit the app at `localhost:3000`

## Testing

---

- Run the frontend tests

  `yarn run test`

- Run the frontend test suite in watch mode

  `yarn run watch`

- Run the rails specs

  `bundle exec rspec`
