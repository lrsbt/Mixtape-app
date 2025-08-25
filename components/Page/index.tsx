import React from "react";
import { KeyboardAvoidingView, ViewStyle } from "react-native";

import { Box } from "@app/components";
import { Grid, Sizes } from "@app/theme";
import { isAndroid, pickViewStyleProps, viewPort } from "@app/utils";

interface Props extends ViewStyle {
  gutter?: boolean;
  safe?: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
  as?: React.ComponentType;
}

const Page = ({
  gutter = true,
  safe = true,
  header,
  as,
  children,
  ...props
}: Props) => {
  const style = pickViewStyleProps(props);
  const paddingTop = safe ? viewPort.statusBar + 10 : 0;
  const paddingBottom = safe ? Sizes[8] : 0;
  const paddingHorizontal = gutter ? Grid.gutter_width : 0;
  const Component = as || Box;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isAndroid ? "height" : "padding"}
    >
      {header && (
        <Box
          paddingTop={paddingTop}
          paddingHorizontal={paddingHorizontal}
          position="absolute"
          zIndex={1}
        >
          {header}
        </Box>
      )}
      <Component
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingHorizontal={paddingHorizontal}
        {...style}
      >
        {children}
      </Component>
    </KeyboardAvoidingView>
  );
};

export { Page };
