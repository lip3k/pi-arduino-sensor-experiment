var five = require("johnny-five");
var board = new five.Board({
  port: "Com3"
});

let values = {
  temp: 0,
  light: 0
};

board.on("ready", function() {
  var celsius = new five.Sensor({
    pin: "A0",
    freq: 1000
  });
  var photoresistor = new five.Sensor({
    pin: "A2",
    freq: 1000
  });

  celsius.on("change", function(value) {
    values.temp = value;
  });
  photoresistor.on("change", function(value) {
    values.light = value / 1023;
  });
  setInterval(() => {
    console.log(`Values are: ${values.temp}, ${values.light}`);
  }, 500);
});
