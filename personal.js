$(document).ready(function (){
    $("#introHeader").fadeIn(2500);
    const viewPage = $("#viewPage");
    viewPage.fadeIn(3800);
    viewPage.on("click", function (){
        fadeInStart();
    });
    function fadeInStart(){
       $("#frontEndMain").css("display", "none");
        $("#me").fadeIn(1000);
    }
});