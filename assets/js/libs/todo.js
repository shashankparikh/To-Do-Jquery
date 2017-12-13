//check off or cut specific li by clicking

//$('li').click(function(){
  //  $(this).css("color","gray");
    //$(this).css("text-decoration","line-through");
//})

//or can be done by this 
/*$('li').click(function(){
    //if li is gray
    if($(this).css("color")==="rgb(128,128,128)")
        {
            //turn it black
           $(this).css(
               {color:"black",
                textDecoration:"none"
                });
        }
    else{
        //turn it gray
    $(this).css(
        {color:"gray",
         textDecoration:"line-through"
                });
    }
})*/

//or by this one line code
// on will also grab the dynamic li that is created which is the main difference between click and on.
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
    //it will remove parent as well as child element i.e li & span respectively
    //here this is of span
    $(this).parent().fadeOut(500,function(){
        //here this is li because parent is called.
        $(this).remove();
    });
    //it will stop the working of parent properties which v might have done.
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13)
        {
            // this.val will fetch the value of input box
            console.log($(this).val())
            //grabbing new todo text from input
            var todoText = $(this).val();
            //to empty the box
            $(this).val("");
            //create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText+ "</li>")
        }
})


$(".fa-pencil").click(function(){
    $("input[type='text']").fadeToggle()
})

