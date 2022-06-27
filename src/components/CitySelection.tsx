import React, { useState } from "react"
import clouds from "../images/icons/clouds.png"
import clear from "../images/icons/clear.png"
import snow from "../images/icons/snow.png"
import drizzle from "../images/icons/drizzle.png"
import misty from "../images/icons/misty.png"
import thermometer from "../images/icons/thermometer.png"
import winds from "../images/icons/wind.png"
import rain from "../images/icons/rain.png"


export interface InfoCity {
    name: string
}
export interface InfoTemperature {
    name: number
}
export interface InfoTypeOfWeather {
    name: string
}
export interface InfoPictureWeather {
    name: string
}
export interface InfoWind {
    name: number
}

const CitySelection: React.FC = () => {

    const [city, setCity] = useState<InfoCity>({ name: "Brak wybranego miasta" })
    const [temperature, setTemperature] = useState<InfoTemperature>({ name: 0 })
    const [typeOfWeather, setTypeOfWeather] = useState<InfoTypeOfWeather>({ name: "nieznana" })
    const [pictureWeather, setPictureWeather] = useState<InfoPictureWeather>({ name: "./images/icons/clear.png" })
    const [wind, setWind] = useState<InfoWind>({ name: 0 })

    const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity({ name: e.target.value })
    }

    async function currentWeatcherApi() {
        try {
            const weaitingApi = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=1211ad5594c09840204aae05bd79b241`
            );
            const currentTheAnswer = await weaitingApi.json();
            console.log(currentTheAnswer);
            //preceptible temperature
            setTemperature({ name: Math.round(currentTheAnswer.main.temp - 273) })
            //weather conditions
            const skyWeather = currentTheAnswer.weather[0].main
            if (skyWeather === "Clouds") {
                setTypeOfWeather({ name: "Pochmurnie" });
                setPictureWeather({ name: clouds })
            } else if (skyWeather === "Clear") {
                setTypeOfWeather({ name: "Słonecznie" })
                setPictureWeather({ name: clear })
            } else if (skyWeather === "Snow") {
                setTypeOfWeather({ name: "Pada śnieg" })
                setPictureWeather({ name: snow })
            } else if (skyWeather === "Rain") {
                setTypeOfWeather({ name: "Pada deszcz" })
                setPictureWeather({ name: rain })
            } else if (skyWeather === "light intensity drizzle") {
                setTypeOfWeather({ name: "Intensywna mżawka" })
                setPictureWeather({ name: drizzle })
            } else if (skyWeather === "Drizzle") {
                setTypeOfWeather({ name: "Mżawka" })
                setPictureWeather({ name: drizzle })
            } else if (skyWeather === "Mist") {
                setTypeOfWeather({ name: "Mgła" })
                setPictureWeather({ name: misty })
            } else setTypeOfWeather({ name: "Pogoda nieznana" });
            //wind speed
            setWind({ name: currentTheAnswer.wind.speed })
        } catch (error) {
            setCity({ name: "Błąd" })
            setTypeOfWeather({ name: "Nieznana" })
            setTemperature({ name: 0 })
            setWind({ name: 0 })
        }
    }

    return (
        <div>
            <input type="text" onChange={handleChangeCity} placeholder={city.name} />
            <button onClick={() => currentWeatcherApi()}>Sprawdź</button>
            <div className="weatherBoard">
                <h1>{city.name}</h1>
                <div className="temperatureBoard">
                    <img className="icons" src={thermometer} />
                    <p>{temperature.name}°C</p>
                </div>
                <div className="typeOfWeatherBoard">
                    <img className="icons" src={pictureWeather.name} />
                    <p>{typeOfWeather.name}</p>
                </div>
                <div className="windBoard">
                    <img className="icons" src={winds} />
                    <p> Wiatr: {wind.name}km/h</p>
                </div>

            </div>

        </div>
    )
}
export default CitySelection