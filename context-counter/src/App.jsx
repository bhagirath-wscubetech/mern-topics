import Counter from "./Components/Counter";
import { CounterContext } from "./Context/CounterHolder";
import { useContext } from "react";
function App() {
  const {count} = useContext(CounterContext)
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Counter />
      <div>
         ₹ {count * 500}
      </div>
    </div>
  );
}

export default App;
