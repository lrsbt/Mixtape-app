import React from "react";
import { ViewProps, ViewStyle } from "react-native";

import { pickViewStyleProps } from "@app/utils";
import { Box, Spinner, Text, Touchable } from "@app/components";
import { Borders, Colors, Corners, Sizes } from "@app/theme";

export interface ButtonProps extends ViewStyle, ViewProps {
  onPress: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
  isSelected?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  onPress,
  variant = "primary",
  size = "md",
  isSelected,
  isLoading,
  isDisabled,
  children,
  ...props
}: ButtonProps) => {
  const style = pickViewStyleProps(props);

  let backgroundColor = {
    primary: Colors.primary,
    outline: Colors.white,
    ghost: "transparent",
  }[variant];

  let textColor = {
    primary: Colors.white,
    outline: Colors.primary,
    ghost: Colors.primary,
  }[variant];

  let borderColor = {
    primary: Colors.primary,
    outline: Colors.primary,
    ghost: "transparent",
  }[variant];

  const fontSize = {
    sm: 14,
    md: 16,
  }[size];

  if (isSelected) {
    backgroundColor = Colors.primary;
    textColor = Colors.white;
  }

  // Hide the text secretly when loading - spinner will show in same space
  if (isLoading) {
    textColor = "transparent";
  }

  return (
    <Touchable
      disabled={isLoading || isDisabled}
      onPress={onPress}
      alignItems="center"
      paddingHorizontal={Sizes[3]}
      paddingVertical={Sizes[3]}
      borderRadius={Corners.regular}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={Borders.regular}
      {...style}
    >
      <Text fontSize={fontSize} color={textColor}>
        {children}
      </Text>
      {isLoading && (
        <Box
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
        >
          <Spinner color="white" scale={0.9} />
        </Box>
      )}
    </Touchable>
  );
};

export { Button };
