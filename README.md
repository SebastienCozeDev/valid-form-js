# @validform/validform

A small vanilla JS form validation library for the browser.

## Installation

```bash
npm install @validform/validform
```

## Usage

### 1. Include the script

```html
<script src="node_modules/@validform/validform/validform.min.js"></script>
```

Or use it in your bundler:

```js
import '@validform/validform'
```

### 2. Add validation rules to your form

```html
<form>
  <label class="required chars-3-min chars-16-max">
    Username
    <input type="text" id="username">
    <p class="required">
      The username is required.
    </p>
    <p class="chars-3-min">
      The username must contain at least 3 characters.
    </p>
    <p class="chars-16-max">
      The username must contain a maximum of 16 characters.
    </p>
  </label>

  <label class="required valid-email chars-255-max">
    Email
    <input type="email" id="email">
    <p class="required">
      The email is required.
    </p>
    <p class="valid-email">
      The email address must be valid.
    </p>
    <p class="chars-255-max">
      The username must contain a maximum of 255 characters.
    </p>
  </label>

  <label class="required chars-255-max">
    Email
    <input type="password" id="password">
    <p class="required">
      The password is required.
    </p>
    <p class="chars-7-min">
      The username must contain at least 7 characters.
    </p>
    <p class="chars-255-max">
      The password must contain a maximum of 255 characters.
    </p>
  </label>

  <button type="submit" disabled>
    Sign up
  </button>
</form>
```

## Features

- Vanilla JavaScript.
- No dependencies.
- Works in the browser.
- Lightweight and simple to integrate.

## Files included

This package exposes:

- `validform.min.js` for production use.
- `validform.js` for development and debugging.

## Scripts

- `npm run minify` minifies `validform.js` into `validform.min.js`.
- `npm run prepublishOnly` automatically runs minification before publishing.

## Package info

- **Name:** `@validform/validform`
- **Version:** `1.0.2`
- **Author:** `SebastienCozeDev`
- **License:** MIT
