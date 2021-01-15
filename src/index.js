// jQuery
var thermostat = new Thermostat();

$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  $('#temperature').text(thermostat.temperature); // update view
  powersaveColour();
})

$('#temperature-down').on('click', function() { // event listener
  thermostat.down(); // update model
  $('#temperature').text(thermostat.temperature); // update view
  powersaveColour();
})

$('#temperature-reset').on('click', function() { // event listener
  thermostat.reset(); // update model
  $('#temperature').text(thermostat.temperature); // update view
  powersaveColour();
})

$('#powersave-on').on('click', function() { // event listener
  thermostat.powersave(); // update model
  $('#temperature').text(thermostat.temperature); // update view
  powersaveColour();
})

$('#powersave-off').on('click', function() { // event listener
  thermostat.powersaveOff(); // update model
  $('#temperature').text(thermostat.temperature); // update view
  powersaveColour();
})

function powersaveColour() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.usage());
}


$('#city').on('click', function(event) {
  event.preventDefault();
  const text = $('#city-input').val();
  $.ajax({
    type: "GET",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=6e2b6a17830b11b0bc53d971359df6d6`,
    success: function(data){
      console.log(data)
      console.log(data.main)
      console.log(data.weather)
      console.log(data.weather[0].description)
      console.log(data.weather[0].icon)
      console.log(data.weather[0].main)
      $('#weather-description').text(data.weather[0].description);
    },
    error: function(err) {
      console.log('error');
    }
  })

})



// function powersaveColour() {
//   $('#temperature').text(thermostat.temperature);
//   if(thermostat.usage() === "low-usage"){
//     $('#temperature').css('color', 'green')
//   } else if (thermostat.usage() === "medium-usage"){
//     $('#temperature').css('color', 'orange')
//   } else {
//     $('#temperature').css('color', 'red')
//   }
// }


// Vanilla Js
  // var thermostat = new Thermostat

  // document.getElementById("temperature-up").addEventListener('click', function() {
  //   console.log(thermostat)
  //   thermostat.up()
  //   document.getElementById("temperature").innerHTML = thermostat.temperature
  // })
