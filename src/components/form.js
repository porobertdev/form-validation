import { html } from '@github/jtml';
// import { email } from './formControls/email';
import {
    email,
    password,
    confirmPassword,
    zipcode,
} from './formControls/barrel';
import { CustomCountry } from './formControls/country';

export default function Form() {
    return html` <form class="form-container">
        <div class="email">${email.element}</div>
        <div class="password">${password.element}</div>
        <div class="password-confirmation">${confirmPassword.element}</div>
        <div class="country-zip">
            ${CustomCountry()}
            <div class="zipcode">${zipcode.element}</div>
        </div>
        <button>Submit</button>
    </form>`;
}
