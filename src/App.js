import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    getproductdata();
  }, []);
  const [city, setCity] = useState("chennai");
  const [cityData, setCityData] = useState("");
  const handeInputChange = (event) => {
    setCityData(event.target.value);
  };
  const handelClick = () => {
    setCity(cityData);
  };
  console.log(city);
  const getproductdata = async () => {
    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=757687cb9f49f0b72bae367e445b2a27&units=Metric`
    );
    const finalData = await rawData.json();
    setData(finalData);
  };
  return (
    <div className="wholeapp">
      <div className="weatherapp">
        <div className="inputbox">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handeInputChange}
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png"
            alt="search logo"
            onClick={handelClick()}
          />
        </div>
        <div className="weathercenter">
          <img
            className="weatherimg"
            src="https://img.freepik.com/premium-vector/cloud-lightning-rain-cute-weather-realistic-icon-3d-cartoon_363543-475.jpg?size=626&ext=jpg&ga=GA1.1.1761430566.1705754582&semt=ais_user"
          />
          <h4>28°C</h4>
          <h3 className="city">CHENNAI</h3>
          <h5 className="country">IN</h5>
          <div className="location">
            <div>
              <h6>Latitude</h6>
              <span>13.0987</span>
            </div>
            <div>
              <h6>Longitude</h6>
              <span>11.0637</span>
            </div>
          </div>
          <div className="wind">
            <div className="weathercontent">
              <img
                className="humidity"
                src="https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-part-3/128/ic_steam_waves-256.png"
              />
              <h6 className="valuewind">60%</h6>
              <sapn className="windspan">Humidity</sapn>
            </div>
            <div className="weathercontent">
              <img
                className="windimg"
                src="https://cdn1.iconfinder.com/data/icons/renewable-energy-50/496/windsock-wind-direction-speed-flag-64.png"
              />
              <h6 className="valuewind">3.13 km/hr</h6>
              <span className="windspan">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
