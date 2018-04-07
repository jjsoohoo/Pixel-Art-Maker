// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	var table, headLine;
	
	headLine = $('h2)[2];
	
	table = $('#pixelCanvas');
	table.append('<tr><td>Cell 1</td></tr>');
	
	headLine.on('click', function(event) {
		
	alert("fu");
	});
};
