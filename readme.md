# Constraint validation buggyfill

![Version](https://img.shields.io/badge/version-0.1.0-brightgreen.svg?style=flat-square)
![Github issues](https://img.shields.io/github/issues/jaydenseric/constraint-validation-buggyfill.svg?style=flat-square)
![Github stars](https://img.shields.io/github/stars/jaydenseric/constraint-validation-buggyfill.svg?style=flat-square)

Prevents invalid form submission in browsers that improperly support the HTML forms spec (i.e. Safari). The first invalid element is focused after alerting the validation message.

Using an alert kind of sucks but Safari doesn't support [`reportValidity()`](https://www.w3.org/TR/html52/sec-forms.html#dom-htmlinputelement-reportvalidity) either.

- Only operates if the browser fails to prevent an invalid form submission.
- No DOM updates.
- Written in ES6.
- Implements UMD.
- IE 10+ and modern browser support.
- [MIT license](https://en.wikipedia.org/wiki/MIT_License).

## Usage

Install via NPM:

```bash
npm install constraint-validation-buggyfill --save
```

At the beginning of your application JS:

```js
import 'constraint-validation-buggyfill'
```

The module will self-initialize.

## See

- [Caniuse: Form validation](http://caniuse.com/#feat=form-validation)
- [WebKit Bugzilla: Support for interactive validation of form elements](https://bugs.webkit.org/show_bug.cgi?id=28649)
- [W3C HTML form submission algorithm](https://www.w3.org/TR/html52/sec-forms.html#form-submission-algorithm)
- [WHATWG HTML form submission algorithm](https://html.spec.whatwg.org/multipage/forms.html#form-submission-algorithm)
