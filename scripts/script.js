const indexScriptJr = () => {
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

		colorStyle(){
			const red = 'rgba(255, 69, 69, 0.5)';
			const purple = 'rgba(128, 69, 255,0.5)';
			const green = 'rgba(54, 255, 70, 0.5)';
			const blue = 'rgba(0, 140, 255, 0.5)';
			const colorsArray = [red, purple, green, blue];
			const randomColor = Math.floor(Math.random() * colorsArray.length);
			let color = colorsArray[randomColor];
			return blue;
		}

			draw() {

				c.beginPath();
				c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
				c.fillStyle = this.color;
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
	const red = '#ba0000';
	const orange = '#ff4229';
	const blue = '#152a3f';
	const colorsArray = [red, orange, blue];

	for (var i = 0 - 1; i < 100; i++) {

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

}
indexScriptJr()