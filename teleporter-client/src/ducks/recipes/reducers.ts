import { FETCH_RECIPES, CREATE_RECIPE } from './types'
import { AnyAction } from 'redux';

export default function(state = null, action: AnyAction) {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.payload || false;
        case CREATE_RECIPE:
            return action.payload || false;
        default: 
            return state;
    }
}