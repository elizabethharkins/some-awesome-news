import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
	searchField: ''
}

export const searchStories = (state=initialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD: 
			// cleaner - { ...state, searchField:action.payload }
			return Object.assign({}, state, { searchField:action.payload })
		default: 
			return state;
	}
}