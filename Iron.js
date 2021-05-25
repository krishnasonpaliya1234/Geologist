class Iron{
	constructor(x,y){
		var options={
			'restitition':0.8,
			'friction':3,
			'dencity':30
		}
		this.body=Bodies.rectangle(x,y,50,50, options)
        this.weidth=80;
        this.height=50;

		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;
            var angle =this.body.angle;		
			push()
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER);
            fill("brown");
            rect(0,0,this.weidth,this.height);
			pop();
	}

}