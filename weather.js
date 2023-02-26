$(document).ready(function() {
    // Define the API key and cities to retrieve temperature and time data for
    var api_key = '2302790a204dcdb09dda857f85a308e0';
    var cities = [
      { name: 'New York', timezone: 'America/New_York' },
      { name: 'Berlin', timezone: 'Europe/Berlin' },
      { name: 'London', timezone: 'Europe/London' },
      { name: 'Paris', timezone: 'Europe/Paris' },
      { name: 'Tokyo', timezone: 'Asia/Tokyo' },
      { name: 'Sydney', timezone: 'Australia/Sydney' }
    ];
    /* this is working but using table
    // Define a function to retrieve the current temperature, weather information, and time for a given city
    function getWeather(city) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=' + api_key + '&units=metric';
      $.get(url, function(data) {
        var temp = Math.round(data.main.temp);
        var weatherDesc = data.weather[0].description;
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

        // Get the current time in the city's timezone
        var currentTime = new Date().toLocaleTimeString('en-US', { timeZone: city.timezone });

        var cityRow = $('<tr></tr>');
        var cityCell = $('<td class="city-cell">' + city.name + '</td>');
        var tempCell = $('<td class="temp-cell">' + temp + '°C</td>');
        var weatherCell = $('<td class="weather-cell">' + weatherDesc + '<br><img src="' + weatherIcon + '"></td>');
        var timeCell = $('<td class="time-cell">' + currentTime + '</td>');

        cityRow.append(cityCell, tempCell, weatherCell, timeCell);
        $('#temp-table').append(cityRow);
      });
    } */
    /* card working lets bring map
    function getWeather(city) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=' + api_key + '&units=metric';
        $.get(url, function(data) {
          var temp = Math.round(data.main.temp);
          var weatherDesc = data.weather[0].description;
          var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
      
          // Get the current time in the city's timezone
          var currentTime = new Date().toLocaleTimeString('en-US', { timeZone: city.timezone });
      
          // Create a card for the city
          var card = $('<div class="card"></div>');
          var cardBody = $('<div class="card-body"></div>');
          var cardTitle = $('<h5 class="card-title">' + city.name + '</h5>');
          var cardSubtitle = $('<h6 class="card-subtitle mb-2 text-muted">' + weatherDesc + '</h6>');
          var cardText = $('<p class="card-text">' + temp + '°C</p>');
          var cardImage = $('<img class="card-img-top" src="' + weatherIcon + '" alt="Card image cap">');
          var cardFooter = $('<div class="card-footer"><small class="text-muted">' + currentTime + '</small></div>');
      
          cardBody.append(cardTitle, cardSubtitle, cardText);
          card.append(cardImage, cardBody, cardFooter);
          $('#temp-display').append(card);
        });
      }
      */
     // Define a function to retrieve the current temperature, weather information, and time for a given city
     function getWeather(city) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=' + api_key + '&units=metric';
        $.get(url, function(data) {
          var temp = Math.round(data.main.temp);
          var weatherDesc = data.weather[0].description;
          var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
          var lat = data.coord.lat;
          var lon = data.coord.lon;
          var mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=10&size=200x200&maptype=roadmap&markers=color:red%7C' + lat + ',' + lon + '&key=YOUR_API_KEY';

          var card = $('<div class="card text-center mx-3 mb-3"></div>');
          var cardBody = $('<div class="card-body"></div>');
          var cardTitle = $('<h5 class="card-title">' + city.name + '</h5>');
          var cardSubtitle = $('<h6 class="card-subtitle mb-2 text-muted">' + temp + '°C ' + weatherDesc + ' <img src="' + weatherIcon + '" height="50px"></h6>');
          var cardText = $('<p class="card-text">Current time: ' + new Date().toLocaleTimeString('en-US', { timeZone: city.timezone }) + '</p>');
          var cardImage = $('<img src="' + mapUrl + '" class="card-img-bottom" alt="' + city.name + '">');

          cardBody.append(cardTitle, cardSubtitle, cardText, cardImage);
          card.append(cardBody);
          $('#temp-display').append(card);
        });
      }

    // Retrieve the temperature, weather, and time data for each city and display it in a table format
    for (var i = 0; i < cities.length; i++) {
      getWeather(cities[i]);
    }
  });
  /*
  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("live-clock").innerHTML = time;
    setTimeout(updateTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  // Call the updateTime function when the document is ready
  $(document).ready(function() {
    updateTime();
  });
  */