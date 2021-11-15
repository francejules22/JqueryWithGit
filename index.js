//JQUERY SYNCHRONOUS and ASYNCHRONOUS
// create a txt file first for example sample.txt
// then try to open network in console 
//.load() - specify the path of the file name or txt file
$(document).ready(function(){
    $("#load_btn").on('click',function(){
         //$("#main-container").load('sample.txt');
         //$("#main-container").load('sample.txt #data') //you can load the data by adding p tag in sample txt with id="data"

//JQUERY GET 
//.get()
//.each() - is a loop just like forEach
        $.get("https://www.pinoyfreecoder.com/api/users", function(data, status){
             data.forEach(element => {
                  $("#main-container").append(`<p>${element.first_name}</p>`);
             });
        });
    });
});



//JQUERY POST
//.blur - will be selected when the mouse is out in input
//.focus - will be selected when the mouse is inside in input
var fname = $("#fname");
var lname = $("#lname");
var form = $("#form");

$(document).ready(function(){
    form.on('submit', function(e){
        e.preventDefault(); //to prevent the event from being refresh cancel the event by using preventDefault()
        //console.log("This was submitted");
        $.ajax({
           type: 'POST',  //either POST or GET
           url: 'process.php',   //name of the php file 
           data: {firstname : fname.val() , lastname : lname.val()}, //the data will be pass in the process.php or in url
           success: function(response){   //add response as a parameter to know what is the response of database or server
                var data = JSON.parse(response);
                $("#main-container").append(`<p>${data.firstname} ${data.lastname}</p>`)
           }
        });
    });
});