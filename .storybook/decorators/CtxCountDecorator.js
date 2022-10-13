import CtxCountProvider from "../../src/context/ctxCount";
import { useParameter } from "@storybook/addons";
import { useState } from "react";

export default function CounterDecorator(Story, context) {
  const initialState = useParameter("count", {
    count: 0,
  });

  const [state, setState] = useState({ ...initialState });

  return (
    <div>
      <CtxCountProvider.Provider value={(state, setState)}>
        <Story />
      </CtxCountProvider.Provider>
    </div>
  );
}
