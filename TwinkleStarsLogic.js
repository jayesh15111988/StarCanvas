	$(document).ready(function() {
	    var can = document.getElementById("starsCanvas");
	    var numberOfStars = 200;

	    if (can.width < window.innerWidth) {
	        can.width = window.innerWidth;

	    }
	    if (can.height < window.innerHeight) {
	        can.height = window.innerHeight;
	    }

	    var ctx = can.getContext("2d");

	    var x = 100,
	        y = 100;

	    function draw() {
	        ctx.globalCompositeOperation = "source-over";
	        ctx.fillStyle = "rgba(0,0,0,0.3)";
	        ctx.fillRect(0, 0, can.width, can.height);
	        ctx.globalCompositeOperation = "lighter";

	        ctx.fillStyle = 'white';

	        ctx.save();
	        ctx.beginPath();
	        ctx.arc(can.width - 70, 40, 30, 0, 2 * Math.PI);
	        ctx.clip();
	        ctx.fillRect(can.width - 100, 10, 60, 60);
	        ctx.restore();

	        for (var i = 0; i < particle.length; i++) {
	            var part = particle[i];
	            ctx.beginPath();
	            var grad = ctx.createRadialGradient(part.x, part.y, 0, part.x, part.y, 20);

	            grad.addColorStop(0, "white");
	            grad.addColorStop(1, part.color);

	            ctx.fillStyle = grad;
	            ctx.arc(part.x, part.y, part.radius, 0, 2 * Math.PI, false);
	            part.x += 0.5;
	            if (part.x > can.width) {
	                part.x = can.width - part.x;

	            }

	            ctx.closePath();
	            ctx.fill();

	            part.radius += Math.random(20);
	            if (part.radius > Math.random(25, 30)) {
	                part.radius = Math.random(20, 25);
	            }

	        }
	    }

	    function getRandomColor() {
	        return (Math.random() * 255 >> 0);
	    }

	    function getRandomX() {
	        return Math.random() * can.width;
	    }

	    function getRandomY() {
	        return Math.random() * can.height;

	    }

	    function ranpoint() {
	        this.x = getRandomX();
	        this.y = getRandomY();
	        this.original = this.x;
	        var r = getRandomColor();
	        var g = getRandomColor();
	        var b = getRandomColor();

	        this.color = "rgba(22,34,211,1)";
	        this.radius = Math.random() * 5;

	    }

	    var particle = [];
	    for (var i = 0; i < numberOfStars; i++) {

	        particle.push(new ranpoint());

	    }
	    setInterval(draw, 33);

	});