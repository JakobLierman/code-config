# lint-staged-config-jakoblierman

Personal, almost zero-config [lint-staged](https://github.com/okonet/lint-staged) configuration.

## Installation

```bash
npm install --save-dev lintstaged-config-jakoblierman
```

```bash
yarn add --dev lintstaged-config-jakoblierman
```

## Usage

`.lintstagedrc.js`

```js
module.exports = require('lintstaged-config-jakoblierman')(languages?);
```

### Arguments

#### **languages** [Optional]

Allowed languages to lint

Type: `String[]`

Default:

```js
[
  'ts',
  'js',
  'tsx',
  'jsx',
  'json',
  'yml',
  'css',
  'scss',
  'sass',
  'less',
];
```

## License

MIT
