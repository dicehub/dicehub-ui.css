# Introduction

`dicehub-ui.css` is a very simple CSS framework for quick and flexible development of components.

Ui provides typography standards and basic styles for components such as buttons, forms alerts.


## Installation

There are multiple ways to get started with `dicehub-ui` CSS framework in your projects. Choose what suits you best.


### Install manually

Download the compiled and minified [dicehub-ui.css](https://www.npmjs.com/package/dicehub-ui) file (core ~10KB min+gzip)

<a href="#" class="btn is-primary">Download dicehub-ui.css</a>

Include dicehub-ui.css located in /dist in your website or Web app. Also, you can add sprite.svg directly to your page to use icons.

```html
<link rel="stylesheet" href="dicehub-ui.min.css">
```


### Install from CDN


::: warning
A CDN is not yet available.
:::


### Install with NPM

```bash
npm install @dicehub/dicehub-ui.css --save
```


### Install with Yarn

```bash
yarn add @dicehub/dicehub-ui.css
```


### Install from Bower

```bash
bower install @dicehub/dicehub-ui.css --save
```


## Custom version

You can customize your version of `dicehub-ui.css` by editing Sass files in `/src` directory or removing unneeded components from `.scss` source files.

<a href="#" class="btn is-primary">Sass Source Code</a>


## Compiling CSS

We use [Gulp](https://gulpjs.com/) for compiling CSS.

You can build the CSS files with the following procedure:

1. Go to the root directory.
2. Run `npm install`. NPM will install all dev dependencies as listed in `package.json`.
3. When completed, run `npm run build` task to compile Sass to CSS and minify files.
4. Now you should be able to find compiled CSS files in `/dist` directory.

All available commands:

- `npm run start:gulp` monitor changes in the source files and compile
- `npm run build:gulp` compile Sass to CSS and minify files
- `npm run start:vuepress` monitor changes in the documentation files
- `npm run build:vuepress` build documentation files
- `npm run sprite:docs` and `npm run sprite:ui` make `SVG` sprite from the files in `source/icons/`


## Importing Sass

It is recommended to customize dicehub-ui.css by importing Sass source files to your projects.

1. Create your own project or go to an existing one and install dicehub-ui package via NPM or other package managers.
2. Then create your `my-awesome-project.scss` file in your styles directory. Now you can use `my-awesome-project.scss` to define your variables.
3. Import `node_modules/@dicehub/dicehub-ui.css/source/index.scss` or import only what you need, example below;

```scss
// Example of my-awesome-project.scss
// Define variables to override default ones
$color-primary: #2e5bec;
$color-border: #b1b1b1;

// Import full source code
@import 'node_modules/dicehub-ui/source/index.scss';
```

Alternatively, you can create custom `_variables.scss` and import it to `project-name.scss`.

```scss
// Example of project-name.scss
@import "variables";

// Import only the needed components
@import 'node_modules/dicehub-ui/source/elements/btn';
@import 'node_modules/dicehub-ui/source/elements/form';
```


## Folder structure

```
/
├── dist/                                // Build folder
│   ├── dicehub-ui.css                   // dicehub-ui css file (not minified)
│   ├── dicehub-ui.min.css               // Minified css file
│   └── sprite.svg                       // SVG icons
│
├── src/                                 // Source Sass files
│   ├── icons/                           // Collection of the SVG icons
│   ├── sass/                            // Pre-built CSS folder
│   │   ├── components/                  // Folder with the complex components like alerts, dropdowns, tabs ...
│   │   │   ├── _alert.scss
│   │   │   ├── _util.scss
│   │   │   └── ...
│   │   ├── elements/                    // Simple elements like buttons, form controls ...
│   │   │   ├── _btn.scss
│   │   │   ├── _form.scss
│   │   │   └── ...
│   │   ├── lib/                         // Development files like mixins, functions, base styles
│   │   │   ├── _base.scss
│   │   │   ├── _functions.scss
│   │   │   └── ...
|   |   ├── _variables.scss              // Variables of the ui
|   |   └── index.scss                   // Entry point
│
├── docs/                                // Documentation (vuepress)
│   ├── .vuepress
│   │   ├── public/                      // Vuepress public folder (for include styles)
│   │   │   └── dicehub-ui.css
│   │   ├── config.js                    // Vuepress config
│   │   └── style.styl                   // Overwrite vuepress styles
│   ├── alerts.md                        // Documentation page
│   ├── buttons.md
│   └── ...
│
├── .editorconfig
├── gulpfile.js
├── package.json
└── ...
```


## Variables

All variables can be found in `src/sass/theme/_light.scss` for the light theme.

::: tip INFO
Other themes will be added in the near future.
:::

## Variables - Sizes

The default 1 REM (root em) size is 10px. This means when defining other sizes you should use rem instead of pixel. Here are some examples:

```css
width: 10rem;           # 100px
height: 15rem;          # 150px
border: 1rem solid red; # 10px solid red
```
