
let anio = prompt("Ingresa el año del vehiculo");
let marca = prompt("ingresa la marca del vehiculo");
let modelo = prompt("ingresa el modelo del vehiculo");
let valor = prompt("ingresa el valor de venta de tu vehiculo");


let anioactual = 2022;
let antiguedad = anioactual - anio; 
let municipalizado;
if (antiguedad > 10) {
    municipalizado = true;
} else {
    municipalizado = false;
}

let cotizacion;
let cobertura;
let ncobertura = prompt(
    "ingrese el tipo de cobertura que desea \n 1-Contra Terceros \n 2-Todo Riesgo"
);
switch (ncobertura) {
    case "1":
        console.log("seleccionaste cobertura contra terceros");
        break;
    case "2":
        console.log("seleccionaste cobertura contra todo riesgo");
        break;
    default:
        console.log("opcion no valida");
        break;
}
function cotizar (num1, num2) {
    return num1 * num2;
}
if (ncobertura == 1) {
    cobertura = "Contra Terceros";
    if (municipalizado == true) {
        cotizacion = cotizar (valor, 0.005);
    } else {
        cotizacion = cotizar (valor, 0.008);
    }

}
if (ncobertura == 2) {
    cobertura = "Contra Todo Riesgo";
    if (municipalizado == true) {
        cotizacion = cotizar (valor, 0.009);
    } else {
        cotizacion = cotizar (valor, 0.014);
    }
}



console.log("año: ",anio);
console.log("marca: ",marca);
console.log("modelo: ",modelo);
console.log("valor: ",valor);
console.log("cobertura: ",cobertura);
console.log("antigüedad: ",antiguedad);
console.log("La cotizacion mensual de la poliza es: ",cotizacion);






