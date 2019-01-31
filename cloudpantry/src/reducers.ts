import { combineReducers } from 'redux';
import authReducer from './ducks/auth';
import recipeReducer from './ducks/recipes';
import  PantryReducer  from './ducks/pantry';
import mealPlanReducer from './ducks/meal-plans';

export default combineReducers({
    auth: authReducer,
    recipes: recipeReducer,
    pantry: PantryReducer,
    mealPlan: mealPlanReducer
});