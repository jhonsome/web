function GenerateLogo() {
	const input1 = document.getElementById("input_1")
	const input2 = document.getElementById("input_2")
	const lside = document.getElementById("left_side")
	const rside = document.getElementById("right_side")
	
	lside.innerText = input1.value.trim()
	rside.innerText = input2.value.trim()
}
