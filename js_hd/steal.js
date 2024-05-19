var balance = 10500;
var cameraOn = true;
console.log(amount);
function steal(balance, amount) {
 cameraOn = false;
 if (amount < balance) {
balance = balance - amount;
 }
 return amount;
 cameraOn = true;
}
console.log(balance);
console.log(amount);
steal(balance, 1250);
console.log(balance);
console.log(amount);
var amount = steal(balance, 1250);
console.log(balance);
alert("Criminal: you stole " + amount + "!");