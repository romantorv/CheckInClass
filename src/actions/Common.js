import { AUTH_RESET, INPUT_CHANGED } from '../constants';

export const onInputChanged = ({name, value}) => {
	return {
		type: INPUT_CHANGED,
		payload: {name, value}
	}
}

export const onAuthReset = () => {
	return {
		type: AUTH_RESET
	}
}