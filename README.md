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
import { TailwindcssPluginPart } from 'tailwindcss-plugin-part'

export default {
  plugins: [
    TailwindcssPluginPart()
  ]
}
```

## Syntax

The basic syntax is:

`part-[{{ partName }}]:{{ otherStuff }}`

## Example

Here's an example where we set the background-color to `red-500` on a shadow root part with the name of `"base"`,
and then on `:hover`, we change the background color to `blue-500`

```html
<my-web-component class="part-[base]:bg-red-500 part-[base]:hover:bg-blue">
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
