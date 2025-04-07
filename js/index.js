const ticketOrigen = "1234"
let TicketIngresar= prompt("ingrese su numero de ticket")

while (ticketOrigen != TicketIngresar){
    TicketIngresar = prompt ("ingrese su contaseña")
}

let edad = 18
let dinero = true
let ticket = "minecraft"

if(edad >= 18 && dinero && ticket){
console.log("podes ingresar")
} else if (edad <= 17){
console.log("no podes pasar por menor de edad")
} else if (dinero == false){
    console.log("dinero insuficiente")
} else {
    console.log("no podes ingresar")
}



