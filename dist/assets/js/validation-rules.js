'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = required;
exports.email = email;
/**
 * Rule for required fields
 *
 * @param {element}
 * @return {boolean} passed validation
 */
function required(element) {
  return element.value === '';
}

/**
 * Rule for email fields
 *
 * @param {element}
 * @return {boolean} passed validation
 */
function email(element) {
  var re = /(\w+)@(\w+)\.[a-zA-Z]/g;
  var emailValue = element.value;
  return re.test(emailValue);
}