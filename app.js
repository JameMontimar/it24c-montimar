//a. Data types
//String:
let motor = "rusi";
let color="black";

let cash = "60 000";
let utang ="80 000";

//Booleans:
let x = true;
let y = false;

//Object:
const honda = {dakop:"RTA", manakop:"LTO"};
const scooter =["beat","mio","click"];




//b. Arithmetic and Logical Operators
//Addition
let add = 1 + 18;
//Substraction
let sub = 6 - 25;
//Multiplication
let mul = 19 * 1;
//Exponetiation
let exp = 8 ** 4;
//Modulu
let mod = 12 % 3;
//Increment
x++;
//Decrement
y--;
//c. Conditional Statements
//if else
let number = 50;
if(number <= 49){
    coni = "point god";
}else{
    coni="dili mamasa";
}
console.log(coni);
//d. loops
//for
for(let b = 0;b < 5; b++){
    console.log(b);
}
//e.Functional Programming
//i.Odd or even
let o = 0;
while(o < 6){
    o++;
    let l = o % 2;
    switch (l){
        case 0:
            ows="Even"
            break;
            case 1:
                ows = "Odd"
                break;
                default:
                    ows = "No Value"
    }
    console.log(o + ". "+ o +"is" + ows);
}
//ii. determine the prime numbers
let numss = 56;
if (numss == 0 | numss == 1){
    let foods = true;
}
for(let p= 3; p <=numss / 2; p++){
    if (numss % p == 0)
        foods = true;
    break;
}
if(!foods){
    console.log(numss + "is prime");
}else{
    console.log(numss + "is not prime");
}
//iii.determine a string if it is a palindrome
function isPalindrome(rawr){
    let k = rawr.length -1
    for (let i =0; i < rawr.length/2;i++){
        if (rawr[i] != rawr[k]){
            return false;
        }
        k--;
    }
    return true;
}
let rawr1 = "tapat";
let rawr2 = "honda";

console.log(isPalindrome(rawr1));
console.log(isPalindrome(rawr2));



