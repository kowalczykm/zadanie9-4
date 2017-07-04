function drawTree(height) {
	var star;
	var bla;

	for (var i = 1; i <= height; i++) {
		star = '';
		bla = '';
		for (var j = height - 1; j >= i; j--) {
			star += ' ';
		}
		for (var k = 1; k <= i; k++) {
			bla += '**';
		}

		console.log(star, bla);
	}
}
drawTree(prompt('Wysokość:'));