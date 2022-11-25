const sucessao: string = "2n-1"

const calculateFiveFirstTerms = (sucessao: string) => {
	[1, 2, 3, 4, 5].forEach(val => {
		console.log(eval(sucessao.replace("n", `*${val}`)))
	})
}


calculateFiveFirstTerms(sucessao)