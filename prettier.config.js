module.exports = {
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  importOrderParserPlugins: ['typescript', 'jsx'],
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cva'],
  tailwindConfig: './packages/tailwind-config/tailwind.config.ts',
};
