## Adding vite_rails

Lets add the `vite_rails` gem and follow the [installation instructions](https://vite-ruby.netlify.app/guide/#installation-%F0%9F%92%BF).

add `gem "vite_rails"` to our gemfil

run `bundle install`

run `bundle exec vite install`

this will create several files for us, including two vite configuration files, an entrypoints javacsript file,
and modify our `layouts/application.html.erb`

### Configuring Vite

Vite install created two vite configuration files for us. One for configuring the node module vite (`vite.config.ts`) and one
for configuring the vite_rails gem (`config/vite.json`).

Lets begin configuring the our `vite.config.ts`

We want to enable hot reloading and full refreshes

```bash
yarn add -D vite-plugin-full-reload
```

Now let's add that plugin to our vite configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import RubyPlugin from 'vite-plugin-ruby';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
  ],
});
```

### Configuring typescript

Let's go ahead and add a `tsconfig.json` to the root folder. This will allow us to use ts and tsx files in our application

```json
{
  "compilerOptions": {
    "baseUrl": "app/frontend",
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
  },
  "include": ["app/frontend", "vite.config.ts",
}
```

### Integrating with rails

Vite install made some changes to a few of our rails files, and made some new ones.

rails created `app/frontend/entrypoints/application.js` which acts as the entrypoint to our javascript app.
This is the file that will kickoff our app and replace the need to use import maps, turbo-rails etc.
Since we're using typescript let rename this to tsx.

`mv app/frontend/entrypoints/application.js app/frontend/entrypoints/application.tsx`

Now lets look at our `app/views/layouts/application.html.erb`

We'll see the following lines:

```
  <%= javascript_importmap_tags %>
  <%= vite_client_tag %>
  <%= vite_javascript_tag 'application' %>
```

let's replace them with typescript vite tags

```
  <%= vite_client_tag %>
  <%= vite_react_refresh_tag %>
  <%= vite_typescript_tag 'application.tsx' %>
```

### Creating our entrypoint

The last step! Lets create a rails controller, so we can see our application in action!

```bash
rails g controller pages home
```

Now we navigate to `app/views/pages/home.html.erb`

And replace the content of the file with

```
<%= content_tag(:div, '', id: 'root') %>
```

This creates the container div for our react app.

Finally, let's remove the import map from the app.

`rm config/importmap.rb`

Now we're ready to start our application.

In two different terminal tabs we call

`bin/rails server`

and

`bin/vite dev`

Finally, we navigate to `localhost:3000/pages/home` and if checkout the console, we should see our console.logs

`Vite ⚡️ Rails`
