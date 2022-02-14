function addNumbers(num1, num2){
    let result = 0;
    // console.log(arguments);
    // console.log(arguments[1]);
    for(const num of arguments){

       result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const result = addNumbers(23, 13, 50, 100,420);
console.log(result);

//string add
function getFullName(firstName, lastName){
    let fullName = "";
    for (const part of arguments){
        fullName = fullName + part + ' ';

    }
    return fullName;
}
const name = getFullName('omuk', 'tomuk' , 'bin','kader','jilani');
console.log(name);