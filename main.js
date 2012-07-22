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
    d: "e"
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

    ctx.fillStyle = "rgba(255, 0, 0)";
    var playerSpeed = document.getElementById("playerSpeed");

    // Handle player direction
    if (player.x >= gf.width - player.w)
    {
        player.d = "w";
    }
    else if (player.x < 0)
    {
        player.d = "e";
    }

    // Increment x coordinate based on direction and speed.
    switch(player.d)
    {
        case "e":
            player.x += parseInt(playerSpeed.value);
            break;
        case "w":
            player.x -= parseInt(playerSpeed.value);
            break;
    }

    // Render the player.
    ctx.fillRect(player.x, player.y, player.w, player.h);
}
