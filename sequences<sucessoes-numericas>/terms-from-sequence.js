const isPGorPAorNone = () => {
	let kind

	if (isPA)
		kind = "Progressao Artmetica"
	if (isPG)
                kind = "Progressao Geometrica"
	if (isNone)
                kind = "nem Progressao Artmetica, nem Progressao Geometrica"
	return kind

}

const calculateFiveFirstTerms = (sequence) => {
	sequence = sequence.replaceAll("1n", "n")
	console.log("Bn = " + sequence)
	for (let i = 1; i <= 5; i++) {
		console.log(
			`B${i} =`,
			(eval(sequence.replaceAll("n", `1*${i}`).replaceAll("^", "**")))
		)
	}
}

const calculateNFirstTerms = (sequence, n) => {
	sequence = sequence.replaceAll("1n", "n")
	console.log(`Bn = ${sequence}`)
	for (let i = 1; i <= n; i++) {
		console.log(
			`B${i} =`,
			sequence.replaceAll("n", `1*${i}`).replaceAll("*", "x"),
			"=",
			(eval(sequence.replaceAll("n", `*${i}`))).toFixed(2)
		)
	}
}

calculateFiveFirstTerms("3*2^(1n-1)")
