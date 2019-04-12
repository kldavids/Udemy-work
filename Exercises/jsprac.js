//------------------------------------------------------------------------
checkSpeed(70);

function checkSpeed(carSpeed){
	const speedLimit = 70;
	const kmPerPoint = 5;

	overLimit = carSpeed - speedLimit;
	if (carSpeed < speedLimit + kmPerPoint) return 'Speed Ok';
	else {
		const ptsEarned =Math.floor((carSpeed-speedLimit)/ kmPerPoint);
		if (ptsEarned >= 12) 
			console.log("License is suspended");
		else
			console.log("total points earned", ptsEarned);
	}
}

//-----------------------------------------------------------------------

showNumbers(10);

function showNumbers(limit) {
	for (let i = 0; i <= limit; i++){
		// if (i % 2 !== 0)
		// 	console.log("number is ODD", i);
		// else 
		// 	console.log("number is EVEN", i);

		const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
			console.log(i, message);
	}
}

//--------------------------------------------------------------------------

function sum(limit){
	let total =0;
	for (let i=0; i<= limit; i++) {
		if (i % 3 === 0 || i % 5 === 0)
			console.log(i);
			total += i;
	}
	console.log(total);
}
sum(20);

//----------------------------------------------------------------------------
