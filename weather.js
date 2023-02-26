$(document).ready(function() {
    // Define the API key and cities to retrieve temperature data for
    var api_key = '2302790a204dcdb09dda857f85a308e0';
    var cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
    
    // Define a function to retrieve the current temperature for a given city
    function getTemp(city) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric';
      $.get(url, function(data) {
        var temp = data.main.temp;
        var cityDiv = $('<div class="col-sm-6 col-md-4 col-lg-3 mb-4"></div>');
        var cityTitle = $('<h4 class="text-center">' + city + '</h4>');
        var tempDisplay = $('<p class="text-center">' + temp + '°C</p>');
        cityDiv.append(cityTitle, tempDisplay);
        $('#temp-display').append(cityDiv);
      });
    }
    
    // Retrieve the temperature data for each city and display it on the page
    for (var i = 0; i < cities.length; i++) {
      getTemp(cities[i]);
    }
  });
