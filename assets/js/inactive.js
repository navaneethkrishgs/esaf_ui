
$(document).ready(function(){
    // localStorage.setItem('time','allow');
    // toggleInterval();
  
    $("#counterPage1").on('click',function(){
        
    })

});

var _idleSecondsCounter = 0;

localStorage.setItem('inte','start');
    function start() {
      _idleSecondsCounter = 0;
        localStorage.setItem('inte','start');
        var time = localStorage.getItem('inte');
        if(time == 'start'){
            begin = setInterval(countdown, 1000);
        }else{
            console.log('stop');
            clearInterval(begin)
        }

    }


    function Reset(){
        _idleSecondsCounter = 0;
       
        localStorage.setItem('inte','start');
        // start();
    }

    function countdown(){
        _idleSecondsCounter++;
        var time = localStorage.getItem('inte');
        if(time == 'start'){
            console.log(_idleSecondsCounter);
            if(_idleSecondsCounter >= 12000){
            console.log('time out');
            var speech_value = new ROSLIB.Message({
               data : 'true'
             });
            ui_refresh.publish(str);
            Stop();
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
            }
        }
       
    }
    function Stop(){
        
        localStorage.setItem('inte','stop');
        // _idleSecondsCounter = 0;
    }

    function demo(){
        start();
    }

// var IDLE_TIMEOUT = 100; //seconds
// var _idleSecondsCounter = 0;
// document.onclick = function() {
//     _idleSecondsCounter = 0;
//     // alert('j')
//     console.log(_idleSecondsCounter);
//     localStorage.setItem("allowInterval","allowInterval");
// };
// // document.onmousemove = function() {
// //     _idleSecondsCounter = 0;
// //     //console.log(_idleSecondsCounter);
// // };
// // document.onkeypress = function() {
// //     _idleSecondsCounter = 0;
// //     // console.log(_idleSecondsCounter);
// // };
// var timesettings = window.setInterval(CheckIdleTime, 100);

// function CheckIdleTime() {
//     _idleSecondsCounter++;
//     console.log(_idleSecondsCounter)
//     if (_idleSecondsCounter >= IDLE_TIMEOUT) {
//         // alert();
//     // alert("Time expired!");
//     // if(localStorage.getItem('allowInterval') == 'allowInterval'){
 
//         // document.location.href = "index.html";
        // $("#indexPage").show();
        // $("#welcomePage").hide();

        // $("#settingsPage").hide(); $("#settings_navigation_Page").hide();
        // $("#settings_Nav_App_Page").hide();
        // $("#settings_Nav_Joystick_Page").hide();
        // $("#settings_Nav_Keyboard_Page").hide();
        // $("#face_recognition").hide();

        // $("#counterPage").hide();
        // $("#navigationPage").hide();
        // $("#speechPage").hide();
        // $("#videoPage").hide();
        // $("#reasonForVisitingPage").hide();
        // $("#others6Page").hide();
        // $("#navigationPage_counter1").hide();
        // $("#navigationPage_counter2").hide();
        // $("#navigationPage_counter3").hide();
        // $("#navigationPage_counter4").hide();
        // $("#navigationPage_counter5").hide();
        // $("#navigationPage_counter6").hide();
//      }
//     // }
// }
 
// function Addons() {
//     clearInterval(timesettings);
// }
// function Addons1() {
//     timesettings = window.setInterval(CheckIdleTime, 100);
// }