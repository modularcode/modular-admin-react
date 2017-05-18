# Modular Admin: Free Bootstrap 4 Dashboard Theme | ReactJS version (in development)

 ![demo](http://modularcode.github.io/modular-admin-html/assets/demo.png)

## Technical requirements

- Modular folder structure
- AirBnB style guide
- React best practices
- Webpack dev server
- React hot module replacement
- React router
- Redux
- Redux dev tools
- Normalizr
- Reselect
- Styled components or css modules
- Isomorphic
- App scripts

## ToDo

- Setup `npm start` command, which builds the app and starts node server
- Setup environments
- Configure styles and scripts bundling
- Setup hot module reloading
- Setup bootstrap styles and scripts
- Setup `src/browser` directory structure as in **modular-admin-html**
- Import common styles from **modular-admin-html**
- Implement auth layouts in React



## Development plan

- Clean up develop branch, leave only browser stack
- Implement Modular Admin in develop branch on este stack (https://github.com/este/este)
- Re-Implement Modular Admin in master branch with better folder organization, simpler code, static files generation etc.
- Implement react native version
modular-starter-react (in development)



### Folder Structure

### Components

## Build process

### Module bundling

Webpack is used to bundle web application modules. Webpack's config files are located in tools/ folder.

### Modules import resolution

When importing app modules you may use paths relative to the src/client folder as well, so you don't have to add lot's of ../../../ prefixes to your internal file imports

## Decesions and motivations


#### Multi-level ```_common/```, ```_state/``` folders

Please see modular folder structure acticle.


#### Prefixing special folder names with underscore ```_```

This was done to distinguish such folders from component folders. Also prefixing it with underscore moves the position of folders in Text Editors above the rest component folders, which is amazingly convenient

#### UpperCase for component names and camelCase for rest files

As per AirBNB style guide the component names should start with capital letter.

#### Defining api interactions in ```src/_state/{entytyName}/api.js```

At first I was defining api interaction files in ```_services/{entityName}.js``` file. But because it would be good to have API response normalized with **normalizr** library, you need entyty schema for that. On the other hand you need the entity schema on denormalizing (e.g. in selectors created by **reselect**). So I thought that keeping all stuff in the same place would make it easier to work with entities.

#### Why redux-thunk and not redux-saga

Redux thunk is simpler to start with. More advanced users should be able to easily move from redux-thunk to redux-saga.

#### Separate folder for build tasks configs

Better for eyes when the project isn't overloaded with lot's of files on the very first glance.
