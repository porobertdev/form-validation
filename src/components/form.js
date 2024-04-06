import { html } from '@github/jtml';
// import { email } from './formControls/email';
import {
    email,
    password,
    confirmPassword,
    zipcode,
} from './formControls/barrel';
import Country from './formControls/country';

export default function Form() {
    return html` <form class="form-container">
        <div>${email.element}</div>
        <div>${password.element}</div>
        <div>${confirmPassword.element}</div>
        <div class="country-zip">
            <div>${Country()}</div>
            <div>${zipcode.element}</div>
        </div>
        <button>Submit</button>
    </form>`;
}
