import { createContext, useContext, useState } from "react";

const CtxCountContext = createContext();

export default function CtxCountProvider({ children }) {
  const [ctxCount, setCtxCount] = useState(0);

  return (
    <CtxCountContext.Provider value={{ ctxCount, setCtxCount }}>
      {children}
    </CtxCountContext.Provider>
  );
}

export const useCtxCount = () => {
  const context = useContext(CtxCountContext);
  const { ctxCount, setCtxCount } = context;
  return { ctxCount, setCtxCount };
};
