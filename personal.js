$(document).ready(function (){
   $("#initial").on("click", function (){
       $(".heading").css("display", "flex");
       $("#toHideOnClick").css("display", "none");
   });


































    const cvs = document.getElementById("siteCanvas");
    const ctx = cvs.getContext("2d");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    let particleArr = [];
    let numOfParticles = 10;


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
    function init(){
        particleArr = [];
        for(let i = 0; i < numOfParticles; i++){
            let x = mouse.x;
            let y = mouse.y;
            let size = (Math.random() * 5) + 2;
            let c = "#E5E7E6";
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