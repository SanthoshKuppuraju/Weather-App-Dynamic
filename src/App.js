import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// For the images
import clearDay from "./Assests/01d.jpg";
import fewClouds from "./Assests/02d.jpg";
import onlyCloud from "./Assests/03d.png";
import onlyCloudNight from "./Assests/03n.png";
import showerRain from "./Assests/09d.jpg";
import rain from "./Assests/10d.jpg";
import snow from "./Assests/13d.jpg";
import thunderStrom from "./Assests/011d.png";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    getproductdata();
  }, []);
  const [city, setCity] = useState("CHENNAI");
  const [cityData, setCityData] = useState("");
  const handeInputChange = (event) => {
    setCityData(event.target.value);
  };
  const [icon, setIcon] = useState("10n");

  const getproductdata = async () => {
    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=757687cb9f49f0b72bae367e445b2a27&units=Metric`
    );
    const finalData = await rawData.json();
    setData(finalData);
    setCity(cityData);
  };
  const handleClick = () => {
    getproductdata();
    setIcon(data.weather[0].icon);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getproductdata();
      setIcon(data.weather[0].icon);
    }
  };
  const weatherIcons = {
    "01d": clearDay,
    "01n": clearDay,
    "02d": fewClouds,
    "02n": fewClouds,
    "03d": onlyCloud,
    "03n": onlyCloudNight,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rain,
    "10n": rain,
    "11d": thunderStrom,
    "11n": thunderStrom,
    "13d": snow,
    "13n": snow,
    "04d": fewClouds,
    "04n": fewClouds,
    "50d": snow,
    "50n": snow,
  };

  return (
    <>
      <div className="wholeapp">
        <div className="weatherapp">
          <div className="inputbox">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handeInputChange}
              onKeyDown={handleKeyDown}
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png"
              alt="search logo"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
          {data.name && data.name.length > 0 ? (
            <div className="weathercenter">
              <img className="weatherimg" src={weatherIcons[`${icon}`]} />
              <h4>{data.main.temp}°C</h4>
              <h3 className="city">{data.name.toUpperCase()}</h3>
              <h5 className="country">{data.sys.country}</h5>
              <div className="location">
                <div>
                  <h6>Latitude</h6>
                  <span>{data.coord.lat}</span>
                </div>
                <div>
                  <h6>Longitude</h6>
                  <span>{data.coord.lon}</span>
                </div>
              </div>
              <div className="wind">
                <div className="weathercontent">
                  <img
                    className="humidity"
                    src="https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-part-3/128/ic_steam_waves-256.png"
                  />
                  <h6 className="valuewind">{data.main.humidity}%</h6>
                  <sapn className="windspan">Humidity</sapn>
                </div>
                <div className="weathercontent">
                  <img
                    className="windimg"
                    src="https://cdn1.iconfinder.com/data/icons/renewable-energy-50/496/windsock-wind-direction-speed-flag-64.png"
                  />
                  <h6 className="valuewind">{data.wind.speed} km/hr</h6>
                  <span className="windspan">Wind Speed</span>
                </div>
              </div>
              <p className="developer">Designed by Santhosh</p>
            </div>
          ) : (
            <div className="weathercenter">
              <img
                className="weatherimg"
                src="https://cdn-icons-png.freepik.com/512/2557/2557093.png"
              />
              <h4>0°C</h4>
              <h3 className="city">Error:{data.cod}</h3>
              <h5 className="country">{data.message}</h5>
              <div className="location">
                <div>
                  <h6>Latitude</h6>
                  <span>0</span>
                </div>
                <div>
                  <h6>Longitude</h6>
                  <span>0</span>
                </div>
              </div>
              <div className="wind">
                <div className="weathercontent">
                  <img
                    className="humidity"
                    src="https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-part-3/128/ic_steam_waves-256.png"
                  />
                  <h6 className="valuewind">0%</h6>
                  <sapn className="windspan">Humidity</sapn>
                </div>
                <div className="weathercontent">
                  <img
                    className="windimg"
                    src="https://cdn1.iconfinder.com/data/icons/renewable-energy-50/496/windsock-wind-direction-speed-flag-64.png"
                  />
                  <h6 className="valuewind">0 km/hr</h6>
                  <span className="windspan">Wind Speed</span>
                </div>
              </div>
              <p className="developer">Designed by Santhosh</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
