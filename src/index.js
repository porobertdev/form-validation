import { render } from '@github/jtml';
import Form from './components/form';
import * as formControls from './components/formControls/barrel';
import checkAttributes from './utils/checkAttributes';
import './css/style.css';
import checkRequired from './utils/checkRequired';

render(Form(), document.body);

// console.log(formControls.email.props);

// s to all form controls if existent
Object.keys(formControls).forEach((element) => {
    const config = formControls[element].props;

    // Apply all attributes
    checkAttributes(config);

    // Check if it's required. Can't be done with JTML due expression limitations
    checkRequired(config);
});
