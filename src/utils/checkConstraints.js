export default function checkConstraints(obj) {
    const input = document.getElementById(obj.label.id);

    if (obj.customValidation) {
        input.addEventListener('input', obj.customValidation.validate);
    }
}
