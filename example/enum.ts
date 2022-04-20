enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes: Shoes = Shoes.Nike;
console.log(myShoes); // '나이키'


// Enum 활용 사례
// 개선 전
function askQuestion(answer: string) {
	if (answer === 'yes')
		console.log('정답입니다.')
	if (answer === 'no')
		console.log('오답입니다.')
}

askQuestion('y');
askQuestion('yes');
askQuestion('YES');

// 개선 후
enum Answer {
	Yes,
	No
}

function askQuestion(answer: Answer) {
	if (answer === Answer.Yes)
		console.log('정답입니다.')
	if (answer === Answer.No)
		console.log('오답입니다.')
}

askQuestion('y'); // Error
askQuestion('yes'); // Error
askQuestion(Answer.Yes);