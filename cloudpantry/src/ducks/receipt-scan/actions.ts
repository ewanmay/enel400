import { CAMERA_PERMISSION_CHANGE } from "./types";

export const cameraPermissionChange = (given: boolean) => {
    return {
      type: CAMERA_PERMISSION_CHANGE,
      payload: given
    };
};
