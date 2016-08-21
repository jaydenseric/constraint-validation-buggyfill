/**
 * Prevents invalid form submission in browsers that improperly support the HTML forms spec (i.e. Safari). The first invalid element is focused after alerting the validation message.
 * @module constraint-validation-buggyfill
 * @see https://github.com/jaydenseric/constraint-validation-buggyfill
 * @version 0.1.0
 * @author Jayden Seric
 * @license MIT
 */

// Listen for all form submissions
window.addEventListener('submit', event => {
  // Check form should be validated and is invalid
  if (!event.target.noValidate && !event.target.checkValidity()) {
    // Prevent form submission
    event.preventDefault()
    // Get first invalid form descendant
    const firstInvalid = event.target.querySelector(':invalid')
    // Display validation error message
    window.alert(firstInvalid.validationMessage)
    // Focus after alert is closed
    firstInvalid.focus()
  }
})
