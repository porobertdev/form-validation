/* eslint-disable import/prefer-default-export */
import { COUNTRY_ADDRESS_POSTALS } from '../../constants/countries';
import Input from '../input';
import rejectInput from '../validator/rejectInput';
import validateInput from '../validator/validateInput';

const props = {
    label: {
        id: 'zipcode',
        text: 'Zip Code:',
    },
    type: 'text',
    required: true,
    customValidation: {
        validate() {
            const dropdown = document.querySelector(
                '#dropdown > span.placeholder'
            );

            if (dropdown.textContent === 'Choose') {
                rejectInput(this, 'You need to select a country first.');
                return;
            }

            // find index of selected country
            const index = COUNTRY_ADDRESS_POSTALS.findIndex(
                (country) => country.name === dropdown.textContent
            );

            const regex = COUNTRY_ADDRESS_POSTALS[index].postal;

            console.log(regex);
            console.log(this.value);

            // guard against countries that don't have a postal regex
            if (regex) {
                // if value pass the regex
                if (regex.test(this.value)) {
                    validateInput(this);
                } else {
                    rejectInput(
                        this,
                        `Invalid zip code! Pattern must be: ${regex}`
                    );
                }
            }
        },
    },
};

const element = Input(props);

export { props, element };
