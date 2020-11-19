$(document).ready(function (){
   $("#initial").on("click", function (){
       $(".heading").css("display", "flex");
   });

    $(".homeSection").on("click", function (){
        let currentText = $(this).text();
        let nextText = $(this).next().text();
        let prevText = $(this).prev().text();
        console.log("current text is: " + currentText);
        console.log("next text is: " + nextText);
        console.log("prev text is: " + prevText);
    });

});