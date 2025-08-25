import React, { memo, useRef, useEffect } from "react";
import { Animated, Easing, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Box } from "@app/components";
import { Colors } from "@app/theme";
import { pickViewStyleProps } from "@app/utils";

interface Props extends ViewStyle {
  color?: "black" | "white";
  scale?: number;
}

const SpinnerFn = ({ color = "black", scale = 1, ...props }: Props) => {
  const style = pickViewStyleProps(props);
  const rotationRaw = useRef(new Animated.Value(0)).current;
  const rotation = rotationRaw.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationRaw, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Box
      {...style}
      as={Animated.View}
      transform={[{ rotate: rotation }]}
      width={25}
      height={25}
    >
      <Svg width={25 * scale} height={28 * scale} viewBox="0 0 25 28">
        <Path
          fill="none"
          strokeWidth={2.5}
          stroke={color === "white" ? Colors.white : Colors.black}
          strokeDasharray={47}
          strokeDashoffset={30}
          strokeLinecap="round"
          transform="translate(0,-0.2)"
          d="M21.5 14C21.5 18.1421 18.1421 21.5 14 21.5C9.85786 21.5 6.5 18.1421 6.5 14C6.5 9.85786 9.85786 6.5 14 6.5C18.1421 6.5 21.5 9.85786 21.5 14Z"
        />
      </Svg>
    </Box>
  );
};

const Spinner = React.memo(SpinnerFn);
Spinner.displayName = "Spinner";

export { Spinner };
