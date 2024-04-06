import { html } from '@github/jtml';
import Label from './formControls/label';
import checkInput from './validator/checkInput';

export default function Input(props) {
    return html`
        ${Label(props.label.id, props.label.text)}
        <input
            type="${props.type}"
            placeholder="${props.placeholder}"
            id="${props.label.id}"
            oninput="${checkInput}"
        />
    `;
}
