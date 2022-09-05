# react-sf-themes

> Color theme for the Superflows component system

[![NPM](https://img.shields.io/npm/v/react-sf-themes.svg)](https://www.npmjs.com/package/react-sf-themes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Node.js CI](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml/badge.svg)](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml)

<br />

## On This Page

- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [Theme](#theme)
- [Quickstart](#quickstart)
- [Customization](#customization)
- [Tests](#tests)

<br />

## Introduction

Use this package to access the default color theme provided by Superflows. Then customize it further by changing the default color values to suit your UI. 

<br />

## How It Works

Customization works as follows:
- Access the default color theme using this package
- Modify the colors as per your requirement
- Pass the modified theme to your Superflows components

<br />

## Theme

Theme is a set of:
- Variants
- Types
- Colors

### Variants

Superflows is designed using Bootstrap, naturally the variants are same as Bootstrap's. 
- Primary
- Secondary
- Danger
- Success
- Warning
- Info
- Light
- Dark

### Types

Types are also inspired from Bootstrap, but considerably simplified.
- Filled
- Outlined

### Colors

Superflows is designed using Bootstrap, naturally the color theme follows the Bootstrap's default color theme as well. Following colors are defined:

| Variant      | Background Color  | Text Color         |
|--------------|-------------------|--------------------|
| Primary      | #0d6efd           | #ffffff            |
| Secondary    | #6c757d           | #ffffff            |
| Danger       | #dc3545           | #ffffff            |
| Success      | #198754           | #ffffff            |
| Warning      | #ffc107           | #000000            |
| Info         | #0dcaf0           | #000000            |
| Light        | #f8f9fa           | #000000            |
| Dark         | #212529           | #ffffff            |

<br />

## Quickstart

### Installation

```bash
npm install --save react-sf-themes
```

### Usage

```tsx
import React from 'react'
import Themes from 'react-sf-themes'

const App = () => {

  console.log('Themes', Themes.getTheme());

  return <div></div>
}

export default App

```

<br />

## Tests

### How To Run

To run tests locally:

```bash
npm test
```

### Results

PASS src/index.test.tsx
- Themes
  - ✓ Render (3ms)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 index.tsx |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.445s

<br />

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
