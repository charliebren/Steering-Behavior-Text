var font;
var vehicles = [];

function preload()
{
  font = loadFont('AvenirNextLTPro-Demi.otf')
}
function setup()
{
  createCanvas(650,300);
  background(51);

  var points = font.textToPoints("Charlie", 1, 200,192);

  for(var i = 0;i < points.length; i++)
  {
    var pt = points[i];
    var vehicle = new  Vehicle(pt.x,pt.y);
    vehicles.push(vehicle);
  }
  // textSize(192);
  // fill(255);
  // noStroke();
  // text("hello", 100, 200);


}

function draw()
{
  background(51);


  for(var i = 0; i < vehicles.length; i++)
  {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
