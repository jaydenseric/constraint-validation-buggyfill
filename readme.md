# Constraint validation buggyfill

[![npm version](https://badgen.net/npm/v/constraint-validation-buggyfill)](https://npm.im/constraint-validation-buggyfill) [![Build status](https://travis-ci.org/jaydenseric/constraint-validation-buggyfill.svg?branch=master)](https://travis-ci.org/jaydenseric/constraint-validation-buggyfill)

Prevents invalid form submission in browsers that improperly support the HTML forms spec (e.g. Safari v5 → 10). The first invalid element is focused after alerting the validation message. An alert is used due to poor browser support for [`reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity).

## Setup

### npm setup

To install from [npm](https://npmjs.com) run:

```sh
npm install constraint-validation-buggyfill
```

Add this import to components with forms:

```js
import 'constraint-validation-buggyfill'
```

### CDN setup

To install from [npm](https://npmjs.com) via the [jsDelivr CDN](https://jsdelivr.com), add this script to pages with forms:

```html
<script src="https://cdn.jsdelivr.net/npm/constraint-validation-buggyfill@1/index.min.js"></script>
```

## Support

- Node.js v10+
- Browsers [`> 0.5%, not dead, IE >= 10, ExplorerMobile >= 10, Firefox >= 4, Chrome >= 10, Safari >= 5, iOS >= 4, Android >= 4, BlackBerry >= 7, KaiOS >= 2.5`](https://browserl.ist/?q=%3E+0.5%25%2C+not+dead%2C+IE+%3E%3D+10%2C+ExplorerMobile+%3E%3D+10%2C+Firefox+%3E%3D+4%2C+Chrome+%3E%3D+10%2C+Safari+%3E%3D+5%2C+iOS+%3E%3D+4%2C+Android+%3E%3D+4%2C+BlackBerry+%3E%3D+7%2C+KaiOS+%3E%3D+2.5)

## See

- [Caniuse: Form validation](http://caniuse.com/#feat=form-validation)
- [WebKit Bugzilla: Support for interactive validation of form elements](https://bugs.webkit.org/show_bug.cgi?id=28649)
- [W3C HTML form submission algorithm](https://www.w3.org/TR/html52/sec-forms.html#form-submission-algorithm)
- [WHATWG HTML form submission algorithm](https://html.spec.whatwg.org/multipage/forms.html#form-submission-algorithm)
