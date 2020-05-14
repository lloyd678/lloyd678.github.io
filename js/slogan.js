$(document).ready(function(){

  var fontSize = [];
  var mobileFontSize = [];

  if($('#topBorder').height() == 60){
    fontSize[0] ='150px';
    fontSize[1] ='130px';
    fontSize[2] ='80px';
  }
  else{
    fontSize[0] ='100px';
    fontSize[1] ='80px';
    fontSize[2] ='55px';
  }

  $(".generateButton").click(function(){

    message1 = $("#toplinemessage").val()
    $(".topline").html(message1);
    if(message1.length>10){
      $('.topline').css("font-size", fontSize[2]);
      $('.topline').css("line-height", fontSize[2]);
      $('.topline').css("letter-spacing", "-2px");

    }
    else if(message1.length>7){
      $('.topline').css("font-size", fontSize[1]);
      $('.topline').css("line-height", fontSize[1]);
      $('.topline').css("letter-spacing", "-3px");
    }
    else{
      $('.topline').css("font-size", fontSize[0]);
      $('.topline').css("line-height", fontSize[0]);
      $('.topline').css("letter-spacing", "-4px");
    }

    message2 = $("#middlelinemessage").val()
    $(".middleline").html(message2);
    if(message2.length>10){
      $('.middleline').css("font-size", fontSize[2]);
      $('.middleline').css("line-height", fontSize[2]);
      $('.middleline').css("letter-spacing", "-2px");
    }
    else if (message2.length>7){
      $('.middleline').css("font-size", fontSize[1]);
      $('.middleline').css("line-height", fontSize[1]);
      $('.middleline').css("letter-spacing", "-3px");
    }
    else{
      $('.middleline').css("font-size", fontSize[0]);
      $('.middleline').css("line-height", fontSize[0]);
      $('.middleline').css("letter-spacing", "-4px");
    }

    message3 = $("#bottomlinemessage").val()
    $(".bottomline").html(message3);
    if(message3.length>10){
      $('.bottomline').css("font-size", fontSize[2]);
      $('.bottomline').css("line-height", fontSize[2]);
      $('.bottomline').css("letter-spacing", "-2px");
    }
    else if(message3.length>7){
      $('.bottomline').css("font-size", fontSize[1]);
      $('.bottomline').css("line-height", fontSize[1]);
      $('.bottomline').css("letter-spacing", "-3px");
    }
    else{
      $('.bottomline').css("font-size", fontSize[0]);
      $('.bottomline').css("line-height", fontSize[0]);
      $('.bottomline').css("letter-spacing", "-4px");
    }
    gtag('event', "Button Click", {
      'event_category': "Generate",
      'event_label': "Generate"
    });
  });

  $(".saveButton").click(function(){
    $("#imgOut").html("");
    html2canvas(document.querySelector(".poster")).then(canvas => {
      document.getElementById('imgOut').appendChild(canvas)
      $(canvas).attr('id', 'savedCanvas');
      var filename = "coronaslogan" + parseInt(Math.random()*1000000);
      var theCanvas = document.getElementById('savedCanvas');
      saveAs(theCanvas.toDataURL(), filename);
      gtag('event', "Button Click", {
        'event_category': "Save",
        'event_label': "Save"
      });
    });
  });



});


function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}
