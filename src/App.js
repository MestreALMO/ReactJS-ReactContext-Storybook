import { useCount } from "./context/Count";

function App() {
  const { count, setCount } = useCount();

  return (
    <>
      <h1>DevALMO, YouTube Channel</h1>

      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}

export default App;
