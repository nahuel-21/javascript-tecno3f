if (typeof window === "undefined") {
globalThis.prompt = require("prompt-sync")({ sigint: true });
globalThis.alert = console.log;
}

const frutas = ["Manzana", "Banana", "Pera", "Naranja"];

function ejercicio1(){
    for (let i = 0; i < frutas.length; i++) {
        console.log("Indice: " + i + " - Valor: " + frutas[i]);
    }
}

function ejercicio2() {
    const lista = [...frutas];
    console.log("Arreglo inicial:", lista);

    lista.push("kiwi");
    console.log("1. Agrego 'kiwi' al final:", lista);

    lista.unshift("sandía");
    console.log("2. Agrego 'sandía' al inicio:", lista);

    const primero = lista.shift();
    console.log("3. Quito el primer elemento (" + primero + "):", lista);

    const ultimo = lista.pop();
    console.log("4. Quito el último elemento (" + ultimo + "):", lista);

    console.log("Arreglo final:", lista);
}

function ejercicio3() { 
    const numeros = [10, 20, 30, 40, 50];
    const respuesta = prompt("Ingrese un numero para buscar en " + numeros.join(", ") + ":" );

    if (respuesta === null) {
        console.log("Busqueda cancelada.");
        return;
    }

    const numero = Number(respuesta);

    if (respuesta.trim() === ""  || isNaN(numero)){
        console.log("'" + respuesta + "' no es un número válido.");
    } else if (numeros.includes(numero)) {
    console.log("El número " + numero + " SÍ está en el arreglo (posición " + numeros.indexOf(numero) + ").");
    } else {
    console.log("El número " + numero + " NO está en el arreglo.");
    }
}

function ejercicio4() {
    const numeros = [1, 2, 3, 2, 4, 2, 5];
    const buscado = 2;
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscado) {
    contador++;
    }
}

console.log("Arreglo:", numeros);
console.log("El valor " + buscado + " se repite " + contador + " veces.");
}

function ejercicio5() {
    const numeros = [5, 12, 8, 20, 3, 15];
    const mayoresA10 = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10){
        mayoresA10.push(numeros[i]);
    }
}

console.log("Arreglo original:", numeros);
console.log("Numeros mayores a 10:", mayoresA10);
}

function ejercicio6() {
    const nombres = ["Ana", "Bruno", "Carla", "Diego", "Elena"];
    const invertido = [];

    for (let i = nombres.length - 1; i >= 0; i--){
        invertido.push(nombres[i]);
    }

    console.log("Arreglo original:", nombres);
    console.log("Arreglo invertido:", invertido);
}

function ejercicio7() {
    const precios = [1500, 2300.5, 800, 4200, 999.99];
  let total = 0; // acumulador

    for (const precio of precios) {
    total += precio;
}

    const promedio = total / precios.length;

console.log("Precios:", precios);
console.log("Gasto total: $" + total.toFixed(2));
console.log("Precio promedio: $" + promedio.toFixed(2));
}

function ejercicio8() {
    const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67],
    ];
    let suma = 0;


for (let fila = 0; fila < numeros.length; fila++) {

    for (let col = 0; col < numeros[fila].length; col++) {
    suma += numeros[fila][col];
    }
}

console.log("Matriz:");
console.table(numeros);
console.log("Suma de todos los elementos: " + suma);
}

function ejercicio9() {
    const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"],
];
    let encontrado = false;

    console.log("Tablero:");
    console.table(oceano);

    for (let fila = 0; fila < oceano.length; fila++) {
    for (let col = 0; col < oceano[fila].length; col++) {
    if (oceano[fila][col] === "B") {
        console.log("¡Barco encontrado en la fila " + fila + ", columna " + col + "!");
        encontrado = true;
        }
    }
}

if (!encontrado) {
    console.log("No hay ningún barco en el tablero.");
}
}

const ejercicios = {
    1: ejercicio1,
    2: ejercicio2,
    3: ejercicio3,
    4: ejercicio4,
    5: ejercicio5,
    6: ejercicio6,
    7: ejercicio7,
    8: ejercicio8,
    9: ejercicio9,
};

const TOTAL = 9;
const realizados = []; 

while (realizados.length < TOTAL) {

const pendientes = [];
for (let i = 1; i <= TOTAL; i++) {
    if (!realizados.includes(i)) {
    pendientes.push(i);
    }
}

console.log("\nElija el ejercicio a resolver.");
const respuesta = prompt("Disponibles: " + pendientes.join(", ") + " -> ");


if (respuesta === null) {
    console.log("Programa finalizado por el usuario.");
    break;
}

const opcion = parseInt(respuesta);

if (isNaN(opcion) || opcion < 1 || opcion > TOTAL) {
    alert("Opción inválida. Ingrese un número entre 1 y " + TOTAL + ".");
} else if (realizados.includes(opcion)) {
    alert("El ejercicio " + opcion + " ya fue realizado. Elija otro.");
} else {
    console.log("===== Ejercicio " + opcion + " =====");
    ejercicios[opcion]();
    realizados.push(opcion);
    }
}

if (realizados.length === TOTAL) {
console.log("¡Se resolvieron los " + TOTAL + " ejercicios!");
}