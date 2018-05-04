/* eslint-disable */
const cityWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=CITY&appid=b8e4c08cf7c1f87df86981883a05c742";

const all_cities = ["Belgrade", "London", "Rome"]
class WeatherService {


    async getWeatherByCity(cities = []) {
        if(cities === []) cities = ["Belgrade"];
        let data = [];
        //await Promise.all(cities.map(async (city) => {
        //    let city_data = await this.getCityData(city);
        //    data.push(city_data);
        //  }));

        for(let i = 0, l = cities.length; i < l; i++) {
            let city = cities[i];
            let city_data =  await this.getCityData(city);
            data.push(city_data);
        }

        return data;
    }

    async getCityData(city) {
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
        return all_cities;
    }

}



export default new WeatherService();
