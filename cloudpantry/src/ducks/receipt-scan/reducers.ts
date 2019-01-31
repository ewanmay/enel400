import { CAMERA_PERMISSION_CHANGE } from "./types";
import { AnyAction } from "redux";
import reduceReducers from "reduce-reducers";
import { initialManagementStateInterface } from "./interfaces";

const initalMgmtState: initialManagementStateInterface = {
  cameraPermission: false
};

const cameraReducer = (state = initalMgmtState, action: AnyAction) => {
  switch (action.type) {
    case CAMERA_PERMISSION_CHANGE: {
      return {
        ...state,
        cameraPermission: action.payload
      };
    }
    default:
      return state;
  }
};

export default reduceReducers(cameraReducer);
