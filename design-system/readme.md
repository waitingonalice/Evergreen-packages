# @waitingonalice/design-system

## Set up

1. Make sure you have React installed as it's a peer dependency:

2. Have tailwind css installed and configured in your project

### Configurating Tailwind CSS

3. You are required to share the same base configuration of the project. This is done by creating a `tailwind.config.js` file in the root of your project and exporting the config object.

```
const baseConfig = require("@waitingonalice/design-system/tailwind.config");

module.exports = {
  ...baseConfig,
  // Add or override configurations here as needed
};
```

This approach allows you to merge configurations from baseConfig with your own tailwind.config.js file, ensuring consistency in Tailwind CSS configurations across projects.

You are also required to input the directory of the node_modules folder of the design system in the content array of your tailwind.config.js file.

This is done by adding the following line to the content array:

```
e.g.
'content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
    "../node_modules/@waitingonalice/design-system/**/*.{cjs,js}",
  ],',
```

Or whereever your project's node_modules folder is located.

For more information refer to the official tailwind documentation.
`https://tailwindcss.com/docs/content-configuration`

## Using the Design System

1. Install the package

For yarn users:

```
yarn add @waitingonalice/design-system
```

For npm users:

```
npm install @waitingonalice/design-system
```

2. Import the components you need

```
import { Button } from '@waitingonalice/design-system';
```

Alternatively, you may split the components into smaller bundles to reduce the bundle size of your project. For example, if you only need the Button component, you can import it like this:

```
import { Button } from '@waitingonalice/design-system/components/button';
```

3. Use the components

```
<Button>Click me</Button>
```
