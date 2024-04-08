import { html } from '@github/jtml';
import { Dropdown } from 'my-components/src';
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

export function CustomCountry() {
    const options = COUNTRY_ADDRESS_POSTALS.map((country) => country.name);

    return Dropdown({ options, label: 'Country' });
}

export function Country() {
    // HTML inbuilt dropdown

    const option = (value) =>
        html`<option value="${value.toLowerCase()}">${value}</option>`;

    return html`
        ${Label('country', 'Country:')}
        <select name="country" id="country" required>
            <option value="">--Please choose an option--</option>
            ${COUNTRY_ADDRESS_POSTALS.map((country) => option(country.name))}
        </select
    `;
}
