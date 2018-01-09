
alert("hello");
if (1+1===2) {
	alert("Maths works");
}
if (1+1===3) {
	alert("Oh dear");
}
function checkPassword() {
	alert("I am definitely checking your password");
	var password = document.getElementById("password").value;
	alert(password);
	if (password=== "hadi") {
		console.log(password + " is correct!");
}
} else {
	console.log("Not right");