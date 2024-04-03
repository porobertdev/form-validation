import Input from '../input';

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
};

const element = Input(props);

export { props, element };
