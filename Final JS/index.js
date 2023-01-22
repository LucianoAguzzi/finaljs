
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


//api
const contenedor = document.querySelector(".container")
const cards = (array) => {
  const cards = array.reduce((acc, element) => {
    return acc + `
    <img src="https://fakestoreapi.com/img${element.image}" alt=${element.title}>
    `
  }, "")
  contenedor.innerHTML = cards
}

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    cardsHtml(data)
  })
  .catch((error) => console.log("malio sal"))

const cont = document.querySelector(".container")
console.log(cont)
const cardsHtml = (array) => {
  const cards = array.reduce((acc, element) => {
    return acc + `
    <img src=${element.image} alt=${element.title} >
    `
  }, "")
  console.log(cards)
  contenedor.innerHTML = cards
}


