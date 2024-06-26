function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let S1 = s1.toLowerCase()
	let S2 = s2.toLowerCase()
	let flag = false
	for (let i = 0; i < S2.length; i++) {
		for (let j = 0; j < S1.length; j++) {
			if (S2[i]==S1[j] && S2[i+1]==S1[j+1]) {
				return j
				flag = true
				break
			}
		}
	}
	if(flag == false){
		return -1
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
