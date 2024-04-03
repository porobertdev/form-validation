import { html } from '@github/jtml';
import Label from './formControls/label';

export default function Input(props) {
    return html`
        ${Label(props.label.id, props.label.text)}
        <input type="${props.type}" placeholder="${props.placeholder}" />
    `;
}
