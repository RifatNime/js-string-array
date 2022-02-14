const numbers = [6,4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['Kabila','Josim','Anwar','Sakib','Deepjol','Razzak'];
const sortedFriends = friends.sort();
const reverseFriends = friends.reverse();
// console.log(sortedFriends);
console.log(reverseFriends);
const sortedReversedFriends = friends.sort().reverse();
//

//// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);