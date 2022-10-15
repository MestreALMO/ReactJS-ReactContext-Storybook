import React from "react";
import { Count } from "./";
import CtxCountProvider from "../../context/ctxCount";

export default {
  title: "Component/Count",
  component: Count,
  decorators: [
    (Story) => (
      <CtxCountProvider>
        <Story />
      </CtxCountProvider>
    ),
  ],
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
};
