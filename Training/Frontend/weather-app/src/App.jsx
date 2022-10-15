import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Weather from "./Components/Weather"
import Login from "./Components/Login";
function App() {
  const limit = 600000
  const APIKEY = "3265874a2c77ae4a04bb96236a642d2f"
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([])
  const [user, setUser] = useState(null)
  const cityHandler = (city) => {
    setCity(city);
  }

  const getData = async () => {
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
    const data = await resp.json()
    setWeatherData(data);
  }

  const loginHandler = () => {
    const data = {
      login: 1,
      timestamp: new Date().getTime(),
      expire: new Date().getTime() + limit // 1 mins
    }
    setUser(data)
  }

  useEffect(
    () => {
      if (city !== "") {
        if (history.indexOf(city) === -1) {
          // if that does not exists then push
          const newHistory = [
            ...history,
            city
          ]
          setHistory(newHistory);
        }

        setWeatherData(null)
        getData()
      }
    },
    [city]
    // first render + city state update
  )

  useEffect(
    () => {
      if (user !== null) {
        localStorage.setItem("login", JSON.stringify(user))
      }
    },
    [user]
  )

  useEffect(
    () => {
      if (history.length !== 0) {
        localStorage.setItem("history", JSON.stringify(history.reverse()))
      }
    },
    [history]
  )

  useEffect(
    () => {
      const login = localStorage.getItem("login")
      const lsHistory = localStorage.getItem("history")
      if (login !== null) {
        const currentStamp = new Date().getTime()
        const data = JSON.parse(login)
        if (data.expire < currentStamp) {
          localStorage.removeItem("login")
          setUser(null) // logout
        } else {
          // user can still login
          if (lsHistory !== null) {
            setHistory(JSON.parse(lsHistory))
          }
          setUser(data)
        }
      }
    },
    []
    //first render
  )
  const HistoryItems = history.map(
    (city) => {
      return <li onClick={() => setCity(city)} style={{cursor:"pointer"}}>{city}</li>
    }
  )
  return (
    <div style={{ background: "#3498db", height: "100vh" }}>
      {
        user === null ?
          <Login event={loginHandler} />
          :
          <>

            <Input event={cityHandler} />
            <Weather city={city} weather={weatherData} />
            <ul className="text-white">
              {HistoryItems}
            </ul>
          </>
      }
    </div>
  );
}

export default App;
