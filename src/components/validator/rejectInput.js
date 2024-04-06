export default function rejectInput(element) {
    element.classList.remove('valid');
    element.classList.add('invalid');

    // show error to the user
    element.reportValidity();
}
