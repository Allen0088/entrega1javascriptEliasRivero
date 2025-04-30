const ticketOrigen = 349
let ticketIngresar = parseInt(prompt("ingrese el boleto"))
function boleto(){
    while (ticketOrigen != ticketIngresar){
        ticketIngresar = prompt("ingrese su boleto")
    }
}
boleto()