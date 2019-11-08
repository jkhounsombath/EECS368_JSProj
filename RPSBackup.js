rows=cols=0;
pointX = pointY = 300;
window.onload=function(){
  board=document.getElementById("gameBoard");
  ctx= board.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(playGame, 100);
  rows = board.width / scale;
  cols = board.height / scale;
}

scale = 20;
xPos = yPos = 0;
xSpeed = scale;
ySpeed = 0;
tSize = 5;
tail = [];
function playGame()
{

  xPos += xSpeed;
  yPos += ySpeed

  if(xPos < 0)
  {
    tSize = 5;
    xPos = 0;
    yPos = 0;
  }
  if(xPos > board.width)
  {
    tSize = 5;
    xPos = 0;
    yPos = 0;
  }
  if(yPos > board.height)
  {
    tSize = 5;
    xPos = 0;
    yPos = 0;
  }
  if(yPos < 0)
  {
    tSize = 5;
    xPos = 0;
    yPos = 0;
  }
  ctx.clearRect(0, 0, board.width, board.height);

  ctx.fillStyle = "black";
  for(let i=0; i< tail.length; i++)
  {
    ctx.fillRect(tail[i].x, tail[i].y, scale, scale);
    if(tail[i].x == xPos && tail[i].y == yPos)
    {
      tSize = 5;
      xPos = 0;
      yPos = 0;
    }
  }

  tail.push({x:xPos, y:yPos});
  while(tail.length>tSize) {
    tail.shift();
  }

  ctx.fillStyle= "red";
  ctx.fillRect(pointX, pointY, scale, scale);

  if ((xPos == pointX) && (yPos == pointY))
  {
    tSize++;
    changePos();
  }
}

function changePos()
{
  pointX = (Math.floor(Math.random() * rows - 1) +1) * scale;
  pointY = (Math.floor(Math.random() * cols - 1) +1) * scale;
}

function keyPush(key)//input detection
{
  switch(key.keyCode)
  {
    case 37://left
      xSpeed= scale * -1;
      ySpeed= 0;
      break;
    case 38://down
      xSpeed= 0;
      ySpeed= -scale * 1;
      break;
    case 39://right
      xSpeed= scale * 1;
      ySpeed= 0;
      break;
    case 40://up
      xSpeed= 0;
      ySpeed= scale * 1;
      break;
  }
}

gameOver()
{

}
