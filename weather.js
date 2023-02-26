$(document).ready(function() {
    // Define the API key and cities to retrieve temperature and time data for
    var api_key = '2302790a204dcdb09dda857f85a308e0';
    var cities = [
      {name: 'New York', timezone: 'America/New_York'},
      {name: 'London', timezone: 'Europe/London'},
      {name: 'Paris', timezone: 'Europe/Paris'},
      {name: 'Tokyo', timezone: 'Asia/Tokyo'},
      {name: 'Sydney', timezone: 'Australia/Sydney'}
    ];
  
    // Define a function to retrieve the current temperature, weather information, and time for a given city
    function getWeather(city) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=' + api_key + '&units=metric';
      $.get(url, function(data) {
        var temp = Math.round(data.main.temp);
        var weatherDesc = data.weather[0].description;
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
        var cityRow = $('<tr></tr>');
        var cityCell = $('<td class="city-cell">' + city.name + '</td>');
        var tempCell = $('<td class="temp-cell">' + temp + '°C</td>');
        var weatherCell = $('<td class="weather-cell">' + weatherDesc + '<br><img src="' + weatherIcon + '"></td>');
        var timeCell = $('<td class="time-cell"></td>');
        cityRow.append(cityCell, tempCell, weatherCell, timeCell);
        $('#temp-table').append(cityRow);
        
        // Get the current time in the city's timezone and display it in the time cell
        var timezone = city.timezone;
        var currentTime = moment.tz(moment(), timezone);
        timeCell.text(currentTime.format('h:mm A'));
      });
    }
  
    // Retrieve the temperature, weather, and time data for each city and display it in a table format
    for (var i = 0; i < cities.length; i++) {
      getWeather(cities[i]);
    }
  });
  