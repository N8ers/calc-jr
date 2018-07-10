$(document).ready(function(){ //when this document runs - this starts!
// stores inputs from user to calculate later (it'll be an array)
var inputs=[""];
// the output string
var totalString;
//operators array for validation without the .
var operators1 = ["+", "-", "/", "*"];
//operators array with the . for validation
var operators2=["."];
//numbers for validation 
var nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){

}

function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
}

function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));

}

$("a").on("click", function(){
    if(this.id)
});

});