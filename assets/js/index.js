$(document).ready(function(){

    var timesettings;
    

    // $(".counter1").hide();
    $("#User").text('Test User');   /////for welcome page
    $(".sign-in-button").on('click',function(){
        alert();
        console.log('login')
    });
    $("#saveVisitData").text('Sent');
    /////////////////for firebase 


var config = {
    apiKey: "AIzaSyDMkgGh69rv-4OuD0iorUNi7wpoRHVSQwU",
    authDomain: "asimovrobotics-80c9f.firebaseapp.com",
    databaseURL: "https://asimovrobotics-80c9f.firebaseio.com",
    projectId: "asimovrobotics-80c9f",
    storageBucket: "asimovrobotics-80c9f.appspot.com",
    messagingSenderId: "309600775453"
  };
  firebase.initializeApp(config);   
  //////////////////to generate a user
//   var userId = 1;
//   firebase.database().ref('users/' + userId).set({
//   password: '0007',
//       },function(error) {
//           if (error) {
//             // The write failed...
//           } else {
//             // Data saved successfully!
//           }
//         });

$("#key13").on('click',function(){
    alert();
})
//////////////modal
$(".setModal").click(function(){
    $("#settingsModalCenter").modal({
        
    });
});
    //////saveVisitData
    $("#saveVisitData").on('click',function(){

        var formData = $("#test-form").serialize();
        console.log(formData);
        
    
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbzlUuVZc08ThqioH2cFtHbKE07er36DKc048wE0GWi80koyD7WS/exec',
            type: 'GET',
            data: formData,
            // async: false,
            success: function (data) {
               console.log(data)
               Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Successfully saved',
                    showConfirmButton: false,
                    timer: 1500
                });
        $("#visiter_name").val('');
        $("#visiter_age").val('');
         $("#Visite_reason").val('');
            },
         
        });
    
       
    });



    const NewUserdata = JSON.parse(localStorage.getItem('newUser'));
    // console.log(NewUserdata.username)
    
    if(NewUserdata == null){

        $("#newuserSlide").hide();

    }else{

        $("#newuserSlide").show();
        $("#newuser").text(NewUserdata.username);
        
    }
  
/////////////// theme change when page load
var bi = localStorage.getItem('background_image');

if( bi == '1'){
    $("#radio6").attr( 'checked', true )
    $("#radio7").attr( 'checked', false )
    $("#radio8").attr( 'checked', false )
    $("#radio9").attr( 'checked', false ) 
    $(".background-image").css("background-image", "url('background-pattern4.png')");
    $(".background-options").css("background-image", "url('background-pattern4.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1.png')");
    $("#loader").css("border-top","16px solid #FF9800");
    
  }else if(bi == '2'){
    $("#radio6").attr( 'checked', false )
    $("#radio7").attr( 'checked', true )
    $("#radio8").attr( 'checked', false )
    $("#radio9").attr( 'checked', false )
    // localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern.png')");
    $(".background-options").css("background-image", "url('background-pattern.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4_blue1.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1_blue.png')");
    $("#loader").css("border-top","16px solid #03A9F4");
  }else if(bi == '3'){
    $("#radio6").attr( 'checked', false )
    $("#radio7").attr( 'checked', false )
    $("#radio8").attr( 'checked', true )
    $("#radio9").attr( 'checked', false )
    $(".background-image").css("background-image", "url('background-pattern8.png')");
    $(".background-options").css("background-image", "url('background-pattern8.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4_green.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1_green.png')");
    $("#loader").css("border-top","16px solid #8BC34A");
  }else if(bi == '4'){
    $("#radio6").attr( 'checked', false )
    $("#radio7").attr( 'checked', false )
    $("#radio8").attr( 'checked', false )
    $("#radio9").attr( 'checked', true )
    $(".background-image").css("background-image", "url('background-pattern6.png')");
    $(".background-options").css("background-image", "url('background-pattern6.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1.png')");
    $("#loader").css("border-top","16px solid #E91E63");
  }


///////////////hide pages//////

$("#loadingPage").hide();
$("#indexPage").hide();
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

///////////////////////////first page ////
    $(".valid").hide();

  
  
    
  
/////////////////welcome page

   $("#welcomePage").on('click',function(){
      // alert();
   })

   $("#settingsBtn1").on('click',function(){

   });
   $("#settingsBtn").on('click',function(){

       // $(".indexpageClass").attr('id','keyboard');
       });
///////////////counter page//////
$("#settingsBtn3").on('click',function(){
    // alert();
}) ;

$('input[size="200"]').each(function () {

    var style = $(this).attr('style'),
        textbox = $(document.createElement('textarea')).attr('style', style);
        console.log(textbox)
        textbox.attr('id','textarea')
    $(this).replaceWith(textbox);
});
////////////////////reason for visit data save
// $("#saveVisitData").on('click',function(){

//     var data ={
//         "name": $("#visiter_name").val(),
//         "age": $("#visiter_age").val(),
//         "reason": $("#Visite_reason").val()
//     }
//     console.log(data);
// });
/////////////////////langChange

