import "./App.scss";
import Rainy from "../assets/rainy.png";
import RainCloud from "../assets/rainCloud.svg";
import MinTemp from "../assets/minTemp.svg";
import MaxTemp from "../assets/maxTemp.svg";

export function App() {
  return (
    <>
      <div className="main-container">
        <div className="weather-container">
          <input placeholder="Search city..."></input>
          <div className="weather">
            <div className="icon-temp">
              <img src={Rainy}></img>
              <h1>30°C</h1>
            </div>
            <div className="city-day">
              <div className="city">
                <p>Kuala Lumpur</p>
              </div>
              <div className="day">
                <p>Monday</p>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className="text-info">
            <img src={RainCloud}></img>
            <p>Light Rain</p>

            <img src={MinTemp}></img>
            <p>Min Temperature - 28°C</p>

            <img src={MaxTemp}></img>
            <p>Max Temperature - 31°C</p>
          </div>
        </div>
      </div>
    </>
  );
}
