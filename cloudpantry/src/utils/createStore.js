import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import ReduxThunk from "redux-thunk";

export default function configureStore(initialState) {
  let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  initialState = {
    auth: {},
    recipes: {},
    pantry: {
      groups: [
        {
          id: "6f564051-a7cc-4ceb-ba33-924cdac7b6ff",
          name: "Home",
          memberIds: ["BDtbnWmehfNxALDQn9tufUX3Xd33"],
          pantryItems: [
            {
              name: "Bell Peppers",
              price: "12.5",
              quantity: "2",
              expirationDate: "",
              id: "97add10b-57d4-4cb2-894f-1a8b0077e690"
            }
          ],
          membersIds: 1
        }
      ],
      groupNameField: "Home",
      error: "",
      currentGroup: {
        id: "6f564051-a7cc-4ceb-ba33-924cdac7b6ff",
        name: "Home",
        memberIds: ["BDtbnWmehfNxALDQn9tufUX3Xd33"],
        pantryItems: [
          {
            name: "Bell Peppers",
            price: "12.5",
            quantity: "2",
            expirationDate: "",
            id: "97add10b-57d4-4cb2-894f-1a8b0077e690"
          }
        ],
        membersIds: 1
      },
      menuOpen: false,
      itemForm: {
        name: "Bell Peppers",
        quantity: "2",
        price: "12.5",
        expirationDate: ""
      }
    },
    mealPlan: {}
  };
  if (initialState) {
    store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
