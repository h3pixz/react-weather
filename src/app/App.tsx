import "./App.css";
import Rainy from "../assets/rainy.png";

export function App() {
  return (
    <>
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
        <div className="hum-wind"></div>
      </div>
    </>
  );
}
