# slick-menu-item

## Description

<p align="center">
  <img src="https://user-images.githubusercontent.com/59962729/144452123-0594aeb6-a6b7-4a15-9c7e-02ba47cd1b4c.png">
</p>

A clickable item to be used inside of a side menu. Potentially `@slickteam/slick-side-menu`. Color reverse at hover. 
## Installation
```bash
npm i @slickteam/slick-menu-item
```

## Usage

- **Html vanilla**

```html
<script type="module">
  import '@slickteam/slick-menu-item';
</script>

<slick-menu-item></slick-menu-item>
```

- **Vue.js**

```html
<template>
    <slick-menu-item
        title="Home"
        icon="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
    ></slick-menu-item>
</template>

<script>
import '@slickteam/slick-menu-item';

export default {
  name: 'TestPage'
}
</script>

<style scoped>
/* Put CSS */
</style>

```

### Template

``` html
    <slick-menu-item
      title="Item title"
      icon=""
      color=""
      background=""
    ></slick-side-menu>
```
### Properties

Name                | Type               | Description
---                 | ---                | ---
`title`             | String             | Define the title of your menu item
`icon`              | String             | Here you need to use the code in the `d=""` parameter of the `<path>` tag within the `svg` tag of your icon (works only with one for now TODO improve)
`color`             | Boolean            | Set the text and icon color with hex value
`background`        | String             | Set the background color with hex value


### Events

Name                | Description
---                 | ---
`slick-menu-item-clicked`      | The event emitted when the menu item is clicked.

## Development

### Demoing with Storybook

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```
