# Evergreen-packages

## Set up

1. Clone the repo
2. Install dependencies from root level of the repo as it is a monorepo, do not have to install dependencies for each package

```
yarn install
```

## Development

1. Run the following command to start the development server for the package you are working on

```
e.g. yarn workspace @waitingonalice/design-system dev
```

OR

Run the following command from the root level of the package to start the development server for all packages

```
yarn dev
```

## Build

1. Run the following command to build the package you are working on

```
e.g. yarn workspace @waitingonalice/design-system build
```

OR

Run the following command from the root level of the package to build all packages

```
yarn build
```

## Publish to NPM

To publish a package, you are required to users are required to have an account on NPM and be added as a collaborator to the package.

All commands should be run from the root level of the package.
You should commit all changes to the package before publishing.
The order of scripts to be run should be as follows:

1. `yarn version:patch` - This will bump the version of the package
2. `yarn build:all` - This will build the package
3. `yarn publish:all` - This will publish the package to NPM

Alternatively, when pushing to the `main` branch, a GitHub action will run the above scripts automatically.
