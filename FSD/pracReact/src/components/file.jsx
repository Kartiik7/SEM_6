import { useEffect, useState } from "react";

function File() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const CITY = "Delhi";

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Weather App</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>City: {weather.name}</p>
                    <p>Temp: {weather.main.temp} °C</p>
                    <p>Condition: {weather.weather[0].main}</p>
                </div>
            )}
        </>
    );
}

export default File;
