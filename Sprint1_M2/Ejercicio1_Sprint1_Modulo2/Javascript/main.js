let miNombre = "Jeison "
let miApellido = "Ramos "
let miEdad = 24
let miMascota = "firulais "
let edadMascota = 3
console.log(miNombre+miApellido+miEdad+miMascota+edadMascota)
let nombreCompleto = miNombre + miApellido
let textoPresentacion = "Hola mucho  gusto mi nombre es " + miNombre + miApellido + "Tengo " + miEdad + " años, tengo una mascota llamada " + miMascota + " y ya tiene " + edadMascota + " años."
console.log(textoPresentacion)

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades + " " + restaEdades + " " + productoEdades + " " + divisionEdades)

miNombre = prompt("Escribe tu nombre")
miApellido = prompt("Escribe tu apellido")
miEdad = prompt("Que edad tienes?")
miMascota = prompt("Como se llama tu mascota?")
edadMascota =prompt("Que edad tiene tu mascota?")

textoPresentacion = "Hola mucho  gusto mi nombre es " + miNombre + " " + miApellido + " Tengo " + miEdad + " años, tengo una mascota llamada " + miMascota + " y ya tiene " + edadMascota + " años."

sumaEdades = miEdad + edadMascota
restaEdades = miEdad - edadMascota
productoEdades = miEdad * edadMascota
divisionEdades = miEdad / edadMascota

console.log(miNombre+miApellido+miEdad+miMascota+edadMascota)

console.log(textoPresentacion)

console.log(sumaEdades + " " + restaEdades + " " + productoEdades + " " + divisionEdades)

let alumno = {
    grado: 8,
    edadAlumno :15,
    altura : 160,
    peso : 60,
    promedio: 5,
}
console.table(alumno)
console.log(alumno.grado + " " + alumno.edadAlumno + " " + alumno.altura + " " + alumno.peso + " " + alumno.promedio)

let mascota = {
    color : "marron",
    raza : "pitbull",
    altura : 25,
    hijos : 2,
    peso: 70,
}

console.table(mascota)
console.log(mascota.color + " " + mascota.raza + " " + mascota.altura + " " + mascota.hijos + " " + mascota.peso)

let frutas = ["pera","manzana","naranja","banano","mandarina"]
console.table(frutas)
console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4])

let numeros = [1,5,7,8,2]
console.table(numeros)
console.log(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4])

let familia = [{primo : "Ruben"}, {tia : "Carmen"}, {abuela:"Maria"
    }, {tio: "Eduardo"}, {mama: "Mabel"} ]

console.table(familia)

let textoAleatorio = frutas[1] + numeros[3] + familia[4]

let edadCompañero = prompt("La edad de mi compañero es: ")

let edadesIguales = miEdad === edadCompañero
let soyMayor = miEdad > edadCompañero
let soyMenor = miEdad < edadCompañero

console.log("La edad mia es: " + miEdad + " y la de mi compañero es: " + edadCompañero)

console.log("Mi edad es igual a de mi compañero: " + edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
console.log("Mi edad es menor a la de mi compañero: " + soyMenor)

let soyMayorDeEdad = prompt("Vamos a validar si eres mayor de edad\n Por favor ingresa tu edad: ") >= 18

console.log("Soy mayor de edad " + soyMayorDeEdad)

let edadRequerida = prompt("Vamos a validad tu ingreso a la atracción\n Por favor ingresa tu edad: ")
let alturaRequerida = prompt("Vamos a validad tu ingreso a la atracción\n Por favor ingresa tu altura: ")

let puedeSubir = edadRequerida >= 6 && alturaRequerida >=120

console.log("Puede subir a la atracción: " + puedeSubir)

let pase = prompt("Por favor ingrese que categoria de pase es VIP, NORMAL O LIMITADO: ").toUpperCase();

let saldo = prompt("Con cuanto saldo dispone en el momento para ingresar?")

let puedePasar = pase === "VIP" || saldo > 1000

console.log("La persona puede pasar " + puedePasar)



