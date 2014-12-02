  function init() {
           var stage = new createjs.Stage("demoCanvas");  // variable causes whole code to run in 1 function fix when possible
		   
		   var circle = new createjs.Shape();
			circle.graphics.beginFill("red").drawCircle(0, 0, 50);
			circle.x = 250;
			circle.y = 250;
			stage.addChild(circle);
			
			var title = new createjs.Text("Epic Boss Fight", "80px Arial", "#ff7700"); 
			title.x = 200;
			title.y = 40;
			stage.addChild(title);
						
			var start = new createjs.Shape();
			start.graphics.beginFill("#ff0000").drawRect(450, 400, 200, 80);
			stage.addChild(start);

			 var helper = new createjs.ButtonHelper(start, "out", "over", "down", false, start, "hit");
				start.addEventListener("click", startGame);

			stage.update();

	function startGame(event) {
		stage.removeAllChildren();	// removes all menu items
		stage.update();
		renderLevel(0);
//	    nextLevel(3,0);
	}
	
	
	function renderLevel(level){
		
		if(level == 0){  // mario level

			
			
			var floor = new createjs.Shape();
			floor.graphics.beginFill("#ff0000").drawRect(0, 500, 1000, 100);
			stage.addChild(floor);
			
			
			var hero = new createjs.Shape();
			hero.graphics.beginFill("#AAA").drawRect(500, 400, 30, 100);
			stage.addChild(hero);
			
			
			
			createjs.Ticker.on("tick", tick);
			createjs.Ticker.setFPS(30);
			
			
			function tick(event) {
			hero.x = hero.x + 15;
			if(hero.x > 900) hero.x = -400;
			stage.update(event); // important!!
		}
			
			
			
			
			
		}
		
	}
			

     }			
/* 	function  nextLevel(var lives, var round) {
	alert("hi");
	} */
