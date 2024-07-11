
//===========  task 1 ========================
$("#sidebar").hover(function(){
    // console.log("rnter");
    $("#sidebar").width("20%")
    
    $("ul").show();
},function(){
    // console.log("leave");
    $("#sidebar").width("2%");
    $("ul").hide();
})

$(".animate1").click(function(){
    $(".animate1 ul ").slideToggle("fast");
    // console.log("you click an1")
})
$(".animate2").click(function(){
    $(".animate2 ul ").fadeToggle("fast");
    
    // console.log("you click an2")
})
  ///          task 2   ///////////////
  $("#bttn").click(function(){
    $.get("http://jsonplaceholder.typicode.com/posts",function(data){
        // console.log(data)
        data.forEach(function(el){
            let divData=$("<div></div>")
            $(divData).addClass("");
            $(divData).html(`<h2>${el.title}<h1> <p>${el.body}</p>`);
            $(".contant").append(divData);
        });
       

    })
})