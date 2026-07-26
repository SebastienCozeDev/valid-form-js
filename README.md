# @validform/validform

A small vanilla JS form validation library for the browser.

## Installation

```bash
npm install @validform/validform
```

## CDN

https://www.jsdelivr.com/package/npm/@validform/validform

## Usage

### 1. Include the script

```html
<script src="node_modules/@validform/validform/validform.min.js"></script>
```

Or use it in your bundler:

```js
import '@validform/validform'
```

### 2. Structure your form

Each validated input must:

- have an `id`.
- be inside the related `<label>`.
- use validation classes on the `<label>`.
- keep the error message element inside the same `<label>`.

### 3. Add validation rules to your form

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
      The email must contain a maximum of 255 characters.
    </p>
  </label>

  <label class="required chars-255-max">
    Password
    <input type="password" id="password">
    <p class="required">
      The password is required.
    </p>
    <p class="chars-7-min">
      The password must contain at least 7 characters.
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

## Validator classes

Validation classes must be placed on the `<label>` and on the error element inside the same `<label>`, not on the input itself.  
The element that will be shown on error must also stay inside the same `<label>`.

| Validation class | Meaning                                                                                       | Compatible input types |
| ---------------- | --------------------------------------------------------------------------------------------- | ---------------------- |
| required         | The input must not be empty.                                                                  | text, email, password  |
| valid-email      | The input must contain a valid email address.                                                 | email                  |
| chars-X-min      | The input must contain at least X characters. X can be 3, 5, or 7.                            | text, email, password  |
| chars-X-max      | The input must contain at most X characters. X can be 3, 5, 7, 8, 10, 16, 20, 30, 36, or 255. | text, email, password  |

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
