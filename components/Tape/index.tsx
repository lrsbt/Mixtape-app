import { Image } from "expo-image";
import { useRef } from "react";
import { Animated, Easing, View, ViewProps, ViewStyle } from "react-native";
import { pickViewStyleProps } from "@app/utils";

interface TapeProps extends ViewStyle {}

const asset = require("@app/assets/images/tape.png");

const Tape = (props: TapeProps) => {
  const style = pickViewStyleProps(props);
  const scale = useRef(2).current;
  const frames = useRef(4).current;
  const frameAnimationRaw = new Animated.Value(0);

  Animated.loop(
    Animated.timing(frameAnimationRaw, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const frameAnimation = frameAnimationRaw.interpolate({
    inputRange: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1],
    outputRange: [
      -0 * 33 * scale,
      -0 * 33 * scale,
      -1 * 33 * scale,
      -1 * 33 * scale,
      -2 * 33 * scale,
      -2 * 33 * scale,
      -3 * 33 * scale,
      -3 * 33 * scale,
    ],
  });

  return (
    <View style={{ width: 33 * scale, overflow: "hidden" }} {...style}>
      <Animated.Image
        source={asset}
        resizeMode="stretch"
        style={{
          height: 24 * scale,
          width: 33 * 4 * scale,
          transform: [{ translateX: frameAnimation }],
        }}
      />
    </View>
  );
};

export { Tape };
