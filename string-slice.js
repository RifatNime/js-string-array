const anthem = 'Amar Sonar Bangla Ami Tomay Vhalobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(words);
// console.log(withoutA);

//slice   length joto dibo tar ag porjonto die
const smallSlice = anthem.slice(5,13); //start,end
console.log(smallSlice);

//substr substring joto gula bola hobe thik toto gulai dibe
const anotherPart = anthem.substr(11,7);
// console.log(anotherPart);

//substring
const anotherAnotherPart = anthem.substring(11,15);
console.log(anotherAnotherPart);
//concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('Dhaka Kuril');
console.log(fullString);

//
const words2 = ['a','b','c','d'];
const allJoined = words2.join('www.');
// const allJoined = words2.join('');
console.log(allJoined);

const str= 'I love coding more than eating.';
const smallSlice2 = str.slice(2,6); //start,end
console.log(smallSlice2);