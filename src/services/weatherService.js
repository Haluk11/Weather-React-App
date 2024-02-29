const API_KEY = '59448bc9119f2f1d67ca37a4b9060fdf';
const Base_URL = 'https://api.openweathermap.org/data/2.5'

//https://api.openweathermap.org/data/2.5
// weather?q=istanbul&appid=59448bc9119f2f1d67ca37a4b9060fdf

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(Base_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid:
    API_KEY})

    return fetch(url)
        .then((res) => res.json())

}

const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather')
}
