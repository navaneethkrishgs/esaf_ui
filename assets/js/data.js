$(document).ready(function(){
$('#header').hide();
$('#disdiv').hide();
$('#cashWid').hide();
$('#cashDeposite').hide();
$('#demat').hide();
$('#foreignEx').hide();
$('#fixedDepos').hide();
$('#speech').hide();
$//('#index').hide();
//video streamer
  var cam_viewer = new MJPEGCANVAS.Viewer({
            divID : 'page-front-img',
            host : 'localhost',
            width : 700,
            height : 400,
            topic : '/front_cam'

            
          });
   console.log(cam_viewer);
   /////////////////////////////// timer ///////////////////
  ////// to counter page
  $('.indexPageBackBtn').on('click',function(){
    index = setInterval(counterPage_timer,3000);
});
 ///// clear couter timer
 $('.counterPageBackBtn').on('click',function(){
    couterpage_clear();
});

 ////////// to navigationPage
 $('#navigatio').on('click',function(){
   
  
    couterpage_clear();
    gonavigationPage()
});
$('.navigationPageBackBtn').on('click',function(){
    navigationPage_clear();
    index = setInterval(counterPage_timer,3000);
});
//////////speechTex
$('#speechTex').on('click',function(){
    couterpage_clear();
});
$('.speechPageBackBtn').on('click',function(){
    c_time =0;
    index = setInterval(counterPage_timer,3000);
});
// /////////reasonTex
$('#reasonTex').on('click',function(){
    couterpage_clear();
});
$('.others6PageBackBtn').on('click',function(){
    c_time =0;
    index = setInterval(counterPage_timer,3000);
});


///////////settings btn in counter page
$('.enterBtnForTimer').on('click',function(){
    couterpage_clear();
});
$('.settingsPageBackBtn').on('click',function(){
    c_time =0;
    index = setInterval(counterPage_timer,3000);
});

////////////for counte1
$('#counte1').on('click',function(){
    // counte1 = setInterval(counte1Page_timer,3000);
    navigationPage_clear();
});
$('.counter1').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    // couter1page_clear();
});

/////counte2
$('#counte2').on('click',function(){
    // counte1 = setInterval(counte1Page_timer,3000);
    navigationPage_clear();
});
$('.counter2').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    // couter1page_clear();
});
 /////counte3
 $('#counte3').on('click',function(){
    navigationPage_clear();
});
$('.counter3').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    
});
  /////counte4
  $('#counte4').on('click',function(){
    navigationPage_clear();
});
$('.counter4').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    
});
 /////counte5
 $('#counte5').on('click',function(){
    navigationPage_clear();
});
$('.counter5').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    
});
  /////counte6
  $('#counte6').on('click',function(){
    navigationPage_clear();
});
$('.counter6').on('click',function(){
    navigate = setInterval(navigationPage_timer,3000);
    
});

   /////////////////////// timer end///////////////

});
/////////////////////////////// timer ///////////////////
var IDLE_TIMEOUT = 50;

 //////////////////////////////couter page
var c_time =0;
function counterPage_timer(){
    c_time++;
    console.log('couter page' +'' + c_time);
    if (c_time >= IDLE_TIMEOUT) {
        $("#indexPage").show();
        $("#welcomePage").hide();

        $("#settingsPage").hide(); $("#settings_navigation_Page").hide();
        $("#settings_Nav_App_Page").hide();
        $("#settings_Nav_Joystick_Page").hide();
        $("#settings_Nav_Keyboard_Page").hide();
        $("#face_recognition").hide();

        $("#counterPage").hide();
        $("#navigationPage").hide();
        $("#speechPage").hide();
        $("#videoPage").hide();
        $("#reasonForVisitingPage").hide();
        $("#others6Page").hide();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage_counter5").hide();
        $("#navigationPage_counter6").hide();

             /////////for clear all timer
             couterpage_clear();
            //  navigationPage_clear();
        }
}

function couterpage_clear(){
    c_time =0;
    clearInterval(index)
}

