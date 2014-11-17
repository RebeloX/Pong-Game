#pragma strict

static var PlayerScore01 : int = 0;
static var PlayerScore02 : int = 0;

var theSkin : GUISkin;

var theBall : Transform;

function Start()
{
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}

static function Score (wallName : String) 
{
	if(wallName == "rightWall")
	{
		PlayerScore01 += 1;	
	} else if(wallName == "leftWall"){
		PlayerScore02 += 1;
	}
}

function OnGUI ()
{
	GUI.skin = theSkin;

	GUI.Label (new Rect (Screen.width/2-150-18, 20, 100, 100), "" + PlayerScore01);
	GUI.Label (new Rect (Screen.width/2+150-18, 20, 100, 100), "" + PlayerScore02);

	if(GUI.Button ( new Rect(Screen.width/2-121/2,35,121,53), "RESET")) {
		PlayerScore01 = 0;
		PlayerScore02 = 0;
		
		theBall.gameObject.SendMessage("ResetBall");
	}
}