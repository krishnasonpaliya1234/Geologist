class Stone{
	constructor(x,y){
		var options={
			'restitition':0.8,
			'friction':0.9,
			'dencity':12
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
            stroke("black")
            fill("black");
            rect(0,0,this.weidth,this.height);
			pop();
	}
}