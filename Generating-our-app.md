## Generating our new app

---

This project is setup using the vite_rails gem, but we need
to do some preparation prior to installing vite.
To setup your own project we need to, generate your rails project:

```
rails new my-app -M -C -T -d postgresql --skip-hot-wire
```

This creates lots of things in our gemfile which we don't need,
because we're going to be using vite to build our frontend application.
We can delete these three mentions from our gemfile:

```ruby
# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"
```

Our generator will also create the app/javascript and vendor/javascript folder. In this project,
we rename that folder to `app/frontend` and `vendor/frontend` and update the reference to
them in `app/assets/config/manifest.js`

```
//= link_tree ../../javascript .js
//= link_tree ../../../vendor/javascript .js
```

becomes

```
//= link_tree ../../frontend .js
//= link_tree ../../../vendor/frontend .js
```

Next we add rspec to `:development`, `:test`

```ruby
#Gemfile

group :development, :test do
  # ...

  gem "rspec-rails"
  gem "factory_bot_rails"
end
```

```bash
bundle install; rails generate rspec:install;
```

Now we create our database
`bin/rails db:create; bin/rails db:migrate; bin/rails db:test:prepare`