//////////////navigationPage_timer
var nav_time =0;
function navigationPage_timer(){
    nav_time++;
    console.log('navigationPage'+'' + nav_time);
    if (nav_time >= IDLE_TIMEOUT) {
            $("#indexPage").show();
            $("#welcomePage").hide();
    
            $("#settingsPage").hide(); $("#settings_navigation_Page").hide();
            $("#settings_Nav_App_Page").hide();
            $("#settings_Nav_Joystick_Page").hide();
            $("#settings_Nav_Keyboard_Page").hide();
            $("#face_recognition").hide();
            
            $("#counterPage").hide();
            $("#navigationPage").hide();
            $("#speechPage").hide();
            $("#videoPage").hide();
            $("#reasonForVisitingPage").hide();
            $("#others6Page").hide();
            $("#navigationPage_counter1").hide();   
            $("#navigationPage_counter2").hide(); 
            $("#navigationPage_counter3").hide();
            $("#navigationPage_counter4").hide();
            $("#navigationPage_counter5").hide();
            $("#navigationPage_counter6").hide();

            /////////for clear all timer
            couterpage_clear();
            navigationPage_clear();
        }
}
function  gonavigationPage(){
    navigate = setInterval(navigationPage_timer,3000);
}
function navigationPage_clear(){
    nav_time =0; 
    clearInterval(navigate)
}


////////////////// timer end /////////////



var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
      });

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
console.log('Connection to websocket server closed.');
});


//subscriber
// home page to welcome page ui change
var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/ui',
    messageType : 'std_msgs/String'
  });

  listener.subscribe(function(message) {
    $("#indexPage").hide();
      document.getElementById('User').innerHTML = message.data;
      $("#welcomePage").show();
      setTimeout(function(){ start();  $("#welcomePage").hide(); $("#counterPage").show(); index = setInterval(counterPage_timer,3000); },7000);
    console.log('Received message on ' + listener.name + ': ' + message.data);

    // listener.unsubscribe();
  });


var battery_trigger = new ROSLIB.Topic({
     ros : ros,
     name : '/battery',
     messageType : 'std_msgs/String'
   });
battery_trigger.subscribe(function(message) {
    // $("#indexPage").hide();
    //   document.getElementById('User').innerHTML = message.data;
    //   $("#welcomePage").show();
    //   setTimeout(function(){ start();  $("#welcomePage").hide(); $("#counterPage").show(); index = setInterval(counterPage_timer,3000); },7000);
    console.log('Battery Percentage Received ' + battery_trigger.name + ': ' + message.data);
    if (parseFloat(message.data) < 26 ) {
      battery_low();
    } 
    else{
      plugged();
    }  

    // listener.unsubscribe();
  });

//publisher 


var ui_refresh = new ROSLIB.Topic({
     ros : ros,
     name : '/ui_refresh',
     messageType : 'std_msgs/String'
   });


var power = new ROSLIB.Topic({
     ros : ros,
     name : '/shut',
     messageType : 'std_msgs/String'
   });



  var str = new ROSLIB.Message({
      data : 'hello'
  });

var speech_state = new ROSLIB.Topic({
     ros : ros,
     name : '/speech/state',
     messageType : 'std_msgs/String'
   });



var joystick_state = new ROSLIB.Topic({
     ros : ros,
     name : '/joystick/state',
     messageType : 'std_msgs/String'
   });

var keyboard_state = new ROSLIB.Topic({
     ros : ros,
     name : '/keyboard/state',
     messageType : 'std_msgs/String'
   });


// var teleop = new KEYBOARDTELEOP.Teleop({
//       ros : ros,
//       topic : "/cmd_vel_mux/input/teleop"
//     });




  var cmdVelTopic = new ROSLIB.Topic({
        ros : ros,
        name : '/cmd_vel',
        messageType : 'geometry_msgs/Twist'
    });

    // These lines create a message to identify the twist message.Identifying the msg is required for publishing.
    // It initalizes all properties to zero. They will be set to appropriate values before we publish this message.
    var twist = new ROSLIB.Message({
        linear : {
            x : 0.0,
            y : 0.0,
            z : 0.0
        },
        angular : {
            x : 0.0,
            y : 0.0,
            z : 0.0
        }
    });
    //console.log(twist);
    //This functions are basic cmd_vel_control blocks
    function Sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    function moveSomeWhere(linVel, angVel) {

      //console.log(twist);
        twist.linear.x = linVel;
        twist.angular.z = angVel;
        
        cmdVelTopic.publish(twist);
    }

    function goforward() {
        moveSomeWhere(0.5, 0)
        Sleep(100)
        moveSomeWhere(0, 0)
    }
    function gobackward() {
        moveSomeWhere(-0.5, 0)
        Sleep(100)
        moveSomeWhere(0, 0)
    }
    function turnright() {
        moveSomeWhere(0, -0.5)
        Sleep(100)
        moveSomeWhere(0, 0)
    }
    function turnleft() {
        moveSomeWhere(0, 0.5)
        Sleep(100)
        moveSomeWhere(0, 0)
    }