var langChange= localStorage.getItem('langChange');
        if(langChange == '1'){
            $("#langChange").attr('checked', true);
                ///Counter page
        $("#choiceText").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#choiceText1").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#navigation").text('पथ प्रदर्शन')
        $("#reasonTex").text('आने का कारण');
        $("#reasonTex").css('font-size','40px');
        $("#reasonTex").css('padding-top','18px');

        $("#speechTex").text('मुझसे बात करो');
        $("#speechTex").css('font-size','40px');
        $("#speechTex").css('padding-top','5%');

        $("#otherText1").text('ऐड-ऑन');
        $("#otherText1").css('font-size','40px');
        $("#otherText1").css('padding-top','6%');

        $("#otherText2").text('ऐड-ऑन')
        $("#otherText2").css('font-size','40px');
        $("#otherText2").css('padding-top','6%');

        $("#videoTex").text('प्रभारी को बुलाओ');
        $("#videoTex").css('font-size','40px');
        $("#videoTex").css('padding-top','6%');

        $("#navigatio").text('धारा');
        $("#navigatio").css('font-size','40px');
        $("#navigatio").css('padding-top','18px');
        //// navigation page
        $("#counte1").text('याचिका');
        $("#counte1").css('font-size','40px');
        $("#counte1").css('padding-top','6%');

        $("#counte2").text('DIG चैंबर');
        $("#counte2").css('font-size','40px');
        $("#counte2").css('padding-top','6%');

        $("#counte3").text('DIG प्रशासन अनुभाग');
        $("#counte3").css('font-size','40px');
        $("#counte3").css('padding-top','6%');

        $("#counte4").text('रिसेप्शन');
        $("#counte4").css('font-size','30px');
        $("#counte4").css('padding-top','8%');

        $("#counte5").text('ऐड ऑन');
        $("#counte5").css('font-size','40px');
        $("#counte5").css('padding-top','6%');

        $("#counte6").text('ऐड ऑन');
        $("#counte6").css('font-size','40px');
        $("#counte6").css('padding-top','6%');

        //////counter number session
        $("#counterNumnerText").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField").text('काउंटर 1');
       $("#counterNumnerText1").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField1").text('काउंटर 2');

       $("#counterNumnerText2").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField2").text('काउंटर 3');

       $("#counterNumnerText3").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField3").text('काउंटर 4');

       $("#counterNumnerText4").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField4").text('काउंटर 5');
       
       $("#counterNumnerText5").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField5").text('काउंटर 6');

       /////reasonForVisitingPage
       $("#othersChoise").text('अपनी पसंद के विकल्प पर टैप करें');
       $("#re_other1").text('अन्य लोग 1');
       $("#re_other2").text('अन्य लोग 2');
       $("#re_other3").text('अन्य लोग 3');
       $("#re_other4").text('अन्य लोग 4');
       $("#re_other5").text('अन्य लोग 5');
       $("#re_reason").text('कारण');
       //////visiter form page
       $("#visitHead").text('आने का कारण');
       $("#vName").text('नाम');
       $("#vAge").text('आयु');
       $("#vReason").text('आने का कारण');
       $("#saveVisitData").text('बचाना');
        
       ////speechPage page
       $("#talkToMe").text('मुझसे बात करो!!');
       $("#chatTextBtn").text('शुरू करने के लिए क्लिक करें');
        }else{
          
            $("#langChange").attr('checked', false);
             ///Counter page
             $("#choiceText").text('Tap on the Option of your Choice');
             $("#choiceText1").text('Tap on the Option of your Choice');
             $("#navigation").text('Navigation')
             $("#navigatio").text('Sections');
             $("#navigatio").css('font-size','22px');
             $("#navigatio").css('padding-top','38px');
    
             $("#reasonTex").text('Visiting  Reasons');
             $("#reasonTex").css('font-size','22px');
             $("#reasonTex").css('padding-top','38px');
    
             $("#speechTex").text('Chat With Me');
             $("#speechTex").css('font-size','22px');
             $("#speechTex").css('padding-top','38px');
    
             $("#otherText1").text('Addons');
             $("#otherText1").css('font-size','22px');
             $("#otherText1").css('padding-top','38px');
    
             $("#otherText2").text('Addons');
             $("#otherText2").css('font-size','22px');
             $("#otherText2").css('padding-top','38px');
    
             $("#videoTex").text('Call Incharge');
             $("#videoTex").css('font-size','22px');
             $("#videoTex").css('padding-top','38px');
         /////navigation page
         $("#counte1").text('Petition');
         $("#counte1").css('font-size','25px');
         $("#counte1").css('padding-top','35px');

         $("#counte2").text('DIG Chamber');
         $("#counte2").css('font-size','25px');
         $("#counte2").css('padding-top','35px');

         $("#counte3").text('DIG Admin section');
         $("#counte3").css('font-size','23px');
         $("#counte3").css('padding-top','35px');

         $("#counte4").text('Reception');
         $("#counte4").css('font-size','25px');
         $("#counte4").css('padding-top','35px');

         $("#counte5").text('Addon');
         $("#counte5").css('font-size','25px');
         $("#counte5").css('padding-top','35px');

         $("#counte6").text('Addon');
         $("#counte6").css('font-size','25px');
         $("#counte6").css('padding-top','35px');


                 //////counter number session
        $("#counterNumnerText").text('Please Proceed to Counter Number')
        $("#textField").text('Counter 1');
        
        $("#counterNumnerText1").text('Please Proceed to Counter Number')
        $("#textField1").text('Counter 2');

        $("#counterNumnerText2").text('Please Proceed to Counter Number')
        $("#textField2").text('Counter 3');

        $("#counterNumnerText3").text('Please Proceed to Counter Number')
        $("#textField3").text('Counter 4');

        $("#counterNumnerText4").text('Please Proceed to Counter Number')
        $("#textField4").text('Counter 5');

        $("#counterNumnerText5").text('Please Proceed to Counter Number')
        $("#textField5").text('Counter 6');

               /////reasonForVisitingPage
       $("#othersChoise").text('Tap on the Option of your Choice');
       $("#re_other1").text('others 1');
       $("#re_other2").text('others 2');
       $("#re_other3").text('others 3');
       $("#re_other4").text('others 4');
       $("#re_other5").text('others 5');
       $("#re_reason").text('Reason');

        //////visiter form page
        $("#visitHead").text('Reason For Visit');
        $("#vName").text('Name');
        $("#vAge").text('Age');
        $("#vReason").text('Reason For Visit');
        $("#saveVisitData").text('Save');

        ////others page
        $("#chatTextBtn").text('Click To Start');
        $("#talkToMe").text('Talk to me!!');

        }


