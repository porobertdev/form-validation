import { html } from '@github/jtml';
import Label from './label';
import { COUNTRY_ADDRESS_POSTALS } from '../../constants/countries';

// export const country = Input({
//     label: {
//         id: 'country',
//         text: 'Country:',
//     },
//     type: 'text',
//     placeholder: 'Choose your country',
// });

const option = (value) =>
    html`<option value="${value.toLowerCase()}">${value}</option>`;

export default function Country() {
    return html`
        ${Label('country', 'Country:')}
        <select name="country" id="country" required>
            <option value="">--Please choose an option--</option>
            ${COUNTRY_ADDRESS_POSTALS.map((country) => option(country.name))}
        </select
    `;
}
