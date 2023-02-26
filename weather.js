$(document).ready(function() {
    // Define the API key and cities to retrieve temperature data for
    var api_key = 'your-api-key';
    var cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
    
    // Define a function to retrieve the current temperature for a given city
    function getTemp(city) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric';
      $.get(url, function(data) {
        var temp = data.main.temp;
        $('#temp-display').append('<div class="city-temp"><span class="city">' + city + '</span><span class="temp">' + temp + '°C</span></div>');
      });
    }
    
    // Retrieve the temperature data for each city and display it on the page
    for (var i = 0; i < cities.length; i++) {
      getTemp(cities[i]);
    }
  });
  