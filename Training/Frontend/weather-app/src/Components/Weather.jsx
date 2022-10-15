import React from 'react'
import Container from './Container'

export default function Weather({ city, weather }) {
    let display = <h3 className='text-center mt-5'>Please select a city</h3>;
    const getTime = (timestamp) => {
        const date = new Date(timestamp * 1000)
        // return(date.toTimeString());
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    if (city !== "") {
        if (weather !== null) {
            if (weather.cod == "404") {
                display = <h3 className='text-center mt-5'>No data found for {city}</h3>;
            } else {
                const weatherData = weather;
                display = <div className="col-12 mt-5 text-center">
                    <h3 className='mt-5'>City: {city}</h3>
                    <h4>Max Temp: {weatherData.main.temp_max} ℃</h4>
                    <h4>Min Temp: {weatherData.main.temp_min} ℃</h4>
                    <h4>Current Temp: {weatherData.main.temp} ℃</h4>
                    <h4>Sunrise: {getTime(weatherData.sys.sunrise)}</h4>
                    <h4>Sunrise: {getTime(weatherData.sys.sunset)}</h4>
                    <h3>
                        <div className="row">
                            <div className="col-6">
                                {weatherData.weather[0].main}
                            </div>
                            <div className="col-6">
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                            </div>
                        </div>
                    </h3>
                </div>
            }
        } else {
            display = <h3 className='text-center mt-5'>Searching data for {city} ....</h3>
        }
    }
    return (
        <Container>
            {display}
        </Container>
    )
}
