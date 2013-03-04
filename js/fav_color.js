$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 

  	var faveColour = prompt ("Whats your fave colour?");

  if (faveColour == "yellow" || faveColour == "green" || faveColour == "blue" || faveColour ==  "red"){
  		$("body").css ('background-color', faveColour);

	} else {
  		$("h2").html("Sorry, We don't have that colour");
  }

	}
);