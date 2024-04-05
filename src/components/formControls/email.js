/* eslint-disable import/prefer-default-export */

import Input from '../input';

const props = {
    label: {
        id: 'email',
        text: 'Email Address:',
    },
    type: 'email',
    placeholder: 'Enter your email address',
    required: true,
};

const element = Input(props);

export { props, element };
