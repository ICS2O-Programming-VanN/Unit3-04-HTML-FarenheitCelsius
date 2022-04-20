// This file contains the JS functions for index.html

'use strict';
/**
 * This function converts fahrenheit to celsius.
 */
function calculate () {
  // Variables
  // Value is made into Float
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value) // Stores value from user

  // Process (calculates Celsius)
  let celsius = (5 / 9) * (fahrenheit - 32)

  // Outputs Celsius
  document.getElementById('celsius').innerHTML = 'The temperature in Celsius is: ' + Math.round(celsius) + ' C°'
  document.getElementById('celsius-decimals').innerHTML = "If you'd like a more specific number, the temperature in Celsius unrounded is: " + celsius + ' C°'
}