// Codigo para calcular los puntos squad 
function calcular() {
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var salida = document.getElementById("salida");

	if (a == "" || b == ""){
        document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
    } 
    else if(si.checked && (a < 0 && b > 0) || (a > 0 && b < 0)) 
    {
        salida.innerHTML = "1";
    } 
    else if(no.checked && (a < 0 && b < 0)) 
    {
        salida.innerHTML = "1";
    }
    else 
    {
        salida.innerHTML = "0";
    }
}   


    