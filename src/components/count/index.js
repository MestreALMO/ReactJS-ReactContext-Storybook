import { useCtxCount } from "../../context/ctxCount";

export const Count = () => {
  const { ctxCount, setCtxCount } = useCtxCount();

  return (
    <>
      <h2>{ctxCount}</h2>

      <button
        onClick={() => {
          setCtxCount(ctxCount + 1);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setCtxCount(ctxCount - 1);
        }}
      >
        -1
      </button>
    </>
  );
};
