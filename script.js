var fullLyrics = "will you wake me in the morning when we're out of coffee? I'll surrender to the day at the fall of dawn scream there better be a remedy for staying starry 'til sunlight is gone will you stay until the snow falls or we're out of money? put the money in your head and your game face on be the man it means you never need to say you're sorry to show you were strong and everything you wanted turns out to be just what I need to run along the water at unimaginable speed and find the house we've haunted with all those useful memories to plant the seed does it scare you that i need you? do you need me? darling it was funny it my head will you laugh along? lead the family from south of Queens to Ulster County or silence your song it's not like something you'll forget my drop of rain my cigarette you'll learn to eat what you can get you'll learn to swallow your regret this used to be my favorite song don't talk don't move don't sing along just make believe like nothing's wrong don't turn to leave"

var pingpong2 = new Tone.PingPongDelay(0.9, 0.1).toMaster();
pingpong2.wet = 0.0;
var pingpong = new Tone.PingPongDelay(0.45, 0.1).connect(pingpong2).toMaster();
pingpong.wet = 0.0;

var add = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCadditivo.mp3?v=1588571834931")
  // .connect(pingpong)
  .toMaster();
var banjo1 = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCbanjo1.mp3?v=1588571840030")
  // .connect(pingpong)
  .toMaster();
var banjo2 = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCbanjo2.mp3?v=1588571843336")
  // .connect(pingpong)
  .toMaster();
var bass = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCbass.mp3?v=1588571847179")
  // .connect(pingpong)
  .toMaster();
var clav = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCclav.mp3?v=1588571850820")
  // .connect(pingpong)
  .toMaster();
var gliss = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCgliss.mp3?v=1588571856293")
  // .connect(pingpong)
  .toMaster();
var trills = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCtrills.mp3?v=1588571863423")
  // .connect(pingpong)
  .toMaster();
var violin = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCviolin.mp3?v=1588571867860")
  // .connect(pingpong)
  .toMaster();
var drums = new Tone.Player(
"https://cdn.glitch.com/01aa69aa-3e96-44e1-90ba-2de19393bd23%2FUCdrums.mp3?v=1588709590458")
.toMaster();


var started = false;
var banjoPlaying = false;
var violinPlaying = false;
var addPlaying = false;
var bassPlaying = false;
var clavPlaying = false
var glissPlaying = false;
var trillsPlaying = false;
var drumsPlaying = false;


add.loop = true;
banjo1.loop = true;
banjo2.loop = true;
bass.loop = true;
clav.loop = true;
gliss.loop = true;
trills.loop = true;
violin.loop = true;
drums.loop = true;


function playSound() {
  if (started == false) {
    add.start();
    banjo1.start();
    banjo2.start();
    bass.start();
    clav.start();
    gliss.start();
    trills.start();
    violin.start();
    started = true;
  } else {
    add.stop();
    banjo1.stop();
    banjo2.stop();
    bass.stop();
    clav.stop();
    gliss.stop();
    trills.stop();
    violin.stop();
    started = false;
    
  }
}

function playAdd(){
  if (addPlaying == false){
    document.getElementById("mushroom").style.filter="invert(100%)";
    add.start();
    addPlaying = true;
  } else {
    document.getElementById("mushroom").style.filter="invert(0%)";
    add.stop();
    addPlaying = false;
  }
}

function playBanjo(){
  if (banjoPlaying == false){
    document.getElementById("table").style.filter="invert(100%)";
    banjo1.start();
    banjo2.start();
    banjoPlaying = true;
  } else {
    document.getElementById("table").style.filter="invert(0%)";
    banjo1.stop();
    banjo2.stop();
    banjoPlaying = false;
  }
}

function playViolin(){
  if (violinPlaying == false){
    document.getElementById("plow").style.filter="invert(100%)";
    violin.start();
    violinPlaying = true;
  } else {
    document.getElementById("plow").style.filter="invert(0%)";
    violin.stop();
    violinPlaying = false;
  }
}

function playBass(){
  if (bassPlaying == false){
    document.getElementById("horsehead").style.filter="invert(100%)";
    bass.start();
    bassPlaying = true;
  } else {
    document.getElementById("horsehead").style.filter="invert(0%)";
    bass.stop();
    bassPlaying = false;
  }
}

function playClav(){
  if (clavPlaying == false){
    document.getElementById("nest").style.filter="invert(100%)";
    clav.start();
    clavPlaying = true;
  } else {
    document.getElementById("nest").style.filter="invert(0%)";
    clav.stop();
    clavPlaying = false;
  }
}

function playGliss(){
  if (glissPlaying == false){
    document.getElementById("birdcage").style.filter="invert(100%)";
    gliss.start();
    glissPlaying = true;
  } else {
    document.getElementById("birdcage").style.filter="invert(0%)";
    gliss.stop();
    glissPlaying = false;
  }
}

function playTrills(){
  if (trillsPlaying == false){
    document.getElementById("shovel").style.filter="invert(100%)";
    trills.start();
    trillsPlaying = true;
  } else {
    document.getElementById("shovel").style.filter="invert(0%)";
    trills.stop();
    trillsPlaying = false;
  }
}

function playDrums(){
  if (drumsPlaying == false){
    document.getElementById("catalog").style.filter="invert(100%)";
    drums.start();
    drumsPlaying = true;
  } else{
    document.getElementById("catalog").style.filter="invert(0%)";
    drums.stop();
    drumsPlaying = false;
  }
}


function lyrics(){
    var x = document.getElementById("lyrics");
  if (x.innerHTML === "lyrics") {
    x.innerHTML = fullLyrics;
  } else {
    x.innerHTML = "lyrics";
  }

}
