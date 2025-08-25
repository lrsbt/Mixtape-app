import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const viewPort = {
  width: width,
  height: height,
  statusBar: Constants.statusBarHeight
};

export { viewPort };
