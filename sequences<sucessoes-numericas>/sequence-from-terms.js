const getSequenceFromTerms = (terms) => {
	arrayOfTerms = terms.split(' ').map(x => Number(x))
	possibleRatio = arrayOfTerms.map((x, i) => {
		if (!arrayOfTerms[i+1])
			return 
		return [
			arrayOfTerms[i+1] / x,
			arrayOfTerms[i+1] - x 
		]
	}).filter(x => x)

	const getTheRatio = (possibleRatio) => {
		console.log(possibleRatio)
		const ratio = possibleRatio.map((x, i) => {
			if (!possibleRatio[i+1])
				return

			if (x[0] === possibleRatio[i + 1][0])
				return {
					ratio: x[0], 
					type: 'geo'
				}
			else if (x[1] === possibleRatio[i + 1][1])
				return {
					ratio: x[1], 
					type: 'ari'
				}
		}).filter(x => x)

		return ratio[0]
	}

	seq = getTheRatio(possibleRatio)

	if (seq.type === 'ari') {
		const j = arrayOfTerms[0] - seq.ratio
		const i = (j === 0) ? '' : j
		const isPositive = i >= 1
		sequence = `${seq.ratio}n ${isPositive ? '+ ' + i : i}`
	} else if (seq.type === 'geo'){
		sequence = `${arrayOfTerms[0]}*${seq.ratio}^(n-1)`	
	}
	console.log("Sequence:", sequence, "\n")
}

getSequenceFromTerms("6 9 12 15 18")
getSequenceFromTerms("-1 5 -9 13 -17 21 -25")
getSequenceFromTerms("3 6 12 24 48 96")