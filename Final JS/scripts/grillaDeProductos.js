const mainContainter = document.querySelector(".container")
const elementWindow = document.createElement("div")
elementWindow.className = "window"
elementWindow.textContent = "disc"
mainContainter.appendChild(elementWindow)

// const contenedor = document.querySelector(".container")
// let cardAHtml = (lista) => {
//     const cardReduce = lista.reduce((acc, element) => {
//         return acc + `
//     <div class="product" id="lista-${element.id}">
//             <img src=${element.image} alt=${element.title}>
//             <div class="card-description">
//         <h5>
//             ${element.title}
//         </h5>
//         <button id="boton-${element.id}" class="boton-producto">
//         Añadir al carrito
//         </button>
//     </div>
//     </div>
//     `
//     }, "")
//     contenedor.innerHTML = cardReduce
// }
cardAHtml(lista)

// carrito

let carrito = []
function agregarEventoOnClickABotonDeProductos(lista) {
    const botonAgregar = document.querySelectorAll(".boton-producto")
    botonAgregar.forEach(boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = lista.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}

agregarEventoOnClickABotonDeProductos(lista)

const electedProducts = JSON.parse(localStorage.getItem("carrito"))
carrito = electedProducts || []

function ordenarProductosDesc() {
const botonOrdenarDesc = document.querySelector("#ordenar-desc-button");
if (botonOrdenarDesc) {
botonOrdenarDesc.onclick = () => {
    //ordenar elementos en forma descendente
    lista.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    })
    cardAHtml(lista)
}
}
}
function ordenarProductosAsc() {
const botonOrdenarAsc = document.querySelector("#ordenar-asc-button")
botonOrdenarAsc.onclick = () => {
    //ordenar elementos en forma ascendente
    if (botonOrdenarAsc) {
    lista.sort((a, b) => {
        if (a.title < b.title) {
            return 1
        }
        if (a.title > b.title) {
            return -1
        }
        return 0
    })
    cardAHtml(lista)
}
}
}