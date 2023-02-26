$(document).ready(function() {
    // Define the API key and cities to retrieve temperature data for
    var api_key = '2302790a204dcdb09dda857f85a308e0';
    var cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
  
    // Define a function to retrieve the current temperature and weather information for a given city
    function getWeather(city) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric';
      $.get(url, function(data) {
        var temp = data.main.temp;
        var weatherDesc = data.weather[0].description;
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
        var cityRow = $('<tr></tr>');
        var cityCell = $('<td class="city-cell">' + city + '</td>');
        var tempCell = $('<td class="temp-cell">' + Math.round(temp) + '°C</td>');
        var weatherCell = $('<td class="weather-cell">' + weatherDesc + '<br><img src="' + weatherIcon + '"></td>');
        cityRow.append(cityCell, tempCell, weatherCell);
        $('#temp-table').append(cityRow);
      });
    }
  
    // Retrieve the temperature and weather data for each city and display it in a table format
    for (var i = 0; i < cities.length; i++) {
      getWeather(cities[i]);
    }
  });
  