const username = document.querySelector("#username")
const emailadress = document.querySelector("#emailadress")
const messagefield = document.querySelector("#messagefield")


// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById('formulario').addEventListener('submit', validarFormulario);
// });

function validarFormulario(evento) {
  evento.preventDefault();
  const usuario = document.getElementById("username").value;
  if (usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  const mail = document.getElementById("emailadress").value;
  if (mail.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}


//Swiper
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//darkmode
// Éste es el js del darkmode y del login
const modeButton = document.querySelector("#darklight")
const body = document.querySelector(".light-mode")
const footer = document.querySelector("#footer")
modeButton.onclick = () => {
  body.classList.toggle("dark-mode")
  footer.classList.toggle("dark-mode")
  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
  localStorage.setItem("dark-mode", footer.classList.contains("dark-mode"));
}
const toggle = document.getElementById("dark-mode");
const currentTheme = localStorage.getItem("dark-mode");
if (currentTheme === "true") {
  body.classList.add("dark-mode")
  footer.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode")
  footer.classList.remove("dark-mode");
}


//api
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  // cards(data.results)
  .catch((error) => console.log("malio sal"))

fetch('https://fakestoreapi.com/products', {
  method: "POST",
  body: JSON.stringify({

  })
})

const contenedor = document.querySelector(".container")
const cards = (array) => {
  const cards = array.reduce((acc, element) => {
    return acc + `
    <img src="https://fakestoreapi.com/img${element.image}" alt=${element.title}>
    `
  }, "")
  contenedor.innerHTML = nodos
}
// const imagenFakeApi = `https://fakestoreapi.com/t/p/original${image}`