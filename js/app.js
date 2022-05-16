const formularioPuntaje = document.querySelector('.formulario__puntaje');
const puntaje = document.querySelectorAll('.formulario__puntaje-punto');


const cardRatings = document.querySelector('.card')
const gracias = document.querySelector('.gracias')
const parrafoPuntos = document.querySelector('.gracias__select') 
const submit = document.querySelector('.formulario__submit')

let puntos;

formularioPuntaje.addEventListener('click', (e) =>{
    if(e.target.classList.contains('formulario__puntaje-punto')){
        eliminarActivo();

        e.target.classList.add('activo')
        puntos = e.target.value;
    }
})

function eliminarActivo(){
    for(let i = 0; i < puntaje.length; i++){
        puntaje[i].classList.remove('activo')
    }
}

submit.addEventListener('click', () =>{
    cardRatings.style.display = 'none';
    gracias.style.display = 'flex'
    parrafoPuntos.textContent = `You selected ${puntos} out of 5`
})