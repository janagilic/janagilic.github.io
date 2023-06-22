var Mobchoice = document.getElementsByClassName("carousel-item");
console.log(Mobchoice);
for(var i = 0; i < Mobchoice.length; i++){
    Mobchoice[0].addEventListener("click", function(event){
        window.location.href = "dinner.html";
    });
    Mobchoice[1].addEventListener("click", function(event){
        window.location.href = "lunch.html";
    });
    Mobchoice[2].addEventListener("click", function(event){
        window.location.href = "appetizer.html";
    });
    Mobchoice[3].addEventListener("click", function(event){
        window.location.href = "dessert.html";
    });
}

var Deskchoice = document.getElementsByClassName("name");
console.log(Deskchoice);
for(var i = 0; i < Deskchoice.length; i++){
    Deskchoice[0].addEventListener("click", function(event){
        window.location.href = "dinner.html";
    });
    Deskchoice[1].addEventListener("click", function(event){
        window.location.href = "lunch.html";
    });
    Deskchoice[2].addEventListener("click", function(event){
        window.location.href = "appetizer.html";
    });
    Deskchoice[3].addEventListener("click", function(event){
        window.location.href = "dessert.html";
    });
}
var recipe1 =document.getElementById('recipe1');
var recipe2 =document.getElementById('recipe2');
var recipe3 =document.getElementById('recipe3');
var recipe4 =document.getElementById('recipe4');
var buttonForIngredient = document.getElementsByClassName("btn");
console.log(buttonForIngredient);


for(var i = 0; i < buttonForIngredient.length; i++){
    buttonForIngredient[0].addEventListener("click", function(){
        recipe1.style.display = "block";
        recipe1.style.backgroundColor = "rgb(243, 242, 240)";
        recipe1.style.padding = "20px";
        recipe1.style.marginTop = "20px";
        recipe2.style.display = "none";
        recipe3.style.display = "none";
        recipe4.style.display = "none";
   });
   
    buttonForIngredient[1].addEventListener("click", function(){
        recipe2.style.display = "block";
        recipe2.style.backgroundColor = "rgb(243, 242, 240)";
        recipe2.style.padding = "20px";
        recipe2.style.marginTop = "20px";
        recipe1.style.display = "none";
        recipe3.style.display = "none";
        recipe4.style.display = "none";
    });
    buttonForIngredient[2].addEventListener("click", function(){
        recipe3.style.display = "block";
        recipe3.style.backgroundColor = "rgb(243, 242, 240)";
        recipe3.style.padding = "20px";
        recipe3.style.marginTop = "20px";
        recipe1.style.display = "none";
        recipe2.style.display = "none";
        recipe4.style.display = "none";
    });
    buttonForIngredient[3].addEventListener("click", function(){
        recipe4.style.display = "block";
        recipe4.style.backgroundColor = "rgb(243, 242, 240)";
        recipe4.style.padding = "20px";
        recipe4.style.marginTop = "20px";
        recipe1.style.display = "none";
        recipe3.style.display = "none";
        recipe2.style.display = "none";
    });
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// var buttonforRecipe = document.getElementById("button");
// console.log(buttonforRecipe);
// buttonforRecipe.addEventListener("click", function(){
//     var favRecipe = document.getElementById("userPick");
//     console.log(favRecipe);
// });


