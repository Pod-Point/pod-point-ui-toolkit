/**
 * Rule for required fields.
 *
 * @param {HTMLElement} element
 * @return {Boolean} passed validation
 */
export function required(element) {
    return (element.value === '');
}

/**
 * Rule for email fields.
 *
 * @param {HTMLElement} element
 * @return {Boolean} passed validation
 */
export function email(element) {
    const re = /(\w+)@(\w+)\.[a-zA-Z]/g;
    const emailValue = element.value;
    return re.test(emailValue);
}
