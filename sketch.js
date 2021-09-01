var t = 0;
var grid = []; //10 X 10 Grid
var path = [];
var lox = 4;
var loy = 4;
var loo = 2;
var startT = 0;
var w = 0;

function filling(x,y,c) {
  fill(c*255);
  rect(120 + 40*x-20, 120 + 40*y-20, 40, 40);
}

function ant(x,y,o) {
  fill(220,0,0);
  rect(120 + 40*x-5, 120 + 40*y-5, 10, 10);
  if(o == 1 || o == 3)
    {
      fill(255,0,0);
      rect(120 + 40*x-3, 120 + 40*y-11, 6, 6);
      fill(255,0,0);
      rect(120 + 40*x-3, 120 + 40*y+6, 6, 6);
    }
  else
    {
      fill(255,0,0);
      rect(120 + 40*x-11, 120 + 40*y-3, 6, 6);
      fill(255,0,0);
      rect(120 + 40*x+6, 120 + 40*y-3, 6, 6);
    }
}

function setup() {
  createCanvas(600, 600);
  startT=millis();
  for (var y = 0; y < 10; y++) {
    grid[y] = []; // create nested array
    for (var x = 0; x < 10; x++) {
      grid[y][x] = 1;
      filling(x,y,1);
    }
  }
}

function draw() {
  background(200);
  
  //Variable Initialization
  for(var j=0;j<=10;j++)
    {
      line(100,100 + 40*j,500,100 + 40*j);
      line(100 + 40*j,100,100 + 40*j,500);
    }
  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      filling(x,y,grid[y][x]);
    }
  }
  
  ant(lox, loy, loo);
  
  //New Position
  
  loo = (loo + (1-grid[loy][lox]) + 3*grid[loy][lox])%4;
  grid[loy][lox] ^= 1;
  loy += (loo%2)*(loo-2);
  lox += ((loo+1)%2)*(1-loo);
  t++;
  startT = millis();
  while(millis()-startT < 250) // noprotect
    {
      w=w;
    }
  print("Time step number: ", t);
  if(t > 222)
    {
      noLoop();
    }
  //setTimeout(waiting, 3000);
}
