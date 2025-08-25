import React, { ReactNode } from "react";
import { pickViewStyleProps } from "@app/utils";
import { Animated, View, ViewProps, ViewStyle } from "react-native";

export interface BoxProps extends ViewStyle, ViewProps {
  children?: ReactNode;
  as?: React.ComponentType;
}

export interface AnimatedProps {
  children?: ReactNode;
  as?: typeof Animated.View;
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
  [key: string]: any;
}

export const Box = ({
  children,
  as,
  onLayout,
  pointerEvents = "auto",
  ...props
}: BoxProps | AnimatedProps) => {
  const style = pickViewStyleProps(props);
  const Component = as ?? View;

  return (
    <Component style={style} {...props} pointerEvents={pointerEvents}>
      {children}
    </Component>
  );
};