$('#langChange').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('langChange','1');
        // alert("Checkbox is checked.");
        ///Counter page
        $("#choiceText").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#choiceText1").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#navigation").text('पथ प्रदर्शन')
        $("#reasonTex").text('आने का कारण');
        $("#reasonTex").css('font-size','40px');
        $("#reasonTex").css('padding-top','18px');

        $("#speechTex").text('मुझसे बात करो');
        $("#speechTex").css('font-size','40px');
        $("#speechTex").css('padding-top','5%');

        $("#otherText1").text('ऐड-ऑन');
        $("#otherText1").css('font-size','40px');
        $("#otherText1").css('padding-top','6%');

        $("#otherText2").text('ऐड-ऑन')
        $("#otherText2").css('font-size','40px');
        $("#otherText2").css('padding-top','6%');

        $("#videoTex").text('प्रभारी को बुलाओ');
        $("#videoTex").css('font-size','40px');
        $("#videoTex").css('padding-top','6%');

        $("#navigatio").text('धारा');
        $("#navigatio").css('font-size','40px');
        $("#navigatio").css('padding-top','18px');
        //// navigation page
        $("#counte1").text('याचिका');
        $("#counte1").css('font-size','40px');
        $("#counte1").css('padding-top','6%');

        $("#counte2").text('DIG चैंबर');
        $("#counte2").css('font-size','40px');
        $("#counte2").css('padding-top','6%');

        $("#counte3").text('DIG प्रशासन अनुभाग');
        $("#counte3").css('font-size','40px');
        $("#counte3").css('padding-top','6%');

        $("#counte4").text('रिसेप्शन');
        $("#counte4").css('font-size','30px');
        $("#counte4").css('padding-top','8%');

        $("#counte5").text('ऐड ऑन');
        $("#counte5").css('font-size','40px');
        $("#counte5").css('padding-top','6%');

        $("#counte6").text('ऐड ऑन');
        $("#counte6").css('font-size','40px');
        $("#counte6").css('padding-top','6%');

        //////counter number session
        $("#counterNumnerText").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField").text('काउंटर 1');
        $("#counterNumnerText1").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField1").text('काउंटर 2');
 
        $("#counterNumnerText2").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField2").text('काउंटर 3');
 
        $("#counterNumnerText3").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField3").text('काउंटर 4');
 
        $("#counterNumnerText4").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField4").text('काउंटर 5');
        
        $("#counterNumnerText5").text('कृपया काउंटर नंबर पर आगे बढ़ें')
        $("#textField5").text('काउंटर 6');

       /////reasonForVisitingPage
       $("#othersChoise").text('अपनी पसंद के विकल्प पर टैप करें');
       $("#re_other1").text('अन्य लोग 1');
       $("#re_other2").text('अन्य लोग 2');
       $("#re_other3").text('अन्य लोग 3');
       $("#re_other4").text('अन्य लोग 4');
       $("#re_other5").text('अन्य लोग 5');
       $("#re_reason").text('कारण');
       //////visiter form page
       $("#visitHead").text('आने का कारण');
       $("#vName").text('नाम');
       $("#vAge").text('आयु');
       $("#vReason").text('आने का कारण');
       $("#saveVisitData").text('बचाना');

       ////speechPage page
       $("#talkToMe").text('मुझसे बात करो!!');
       $("#chatTextBtn").text('शुरू करने के लिए क्लिक करें');
    } 
    else if($(this).prop("checked") == false){

        localStorage.removeItem('langChange');
        // alert("Checkbox is unchecked.");
         ///Counter page
         $("#choiceText").text('Tap on the Option of your Choice');
         $("#choiceText1").text('Tap on the Option of your Choice');
         $("#navigation").text('Navigation')
         $("#navigatio").text('Sections');
         $("#navigatio").css('font-size','22px');
         $("#navigatio").css('padding-top','38px');

         $("#reasonTex").text('Visiting  Reasons');
         $("#reasonTex").css('font-size','22px');
         $("#reasonTex").css('padding-top','38px');

         $("#speechTex").text('Chat With Me');
         $("#speechTex").css('font-size','22px');
         $("#speechTex").css('padding-top','38px');

         $("#otherText1").text('Addons');
         $("#otherText1").css('font-size','22px');
         $("#otherText1").css('padding-top','38px');

         $("#otherText2").text('Addons');
         $("#otherText2").css('font-size','22px');
         $("#otherText2").css('padding-top','38px');

         $("#videoTex").text('Call Incharge');
         $("#videoTex").css('font-size','22px');
         $("#videoTex").css('padding-top','38px');
         
         /////navigation page
         $("#counte1").text('Petition');
         $("#counte1").css('font-size','25px');
         $("#counte1").css('padding-top','35px');

         $("#counte2").text('DIG Chamber');
         $("#counte2").css('font-size','25px');
         $("#counte2").css('padding-top','35px');

         $("#counte3").text('DIG Admin section');
         $("#counte3").css('font-size','23px');
         $("#counte3").css('padding-top','35px');

         $("#counte4").text('Reception');
         $("#counte4").css('font-size','25px');
         $("#counte4").css('padding-top','35px');

         $("#counte5").text('Addon');
         $("#counte5").css('font-size','25px');
         $("#counte5").css('padding-top','35px');

         $("#counte6").text('Addon');
         $("#counte6").css('font-size','25px');
         $("#counte6").css('padding-top','35px');

                 //////counter number session
                 $("#counterNumnerText").text('Please Proceed to Counter Number')
                 $("#textField").text('Counter 1');
                 
                 $("#counterNumnerText1").text('Please Proceed to Counter Number')
                 $("#textField1").text('Counter 2');
         
                 $("#counterNumnerText2").text('Please Proceed to Counter Number')
                 $("#textField2").text('Counter 3');
         
                 $("#counterNumnerText3").text('Please Proceed to Counter Number')
                 $("#textField3").text('Counter 4');
         
                 $("#counterNumnerText4").text('Please Proceed to Counter Number')
                 $("#textField4").text('Counter 5');
         
                 $("#counterNumnerText5").text('Please Proceed to Counter Number')
                 $("#textField5").text('Counter 6');

               /////reasonForVisitingPage
       $("#othersChoise").text('Tap on the Option of your Choice');
       $("#re_other1").text('others 1');
       $("#re_other2").text('others 2');
       $("#re_other3").text('others 3');
       $("#re_other4").text('others 4');
       $("#re_other5").text('others 5');
       $("#re_reason").text('Reason');

        //////visiter form page
        $("#visitHead").text('Reason For Visit');
        $("#vName").text('Name');
        $("#vAge").text('Age');
        $("#vReason").text('Reason For Visit');
        $("#saveVisitData").text('Save');


        ////others page
        $("#chatTextBtn").text('Click To Start');
        $("#talkToMe").text('Talk to me!!')
}




});


