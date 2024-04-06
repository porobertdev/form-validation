import Input from '../input';
import rejectInput from '../validator/rejectInput';
import validateInput from '../validator/validateInput';

const props = {
    label: {
        id: 'password-confirmation',
        text: 'Confirm Password:',
    },
    type: 'password',
    // placeholder: 'Enter your password',
    attributes: {
        minLength: 8,
        maxLength: 32,
    },
    required: true,
    customValidation: {
        validate() {
            const password = document.getElementById('password');

            if (this.value !== password.value) {
                rejectInput(this, "Passwords don't match!");
            } else {
                validateInput(this);
            }
        },
    },
};

const element = Input(props);

export { props, element };
