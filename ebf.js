var stage;
var stageBottom = 800;
var stageRight = 1200;
var square;
var keys = {}; 
var time;
var heroJump = false; // would ideally be an atribute of hero

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
			floor.graphics.beginFill("#ff0000").drawRect(0, stageBottom-100, stageRight, 100);
			stage.addChild(floor);
			
			var hero = new createjs.Shape();
			hero.graphics.beginFill("#AAA").drawRect(100, stageBottom-180, 30, 80);
			stage.addChild(hero);		
			
			time=new Date();
			var title = new createjs.Text(time, "10px Arial", "#ff7700"); 
			title.x = 200;
			title.y = 40;
			stage.addChild(title);
			
			stage.update(event);
			
			createjs.Ticker.on("tick", tick);
			createjs.Ticker.setFPS(60);
			
			    this.document.onkeydown = keydown;
				this.document.onkeyup = keyup;
				
				
		function keydown(event) {
			keys[event.keyCode] = true;
		}
	
		function keyup(event) {
			delete keys[event.keyCode];
		}

	function tick(event) {

		if(heroJump == true){
		console.log("jumping");
			hero.y -= 8;
			if(hero.y <=  -200)
			heroJump = false;
		}
	
		if(hero.y < 0 && heroJump == false){
			console.log("going down");
			hero.y += 8;
		}
	
		if (keys[37]) hero.x -= 10;
		if (keys[38] && hero.y == floor.y) heroJump = true;
		if (keys[39]) hero.x += 10;
		if (keys[40]) init();
		stage.update(event);
	}
				
		}
		
	}
			

     }			
/* 	function  nextLevel(var lives, var round) {
	alert("hi");
	} */
