'use strict'

if (typeof window !== 'undefined')
  // Listen for all form submissions.
  window.addEventListener('submit', function(event) {
    // Check form should be validated and is invalid.
    if (!event.target.noValidate && !event.target.checkValidity()) {
      // Prevent form submission.
      event.preventDefault()

      // Get first invalid form descendant.
      var firstInvalid = event.target.querySelector(':invalid')

      // Display validation error message.
      window.alert(firstInvalid.validationMessage)

      // Focus after alert is closed.
      firstInvalid.focus()
    }
  })
