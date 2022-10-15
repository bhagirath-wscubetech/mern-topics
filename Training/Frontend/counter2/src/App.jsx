import { useState } from 'react';
import './App.css';
import Box from './Components/Box';
import Button from './Components/Button';
function App() {
  const [counter, setCounter] = useState(0)

  const changeCounter = (flag) => {
    // console.log(flag);
    // if (flag === 1) {
    //   setCounter(counter + 1)
    // } else {
    //   setCounter(counter - 1)
    // }
    flag === 1 ? setCounter(counter + 1) : setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Box data={counter} />
        <Button symbol="+" extraCss="" event={() => changeCounter(1)} />
        <Button symbol="-" extraCss="Red" event={() => changeCounter(0)} />
      </header>
    </div>
  );
}

export default App;
