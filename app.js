var g = {
	gifButtons: ['run','pushup','hike','dance','yoga','plank','move'],

    displayButtons: function() {

    	$("#gifButtons").empty();

		for (var i=0; i<this.gifButtons.length; i++) {
			
			var newButt = "<button class='gifButt' id='" + this.gifButtons[i] + "' text='" + this.gifButtons[i] + "'/>";

			$("#gifButtons").append($(newButt)
							.text(this.gifButtons[i])
							.on("click", function(){
								g.existingButton(this.id);
							})
							);					
		}
	},

  	existingButton: function(buttName) {
  		console.log(buttName);
  		$("#gifsGoHere").empty();

  		var key = '&api_key=M9w9IawWBVc3z6eLiEnmJrVl3hDZWylk';
  		var limit = '&limit=10';
  		var rating = '&rating=pg';
  		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  						buttName +
  						rating +
  						key +
  						limit;

  		$.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {
			var results = response.data;
			console.log(queryURL)
        	console.log(results)

        	if (response.data.length === 0){
        		$("#gifsGoHere").append($("<p>").html("That's weird"));
        	}
        	else {
	        	for (var i = 0; i < results.length; i++) {
		        	
		        	var rating = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
		        	var aGif = "<img id='" + i + "' static='true' src='" + results[i].images.fixed_height_still.url + "'>"
		        

		        	$("#gifsGoHere").append(rating)
		        	$("#gifsGoHere").append(aGif)
		        };

		        $("img").on("click", function(){
			        var id = $(this).attr("id");

			        if ($(this).attr("static") === "true"){
			          $(this).attr("src", results[id].images.fixed_height.url);
			          $(this).attr("static", "false");
			        }
			        else {
			          $(this).attr("src", results[id].images.fixed_height_still.url);
			          $(this).attr("static", "true");
			        };
			    });
			};
        });
  	},




}; // end of object

$(document).ready(function(){
	g.displayButtons(g.gifButtons);


	$("#buttIsReady").on("click", function() {
		event.preventDefault();
		var userInput = $("#addButton").val().trim()
		if (userInput.length != 0) {
			console.log(userInput)
			g.gifButtons.push(userInput);
			console.log(g.gifButtons);
			g.displayButtons();
			$("#addButton").val(' ')
		};
	});

});
