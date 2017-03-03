//var img; 
var x, y;



function setup() {
  //img = loadImage("https://cdn.pbrd.co/images/ETTVyYGtU.jpg");
  //set Canvas to size of window
  createCanvas(800,800);
 
  loadWeather();
  
  
   x = width/2 ;
  y = height;
  //image
  
}



  function loadWeather(){
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kings%20cross%2CLondon%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  ,gotWeather);
}

///f2 




function gotWeather(data){
  
  console.log(data.query.results.channel.wind.direction);
  var direction=Number(data.query.results.channel.wind.direction);
  
  
  
  rectMode(CENTER);
  translate(width/2,height/2);
  angleMode(DEGREES);
  rotate(direction);
  
  
  
  //shape
  noStroke()
  fill(0);
  
fill(0); 
text("wind", 10, 35, 40, 40);

//triangle(30, 75, 58, 20, 86, 75);
  //triangle(30+x, 75+x, 58+x, 20+x, 86+x, 75+x);
 // triangle(30+y, 75+y, 58+y, 20+y, 86+y, 75+y);

  
}


function draw(){
  
  fill(random(255),random(255),random(255));
  ellipse(x, y,10,10);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-10,10);
  // Moving up at a constant speed
  y = y-1 ;
  
  // Reset to the bottom
  if (x>width) {x = width;
  }else if(y < 0) {
    y = height;
}}