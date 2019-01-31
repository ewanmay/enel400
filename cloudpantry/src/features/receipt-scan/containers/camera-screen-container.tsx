import { connect } from "react-redux";
import CameraScreen from '../components/camera-screen'
import { managementActions } from "../../../ducks/receipt-scan";

const mapStateToProps = ({ pantry }: any) => {
  const { items, groups } = pantry;
  return {
    items,
    groups
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    cameraPermissionChange
  } = managementActions
  return {
    cameraPermission: (given: boolean) => {
      dispatch(cameraPermissionChange(given));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraScreen);