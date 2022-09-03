//Aca intento crear el almacenaje de datos y una respuesta en base a lo que se almacena. 
//En un ejemplo de personas que verifican si aprueban o no y el promedio del curso.

var texto = "";

do{
    var cadena = prompt ("Introduce el mensaje o caracter que desea guardar");
    
    if (texto ==""){
        texto = texto + cadena;
    }
    else {
        texto = texto + "_" + cadena;
    }
}
while(confirm("deseas seguir guardando caracteres? si es así de en continuar de lo contrario en cancelar"));
document.write(texto)


var parcial, final, promedio;
parcial = Number(prompt("parcial"));
final = Number(prompt("final"));
promedio = (parcial + final )/2;
// total = Number(prompt("total"));

if(promedio >= 7){
    document.write("El promedio es "+promedio+" APROBADO");
}else{
    document.write("El promedio es "+promedio+" DESAPROBADO");
}



//Aca agrego una calculadora basica
document.querySelector('#calcular').addEventListener('click', () =>{
    const n1 = Number(document.querySelector('#n1').value);
    const n2 = Number(document.querySelector('#n2').value);
    const op2 = document.querySelector('#op').value;
    let r;
    if(op2 == '+'){
        r = n1 + n2;
    }else if( op2 == '-'){
        r = n1 - n2;
    }else if(op2 == '*'){
        r = n1 * n2;
    }else if(op2 == '/'){
        r = n1 / n2;
    }
    document.querySelector('#r').innerHTML = r;
});
