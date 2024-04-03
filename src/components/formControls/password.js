import Input from '../input';

const props = {
    label: {
        id: 'password',
        text: 'Password:',
    },
    type: 'password',
    placeholder: 'Enter your password',
    attributes: {
        minLength: 8,
        maxLength: 32,
    },
};

const element = Input(props);

export { props, element };
