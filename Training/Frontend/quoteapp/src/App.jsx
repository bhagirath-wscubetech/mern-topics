import './App.css';
import JokeBox from './Components/JokeBox';
import { quotes } from './data/quotes'
import { useState, useEffect } from 'react'
function App() {
  const [allData, setData] = useState(quotes)
  const [current, setCurrent] = useState(0)
  const [quote, setQuote] = useState(allData[current].quote)
  const [author, setAuthor] = useState(allData[current].author)

  const getRandomNumber = () => {
    const random = Math.floor(Math.random() * 10);
    return random;
  }

  const getNew = () => {
    const randomNumber = getRandomNumber()
    if (randomNumber >= 0 && randomNumber < allData.length) {
      if (randomNumber === current) {
        // console.log("Was equal", randomNumber);
        getNew()
      } else {
        console.log("Current Updated", randomNumber);
        setCurrent(randomNumber)
        // setQuote(allData[current].quote)
        // setAuthor(allData[current].author)
      }
    } else {
      // console.log("Not used", randomNumber);
      getNew()
    }
  }

  useEffect(
    // Component Did Mount
    () => {
      // API
      console.log("Called Once");
    },
    []
  )

  useEffect(
    () => {
      console.log("Use effect called for current");
      setQuote(allData[current].quote)
      setAuthor(allData[current].author)
    },
    [current]
  )

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getNew} className='App-link'>Get New</button>
        <JokeBox quote={quote} author={author} />
      </header>
    </div>
  );
}

export default App;
