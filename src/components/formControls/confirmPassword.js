import Input from '../input';

const props = {
    label: {
        id: 'password-confirmation',
        text: 'Confirm Password:',
    },
    type: 'password',
    // placeholder: 'Enter your password',
};

const element = Input(props);

export { props, element };
