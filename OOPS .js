var box1;
var box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box();
  box2 = new Box();
}

function draw() 
{
  background(220);
  box1.y=50;
  box1.show();
  box1.set_speed(2);

  box2.y=300;
  box2.show();
  box2.set_speed(2);
  box2.set_width(100)
}