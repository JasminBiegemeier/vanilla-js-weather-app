const searchBar = document.getElementById("search-bar")
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

// This function only paints stuff on the screen
function render(data) {
    console.log(data)
    document.getElementById("location").innerText = data.name
    document.getElementById("temp").innerText = data.main.temp
    document.getElementById("weather").innerText = data.weather[0].main

    // here we write the conditional
    if (data.main.temp >= 23) {
        document.getElementById("app").classList.add("warm")
    }
    else {
        document.getElementById("app").classList.remove("warm")
    }

}

searchBar.addEventListener("keypress", function (event) {
    console.log(event)
    if (event.key === "Enter") {
        const city = searchBar.value
        fetch(`${baseUrl}?q=${city}&units=metric&APPID=209b7f7ebc600f239b028d636c58eb39`)
            .then(response => response.json())
            .then(data => render(data));
    }
});



