/**
 * Created with JetBrains WebStorm.
 * User: Chris
 * Date: 22/07/12
 * Time: 02:06
 * To change this template use File | Settings | File Templates.
 */

var player = {
    x: 20,
    y: 150,
    w: 20,
    h: 20,
    d: ""
}

var timer;

function startGame()
{
    timer = setInterval("redrawGameField()", 33);
}

function pauseGame()
{
    clearInterval(timer);
}

function endGame()
{
    clearInterval(timer);
}

function redrawGameField()
{
    var gf = document.getElementById("gamefield");
    var ctx = gf.getContext("2d");
    ctx.clearRect(0, 0, gf.width, gf.height);

	// Clear the game field.
    ctx.fillStyle = "rgba(255, 0, 0)";

    // Render the player.
    ctx.fillRect(player.x, player.y, player.w, player.h);
}

function hitTest()
{
    var gf = document.getElementById("gamefield");
	if ((player.x >= gf.width - player.w) || (player.x < 0))
    {
    	return true;
    }

    if ((player.y >= gf.height - player.h) || (player.y < 0))
    {
    	return true;
    }
    
    return false;
}

// Handle presses of the cursor keys to change the direction of the square.
window.onkeydown = function(event)
{
	var key = event.keyCode;
	var log = document.getElementById("log");
	log.innerHTML = "Key press = " + key;

    var playerSpeed = document.getElementById("playerSpeed");

    if (!hitTest() && !isNaN(parseInt(playerSpeed.value))) // Did we hit the boundary of the play field.
    {
		switch (key)
		{
			case 37: // Left
	            player.x -= parseInt(playerSpeed.value);
				break;
			case 38: // Up
	            player.y -= parseInt(playerSpeed.value);
				break;
			case 39: // Right
	            player.x += parseInt(playerSpeed.value);
				break;
			case 40: // Down
	            player.y += parseInt(playerSpeed.value);
				break;
		}
	}
}

window.onkeyup = function(event)
{
	
}
