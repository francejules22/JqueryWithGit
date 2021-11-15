//SELECTING ELEMENTS
var header1 = $("#header1");
// console.log(header1);
// var header2 = $("#header2");
// console.log(header2);
// var listItem = $(".list");
// console.log(listItem)


//JQUERY EVENTS
//.click() - when clicking the button or any elements the click elements will be function
//.ready() - is just like onload
//.on() - you can set any parameter for example $("#form").on('click',#btn,function(){    }) 
          //and also you can put two parameter only for example $("#form").on('click',function() { })

//JQUERY EFFECTS
//.hide() - the header1 will be hidden in edge
//.show() - the header1 will be show in edge
//.fadeIn() - the header1 will be fadeIn or show with animation in edge 
//.fadeOut() - the header1 will be fadeOut or hidden with animation  in edge
//.fadeToggle() - the header1 will be fadeIn and fadeOut in one button only in edge
//.slideDown() - the header1 will be slideDown in edge
//.slideUp() -  the header1 will be slideUp in edge
//.slideToggle() - the header1 will be slideDown and slideUp in edge

//JQUERY ANIMATE
//.animate() - use to animate you can insert objects {} inside the parameter () and also you can animate using css styles
// $(document).ready(function(){
//     $("#btn-hide").click(function(){
//         //header1.hide();
//         //header1.fadeOut();
//         //header1.fadeToggle();
//         //header1.slideUp();
//         //header1.slideToggle();
//           header1.animate({
//              fontSize: '52px',
//              letterSpacing: '32px'
//           })
//     })

//     $("#btn-show").click(function(){
//         //header1.show();
//         //header1.fadeIn(3000); //the 3000 in parameter is a seconds use to fadeIn
//         //header1.slideDown();
//          header1.animate({
//             fontSize: '32px'
//          })
//     })
// })



//JQUERY SET and GET
//.text - you can add text only
//.html - you can add tag or element
// var input = $("#name");

// $("#btn").on('click',function(){
//    //header1.text("Hello from France!"); // Hello from France!
//    //header1.html("<i>Hello from France!</i>"); 
//    //console.log(header1.text());  //France Jules
//      var h1 = header1.text();
//      $("#name").val(h1);
// })

//ANOTHER SAMPLE OF SET and GET
// $("#select1").on('change',function(){
//     var select_value = this.value;

//     if(select_value == "option1"){
//         $("#select2").html(` 
//               <option value="option4">option4</option>
//               <option value="option5">option5</option>
//               <option value="option6">option6></option>
//         `)
//     }

// })


//JQUERY ADD and REMOVE
//.append() - use to add tag element below
//.prepend() - use to add tag element above 
//.after() - use to add tag element after
//.before() - use to add tag element before 
//.remove() - use to remove all tag element 
//.hide() - use to hide all tag element
//.show() - use to show the tag element but if the element is remove you did'nt and if you use hide you can show again
//.empty - use to empty all tag element

// $(document).ready(function(){
//     $("#add_list").on('click',function(){
//           $("#lists").append(`
//                  <li>List Item</li>
//           `)

//         // $("#lists").prepend(`
//         //          <li>List Item</li>
//         //   `)

//         // header1.after("Hello World");
//         //  header1.before("Hello World");
//      })

//      $("#show_list").on('click',function(){
//         $("#lists").show();
//      })

//      $("#remove_list").on('click',function(){
//          // $("#lists").remove();
//           //$("li").remove("#lists_remove, .list_class")   //you can remove by adding the id and class in parameter
//            $("#lists").empty();
//      })

//      $("#hide_list").on('click',function(){
//         $("#lists").hide();
//      })


// })


//JQUERY CSS STYLES
 $(document).ready(function(){
    $("#css_btn").on('click',function(){
        // $("#header1").css("color", "red").animate({fontSize: "30px",  letterSpacing: '30px'});

//JQUERY CSS (AddClass and Remove Class)
//.addClass - use to add the class that came in style.css
//.removeClass - use to remove the class
//.toggleClass - use to toggle the class and add the class name into the class (inspect element to check if the classname is added to the class)
//.hasClass - use to return true or false 
    // $("#header1").removeClass("green-text")
    // $("#header1").addClass("red-text")
       $("#header1").toggleClass("red-text")
    // $("#header1").hasClass("red-text")
    })
 })
