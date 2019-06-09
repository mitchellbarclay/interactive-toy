var dude = [];
var flame = [];
var button = [];
var bo = false;
var bo2 = true;
var bg;
var grass;
var cloud;
var song;
var click;
var grunt;
var crackle;
var play = 0;
var play2 = 0;
var time = 0;
var time2 = 0;
var time3 = 0;
var c = 0;
var c2 = 0;
var f = 0;
var f2 = 0;
var y = 0;
var p = 0;
var gr = 0;
var sun = 0;
var sky = 0;
var cl = -100;
var rot = 0;
var rot2 = 0;
var x = 0;
var mx = 930;
var my = 650;
var press = 0;
var cy = 0;
var fr = 4;
var counter = 0;



function preload() {

  //dude
  for (var i = 0; i < 42; i++) {
    dude[i] = loadImage("anim/animation" + (i + 1) + ".png");
  }
  for (var i = 0; i < 30; i++) {
    flame[i] = loadImage("flame/flame" + (i + 1) + ".png");
  }

  //button
  button[0] = loadImage("button/button0.png");
  button[1] = loadImage("button/button1.png");
  button[2] = loadImage("button/button2.png");

  //background
  bg = loadImage("images/output.png");
  grass = loadImage("images/grass2.png");
  cloud = loadImage("images/cloud.png");

  //sounds
  song = loadSound('sounds/song.mp3');
  grunt = loadSound('sounds/grunt.wav');
  click = loadSound('sounds/click.wav');
  crackle = loadSound('sounds/flame.wav');

}

function mousePressed() {

  if (dist(mouseX, mouseY, mx, my) < 50) {

    if (song.isPlaying()) {
      song.stop();
      background(255, 0, 0);
    } else {
      song.loop();
      background(0, 255, 0);
    }
    if (bo2 == true) {
      bo2 = false;
    } else {
      bo2 = true;
    }
    click.play();
  } else {
    if (time2 > 10) {
      grunt.play();
      y = -1;
      bo = true;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth/2);
  song.loop();
}

function draw() {

  background(220);
  angleMode(DEGREES);

  //background

  image(bg, 0 + p, 360, 4304, 720);
  fill(186, 236, 255, 0 + sky);
  rect(0, 0, 1024, 720);

  //sun

  stroke(0);
  strokeWeight(2);
  fill(255, 135 + sky / 4, 114, 200);
  ellipse(700, 650 + sun, 160, 160);
  ellipse(700, 650 + sun, 180, 180);
  ellipse(700, 650 + sun, 200, 200);
  noStroke();

  //clouds

  imageMode(CENTER);
  image(cloud, cl, 300, 200, 80);
  image(cloud, cl + 300, 100, 200, 80);
  image(cloud, cl + 400, 120, 200, 80);
  image(cloud, cl + 600, 300, 200, 80);

  //grass

  image(grass, 0 + gr, 600, 4304, 315);

  //music on/off

  image(button[press], mx, my, 100, 100);

  //dude

  translate(512, 400);
  rotate(rot);
  image(flame[play2 + c2], 0, 0 + y, 400, 457);
  image(dude[play + c], 0, 0 + y, 400, 457);



  if (480 < mouseX < 544) {
    c = 32;
    f = 9;
    c2 = 20;
    f2 = 9;
  }

  //move-left

  if (mouseX < 480) {


    p = p + 0.5;
    gr = gr + 4;
    sun = sun - 1;
    sky = sky + 1;
    c = 0;
    f = 9;
    cl = cl + 1;
    c2 = 20;
    f2 = 9;
    rot = 0;
    fr = 4;

    if (cl > 2000) {
      cl = -700;
    }

    if (mouseX < 150) {

      counter = counter + 1;

      if (counter > 5) {
        gr = gr + 6;
        sun = sun - 1.5;
        p = p + 0.75;
        sky = sky + 1.2;
        c2 = 20;
        f2 = 9;
        rot = 3;
        fr = 3;
      }

      if (counter > 120) {
        gr = gr + 8;
        sun = sun - 2;
        p = p + 1;
        sky = sky + 2;
        cl = cl + 2;
        c2 = 0;
        f = 9;
        rot = 7;
        time3 = time3 + 1;
        fr = 2;
        if (time3 < 2) {
          crackle.loop();
        }


      }

    } else {
      counter = 0;
      crackle.stop();
      time3 = 0;
    }


  }

  if (sun > 20) {
    sun = 20;
  }

  if (sun < -500) {
    sun = -500;
  }

  if (sky > 300) {
    sky = 300;
  }

  if (sky < 0) {
    sky = 0;
  }

  //move-right


  if (mouseX > 544) {
    p = p - 0.5;
    gr = gr - 4;
    sun = sun + 1;
    sky = sky - 0.8;
    c = 10;
    f = 9;
    cl = cl + 20;
    c2 = 20;
    f2 = 9;
    rot = 0;
    fr = 4;

    if (mouseX > 880) {

      counter = counter + 1;

      if (counter > 5) {
        gr = gr - 6;
        sun = sun + 1.5;
        p = p - 0.75;
        sky = sky - 1.2;
        c2 = 20;
        f2 = 9;
        rot = -3;
        fr = 3;
      }

      if (counter > 120) {

        gr = gr - 8;
        sun = sun + 2;
        p = p - 1;
        sky = sky - 1.6;
        c2 = 10;
        f2 = 9;
        rot = -9;
        time3 = time3 + 1;
        fr = 2;
        if (time3 < 2) {
          crackle.loop();
        }
      }

    } else {
      counter = 0;
      crackle.stop();
      time3 = 0;
    }
  }

  //dude animation frame looping

  if ((time % fr) == 0) {
    play = play + 1;
    if (play > f) {
      play = 0;
    }
  }

  if ((time % 4) == 0) {
    play2 = play2 + 1;
    if (play2 > f2) {
      play2 = 0;
    }
  }

  //background loop

  if (p > 2152) {
    p = -1085;
  }

  if (p < -1085) {
    p = 2152;
  }

  if (gr < -1120) {
    gr = 2152;
  }

  if (gr > 2152) {
    gr = -1120;
  }

  //jump

  if (y < 0) {
    if (bo == true) {
      y -= 5;
      time2 = 0;
    } else {
      y += 8;
      time2 = 0;
    }
  }

  if (y < -80) {
    bo = false;
  }

  //music on/off

  if (bo2 == true) {
    press = 0;
  } else {
    press = 2;
  }

  if (mouseIsPressed) {
    if (dist(mouseX, mouseY, mx, my) < 50) {
      press = 1;
    }

  }

  time2 = time2 + 1;
  time = time + 1;

}
