import "./App.scss";
import { useState } from "react";

export function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetсhWeather = async () => {
    const key = "db6638c4bda7f60f1c6d897e77c152a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=ru`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch {
      setWeatherData(null);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="weather-container">
          <input
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetсhWeather()}
          ></input>
          {weatherData && (
            <div className="weather">
              <div className="icon-temp">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                ></img>
                <h1>{Math.round(weatherData.main.temp)}°C</h1>
              </div>
              <div className="city-day">
                <div className="city">
                  <p>{weatherData.name}</p>
                </div>
                <div className="day">
                  <p>
                    {new Date().toLocaleDateString("eng-EN", {
                      weekday: "long",
                    })}
                  </p>
                </div>
              </div>
              <hr></hr>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
