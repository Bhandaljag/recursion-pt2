/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
/*
create a recursice function reverse(str) that takes a string parameter 
will need to take the string and reverse it. 
base case will be work towards the string being empty
recursive case will call itself. 
*/

function reverse(str) {
  // Your code here 
  if (str.length === 0){
    return '';
  }
  return str[str.length - 1] + reverse(str.slice(0, -1))


}
console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
