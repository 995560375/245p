import { useState, useEffect } from "react";
import "./LandingView"

function LandingView() {
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [data, setData] = useState(false);
    const lat = "51.5085";
    const lon = "-0.1257";
    const APIkey = "0c05ceab9ec8901f4112f9932225ff8e";
    const units = "metric";
    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}`
        )
          .then((response) => response.json())
          .then((actualData) => {
            setLoadingData(false);
            setError(false);
            setData(actualData);
            console.log(actualData);
          })
          .catch((err) => {
            setLoadingData(false);
            setError(true);
          });
      }, []);
    return(
            
            <>
            <div className="weather">
            {loadingData ? "loading" : ""}
            <br />
            {error ? "error" : ""}
            <br />
            {!loadingData && !error && (
                <>
                location: {data.name}
                <br />
                current temperature: {data.main.temp}
                <br />
                minimum temperature: {data.main.temp_min}
                <br />
                maximum temperature: {data.main.temp_max}
                <br />
                description: {data.weather[0].description}
                <br />
                wind speed: {data.wind.speed}
                <br />
                wind degree: {data.wind.deg}

            </>
            )}
            </div>
            
        </>
        
        
    )
}

export default LandingView;