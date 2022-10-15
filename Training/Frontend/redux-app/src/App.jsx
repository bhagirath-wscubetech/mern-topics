import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
// import { incCounter, descCounter, resetCounter } from "./action/index"
import counterActions from "./action/index"
function App() {
  const appState = useSelector((allState) => allState.rootReducer);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(counterActions.incCounter(2))} style={{ fontSize: 50 }}>+</button>
        <input type="text" style={{ fontSize: 50, width: 150, textAlign: "center" }} readOnly value={appState.count} />
        <input type="text" style={{ fontSize: 50, width: 350, textAlign: "center" }} readOnly value={`₹ ${appState.amount}`} />
        <button onClick={() => dispatch(counterActions.descCounter())} style={{ fontSize: 50 }}>-</button>
        <button onClick={() => dispatch(counterActions.resetCounter())} style={{ fontSize: 50 }}>Reset</button>
      </header>
    </div>
  );
}

export default App;
