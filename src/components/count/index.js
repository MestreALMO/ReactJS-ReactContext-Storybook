import { useCount } from "../../context/Count";

export const Count = () => {
  const { count, setCount } = useCount();

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
    </>
  );
};
