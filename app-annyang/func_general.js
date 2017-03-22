$( document ).ready(function() {
    console.log( "So it starts..." );
});

function formSubmitAction() {
    
    dealWithRadioButtons();

    $( "#btnNinja" ).on( "click", "changeNinjaStatus()");

    return false;
}

function setCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) { dd='0'+dd } 
    if(mm<10) { mm='0'+mm } 
    var strToday = ''+mm+'/'+dd+'/'+yyyy;
    console.log(strToday);
    // $( "#datepicker" ).datepicker("setDate", strToday);
}

function changeNinjaStatus() {
    var ninjaStatus = $("#btnNinja").attr("isNinja");
    var newStatus = (ninjaStatus+1)%3 ; 
    $("#btnNinja").attr("isNinja",newStatus);
    if (newStatus==0){
        $("#btnNinja").text("Hell, yeah!");
    } else if (newStatus==1){
        $("#btnNinja").text("Definitely not!");
    } else {
        $("#btnNinja").text("Dunno, maybe..");
    }
    // console.log(newStatus);
}

function dealWithRadioButtons() {
    if(document.getElementById('sfoGenderMale').checked) {
    console.log('Male');
    }else if(document.getElementById('sfoGenderFemale').checked) {
    console.log('Female');
    }else if(document.getElementById('sfoGenderOther').checked) {
    console.log('Other');
    }
}

function chooseTheGender(gender){
    if (gender =="male"){
        $('#sfoGenderMale').prop('checked',true);
        $('#sfoGenderFemale').prop('checked',false);
        $('#sfoGenderOther').prop('checked',false);
    }  
    if (gender =="female"){
        $('#sfoGenderMale').prop('checked',false);
        $('#sfoGenderFemale').prop('checked',true);
        $('#sfoGenderOther').prop('checked',false);
    } 
    if ((gender =="other")||(gender =="others")){
        $('#sfoGenderMale').prop('checked',false);
        $('#sfoGenderFemale').prop('checked',false);
        $('#sfoGenderOther').prop('checked',true);
    } 
}

// JAVASCRIPT HELPER FuNCTIONS =======================================================

function getElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

function getElementsWithTagAndAttribute(tag,attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName(tag);
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

// JAVASCRIPT HELPER FuNCTIONS =======================================================