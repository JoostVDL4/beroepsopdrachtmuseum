let score = 0;
var output;

const xCoordinates = [100, 300 , 500];
const yCoordinates = [100, 300 , 500];
const radius = 80;

var canvas = new createjs.Stage("myCanvas");
output = new createjs.Text("score: 0", "14px Arial");
canvas.addChild(output);

function setupBoard(targetX, targetY) {
   
    if (targetX == 0 && targetY == 0) { 
        var color = "red";
    } else {
        var color = "blue";
    }
    
    var circle1 = new createjs.Shape();
    circle1.name=color;
    circle1.graphics.beginFill(color).drawCircle(0, 0, radius);
    circle1.x = xCoordinates[0];
    circle1.y= yCoordinates[0];
    circle1.on("click", function(evt)
    {
        if (evt.target.name == "red")
        {
           score += 10; 
           output.text = "score: " + score;
           canvas.update();
           run();
        }
        else{
            score -= 10; 
           output.text = "score: " + score;
           canvas.update();
        }
    })
    canvas.addChild(circle1);
       
    if (targetX == 0 && targetY == 1) { 
        var color = "red";
    } else {
        var color = "blue";
    }

    var circle2 = new createjs.Shape();
    circle2.name=color;
    circle2.graphics.beginFill(color).drawCircle(0, 0, radius);
    circle2.x = xCoordinates[0];
    circle2.y= yCoordinates[1];
    circle2.on("click", function(evt)
{
        if (evt.target.name == "red")
        {
            score += 10; 
            output.text = "score: " + score;
            canvas.update();
           run();
        }
        else{
            score -= 10; 
            output.text = "score: " + score;
            canvas.update();
        }
     
})
canvas.addChild(circle2);
if (targetX == 0 && targetY == 2) { 
    var color = "red";
} else {
    var color = "blue";
}


var circle3 = new createjs.Shape();
circle3.name=color;
circle3.graphics.beginFill(color).drawCircle(0, 0, radius);
circle3.x = xCoordinates[0];
circle3.y= yCoordinates[2];
circle3.on("click", function(evt)
{
    if (evt.target.name == "red")
    {
        score += 10; 
           output.text = "score: " + score;
           canvas.update();
        run();
    }
    else{
        score -= 10; 
        output.text = "score: " + score;
        canvas.update();
    }
})
canvas.addChild(circle3);

if (targetX == 1 && targetY == 0) { 
    var color = "red";
} else {
    var color = "blue";
}
        
var circle4 = new createjs.Shape();
circle4.name=color;
circle4.graphics.beginFill(color).drawCircle(0, 0, radius);
circle4.x = xCoordinates[1];
circle4.y= yCoordinates[0];
circle4.on("click", function(evt)
{
    if (evt.target.name == "red")
    {
        score += 10; 
        output.text = "score: " + score;
        canvas.update();
       run();
    }
    else{
        score -= 10; 
           output.text = "score: " + score;
           canvas.update();
    }
})
canvas.addChild(circle4);

if (targetX == 1 && targetY == 1) { 
    var color = "red";
} else {
    var color = "blue";
}
           
var circle5 = new createjs.Shape();
circle5.graphics.beginFill(color).drawCircle(0, 0, radius);
circle5.name=color;
circle5.x = xCoordinates[1];
circle5.y= yCoordinates[1];
circle5.on("click", function(evt)
{
    if (evt.target.name == "red")
    {
        score += 10; 
           output.text = "score: " + score;
           canvas.update();
        run();
    }
    else{
        score -= 10; 
        output.text = "score: " + score;
        canvas.update();
    }
})
canvas.addChild(circle5);

if (targetX == 1 && targetY == 2) { 
    var color = "red";
} else {
    var color = "blue";
}
           
var circle6 = new createjs.Shape();
circle6.graphics.beginFill(color).drawCircle(0, 0, radius);
circle6.name=color;
circle6.x = xCoordinates[1];
circle6.y= yCoordinates[2];
circle6.on("click", function(evt)
{
    if (evt.target.name == "red")
        {
            score += 10; 
            output.text = "score: " + score;
            canvas.update();
            run();
        }
        else{
            score -= 10; 
            output.text = "score: " + score;
            canvas.update();
        };
})
canvas.addChild(circle6);

if (targetX == 2 && targetY == 0) { 
    var color = "red";
} else {
    var color = "blue";
}
           
var circle7 = new createjs.Shape();
circle7.graphics.beginFill(color).drawCircle(0, 0, radius);
circle7.name=color;
circle7.x = xCoordinates[2];
circle7.y= yCoordinates[0];
circle7.on("click", function(evt)
{
    if (evt.target.name == "red")
        {
            score += 10; 
           output.text = "score: " + score;
           canvas.update();
            run();
        }
        else{
            score -= 10; 
           output.text = "score: " + score;
           canvas.update();
        }
})
canvas.addChild(circle7);

if (targetX == 2 && targetY == 1) { 
    var color = "red";
} else {
    var color = "blue";
}
        
var circle8 = new createjs.Shape();
circle8.graphics.beginFill(color).drawCircle(0, 0, radius);
circle8.name=color;
circle8.x = xCoordinates[2];
circle8.y= yCoordinates[1];
circle8.on("click", function(evt)
{
    if (evt.target.name == "red")
    {
        score += 10; 
           output.text = "score: " + score;
           canvas.update();
        run();
    }
    else{
        score -= 10; 
        output.text = "score: " + score;
        canvas.update();
    }
})
canvas.addChild(circle8);

if (targetX == 2 && targetY == 2) { 
    var color = "red";
} else {
    var color = "blue";
}

var circle9 = new createjs.Shape();
circle9.graphics.beginFill(color).drawCircle(0, 0, radius);
circle9.name=color;
circle9.x = xCoordinates[2];
circle9.y= yCoordinates[2];
circle9.on("click", function(evt)
{
    if (evt.target.name == "red")
    {
        score += 10; 
           output.text = "score: " + score;
           canvas.update();
        run();
    }
    else{
        score -= 10; 
        output.text = "score: " + score;
        canvas.update();
    }
})
canvas.addChild(circle9);
canvas.update(); 

}


function run(){

    
    const xPos = Math.floor(Math.random() * 3);
    const yPos = Math.floor(Math.random() * 3);
    

    setupBoard(xPos, yPos);

    
    
}




run()

