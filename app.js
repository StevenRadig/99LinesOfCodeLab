let friends = ['Hunter', 'Nathaniel', 'Leidigh', 'AJ', 'Zim'];

for(let friend of friends){
	console.group(`%c${friend.toUpperCase() + ':'}`, 'color: #f6d8ac;');
	for(let j=99; j>0; j--){
		if(j === 1){
			console.log(`%c${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`, 'color: #8ec3eb;');
		} else if(j === 2){
			console.log(`%c${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} line of code in the file`, 'color: #8ec3eb;');
		} else {
			console.log(`%c${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} lines of code in the file`, 'color: #8ec3eb;');
		}

	}
	console.groupEnd();
}