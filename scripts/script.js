const indexScriptJr = () => {	
	const line1 = document.getElementById('line1');
	const line2 = document.getElementById('line2');
	const line3 = document.getElementById('line3');
	const nav = document.getElementById('mobile-nav');
	const title = document.getElementById('title');
	const burger = document.getElementById('burger')
	const canvas = document.getElementById('canvas');
	const c = canvas.getContext('2d');
	const innerWidth = window.innerWidth;
	const innerHeight = window.innerHeight;
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	class Circle {
		constructor(color, x, y, radius, dx, dy){
			this.color = color;
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.dx = dx;
			this.dy = dy;
		}

			draw() {

				c.beginPath();
				c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
				c.fillStyle = this.color;
				c.shadowBlur = 15;
				c.shadowColor = this.color;
				c.fill();
			} 

			update() {

				this.draw();

				if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
					this.dx = -this.dx;
				}

				if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
					this.dy = -this.dy;
				}

				this.x += this.dx;
				this.y += this.dy;
			}

		}
	

	circleArray = [];
	const red = '#ff3700';
	const orange = '#0055ff';
	const blue = '#fff';
	const colorsArray = [red, orange, blue];

	for (var i = 0 - 1; i < 50; i++) {

		let randomColor =Math.floor(Math.random() * colorsArray.length);
		let color = colorsArray[randomColor];
		let x = Math.random() * innerWidth;
		let y = Math.random() * innerHeight;
		let dx = Math.random() * 5;
		let dy = Math.random() * 5;
		let radius = Math.random() * 5;
		let push = circleArray.push(new Circle (color,x,y,radius,dx,dy))
	}

	const animate = () => {
		requestAnimationFrame(animate);
		c.clearRect(0,0,innerWidth,innerHeight);

		circleArray.forEach((circle)=>{
			circle.update();
		})

	}

	animate();

	burger.addEventListener('click', ()=>{
		if (nav.style.transform === 'translateX(0%)') {
			nav.style.transform = 'translateX(100%)';
			title.style.opacity = '1';	
			line1.style.margin = '5px 0 5px 0';
			line1.style.transform = 'rotate(0deg)';
			line2.style.display = 'block';
			line3.style.margin = '5px 0 5px 0';
			line3.style.transform = 'rotate(0deg)';
		} else {
			nav.style.transform = 'translateX(0%)';
			title.style.opacity = '0';
			line1.style.transform = 'rotate(45deg)';
			line1.style.margin = '0';
			line2.style.display = 'none';
			line3.style.transform = 'rotate(-45deg)';
			line3.style.margin = '0';
		}
	});

}
indexScriptJr()