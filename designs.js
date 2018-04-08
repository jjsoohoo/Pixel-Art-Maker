// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width;
		
$('#submit').click(function() {
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid();
});
		

function makeGrid() {
	
	for (let i = 0; i < height; i++) {
		$('#pixelCanvas').append($('<tr></tr>'));
		
		for (let j = 0; j < width; j++) {
			$('tr').last().append($('<td></td>'));
		};
		
	};
	
};
