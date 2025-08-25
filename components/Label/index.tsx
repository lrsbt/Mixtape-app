import React from "react";
import { Text } from "@app/components";
import { Sizes } from "@app/theme";

const Label = ({ children }: { children: React.ReactNode }) => (
  <Text marginBottom={Sizes[1] + 2}>{children}</Text>
);

export { Label };
