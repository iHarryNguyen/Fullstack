var button = document.getElementById('butts');
var colored = true;

// button.addEventListener("click",function(){
//   if(colored){
//     document.body.style.background = "purple";
//   }
//   else {
//     document.body.style.background = "white";
//   }
//   colored = !colored;
// });

button.addEventListener("click", function(){
  document.body.classList.toggle("colored");
});
