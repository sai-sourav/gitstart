studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
}

function Averageage(){
    let sum = 0
    let count = 0
    Object.keys(this).forEach((key) => {
        sum = sum+studentobj[key]
        count++;
    })
    return sum/count
}

console.log(Averageage.call(studentobj));