export default function rejectInput(element, msg) {
    element.classList.remove('valid');
    element.classList.add('invalid');

    if (msg) {
        element.setCustomValidity(msg);
    }

    // show error to the user
    element.reportValidity();
}
