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
    return html` <form action="" method="post" class="form-container">
        ${email.element} ${password.element} ${confirmPassword.element}
        ${Country()} ${zipcode.element}
    </form>`;
}
