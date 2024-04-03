/* eslint-disable import/prefer-default-export */
import Input from '../input';

const props = {
    label: {
        id: 'zipcode',
        text: 'Zip Code:',
    },
    type: 'text',
};

const element = Input(props);

export { props, element };
