var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility div span:first-child')
var wind = document.querySelector('.wind div span:first-child')
var cloud = document.querySelector('.cloud div span:first-child')
var tempValue = document.querySelector('.temp-value')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeather(input) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=93150e656602a0389be8f749e3400780`

    let data = await fetch(apiUrl).then(res => res.json())

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleString('vi')
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ""
        visibility.innerText = data.visibility
        wind.innerText = data.wind.speed
        cloud.innerText = data.clouds.all
        let temp = Math.round(data.main.temp - 273.15)
        tempValue.innerText = temp

        if (temp > 17) {
            body.setAttribute('class', 'hot')
        } else {
            body.setAttribute('class', 'cold')
        }
    } else {
        console.log("notfound")
        content.classList.add('hide')
    }
    
}

changeWeather("Ha noi")

search.addEventListener('keypress', function(e) {
    if (e.code === "Enter") {
        changeWeather(search.value.trim())
    }
})  