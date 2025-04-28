const cine = ["flow", "miku", "cars", "enredados"]
console.log(cine)

function flow(){
    let pelicula1= prompt("elija la ubicacion")
    let pelicula2= parseInt(prompt("elija un horario"))
    alert("te esperamos en  "+pelicula1+ "  en el horario "+ pelicula2)
}

function miku(){
    let pelicula3= parseInt(prompt("elija la ubicacion"))
    let pelicula4= parseInt(prompt("elija un horario"))
    alert("te esperamos en "+pelicula3+ "en el horario" + pelicula4)
}
function cars(){
    let pelicula5= parseInt(prompt("elija la ubicacion"))
    let pelicula6= parseInt(prompt("elija un horario"))
    alert("te esperamos en "+pelicula5+ "en el horario"+pelicula6)
}
function enredados(){
    let pelicula7= parseInt(prompt("elija la ubicacion"))
    let pelicula8= parseInt(prompt("elija un horario"))
    alert("te esperamos en "+pelicula7+ "en el horario" + pelicula8)
}

let cartelera = parseInt(prompt("elija la pelicula que desea ver: \n 1-Flow, un mundo que salvar \n 2-Miku \n 3-Cars \n 4-Enredados \n"))

while (cartelera != 5){
switch(cartelera){
    case 1:
    flow()
    break
    case 2:
    miku()
    break
    case 3:
    cars()
    break
    case 4:
    enredados()
    break
    default:
    console.log("opcion incorrecta")
}
break
}


