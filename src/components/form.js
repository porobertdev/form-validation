import { html } from '@github/jtml';
import { email } from './formControls/email';
import { password, confirmPassword } from './formControls/password';
import Country from './formControls/country';
import { zipcode } from './formControls/zipcode';

export default function Form() {
    return html` <form action="" method="post" class="form-container">
        ${email} ${password} ${confirmPassword} ${Country()} ${zipcode}
    </form>`;
}
