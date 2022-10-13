import React from "react";
import { Count } from "./";
import { withReactContext } from "storybook-react-context";

export default {
  title: "Component/Count",
  component: Count,
};

const Template = (args) => (
  <>
    <Count />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  decorators: [withReactContext],
};
