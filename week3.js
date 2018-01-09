
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
} else {
	console.log("Not right");
}
}

	for (i = 1; i <= 10; i+=1) {
    console.log(i);
}
for (i = 5; i <= 10; i+=1) {
    console.log(i);
}
for (i = 1; i <= 5; i+=1) {
    console.log(i);
}
function duplicate() {
    var image = document.getElementById("target").innerHTML;
    var copies = document.getElementById("copy").value;
    alert(copies);
   for (i = 1; i < copies; i++) {
   	alert(i);
   	for (i = 1; i < copies; i++) {
    document.getElementById("result").innerHTML += image;
}
}
}
