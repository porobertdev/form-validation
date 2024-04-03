import { render } from '@github/jtml';
import Form from './components/form';
import * as formControls from './components/formControls/barrel';
import checkAttributes from './utils/checkAttributes';

render(Form(), document.body);

// console.log(formControls.email.props);

// Apply attributes to all form controls if existent
Object.keys(formControls).forEach((element) =>
    checkAttributes(formControls[element].props)
);
