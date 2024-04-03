import { html } from '@github/jtml';

export default function Label(id, text) {
    return html` <label for="${id}">${text}</label>`;
}
