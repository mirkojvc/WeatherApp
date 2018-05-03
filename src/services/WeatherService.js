/* eslint-disable */
const cityWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=CITY&appid=b8e4c08cf7c1f87df86981883a05c742";

const cities = ["Belgrade", "London", "Rome"]
class WeatherService {


    async getWeatherByCity(city_id = 0) {
        let city = cities[city_id];
        if(city === "") city = "Belgrade";
        const url = cityWeatherUrl.replace("CITY", city);
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error("WeatherService getWeatherByCity async error");
        }

        const data = await response.json();

        return data;
    }

    getCities () {
        return cities;
    }

}



export default new WeatherService();
