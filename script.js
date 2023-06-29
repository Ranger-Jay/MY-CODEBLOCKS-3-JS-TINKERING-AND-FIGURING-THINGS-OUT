// countless array methods in javascript
// push is a method.
// NOTE: a method is technically a function
// push - adds to the back of array
const friends = ["mike", "steve", "pete"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
//shift - adds to the front of an array
friends.unshift("john");
console.log(friends);
//pop - removes last element of an array
const popped = friends.pop();
console.log(popped);
friends.pop();
console.log(friends);
//shift - removes 1st element of an array
friends.shift();
console.log(friends);

console.log(friends.indexOf("steve"));
console.log(friends.indexOf("bob"));
friends.push(23);
console.log(friends.includes("steve"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));
console.log(friends.includes("23"));
//most used case for includes.
if (friends.includes("mike")) console.log("you have a friends called mike");
else console.log("nope");
if (friends.includes("Mike")) console.log("you have a friends called mike");
else console.log("nope");
if (friends.includes("ike")) console.log("you have a friends called mike");
else console.log("nope");
