var apiKey = "990bbc0dfef73ea05ad6034184f72ec5";

$(document).ready(function() {
  $('#weather-location').click(function() {

    var city = $('#location').val();
    $('#location').val("");
    $('#text2').hide()
    $('#text').show()
    $('#text1').show()
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey, function(response) {
      console.log(response);
      $('#text').text(response['weather'][0]['description']);
      $('#text1').text(response['name']);
    });
  });

  $('#temperature').click(function() {

    var city = $('#location').val();
    $('#location').val("");
    $('#text').hide()
    $('#text1').hide()
    $('#text2').show()
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey, function(response) {
      $('#text2').text('The temperature is '+(response['main']['temp']));

    });
  });



// $('temperature').click(function() {
//   var city = $('#location').val();
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey, function(response) {
//   $('#location').val("");
//   $('#text2').text('The temperature is '+(response['main']['temp']));
// }
// }

});

$(document).ready(function(){
  $('#time').text(moment());
});
