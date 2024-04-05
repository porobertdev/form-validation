/* eslint-disable import/prefer-default-export */
import Input from '../input';

const props = {
    label: {
        id: 'zipcode',
        text: 'Zip Code:',
    },
    type: 'text',
    required: true,
};

const element = Input(props);

export { props, element };