///////////////////setting page enable/disable
var navPagedisbale= localStorage.getItem('navPagedisbale');
        if(navPagedisbale == '1'){
            $("#navPagedisbale").attr('checked', true);
            $("#choice_cash_withdrawal").removeAttr('onclick');
        }else{
            document.getElementById('choice_cash_withdrawal').setAttribute('onclick','navigation()')
            $("#navPagedisbale").attr('checked', false);
        }

$('#navPagedisbale').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('navPagedisbale','1');

        $("#choice_cash_withdrawal").removeAttr('onclick');
       
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('navPagedisbale');
        document.getElementById('choice_cash_withdrawal').setAttribute('onclick','navigation()')
       
    }
});

//////reasonForVisiting
var reasonPageDisable= localStorage.getItem('reasonPageDisable');
        if(reasonPageDisable == '1'){
            $("#reasonPageDisable").attr('checked', true);
            $("#choice_cash_deposit").removeAttr('onclick');
        }else{
            document.getElementById('choice_cash_deposit').setAttribute('onclick','reasonForVisiting()')
            $("#reasonPageDisable").attr('checked', false);
        }
$('#reasonPageDisable').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('reasonPageDisable','1');
        $("#choice_cash_deposit").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('reasonPageDisable');
        document.getElementById('choice_cash_deposit').setAttribute('onclick','reasonForVisiting()')
       
    }
});
///////////////////////////speech
var SpeechPageDisable= localStorage.getItem('SpeechPageDisable');
        if(SpeechPageDisable == '1'){
            $("#SpeechPageDisable").attr('checked', true);
            $("#choice_demat").removeAttr('onclick');
        }else{
            document.getElementById('choice_demat').setAttribute('onclick','speech()')
            $("#SpeechPageDisable").attr('checked', false);
        }
