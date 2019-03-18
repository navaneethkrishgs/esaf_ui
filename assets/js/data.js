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

});

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
      setTimeout(function(){ start();  $("#welcomePage").hide(); $("#counterPage").show() },7000);
    console.log('Received message on ' + listener.name + ': ' + message.data);

    // listener.unsubscribe();
  });




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










