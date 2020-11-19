$(document).ready(function (){
   $("#initial").on("click", function (){
       $(".heading").css("display", "flex");
   });

   $(".homeGroup").on("click", function (i, e){
       $(e).forEach((item) => {
           console.log(item.text());
       })
   });

});