$('#SpeechPageDisable').click(function(){
 
    if($(this).prop("checked") == true){

        localStorage.setItem('SpeechPageDisable','1');
        $("#choice_demat").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('SpeechPageDisable');
        document.getElementById('choice_demat').setAttribute('onclick','speech()')
       
    }
});

///////////////////////videocall
var VideoCallPageDisable= localStorage.getItem('VideoCallPageDisable');
        if(VideoCallPageDisable == '1'){
            $("#VideoCallPageDisable").attr('checked', true);
            $("#choice_fixed_deposit").removeAttr('onclick');
        }else{
            document.getElementById('choice_fixed_deposit').setAttribute('onclick','videocall()')
            $("#VideoCallPageDisable").attr('checked', false);
        }
$('#VideoCallPageDisable').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('VideoCallPageDisable','1');
        $("#choice_fixed_deposit").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('VideoCallPageDisable');
        document.getElementById('choice_fixed_deposit').setAttribute('onclick','videocall()')
       
    }
});


///////////////settings
$(".settingsPageBackBtn").hide();
});


// Clock


///////for settings page 

function check_user(pageSettings){
    
    $('#settingsModalCenter').modal('hide');
    // $(".indexpageClass").removeAttr('id');
 if(pageSettings == 'welcome'){
    Stop();
    val =  $("#settingsPass").val();
    val1 = $("#settingsPassH").val();
    console.log(val1);
    if(val == ''){
      $(".valid").show();
  
     setTimeout(function(){$(".valid").hide(); },2000);
    }else{
      
    //   localStorage.setItem('settingsPassword',val);
    var userId = 1;
     firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var savedPassword = (snapshot.val() && snapshot.val().password) || 'Anonymous';
    console.log('saved password'+ ' '+ savedPassword);
    var enteredPassword =  $("#settingsPass").val();
   
    if(savedPassword == enteredPassword){

        $("#settingsPass").val('');
        $("#settingsPass").val('');
        $("#indexPage").hide();
        $("#settingsPage").show();
        $("#body").removeClass("modal-open");
        $(".modal-backdrop  ").addClass('modal');
        $("#message").hide();
       

    }else{
        $("#message").hide();
        $("#settingsPass").val('');
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Incorrect Password !',
            // footer: '<a href>Why do I have this issue?</a>'
          });
         
    }
    });
    
     
      //setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show() },2000);
    }
   
    /////////////for home page
    if(val1 == ''){
        $(".valid").show();
    
       setTimeout(function(){$(".valid").hide(); },2000);
      }else{
        
      //   localStorage.setItem('settingsPassword',val);
      var userId = 1;
       firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var savedPassword = (snapshot.val() && snapshot.val().password) || 'Anonymous';
      console.log('saved password'+ ' '+ savedPassword);
      var enteredPassword =  $("#settingsPassH").val();
      if(savedPassword == enteredPassword){
          $("#settingsPassH").val('');
          $("#settingsPassH").val('');
          $("#indexPage").hide();
          $("#settingsPage").show();
          $("#body").removeClass("modal-open");
          $(".modal-backdrop  ").addClass('modal');
          $("#messageH").hide();
        //   $(".homeSetBtn").hide();
          $("#counterPage").hide();
      }else{
          $("#messageH").hide();
        //   $(".homeSetBtn").hide();
          $("#settingsPassH").val('');
        //   $("#counterPage").hide();
          Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Incorrect Password !',
            });
      }
      });
      }

 }

  else if(pageSettings == 'counter'){
    val =  $("#settingsPass3").val();

    if(val == ''){
      $(".valid").show();
  
     setTimeout(function(){$(".valid").hide(); },2000);
    }else{
      
      localStorage.setItem('settingsPassword',val);
      $("#settingsPass3").val('');
      $("#settingsPass3").val('');
      $("#counterPage").hide();
      $("#settingsPage").show();
      $("#body").removeClass("modal-open");
      $(".modal-backdrop  ").addClass('modal');
      //setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show() },2000);
    }
 }

}

