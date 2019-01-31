import { FETCH_MEALPLANS } from './types';
import { AnyAction } from 'redux';

export default function(state = null, action: AnyAction) {
    switch (action.type) {
        case FETCH_MEALPLANS:
            return action.payload || false;
        default: 
            return state;
    }
}