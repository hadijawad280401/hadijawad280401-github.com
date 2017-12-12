var name = "Hadi";
console.log(name); 
document.querySelector("#myname").innerHTML = "Hello my name is" + name;
var x = 3; 

var button = document.querySelector("#calculate");
button.onclick = function() {
	var input1 = document.querySelector("#question1").value;
	var input2 = document.querySelector("#question2").value;
// var input= document.querySelector("#question").value;



var result = input1 * input2;
document.querySelector("#answer").innerHTML = result;
}