function Modalclose(i){
    if( i == '1'){
       
    }
      $("#settingsPass").val('');
      $("#settingsPass3").val('');
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

///////for next page 
function nextPage(nextPage){
  if(nextPage == "welcome"){
    // startTimer();
      $("#indexPage").hide();  
      $("#welcomePage").show();
      setTimeout(function(){ start();  $("#welcomePage").hide(); $(".settingsPageBackBtn1").hide();$(".settingsPageBackBtn").show(); $("#counterPage").show(); $("#settingsBtn3").show() },2000);
  }else if(nextPage == "speech"){
  
    start();
    $(".skype-chat").hide(); /////skype hide
      var speech_value = new ROSLIB.Message({
      data : 'false'
      });
      speech_state.publish(speech_value);
     $("#navigationPage").hide();
     $("#navigationHeader").hide();
      $("#speechPage").hide();
      $("#counterPage").show();
      $("#videoPage").hide();
      $("#reasonForVisitingPageHeader").hide();

     
      
  }else if(nextPage == "main"){
    start();

    $(".skype-chat").hide(); /////skype hide
      
     $("#navigationPage").hide();
     $("#navigationHeader").hide();
      $("#speechPage").hide();
      $("#counterPage").show();
      $("#videoPage").hide();
      $("#reasonForVisitingPageHeader").hide();

     
      
  }

  else if(nextPage == "counters"){

      $("#navigationPage").show();
  
      $("#navigationPage_counter1").hide();
      $("#navigationPage_counter2").hide();
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
      
  
 }else if(nextPage == "back_home"){
    

      console.log('backIon');
      Stop();
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
    //   $("#back_home_id").removeAttr('onclick');
 } else if(nextPage == "settings"){
    Reset();
    $("#settingsPage").hide();
    $("#counterPage").show();
    // $("#indexPage").show();
    // $(".homeSetBtn").show();
    $("#settingsModalCenter3").modal('hide')
    
} else if(nextPage == "settings1"){

    $("#settingsPage").hide();
    $("#indexPage").show();
    // $("#settingsBtn3").show()
    // $("#indexPage").show();
    $(".homeSetBtn").show();
    $("#settingsModalCenter3").modal('hide')
    
}
else if(nextPage == "reason"){

    $("#reasonForVisitingPage").hide();
    $("#counterPage").show();
}else if(nextPage == 'visterPage'){
    start();
    $("#others6Page").hide();
    $("#counterPage").show();
    //$("#reasonForVisitingPage").show();
   
}else if(nextPage == 'settings_nav'){

    $("#settings_navigation_Page").hide();
    $("#settingsPage").show();
    
   // $("#faceText").text('Take Snapshot');
    // $("#canvasId").remove();

   
}else if(nextPage == 'settings_nav_face'){

    $("#settings_navigation_Page").hide();
    $("#settingsPage").show();
   $("#faceText").text('Take Snapshot');
    $("#canvasId").remove();
    $("#face_recognition").hide();

   
}else if(nextPage == 'settings_nav_app_next'){
    
    $("#settings_navigation_Page").show();
    $("#settings_Nav_App_Page").hide();
    $("#settings_Nav_Joystick_Page").hide();
    $("#settings_Nav_Keyboard_Page").hide();
    
}
else if(nextPage == 'settings_nav_joystick_next'){
    var data_value = new ROSLIB.Message({
      data : 'false'
      });
      joystick_state.publish(data_value);
      // keyboard_state.publish(data_value);
    // $("#settings_navigation_Page").show();
     $("#settingsPage").show(); 
    $("#settings_Nav_App_Page").hide();
    $("#settings_Nav_Joystick_Page").hide();
    $("#settings_Nav_Keyboard_Page").hide();
    
}else if(nextPage == 'settings_nav_keyboard_next'){
    var data_value = new ROSLIB.Message({
      data : 'false'
      });
      // joystick_state.publish(data_value);
      keyboard_state.publish(data_value);
    $("#settings_navigation_Page").show();
    $("#settings_Nav_App_Page").hide();
    $("#settings_Nav_Joystick_Page").hide();
    $("#settings_Nav_Keyboard_Page").hide();
    
}

}

// navigation session all pages
function navigation(){
    $("#navigationHeader").show();
    $("#counterPage").hide();
    $("#navigationPage").show();
}
    function counter1(){
        $("#navigationPage_counter1").show(); 
        $("#navigationPage").hide();
    }
    function counter2(){
        $("#navigationPage_counter2").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage").hide();
    }  
    function counter3(){
        $("#navigationPage_counter3").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage").hide();
    }
    function counter4(){
        $("#navigationPage_counter4").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage").hide();
    }

    function counter5(){
        $("#navigationPage_counter5").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage").hide();
    }

    function counter6(){
        $("#navigationPage_counter6").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage_counter5").hide();
        $("#navigationPage").hide();
    }

//////////////end///////////
// speech

function speech(){
    Stop();
  var speech_value = new ROSLIB.Message({
      data : 'true'
  });
  speech_state.publish(speech_value);
    $("#counterPage").hide();
    $("#speechPage").show();
    $("#navigationPage").hide();
}
function speechChange(){
    Stop();
  var speech_value = new ROSLIB.Message({
      data : 'true'
  });
  speech_state.publish(speech_value);
    $("#counterPage").hide();
    $("#speechPage").show();
    $("#navigationPage").hide();
}


// videocall
function videocall(){
    Stop();
    $(".skype-chat").show(); //skype show
    $("#counterPage").hide();
    $("#videoPage").show();
    $("#navigationPage").hide();
   
}

//////////////reasonForVisiting
function reasonForVisiting(){
    Stop();
    $("#counterPage").hide();
    $("#others6Page").show();
    //$("#reasonForVisitingPage").show();
    //$("#reasonForVisitingPageHeader").show();
}

function others6(){

    //$("#reasonForVisitingPage").hide();
   
    $("#others6Page").show();
    // $("#jQKeyboardContainer").css('position','relactive');
    // $("#jQKeyboardContainer").css('bottom','0px');
   
}

function saveVisitData(){


}
/////////////   
//////settings page
 function changePass(){
   
}
function changePassW(){

    // var cngPass = $("#changePassText").val();
     // Write the new post's data simultaneously in the posts list and the user's post list.
     var postData = {
        password: $("#changePassTextVal").val()
       };
       var updates = {};
       var uid = 1;
       updates['/users/' + uid] = postData;
       firebase.database().ref().update(updates);
       $("#exampleModal1").modal('hide');
       $("#changePassTextVal").val('');
       $("#message1").hide();
       Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Successfully saved',
        showConfirmButton: false,
        timer: 1500
    });
}
function themeChange(){

}
function themechangeBtn(){
    $("#exampleModal2").modal('hide');
}
function toChnageTheme(t){ 
    localStorage.setItem('background_image',t);
  if( t == '1'){
    $(".background-image").css("background-image", "url('background-pattern4.png')");
    $(".background-options").css("background-image", "url('background-pattern4.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1.png')");
    $("#loader").css("border-top","16px solid #FF9800");
    // $("#radio6").attr('checked');
  }else if(t == '2'){
    localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern.png')");
    $(".background-options").css("background-image", "url('background-pattern.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4_blue1.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1_blue.png')");
    $("#loader").css("border-top","16px solid #03A9F4");
  }else if(t == '3'){
    localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern8.png')");
    $(".background-options").css("background-image", "url('background-pattern8.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4_green.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1_green.png')");
    $("#loader").css("border-top","16px solid #8BC34A");
  }else if(t == '4'){
    localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern6.png')");
    $(".background-options").css("background-image", "url('background-pattern6.png')");
    $(".hdfc-sprite").css("background-image", "url('hdfc-icons-sprite4.png')");
    $(".navigation").css("background-image", "url('hdfc-icons-sprite_enter1.png')");
    $("#loader").css("border-top","16px solid #E91E63");
  }


}

