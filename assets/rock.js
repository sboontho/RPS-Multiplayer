

function playWith(userOption){
   // first, we deselect the previous selected element (if exist)
   if (userOption != undefined)
   {
      userSelectionElement = document.getElementById(userOption);
      // we remove the purple border (if exist)
      userSelectionElement.style.border = "5px #F8F8F8  solid";
   }	 		
   // then, we select the user option and we add 
   // a purple border
   console.log(userOption);
   option = userOption;
   userSelectionElement = document.getElementById(option);
   userSelectionElement.style.border = "5px #990066 solid";
}

function playGame(){
	var userSelection = option;
    var computerOption = Math.random();
 if (computerOption <0.34){
     computerOption = "stone";
 }else if(computerOption <=0.67){
     computerOption = "paper";
 }else{
     computerOption = "scissor";
 }
 
 resultMessage = compare(userSelection, computerOption);
 
 document.getElementById("result").innerHTML = 
 "<p>User select: " + userSelection + " - Computer select:" 
 + computerOption + "</p> <p>" + resultMessage + "</p>";
 
}

function compare(userSelection, computerSelection)
		{
			if(userSelection == undefined)
			{
				return "Please, select an option before play"
			}	

		    if (userSelection == computerSelection)
		    {
		       return "It is a draw!";
		    }
		    
		    if (userSelection == "stone")
		    {
		        if (computerSelection == "scissor")
		        {
		             return "You win.";
		        } else {
		            return "The computer win. Try again.";
		        }
		        
		    } else if (userSelection == "paper") {
		        
		        if (computerSelection == "stone")
		        {
		             return "You win." ;
		        } else if("scissor") {
		            return "The computer win. Try again." ;
		        }
		        
		    } else if (userSelection == "scissor") {
		      
		        if (computerSelection == "stone")
		        {
		            return "The computer win. Try again.";
		        }else{
		            return "You win.";
		        }
		    }
        }  
        