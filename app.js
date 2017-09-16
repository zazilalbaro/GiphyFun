var gifButtons = ['puppy','crazy','runner','whatever','trip']

var displayButtons() {
	for (var i=0; i<gifButtons.length; i++) {
		$("#gifsGoHere").append("<input type="submit" class="gifButt"/>").attr(value=i);
	}
}

$("#ButtIsReady").on("click", function() {
	var userInput = $("#addButton").val().trim()
	gifButtons.push(userInput);
	console.log(window.gifButtons);
})