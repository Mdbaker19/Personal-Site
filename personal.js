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
        $(this).prev().html($(this).first().html());
        $(this).html(prevText);
        $(this).next().html(currentText);
    });

    //4 functions for each shift possibility

    //object of possibilities






























    const cvs = document.getElementById("siteCanvas");
    const ctx = cvs.getContext("2d");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    let particleArr = [];
    let numOfParticles = 100;


    const mouse = {
        x: null,
        y: null
    }
    window.addEventListener("mousemove", function (evt){
        mouse.x = evt.x;
        mouse.y = evt.y;
    });
    function stopDrops(){
        mouse.x = undefined;
        mouse.y = undefined;
    }
    setInterval(stopDrops, 50);
    class Particle {
        constructor(x, y, size, c, weight) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.c = c;
            this.weight = weight;
        }
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.c;
            ctx.fill();
        }
        update(){
            this.size -= 0.1;
            if(this.size < 0){
                this.x = (mouse.x + (Math.random() * 20)-10);
                this.y = (mouse.y + (Math.random() * 20)-10);
                this.size = (Math.random() * 10) + 2;
                this.weight = (Math.random() * 10) + 2;
            }
            this.y += this.weight;
            this.weight += 0.2;

            if(this.y > cvs.height - this.size){
                this.weight *= -1;
            }
        }
    }
    function randomColor(){
        let output = "#";
        let chars = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for(let i = 0; i < 6; i++){
            let ran = Math.floor(Math.random()*15)+1;
            output+=chars[ran];
        }
        return output;
    }
    function init(){
        particleArr = [];
        for(let i = 0; i < numOfParticles; i++){
            let x = mouse.x;
            let y = mouse.y;
            let size = (Math.random() * 5) + 2;
            let c = randomColor();
            let weight = 1;
            particleArr.push(new Particle(x, y, size, c, weight));
        }
    }
    function animate(){
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for(let i = 0; i < particleArr.length; i++){
            particleArr[i].update();
            particleArr[i].draw();
        }
        requestAnimationFrame(animate);
    }
    init();
    animate();


});