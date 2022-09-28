import Search from "./Components/Search";
import Result from "./Components/Result";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);
  const changeSearch = (value) => {
    setSearch(value);
  }

  // const getWeatherData = () => {
  //   axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
  //   )
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       }
  //     ).catch(
  //       (error) => {
  //         console.log(error);
  //       }
  //     )

  // }

  const searchWeatherHandler = () => {

    if (search !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
        .then(
          (response) => {
            if (history.indexOf(search) === -1) {
              setHistory(
                [
                  ...history,
                  search
                ]
              )
            }
            // console.log(response.data);
            setWeather(response.data);
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  const historySearchHandler = async (data) => {
    setSearch(data)
    if (data !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
        .then(
          (response) => {
            if (history.indexOf(data) === -1) {
              setHistory(
                [
                  ...history,
                  data
                ]
              )
            }
            // console.log(response.data);
            setWeather(response.data);
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  // useEffect(
  //   () => {
  //     if(search !== ""){
  //        getWeatherData();
  //     }
  //   },
  //   [search]
  // )

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather} historyData={history} historySearch={historySearchHandler} />
    </div>
  );
}

export default App;
