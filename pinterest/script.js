//Dom me change karne ke pure process me ye chize hoti hai:

// css selection
var home = document.querySelector("#home");
// var home = document.getElementById("home"); dono method sahi hai

// css ko change karna
//home.style.color = "red";

// html change karna
//home.innerHTML = "<i>Hemlo</i>" //kuch bhi tag laga sakte ho
// note: isme tag convert ho jata hai final text me

// text change
//home.textContent = "<i>Hemlo</i>" isme tag nahi hota convert text me kyuki sab chiz text ki tarah consider hoti hai


// adding listeners
// home.addEventListener('mouseenter', () => {
//   home.style.color = "red";
// })

// home.addEventListener('mouseleave', () => {
//   home.style.color = "black";
// })






var arr = [
  {name: "forest", image: "https://images.unsplash.com/photo-1708022792768-edfab8b2be7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
  {name: "shrine", image: "https://images.unsplash.com/photo-1708075207055-269ec68c323c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"},
  {name: "building", image: "https://images.unsplash.com/photo-1707897882296-86d699d1310e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"},
  {name: "ocean", image: "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"},
  {name: "bird", image: "https://images.unsplash.com/photo-1708035900782-58f2815aa5bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"},
  
]

function showTheCards(){
  var clutter = "";
  arr.forEach(function(obj) {
    clutter += `<div class="box">
      <img class="cursor-pointer" src="${obj.image}" alt="image">
      <div class="caption">Lorem ipsum </div>
    </div>`;
  })

  document.querySelector(".container")
  .innerHTML = clutter;
}

function searchFunctionality(){
  var query = document.querySelector("#searchinput");

  query.addEventListener("focus", () => {
    document.querySelector(".overlay").style.display = "block";
  });

  query.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
  });

  query.addEventListener("input", () => {
    const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(query.value));
    var clutter = "";
    filteredArray.forEach((obj) => {
      clutter += `<div class="res flex px-8 py-3">
          <i class="ri-search-line font-semibold mr-5"></i>
          <h3 class="font-semibold">${obj.name}</h3>
      </div>`
    });

    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

searchFunctionality();
showTheCards();