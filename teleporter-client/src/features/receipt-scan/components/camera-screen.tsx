import React, { RefObject } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions, CameraObject } from "expo";
import { Icon } from "react-native-elements";
import axios from "axios";
import { pantryScreenStyles } from '../../pantry/styles';

function render({ cameraPermission }: any) {
  let camera: any = null;
  if (cameraPermission === null) {
    return <View />;
  }
  if (!cameraPermission) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={(ref: any) => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.4 }}>
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={{ alignSelf: "center" }}
            >
              <Icon
                reverse
                name="circle"
                type="font-awesome"
                color="#334d5c"
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

interface screenComponent extends React.StatelessComponent {
  navigationOptions?: Object;
}

const CameraScreen: screenComponent = ({ cameraPermission }: any) => {
  const { containerStyle } = pantryScreenStyles;
  return <View style={containerStyle}>{render(cameraPermission)}</View>;
};

CameraScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "transparent"
  }
};

const takePicture = async (camera: CameraObject) => {
  if (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    if ("base64" in data) {
      const response = await sendPhotoToGoogle(data.base64 as string);
      console.log(Object.keys(response));
    }
  }
};

const sendPhotoToGoogle = async (base64ImageString: string) => {
  const API_KEY = "AIzaSyCd7jEXStbHUvIIhjg0elLo835l28R10kU";
  return axios.post(
    `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
    {
      requests: [
        {
          image: {
            content: base64ImageString
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 1
            }
          ]
        }
      ]
    }
  );
};

export default CameraScreen;
