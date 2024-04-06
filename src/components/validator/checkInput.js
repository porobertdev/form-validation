import rejectInput from './rejectInput';
import validateInput from './validateInput';

export default function checkInput(event) {
    const element = event.target;

    if (!element.checkValidity()) {
        rejectInput(element);
    } else {
        validateInput(element);
    }
}
