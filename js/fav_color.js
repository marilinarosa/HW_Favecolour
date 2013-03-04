$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 

  	var faveColour = prompt ("Whats your fave colour?");

  if (faveColour == "yellow" || faveColour == "green" || faveColour == "blue" || faveColour ==  "red"){
  		$("body").css ('background-color', faveColour);

	} else {
  		$("body").css ('background-color', "white");
  		$("h2").html("We don't have that colour");
  }





	}
);