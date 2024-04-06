export default function validateInput(element, msg) {
    element.classList.remove('invalid');
    element.classList.add('valid');

    if (msg) {
        element.setCustomValidity(msg);
    } else {
        element.setCustomValidity('');
    }
}
