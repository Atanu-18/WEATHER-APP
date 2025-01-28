import React, { useEffect, useState } from "react";
import DataContainer from "./dataContainer";
const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    locationName: "No Data",
    humidity: 0,
    wind_kph: 0,
    wind_mph: 0,
    rain: 0,
    feels_like_c: 0,
    feels_like_f: 0,
    air_quality: {
      pm2_5: 0,
      pm10: 0,
      co: 0,
      no2: 0,
      o3: 0,
      so2: 0,
    },
    uv: 0,
  });

  const calculateUV = (uv) => {
    if (uv < 0) {
      return "Unknown";
    } else if (uv < 3) {
      return "Low";
    } else if (uv < 6) {
      return "Moderate";
    } else if (uv < 8) {
      return "High";
    } else if (uv < 11) {
      return "Very High";
    } else {
      return "Extreme";
    }
  };

  const [search, setSearch] = useState("new delhi");

  const handleSearch = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  const getWeatherData = async () => {
    try {
      if (!search) {
        return alert("Please enter city name");
      }
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=08be0bff8cbf479eba152431252401&q=${search}&aqi=no
`
      );
      const data = await response.json();
      console.log(data);

      if (data) {
        setWeatherData({
          locationName: data.location.name,
          feels_like_c: Math.round(data.current.feelslike_c),
          feels_like_f: Math.round(data.current.feelslike_f),
          wind_kph: data.current.wind_kph,
          wind_mph: data.current.wind_mph,
          humidity: data.current.humidity,
          rain: data.current.precip_in,
          uv: data.current.uv,
        });
      }
    } catch (error) {
      setWeatherData({
        locationName: "Wrong Location",
        humidity: 0,
        wind_kph: 0,
        wind_mph: 0,
        rain: 0,
        feels_like_c: 0,
        feels_like_f: 0,
        air_quality: {
          pm2_5: 0,
          pm10: 0,
          co: 0,
          no2: 0,
          o3: 0,
          so2: 0,
        },
        uv: 0,
      });
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#52D4FF] from-40% to-white to-90% min-h-screen px-4">
      <section className="pt-[100px]">
        <form
          className="flex items-center justify-center"
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            type="text"
            className="backdrop-blur-lg bg-white/30 rounded-full px-4 py-3 w-[650px] focus:outline-none text-gray-600 placeholder:text-white"
            placeholder="Enter your location"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <main className="mt-[40px] max-w-2xl mx-auto">
          <div className="flex items-center justify-center flex-col gap-0 text-center">
            <h1 className="text-[90px] md:text-[130px] font-semibold text-white leading-none">
              {weatherData.feels_like_c}°C
            </h1>
            <h2 className="text-white md:text-[60px] leading-none">
              {weatherData.feels_like_f}°F {weatherData.locationName}
            </h2>
          </div>
        </main>

        <main className="mt-10 max-w-2xl mx-auto space-y-2 md:space-y-3 lg:space-y-4">
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
            <DataContainer
              data_primary={weatherData.humidity}
              title={"Humidity"}
              data_unit={"%"}
            />
            <DataContainer
              data_primary={Math.round(weatherData.wind_kph)}
              title={"Wind"}
              data_unit={"km/h"}
              data_secondary={weatherData.wind_mph + " mi/h"}
            />
          </div>
          {/* WIP: Fix the data */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_38%] gap-2 md:gap-3 lg:gap-4">
            <DataContainer
              data_primary={weatherData.rain}
              title={"Rain"}
              data_unit={"inch"}
            />
            <DataContainer
              data_primary={weatherData.feels_like_c}
              title={"Feels Like"}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <DataContainer
              data_primary={weatherData.uv}
              title={"UV"}
              data_secondary={calculateUV(weatherData.uv)}
            />
          </div>
        </main>
      </section>

      <footer className="mt-3">
        <p className="text-center text-gray-500 font-semibold">@API provided by Weather API</p>
      </footer>
    </div>
  );
};

export default Weather;