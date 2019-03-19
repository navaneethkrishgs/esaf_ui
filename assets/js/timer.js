

$(document).ready(function(){
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
});

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