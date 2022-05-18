const ticket = 200;

function calcular(){
    var cantidadTicket = document.getElementById('inputCantidad').value;
    var descuento = document.getElementById('inputCategoria').value;
    var precio  = cantidadTicket * (ticket - ((ticket * descuento) / 100));
    document.getElementById('compraTotal').value = "Total a pagar: $" + precio; 
}