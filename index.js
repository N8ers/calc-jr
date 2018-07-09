$(".btn").click(function(event) {
    var thingClicked = this.innerHTML
    console.log("you clicked: ", thingClicked)
     $("#output").html(thingClicked)
   }) 

// var btnClick = 
// document.querySelector(".btn");
// btnClick.addEventListener("click", function(){
//     document.querySelector(".output").innerHTML = ".btn".val();
//     concole.log(".btn".val());
// });

// var btnClick = document.getElementById("#btn");

// btnClick.addEventListener("click", function(){
//     console.log("clicked!"); 
// })