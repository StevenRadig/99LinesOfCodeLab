let friends = ['Hunter', 'Nathaniel', 'Leidigh', 'AJ', 'Zim'];

for(let i=0; i<friends.length; i++){
	console.log(`%c${friends[i].toUpperCase() + ':'}`, 'color: #f6d8ac;');
	for(let j=99; j>0; j--){
		if(j !== 1){
			console.log(`%c${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file`, 'color: #8ec3eb;');
		}else {
			console.log(`%c${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`, 'color: #8ec3eb;');
		}

	}
}