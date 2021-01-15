// jQuery
var thermostat = new Thermostat();

$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  $('#temperature').text(thermostat.temperature); // update view
})




// Vanilla Js
  // var thermostat = new Thermostat
  
  // document.getElementById("temperature-up").addEventListener('click', function() {
  //   console.log(thermostat)
  //   thermostat.up()
  //   document.getElementById("temperature").innerHTML = thermostat.temperature
  // })