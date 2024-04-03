/* eslint-disable import/prefer-default-export */

import Input from '../input';

export const email = Input({
    label: {
        id: 'email',
        text: 'Email Address:',
    },
    type: 'email',
    placeholder: 'Enter your email address',
});
