var g = {
	gifButtons: ['puppy','jump','crazy','yes','whatever','trip'],

    displayButtons: function(buttonsArray) {
		for (var i=0; i<buttonsArray.length; i++) {
			
			var newButt = "<button class='gifButt' id='" + buttonsArray[i] + "' text='" + buttonsArray[i] + "'/>";

			$("#gifsGoHere").append($(newButt)
							.text(buttonsArray[i])
							.on("click", function(){
								buttonClicked(this);
							})
							);					
		}
	},

	buttonClicked: function(buttonSelected){
		var buttName = $(buttonSelected).attr("id");
		
		if (g.gifButtons.indexOf(buttName) !== -1) {
    		existingButton(buttName);
  		}
 		else if (buttName === "Submit"){
    		addNewButton();
  		};
  	}



}; // end of object

$(document).ready(function(){
	g.displayButtons(g.gifButtons);
});

$("#ButtIsReady").on("click", function() {
	var userInput = $("#addButton").val().trim()
	g.gifButtons.push(userInput);
	console.log(g.gifButtons);
});