
let links = document.querySelectorAll('span')
let allLInks = document.querySelector(".langDiv")


links.forEach(el => {



el.addEventListener( "click", function (){

allLInks.querySelector(".active").classList.remove("active");

el.classList.add("active")
changeLang(el.dataset.type);
}
)
}
);
// this code for Box team dir 
let boxDire = document.getElementById("box")

async function changeLang(value) {
  const file = await fetch("lang/"+ value +".json");
  const json = await file.json();
  const elements = document.querySelectorAll("[data-lang]");
  document.body.dir = json["dir"];
  document.body.style.fontFamily = json["font"];


  elements.forEach(el => {

    el.innerHTML = json[el.dataset.lang];

    el.style.fontFamily = json["font"];

  });
}