function toChangeNavigation(){

    $("#settingsPage").hide(); 
    $("#settings_navigation_Page").show();

}
function toChangeStatus(){

  var mes = new ROSLIB.Message({
      data : 'restart'
  });
    power.publish(mes);
    console.log("shuting down")

}
function toAddImage(){

    $("#settingsPage").hide();
    $("#face_recognition").show();
}
////power button
function Power_Off_On(){
    
    





}
function addNewUser(){
    var username = $("#username").val();
    var userDetails = $("#uerdetails").val();
    $("#newuser").text(username);
    var newUser ={
        "username": username,
        "userDetails": userDetails
    }
    localStorage.setItem('newUser', JSON.stringify(newUser));
    $("#adNewuserDect").modal('hide');
    $("#username").val('');
    $("#uerdetails").val('');

}

function inCounterBanigation1(){
   console.log('1 is clicked');
  Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });


  var request = new ROSLIB.ServiceRequest({
    counter_no : 1
  });
  // $(".counter1").hide();

  // document.getElementById("back_counter1").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);

      document.getElementById("test34").style.visibility = "visible";
      // $(".counter1").show();
      //document.getElementById("back_counter1").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation2(){

 console.log('2 is clicked');
Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 2
  });
    // $(".counter2").hide();
// document.getElementById("back_counter2").style.visibility = "hidden";
  document.getElementById("test35").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test35").style.visibility = "visible";
      //document.getElementById("back_counter2").style.visibility = "visible";
      // $(".counter2").show();
    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation3(){
  console.log('3 is clicked');
Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
  var request = new ROSLIB.ServiceRequest({

    counter_no : 3
  });
 // $(".counter3").hide();
//document.getElementById("back_counter3").style.visibility = "hidden";
  document.getElementById("test36").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test36").style.visibility = "visible";
      //document.getElementById("back_counter3").style.visibility = "visible";
      // $(".counter3").show();
    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });
}
function inCounterBanigation4(){
  console.log('4 is clicked');
Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 4
  });
     // $(".counter4").hide();
//document.getElementById("back_counter4").style.visibility = "hidden";
  document.getElementById("test37").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test37").style.visibility = "visible";
      //document.getElementById("back_counter4").style.visibility = "visible";
      // $(".counter4").show();
    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });
}
function inCounterBanigation5(){
  console.log('5 is clicked');
Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 5
  });
     // $(".counter5").hide();
//document.getElementById("back_counter5").style.visibility = "hidden";
  document.getElementById("test38").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test38").style.visibility = "visible";
      //document.getElementById("back_counter5").style.visibility = "visible";
       // $(".counter5").show();
    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation6(){
  console.log('6 is clicked');
Stop();
  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 6
  });
     // $(".counter6").hide();
//document.getElementById("back_counter6").style.visibility = "hidden";
  document.getElementById("test39").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test39").style.visibility = "visible";
      //document.getElementById("back_counter6").style.visibility = "visible";
       // $(".counter6").show();
    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
