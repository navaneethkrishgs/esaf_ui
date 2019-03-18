


$(document).ready(function(){

  $(".background-options").css("filter", "brightness(100%)");

  

       //herovide.muted=false;
  // Start Clock
  startTime();	
  $("#volume").slider({
    min: 0,
    max: 2,
    value: 0,
    range: "min",
    slide: function(event, ui) {
      setVolume(ui.value / 100);
    }
  });
  $("#brightness").slider({
    min: 0,
    max: 100,
    value: 100,
    range: "min",
    slide: function(event, ui) {
      // console.log(ui.value)
      $(".background-image").css("filter", "brightness("+ui.value+"%)");
      $(".background-options").css("filter", "brightness("+ui.value+"%)");
      $("#addNewUserText").css("filter", "brightness("+ui.value+"%)");


      $("#nextPage").css("filter", "brightness("+ui.value+"%)"); 
      $(".modal-backdrop").css("position", "relactive");
    
      // setVolume(ui.value / 100);
    }
  });
  var myMedia = document.createElement('audio');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";

  // Play Audio
  playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);
  
  function playAudio(fileName, myVolume) {
          myMedia.src = fileName;
          myMedia.setAttribute('loop', 'loop');
      setVolume(myVolume);
      myMedia.play();
  }
  
  function setVolume(myVolume) {
  var myMedia = document.getElementById('myMedia');
  myMedia.volume = myVolume;
  }

  // Language Select Card
  $("#lanSelector").click(function(event) {
    event.preventDefault();
    $("#languageSlider").toggle( "slide" );
  });

  // Clock
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
});