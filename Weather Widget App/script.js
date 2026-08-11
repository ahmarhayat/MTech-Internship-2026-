const apiKey = "YOUR_API_KEY"; // Replace with your key from openweathermap.org
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

// Async function using Fetch API
const getWeather = async (city) => {
    const trimmedCity = city.trim();

    if (!trimmedCity) {
        weatherResult.innerHTML = `<p style="color:red">Please enter a city name.</p>`;
        return;
    }

    if (!apiKey || apiKey === "YOUR_API_KEY") {
        weatherResult.innerHTML = `<p style="color:red">Please add a valid OpenWeather API key in script.js.</p>`;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trimmedCity)}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url); // Wait for API
        const data = await response.json(); // Wait for JSON

        if(!response.ok) {
            if (response.status === 401) {
                throw new Error("Invalid API key. Update your key in script.js.");
            }

            if (response.status === 404) {
                throw new Error("City not found. Please check spelling.");
            }

            throw new Error(data.message || "Unable to fetch weather right now.");
        }
        
        // Display data in HTML - DOM Manipulation from Lab 2.4
        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temp: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        weatherResult.innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value);
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather(cityInput.value);
    }
});