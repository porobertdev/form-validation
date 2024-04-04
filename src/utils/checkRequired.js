export default function checkRequired(obj) {
    const input = document.getElementById(obj.label.id);

    if (obj.required) {
        input.required = 'true';
    }
}
