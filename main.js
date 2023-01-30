// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })

// h1.innerHTML = 'Patito <br /> feo'
// h1.innerText = 'Patito <br /> feo'

// console.log(h1.getAttribute('pantalla'))
// console.log(h1.getAttribute('class'))

// //h1.setAttribute('class', 'rojo')
// h1.classList.add('rojo')
// h1.classList.remove('verde')

// input.value = 456
// input.placeholder = 'Mete info'

// const img = document.createElement('img')
// img.setAttribute('src', 'https://i.redd.it/ayzsasbi7rd21.jpg')
// console.log(img)

// pid.append(img)

//-----------------------------------------------------------------------
const form = document.querySelector('#form')
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    event.preventDefault() // Previene que la pagina se recargue despues de enviar un formulario
    console.log(input1.value + input2.value)
    const pResult = input1.value + input2.value
    p.innerText = 'Resultado: ' + pResult
}

function inputChange() {
    console.log('Cambio el input')
}