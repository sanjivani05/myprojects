// Checkpoint 1 | Creating the queen object
var Queen = {
    "direction" :"south"
    "whereabout" : []
    "position" : 
    {
    "x" : 4
    "y": 0
  };
  };
  
  var userinput ="";
  function ChangeDirection(steps,direction)
  {
    return 
  
    switch(direction )
           {
           case "North":
           Queen.position.x=Queen.position.x+steps;
           console.log("Queen direction North");
           break;
           case "South":
           console.log("Queen direction South");
           Queen.position.x=Queen.position.x+steps;
           break;
           case "East":
           console.log("Queen direction East");
           Queen.position.x=Queen.position.x+steps;
           break;
          case "West":
           console.log("Queen direction west");
           Queen.position.x=Queen.position.x+steps;
           break;
           
           case "NorthEast":
           console.log("Queen direction NorthEast");
           Queen.position.x=Queen.position.x+steps;
           break;
           case "Northwest":
           console.log("Queen direction Northwest");
           Queen.position.x=Queen.position.x+steps;
           break;
          case "SouthEast":
          Queen.position.x=Queen.position.x+steps;
           console.log("Queen direction SouthEast");
           break;
           case "SouthWest":
           Queen.position.x=Queen.position.x+steps;
           console.log("Queen direction Southwest");
           break;
           }
  }
  // Checkpoint 3 | Moving the queen
  ChangeDirection(userinput);
  // Checkpoint 4 | Jump move the queen
  function JumpMoveDirection(numberofsteps)
  {
   return numberofstep; 
  }
  JumpMoveDirection(2);