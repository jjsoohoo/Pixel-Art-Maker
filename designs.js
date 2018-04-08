// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').click(function(event) {  // when 'submit' button is clicked
	event.preventDefault();  // prevent form from sending data to server
	
	while ($('#pixelCanvas').children().length != 0) {  // if table is not empty...
		$('#pixelCanvas').empty();  // clear all child elements from table
	};
	
	const height = $('#inputHeight').val();  // use 'const' for global variable value
	const width = $('#inputWeight').val();
	
	makeGrid(height,width);  // call function with parameters
});
	
$('#clear').click(function() {  // when 'reset' button is clicked
	$('#pixelCanvas').empty();  // clear all child elements from table
	$('#inputHeight').val('1');  // reset input boxes to '1'
	$('#inputWeight').val('1');
});

function makeGrid(height,width) {
	
	for (let i = 0; i < height; i++) {
		$('#pixelCanvas').append($('<tr></tr>'));  // add specified number of rows
		
		for (let j = 0; j < width; j++) {
			$('tr').last().append($('<td>'+ i + ',' + j + '</td>'));  // add cells to the last row
		};
	};
};
