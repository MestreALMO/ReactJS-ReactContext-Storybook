import { Count } from "./components/count";
import CtxCountProvider from "./context/ctxCount";

function App() {
  return (
    <>
      <CtxCountProvider>
        <h1>DevALMO, YouTube Channel</h1>

        <Count />
      </CtxCountProvider>
    </>
  );
}

export default App;
