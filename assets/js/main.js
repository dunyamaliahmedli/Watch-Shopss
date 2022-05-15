let basket = document.querySelector(".basket");
let modal = document.querySelector(".modal");
let modal1 = document.querySelector(".modal1");
let modalclose = document.querySelector(".modalclose");
let modalclose1 = document.querySelector(".modalclose1");

basket.addEventListener("click",function(e){
    e.preventDefault();
   if(this.children[1].innerText == 0)
   {
       modal.style.display = "block";

   }
   else{
modal1.style.display = "block";
   }
})

modalclose.addEventListener("click",function(e){
    e.preventDefault();
    modal.style.display = "none";
})

modalclose1.addEventListener("click",function(e){
    e.preventDefault();
    modal1.style.display = "none";
})