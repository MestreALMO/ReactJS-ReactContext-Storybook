import CtxCountProvider from "../../src/context/ctxCount";
import { useParameter } from "@storybook/addons";
import { useState } from "react";

export default function CounterDecorator(Story, context) {
  const initialState = useParameter("count", {
    count: 0,
  });

  const [ctxCount, setCtxCount] = useState({ ...initialState });

  return (
    <div>
      <CtxCountProvider.Provider value={(ctxCount, setCtxCount)}>
        <Story />
      </CtxCountProvider.Provider>
    </div>
  );
}
