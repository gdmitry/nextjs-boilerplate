module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit --incremental false',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
