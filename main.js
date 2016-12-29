// Codigo para evaluar numeros negativos
function evaluar() {
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var salida = document.getElementById("salida");

    if (a == "" || b == ""){
        document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
    } 
    //Si el parametro negative es falso y uno de los valores a ó b es negativo y otro positivo
    else if(falso.checked && (a < 0 && b > 0) || (a > 0 && b < 0)) 
    {
        salida.innerHTML = "1"; //retorna 1
    } 
    //Si el parametro negative es verdadero y ambos valores a y b son negativos
    else if(verdadero.checked && (a < 0 && b < 0)) 
    {
        salida.innerHTML = "1"; //retorna 1
    }
    else 
    {
        salida.innerHTML = "0"; //sino se cumplen las condicionales retorna 0
    }
}   