///////////////To English
function changeToEnglish(){
    document.getElementById('langChange').setAttribute('onchange','changeToHindi()');
    document.getElementById('choice_demat').setAttribute('onclick','speechChange()');
    console.log('To English');
}
///////////////To Hindi
function changeToHindi(){
    document.getElementById('langChange').setAttribute('onchange','changeToEnglish()');
    document.getElementById('choice_demat').setAttribute('onclick','speech()');
    console.log('To Hindi');
}
function autonomous(){

}
function app(){

    $("#settings_navigation_Page").hide();
    $("#settings_Nav_App_Page").show();
}
function joystick(){
    console.log('joystick')
  var data_value = new ROSLIB.Message({
      data : 'true'
  });
  joystick_state.publish(data_value);
    // $("#settings_navigation_Page").hide();
    $("#settings_Nav_Joystick_Page").show();

    $("#settingsPage").hide(); 
    // $("#settings_navigation_Page").show();
}
function keyboard(){
    $("#settings_navigation_Page").hide();
    $("#settings_Nav_Keyboard_Page").show();
}
/////////////////reason for visit others
function others1(){
    
}

/////power button
function powerOff(){
    $('#powerbtnModal').modal('hide');
     var mes = new ROSLIB.Message({
      data : 'shutdown'
  });
    power.publish(mes);
    console.log("shuting down")
}
////////////////settings page ends 

///////////////////////password keyboard js 
function showKeys(){
    document.getElementById("keypad").style.visibility = "visible";
}
function addCode(key){
    var code = $("#form1")[0].code;
    if(code.value.length < 4){
        code.value = code.value + key;
    }
    if(code.value.length == 4){
        document.getElementById("message").style.display = "block";
        // setTimeout(submitForm,1000);    
    }
}

function emptyCode(){
    $("#form1")[0].code.value = "";
    
}
function backLetters(){

  var passLetters = $("#settingsPass").val();
  var newPassLte = passLetters.substring(0, passLetters.length - 1);
  if(newPassLte == ''){
    $("#settingsPass").val(' ');
  }
//   console.log(newPassLte.length)
  $("#settingsPass").val(newPassLte)
}
function ClearPassLet(){
  $("#settingsPass").val('');
}

/////////////////reason for visit others
function others1(){
    
}

/////power button
function powerOff(){
    $('#powerbtnModal').modal('hide');
     var mes = new ROSLIB.Message({
      data : 'shutdown'
  });
    power.publish(mes);
    console.log("shuting down")
}
////////////////settings page ends 

///////////////////////password keyboard home page js 
function showKeys(){
    document.getElementById("keypad").style.visibility = "visible";
}
function addCodeH(key){
    var code = $("#form3")[0].code;
    if(code.value.length < 4){
        code.value = code.value + key;
    }
    if(code.value.length == 4){
        document.getElementById("messageH").style.display = "block";
        // setTimeout(submitForm,1000);    
    }
}

function emptyCode(){
    $("#form3")[0].code.value = "";
}
function backLettersH(){

  var passLetters = $("#settingsPassH").val();
  var newPassLte = passLetters.substring(0, passLetters.length - 1);
  if(newPassLte == ''){
    $("#settingsPassH").val(' ');
  }
//   console.log(newPassLte.length)
  $("#settingsPassH").val(newPassLte)
}
function ClearPassLetH(){
  $("#settingsPassH").val('');
}
///////////////////////password keyboard js  for update
function showKeysUp(){
    document.getElementById("keypad1").style.visibility = "visible";
}
function addCodeUp(key){
    var code1 = $("#form2")[0].code1;
    if(code1.value.length < 4){
        code1.value = code1.value + key;
    }
    if(code1.value.length == 4){
        document.getElementById("messageH").style.display = "block";
        // setTimeout(submitForm,1000);    
    }
}

function emptyCode(){
    $("#form1")[0].code.value = "";
    $("#form2")[0].code1.value = "";
    // $("#form3")[0].code1.value = "";
}
function backLettersUp(){

  var passLetters = $("#changePassTextVal").val();
  console.log(passLetters)
  var newPassLte = passLetters.substring(0, passLetters.length - 1);
  if(newPassLte == ''){
    $("#changePassTextVal").val(' ');
  }
//   console.log(newPassLte.length)
  $("#changePassTextVal").val(newPassLte)
}
function ClearPassLetUp(){
  $("#changePassTextVal").val('');
}

////////////////////all page  refresh
function allPageRefresh(){
    window.location.reload(true); 
}

function cameraFeed(){
      console.log('camera_refresh')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
}

////////////////////////face 
function addFace(){
    $("#canvasId").remove();
    $("#faceText").text('New Snapshot ')
}

function Addons1() {
    timesettings=  setInterval(CheckIdleTime, 100);
}

function Addons() {
    
    clearInterval(timesettings);
}
function letsStart() {
    
    $("#startingPage").hide();
    $("#loadingPage").show();
    setTimeout(function(){ ui_refresh.publish(str); $("#loadingPage").hide(); $("#indexPage").show();  },3000);
}


