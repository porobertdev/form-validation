import Input from '../input';

export const password = Input({
    label: {
        id: 'password',
        text: 'Password:',
    },
    type: 'password',
    placeholder: 'Enter your password',
});

export const confirmPassword = Input({
    label: {
        id: 'password-confirmation',
        text: 'Confirm Password:',
    },
    type: 'password',
    // placeholder: 'Enter your password',
});
