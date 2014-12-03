var stage;
var stageBottom = 800;
var stageRight = 1200;
var keys = {};
var lives = 5; 
var scoreMultiplier = 5;
var roundNumber = 1;


	function init() {
			stage = new createjs.Stage("demoCanvas");  // variable causes whole code to run in 1 function fix when possible
			homeScreen();
	}

	function homeScreen(){
			
			stage.removeAllChildren();
						
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
		}

	function startGame() {
		
		var roundNumber = 1;
			stage.removeAllChildren();	// removes all menu items
			stage.update();
			var level = 0 // code for random number
			renderLevel(level);
			
			
	//	while(lives > 0){
			
			
			//  var result = renderLevel(level);  // preferred code
			//	roundResult(result,roundNumber);
/* 			if(result == false)
				lives--;
			else
				scoreMultiplier--; */
				
			// lives--; // game crashes without
//		}
	}


	function renderLevel(level) {
		if(level == 0){  // mario level
			var end = false;
			var won = false;
			
			var levelTime = 2;  // 5s to complete level
			var roundTime = scoreMultiplier * levelTime;
			var heroJump = false; // would ideally be an attribute of hero
		
			var floor = new createjs.Shape();
			floor.graphics.beginFill("#ff0000").drawRect(0, stageBottom-100, stageRight- 100, 100);
			stage.addChild(floor);
			
			var end = new createjs.Shape();
			floor.graphics.beginFill("#111").drawRect(stageRight-100, stageBottom-100, stageRight, 100);
			stage.addChild(end);
			
			var hero = new createjs.Shape();
			hero.graphics.beginFill("#AAA").drawRect(50, stageBottom-180, 30, 80);
			stage.addChild(hero);		
			
			var timeLeft = new createjs.Text(roundTime, "10px Arial", "#ff7700"); 
			timeLeft.x = 200;
			timeLeft.y = 40;
			stage.addChild(timeLeft);

			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
			
			createjs.Ticker.on("tick", tick);
			createjs.Ticker.setFPS(60);
					
		function tick(event) {
				
				var counter =  parseInt(this.getTime()/1000);
				console.log(counter);
				timeLeft.text = roundTime - counter;
				
				if(roundTime - counter<= 0){
					event.remove();
					roundNumber++;
					roundResult(false);
				//	return;  // leaves the level and reports result
				}
					
				else if(hero.x >= stageRight-100){
					event.remove();
					roundNumber++;
					roundResult(true); 
				//	 return;  // leaves the level and reports result
				} 
					
		
				if(heroJump == true){
					hero.y -= 8; // go up
					if(hero.y <= -200)
						heroJump = false;  // begin falling
				}
				else if(hero.y < 0 && heroJump == false){ // go down
					hero.y += 8;
				}
	
				if (keys[37]) hero.x -= 25;
				if (keys[38] && hero.y == floor.y) heroJump = true;
				if (keys[39]) hero.x += 25;
				
				stage.update(event);
			}
			
				
		}
	
		
	}


	function roundResult(result){
		console.log("round end");
		stage.removeAllChildren();
		
			var outcome = new createjs.Text( "", "80px Arial", "#ff7700"); 
			outcome.x = 200;
			outcome.y = 40;
			
			var currentRound = new createjs.Text(roundNumber, "80px Arial" , "#ff7700"); 
				currentRound.x = 200;
				currentRound.y = 340;
				
			stage.addChild(outcome);
			stage.addChild(currentRound);	
			stage.update();
			
		if(result == true){
		outcome.text = "you win";
		}	
		else if(result == false)
			outcome.text = "you loose";
			
		sleep(1500);	
		renderLevel(0);	
			
	}


	function keydown(event) {
			keys[event.keyCode] = true;
	}
	
	function keyup(event) {
			delete keys[event.keyCode];
	}
	
	function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}