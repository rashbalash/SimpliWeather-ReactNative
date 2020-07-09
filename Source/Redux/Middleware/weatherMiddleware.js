import { CHANGE_UNITS, REFRESH, setMoreAboutToday, setLocationName, setCurrentWeather, setHourlyWeather, setDailyWeather } from '../Actions/Actions';
import { getCurrentWeather, getDailyWeather } from '../../API/weatherAPI';

const validActions = [ CHANGE_UNITS, REFRESH ];

const idDictionary = {
    thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232], 
    drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    lightRain: [500, 501, 520, 521],
    heavyRain: [502, 503, 504, 522, 531],
    freezingRain: [511],
    lightSnow: [600, 601, 611, 612, 613, 615, 616, 620],
    heavySnow: [602, 621, 622],
    atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771], 
    tornado: [781], 
    clear: [800], 
    clouds: [801, 802, 803, 804]
};

const idToWeather = Object.entries(idDictionary).reduce(reverseIdDictionary, {});

export default createWeatherMiddleware = store => next => action => {
    // update the state first
    next(action);

    if (!validActions.includes(action.type) ) {
      return;
    }

    const currentReducerState = store.getState().reducer;

    getCurrentWeather(currentReducerState.location, currentReducerState.weatherUnit).then(weatherData => {    
        store.dispatch(setLocationName(weatherData.weatherData));
        store.dispatch(setMoreAboutToday(weatherData.weatherData));
        const dailyReducerState = store.getState().reducer;

        return getDailyWeather(dailyReducerState.location, dailyReducerState.weatherUnit);
    }).then(dailyWeatherData => {
        dispatchCurrentData(store, dailyWeatherData.dailyWeatherData);
        dispatchHourlyData(store, dailyWeatherData.dailyWeatherData);
        dispatchDailyData(store, dailyWeatherData.dailyWeatherData);
    });;
};

function dispatchCurrentData(store, dailyWeatherData) {

    var currentTime = dailyWeatherData.current.dt
    const sunrise = dailyWeatherData.current.sunrise;
    const sunset =  dailyWeatherData.current.sunset;
    var isDay = currentTime > sunrise && currentTime < sunset;

    const currentWeather = {
        temp: Math.round(dailyWeatherData.current.temp),
        condition: dailyWeatherData.current.weather[0].main,
        id: idToWeather[dailyWeatherData.current.weather[0].id],
        isDay,
        hi: Math.round(dailyWeatherData.daily[0].temp.max),
        lo: Math.round(dailyWeatherData.daily[0].temp.min),
    }

    store.dispatch(setCurrentWeather(currentWeather));
}

function dispatchHourlyData(store, dailyWeatherData) {

    const currentDaySunrise = dailyWeatherData.current.sunrise;
    const currentDaySunset =  dailyWeatherData.current.sunset;
    const nextDaySunrise = dailyWeatherData.daily[1].sunrise;

    let hourlyWeatherDataArr = [];

    for (var i = 0; i < dailyWeatherData.hourly.length; ++i) {
        
        var currentTime = dailyWeatherData.hourly[i].dt


        if (currentTime >= nextDaySunrise) {
            var isDay = true;
        } else {
            var isDay = currentTime > currentDaySunrise && currentTime < currentDaySunset;
        }

        var hour = new Date((currentTime) * 1000).getHours();
        
        var ifAmOrPm = hour >= 12 ? 'PM' : 'AM';

        hour = hour > 12 ? hour - 12 : hour;
        hour = hour === 0 ? hour + 12 : hour;
        
        hourlyWeatherDataArr.push(
            {
                hour: hour,
                amOrPm: ifAmOrPm,
                isDay: isDay,
                id: idToWeather[dailyWeatherData.hourly[i].weather[0].id],
                temperature: Math.round(dailyWeatherData.hourly[i].temp)
            }
        )
    };

    store.dispatch(setHourlyWeather(hourlyWeatherDataArr));
};

function dispatchDailyData(store, dailyWeatherData) {

    let dailyWeatherDataArr = [];

    for (var i = 0; i < dailyWeatherData.daily.length; ++i) {

        var day = new Date((dailyWeatherData.daily[i].dt) * 1000).toUTCString().slice(0, 3);

        dailyWeatherDataArr.push(
            {
                day: day,
                id: idToWeather[dailyWeatherData.daily[i].weather[0].id],
                hi: Math.round(dailyWeatherData.daily[i].temp.max),
                lo: Math.round(dailyWeatherData.daily[i].temp.min)
            }
        )
    };

    store.dispatch(setDailyWeather(dailyWeatherDataArr));
};

function reverseIdDictionary(accumulator, currentValue) {
    currentValue[1].forEach(value => {
      accumulator[value] = currentValue[0];
    });
      return accumulator;
  };
  