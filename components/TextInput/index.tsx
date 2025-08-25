import React, { forwardRef, useState } from "react";
import {
  TextInput as TextBase,
  TextInputProps as BaseProps,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Label, Text } from "@app/components";
import { Borders, Colors, Corners, Fonts, Sizes } from "@app/theme";
import { pickViewStyleProps } from "@app/utils";

export interface Props extends ViewStyle, BaseProps {
  isInvalid?: boolean;
  fontFamily?: string;
  fontSize?: number;
  letterSpacing?: number;
  label?: string;
  errorMessage?: string;
  errorVariant?: "normal" | "float";
}

export const TextInput = forwardRef<TextBase, Props>(
  (
    {
      isInvalid,
      fontFamily = Fonts.Default,
      label,
      errorMessage,
      errorVariant = "normal",
      ...props
    }: Props,
    ref
  ) => {
    const [isFocussed, setIsFocussed] = useState(false);
    const style = pickViewStyleProps(props);
    const floatError = errorVariant === "float";

    return (
      <>
        {label && <Label>{label}</Label>}
        <TextBase
          ref={ref}
          placeholderTextColor={Colors.gray500}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
          style={[
            styles.base,
            isFocussed && {
              borderColor: Colors.primary,
            },
            isInvalid && {
              borderColor: Colors.red,
              marginBottom: 0,
            },
            { fontFamily: fontFamily },
            { padding: 0 },
            style,
          ]}
          {...props}
        />
        {errorMessage && (
          <Text
            textAlign="right"
            marginTop={0}
            marginBottom={Sizes[3]}
            color={Colors.red}
            position={floatError ? "absolute" : "relative"}
            right={0}
          >
            {errorMessage}
          </Text>
        )}
      </>
    );
  }
);

const styles = StyleSheet.create({
  base: {
    justifyContent: "flex-start",
    color: Colors.black,
    // borderWidth: Borders.regular,
    borderRadius: Corners.regular,
    // borderColor: Colors.gray400,
    paddingHorizontal: Sizes[3] + 2,
    paddingVertical: Sizes[2] + 2,
    backgroundColor: Colors.white,
  },
});
