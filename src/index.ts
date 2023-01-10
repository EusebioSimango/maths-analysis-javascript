export const calculateFiveFirstTerms = (sucessao: string) => {
	console.log("Bn = " + sucessao.replaceAll("1n", "n"))
	for (let i = 1; i <= 5; i++) {
		console.log(
			`B${i} =`,
			(eval(sucessao.replaceAll("n", `*${i}`))).toFixed(2)
		)
	}
}

export const calculateNFirstTerms = (sucessao: string, n: number) => {
	console.log(`Bn = ${sucessao.replaceAll("1n", "n")}`)
	for (let i = 1; i <= n; i++) {
		console.log(
			`B${i} =`,
			sucessao.replaceAll("n", `*${i}`).replaceAll("*", "x"),
			"=",
			(eval(sucessao.replaceAll("n", `*${i}`))).toFixed(2)
		)
	}
}


