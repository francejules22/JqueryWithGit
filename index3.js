//JQUERY ANCESTORS TRAVERSING
//.parent() - use to call, add, remove or display the parent of the element tag
//.parents() - use to call, add, remove or display all the parents of the element tag
//.parentsUntil() -  you can manipulate or set to add , remove , call or display all the parents of the element tag
$(document).ready(function(){
    var recipe_box = $("#recipe_textbox");
    var add_btn = $("#add_btn");
    var cart = $(".cart");

    add_btn.on('click', function(){

    if(recipe_box.val().length > 0){
           //cart.append(recipe_box.val());
           cart.append(`<div>Item List <p>Recipe: ${recipe_box.val()} <button class="delete_btn">Delete</button></p></div>`);
           recipe_box.val('');
  
           $('.delete_btn').on('click', function(){
               // $(this).parent().parent().remove(); //chaining method - combine 
                  $(this).parentsUntil(".cart").remove();
          });

    } else {
        alert("Required");
    }

  });

});

//JQUERY DESCENDANTS TRAVERSING
//.children() - 
//.find() - find specific tag, class or id
//.first() - get the first element
//.last() -get the last element
//.eq() - specify the index of the element
//.filter() - similar with find 
//.not() - select all element except the tag, id or class declare in the parameter of .not()
$(document).ready(function(){
    var delete_list = $("#delete_list");

    delete_list.on('click', function(){
        //$("#check-list").children().css({"color" : "red"});
        //$("#check-list").find(".unique_item").css({"color" : "red" , "fontSize" : "32px"});
        //$("#check-list > ul > li").first().css({"color" : "red" , "fontSize" : "32px"});  //first li element will be modify
        //$("#check-list > ul > li").last().css({"color" : "red" , "fontSize" : "32px"});  //last li element will be modify
        //$("#check-list > ul > li").eq(4).css({"color" : "red" , "fontSize" : "32px"});  //count the element start to 0 will be modify
        //$("#check-list > ul > li").filter(".unique_item").css({"color" : "red" , "fontSize" : "32px"});  //count the element start to 0 will be modify
        $("#check-list > ul > li").not(".unique_item").css({"color" : "red" , "fontSize" : "32px"});  //select all elements except the tag,id or class inside the .not parameter
    });
});