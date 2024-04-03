export default function checkAttributes(obj) {
    console.log(obj.label.id);
    const input = document.getElementById(obj.label.id);
    console.log(input);

    if (obj.attributes) {
        Object.keys(obj.attributes).forEach((name) => {
            console.log(obj.attributes[name]);
            input[name] = obj.attributes[name];
        });
    }
}
