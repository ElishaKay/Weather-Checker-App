//Function for calling the Temperature according to city :)
//Please note, I still need to add the function similar to the createBook function above.


var fetchWeather = function (cityName) {

  $.ajax({ 
    method: "GET",
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=226811fffbea03be12bc7c7e864bda02',
    dataType: "json",
    success: function (data) {
      printWeather(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }

     });
}


// Function to print the weather:

var printWeather = function (data) {
   {
    var fahrenheight = 1.8 * (data.main.temp - 273) + 32;

    var theWeather = {
      avg_temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.pressure
    }

    var source = $("#weather-template").html();
    var template = Handlebars.compile(source);
    var html = template(theWeather);

    $('.weatherInfoDiv').append(html);
  }
}



// Button gets clicked and it calls the fetchWeather function based on the city input



$('.search-by-city').on('click', function (e) {
  e.preventDefault();

  var city = $('#city-name').val();

  fetchWeather(city);
});

