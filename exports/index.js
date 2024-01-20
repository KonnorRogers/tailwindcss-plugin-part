import plugin from 'tailwindcss/plugin.js'

export function TailwindCssPluginPart () {
  return plugin(function({matchVariant}) {
    matchVariant(
      'part',
      (value) => {
        return `&::part(${value})`;
      },
    );
  })
}
