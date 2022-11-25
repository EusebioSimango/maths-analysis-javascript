const sucessao: string = "2n-1n"

const calculateFiveFirstTerms = (sucessao: string) => {
	[1, 2, 3, 4, 5].forEach(val => {
		console.log(eval(sucessao.replaceAll("n", `*${val}`)))
	})
}

const calculateNFirstTerms = (sucessao: string, n: number) => {
	for (let i = 1; i <= n; i++) {
		console.log(eval(sucessao.replaceAll("n", `*${i}`)))
	}
}

calculateNFirstTerms(sucessao, 10)