# Purpose

Make the `::part()` CSS selector for Shadow DOM easier to work with.

Here's a primer as to why this is nice:

<https://konnorrogers.com/posts/2023/web-components-tailwind-and-ssr/#consuming-web-components-with-tailwind>

## Installation

```bash
npm install tailwindcss-plugin-part
```

## Adding the plugin

```js
const { TailwindcssPluginPart } = require('tailwindcss-plugin-part')

module.exports = {
  plugins: [
    // ...
    TailwindcssPluginPart()
  ]
}
```

## Syntax

```html
<my-web-component class="part-[base]:bg-red-500 part[base]:hover:bg-red-600">
  <ShadowRoot>
    <div part="base"></div>
  </ShadowRoot>
</my-web-component>
```

Generated selectors:

```css
&::part(base).bg-red-500 { background-color: theme("colors.red.500"); }
&::part(base):hover:bg-red-600 { background-color: theme("colors.red.600"); }
```

## Additional notes

Order matters. If for some reason a part isn't being applied as expected, make sure things are in the correct order.
`::part()` is a pseudo-element and does not accept all possible pseudo-selectors / pseudo-elements.
