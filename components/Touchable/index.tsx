import React from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import { pickViewStyleProps } from "@app/utils";

interface Props extends PressableProps, ViewStyle {}

const Touchable = ({ onPress, children, ...props }: Props) => {
  const style = pickViewStyleProps(props);
  const activeOpacity = 0.9;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={({ pressed }) => [{ opacity: pressed ? activeOpacity : 1 }]}
      {...style}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export { Touchable };
