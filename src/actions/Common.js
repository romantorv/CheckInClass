import { INPUT_CHANGED } from '../constants';

export const onInputChanged = ({name, value}) => {
	return {
		type: INPUT_CHANGED,
		payload: {name, value}
	}
}