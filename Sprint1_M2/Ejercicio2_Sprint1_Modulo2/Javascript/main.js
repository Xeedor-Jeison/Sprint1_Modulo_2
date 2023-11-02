//ejercicio 1

let num1 = 1;
let num2 = 7;
let num3 = 5;

if (num1 > num2) {
  console.log("El primer numero es mayor");
} else {
  console.log("El segundo valor es mayor");
}

//ejercicio 2

if (num1 === num2) {
  console.log("Los numeros son iguales");
} else {
  console.log("Los numeros son diferentes");
}

//ejercicio 3

if (num1 > num2) {
  console.log("El numero mas grande es: " + num1);
} else if (num1 === num2) {
  console.log(
    "Los numeros son iguales el numero uno es " +
    num1 +
    " y el numero dos es: " +
    num2
  );
} else {
  console.log(
    "El numero mas grande es el segundo numero (" + num2 + ") y no son iguales"
  );
}

//ejercicio 4

if (num1 < num3 && num1 < num2) {
  console.log("El numero menor es " + num1);
} else if (num2 < num1 && num2 < num3) {
  console.log("El numero menor es " + num2);
} else {
  console.log("El numero menor es " + num3);
}

//ejercicio 5

let persona1 = {
  nombre: "Jeison",
  edad: 24,
  altura: 161,
};

let persona2 = {
  nombre: "Ruben",
  edad: 29,
  altura: 170,
};

if (persona1.altura > persona2.altura) {
  console.log("La persona mas alta es " + persona1.nombre);
} else {
  console.log("La persona mas alta es " + persona2.nombre);
}

if (persona1.edad > persona2.edad) {
  console.log(
    "Esta persona " + persona1.nombre + " Es mayor que esta " + persona2.nombre);
} else {
  console.log(persona2.nombre + " Es mayor que " + persona1.nombre);
}

//ejercicio 6

let nombre = prompt("Escribe tu nombre").toLowerCase()
// let edad = prompt("Ingresa tu edad")
// let altura = prompt("Ingresa tu altura sin puntos (Ejemplo: 160)")
// let vision = prompt("Ingresa tu grado de vision  del 1 al 10")

// if (edad >= 18 && altura > 150 && vision >= 8) {
//   console.log("Estas capacitado para conducir")
// }
// else {
//   console.log("Lo sentimos no estas capacitado en estos momentos para conducir")
// }

//ejercicio 7

let pase = prompt("Por favor ingrese que tipo de pase tiene: Vip o Normal").toLowerCase()
let entrada = prompt("Tienes entrada? si o no").toLowerCase()
let saldo
let compraEntrada
let usoEntrada

if (nombre === "jeison" || pase === "vip") {
  console.log("Bienvenid@ cuentas con ingreso libre")
}
else if (entrada === "no") {
  compraEntrada = prompt("Deseas comprar la entrada? si o no")
}
else {
  if (entrada === "si" || entrada === "no") {
    switch (entrada) {
      case "si":
        usoEntrada = prompt("Deseas utilizar la entrada para ingresar al evento?")
        break;
      case "no":
        console.log("Entedemos que no has querido usar tu entrada disponible.")
        break;
      default:
        console.log("No has elegido una opcion valida")
    }

  }

}

if (usoEntrada === "si") {
  console.log("Bienvenido al envento")
}
else {
  if (compraEntrada === "si" || compraEntrada === "no") {
    switch (compraEntrada) {
      case "si":
        saldo = parseInt(prompt("Cuanto dinero tienes disponible en este momento"))
        if (isNaN(saldo) == false){
          if (saldo >= 1000) {
            console.log("Compra exitosa, puedes pasar bienvenid@")
          }
          else {
            console.log("la venta a sido rechazada")
          }
        }
        else{
          alert("Vuelve a intentar colocando una cifra numerica, por favor.")
        }
       
        break;
      case "no":
        console.log("Vale vuelve para el proximo evento")
        break;
      default:
        console.log("No has elegido una opcion valida")
    }
  }
}


// // ejercicio 8

// let ingresoAlJuego = parseInt(prompt("Buenas querido jugador\n En el día de hoy vamos a jugar a las adivinanzas.\n Por favor selecciona una de las opciones\n 1) Quiero jugar.\n 2) No quiero jugar"))



// let numeroIncognita = Math.floor(Math.random() * (10 - 1 + 1) + 1)
// let numeroDeVidas = 3

// if (ingresoAlJuego === 1 && isNaN(ingresoAlJuego) == false) {

//   let numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//   if (numero < numeroIncognita) {
//     console.log("Has perdido una vida te quedan " + (numeroDeVidas - 1))
//     console.log("El numero que has ingresado es " + numero)
//     console.log("El numero a encontrar es MAYOR a este numero")

//     numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//     if (numero < numeroIncognita) {
//       console.log("El numero que has ingresado es " + numero)
//       console.log("El numero a encontrar es MAYOR a este numero")
//       console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))

//       numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//       if (numero < numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)

//       } else if (numero > numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)
//       }

//       else if (numero == numeroIncognita) {
//         console.log("Has elegido el numero correcto, HAS GANADO")
//       }
//       else {
//         console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//         console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//       }
//     } else if (numero > numeroIncognita) {
//       console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))
//       console.log("El numero que has ingresado es " + numero)
//       console.log("El numero a encontrar es MENOR a este numero")

//       numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//       if (numero < numeroIncognita) {
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)

//       } else if (numero > numeroIncognita) {
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)
//       }

//       else if (numero == numeroIncognita) {
//         console.log("Has elegido el numero correcto, HAS GANADO")
//       }
//       else {
//         console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//       }
//     }
//     else if (numero == numeroIncognita) {
//       console.log("Has elegido el numero correcto, HAS GANADO")
//     }
//     else {
//       console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//     }
//   } else if (numero > numeroIncognita) {
//     console.log("Has perdido una vida te quedan " + (numeroDeVidas - 1))
//     console.log("El numero que has ingresado es " + numero)
//     console.log("El numero a encontrar es MENOR a este numero")

//     numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//     if (numero < numeroIncognita) {
//       console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))
//       console.log("El numero que has ingresado es " + numero)
//       console.log("El numero a encontrar es MAYOR a este numero")

//       numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//       if (numero < numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)

//       } else if (numero > numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)
//       }

//       else if (numero == numeroIncognita) {
//         console.log("Has elegido el numero correcto, HAS GANADO")
//       }
//       else {
//         console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//       }
//     } else if (numero > numeroIncognita) {
//       console.log("El numero que has ingresado es " + numero)
//       console.log("El numero a encontrar es MENOR a este numero")
//       console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))

//       numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

//       if (numero < numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)

//       } else if (numero > numeroIncognita) {
//         console.log("El numero que has ingresado es " + numero)
//         console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
//         console.log("Has perdido el numero a encontrar era: " + numeroIncognita)
//       }

//       else if (numero == numeroIncognita) {
//         console.log("Has elegido el numero correcto, HAS GANADO")
//       }
//       else {
//         console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//       }
//     }
//     else if (numero == numeroIncognita) {
//       console.log("Has elegido el numero correcto, HAS GANADO")
//     }
//     else {
//       console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//     }
//   } else if (numero == numeroIncognita) {
//     console.log("Has elegido el numero correcto, HAS GANADO")
//   }
//   else {
//     console.log("Ingresa un valor numero valido. \n Has perdido todas tus vidas, vuelve a empezar")
//   }
// }
// else if (ingresoAlJuego === 2) {
//   console.log("El juego estara disponible cuando quieras")
// }
// else {
//   console.log("Por favor ingresa una opción alfanumerica correcta")
// }

// //ejercicio 9

// let edadPersona = parseInt(prompt("Por favor ingresa tu edad"))
// let edadLocura
// if (isNaN(edadPersona) == false) {
//   if (edadPersona > 0 && edadPersona <= 12) {
//     console.log("Eres un Infante")
//   }
//   else if (edadPersona > 12 && edadPersona <= 18) {
//     console.log("Eres un adolecente")
//   }
//   else if (edadPersona >= 19 && edadPersona <= 45) {
//     console.log("Eres una joven mayor")
//   }
//   else if (edadPersona >= 46 && edadPersona <= 100) {
//     console.log("Eres un anciano")
//   }
//   else {
//     if (edadPersona > 100) {
//       edadLocura = prompt("En realidad tienes mas de 100 años??")
//       alert("Estas viejisimo has vivido " + edadPersona + " años")
//     }

//   }
// }
// else {
//   console.log("por favor ingresa un valor alfanumerico valido.")
// }

// //ejercicio 10

// alert("Bienvenidos jugadores esta por comenzar el siguiente juego\n en este jugaremos de 1 vs 1 a Piedra Papel y Tijeras")

// let nombreJugadorUno = prompt("Jugador 1\n Ingresa tu nick: ")
// let nombreJugadorDos = prompt("Jugador 2\n Ingresa tu nick: ")

// let jugadorUno = prompt(nombreJugadorUno + " Elige tu hechizo piedra, papel o tijeras")
// let jugadorDos = prompt(nombreJugadorDos + " Elige tu hechizo piedra, papel o tijeras")

// if (isNaN(jugadorUno) && isNaN(jugadorDos)) {
//   if (jugadorUno == "piedra" && jugadorDos == "tijeras" || (jugadorUno == "papel" && jugadorDos == "piedra") || (jugadorUno == "tijeras" && jugadorDos == "papel")) {
//     console.log("Ha ganado " + nombreJugadorUno)
//   }
//   else if (jugadorUno == "piedra" && jugadorDos == "piedra" || (jugadorUno == "papel" && jugadorDos == "papel" || (jugadorUno == "tijeras" && jugadorDos == "tijeras"))) {
//     console.log("Ha sido un empate")
//   }

//   else {
//     console.log(nombreJugadorDos + " Ha ganado")
//   }
// }
// else {
//   console.log("por favor ingresa un ataque valido.")
// }



// //ejercicio 11

// let color = prompt(
//   "Por favor elije un color entre, blanco, negro, verde, azul, amarillo, rojo, marrón"
// );

// let colorUsuario = color.toLowerCase()

// if (isNaN(color)) {

//   switch (colorUsuario) {
//     case "blanco":
//       console.log("Falta de color");
//       break;
//     case "negro":
//       console.log("Falta de color");
//       break;
//     case "verde":
//       console.log("Color de la naturaleza");
//       break;
//     case "azul":
//       console.log("El color del agua");
//       break;
//     case "amarillo":
//       console.log("El color del sol");
//       break;
//     case "rojo":
//       console.log("El color del fuego");
//       break;
//     case "marron":
//       console.log("El color de la tierra");
//       break;
//     case "marrón":
//       console.log("El color de la tierra");
//       break;
//     default:
//       console.log("Excelente elección, no lo teniamos pensado");
//   }

// }
// else{
//   console.log("Por favor ingresa un valor correcto.")
// }



// //ejercicio 12

// alert(
//   "Ahora vas a poder utilizar nuestra calculadora, tendras que elegir que operació deseas realizar y a su vez ingresar los valores para operar"
// );

// let operador = parseInt(prompt(
//   "Buenas usuario por favor indique que operación desea realizar el día de hoy\n 1) suma \n 2) Resta\n 3) Multiplicación\n 4) Division"
// ));

// let numeroUnoEscogido;
// let numeroDosEscogido;

// if (isNaN(operador) == false && operador >= 1 && operador <= 4) {
//   numeroUnoEscogido = parseFloat(
//     prompt("Por favor ingresa el primer numero para la operación")
//   );
//   numeroDosEscogido = parseFloat(
//     prompt("Por favor ingresa el segundo numero para la operación")
//   );
//   switch (operador) {
//     case 1:
//       if (isNaN(numeroUnoEscogido) == false && isNaN(numeroDosEscogido) == false) {
//         console.log(
//           "La operación que deseas realizar es una suma, y tus numeros ingresados son \n Numero1 = " +
//           numeroUnoEscogido +
//           " \n Numero2 = " +
//           numeroDosEscogido +
//           " \n Resultado = " +
//           (numeroUnoEscogido + numeroDosEscogido)
//         );
//       }
//       else {
//         console.log("Ingresa una opción alfanumerica correcta.")
//       }

//       break;
//     case 2:
//       if (isNaN(numeroUnoEscogido) == false && isNaN(numeroDosEscogido) == false) {
//         console.log(
//           "La operación que deseas realizar es una resta, y tus numeros ingresados son \n Numero1 = " +
//           numeroUnoEscogido +
//           " \n Numero2 = " +
//           numeroDosEscogido +
//           " \n Resultado = " +
//           (numeroUnoEscogido - numeroDosEscogido)
//         );
//       }
//       else {
//         console.log("Ingresa una opción alfanumerica correcta.")
//       }

//       break;
//     case 3:
//       if (isNaN(numeroUnoEscogido) == false && isNaN(numeroDosEscogido) == false) {
//         console.log(
//           "La operación que deseas realizar es una multiplicación, y tus numeros ingresados son \n Numero1 = " +
//           numeroUnoEscogido +
//           " \n Numero2 = " +
//           numeroDosEscogido +
//           " \n Resultado = " +
//           numeroUnoEscogido * numeroDosEscogido
//         );
//       }
//       else {
//         console.log("Ingresa una opción alfanumerica correcta.")
//       }

//       break;
//     case 4:
//       if (isNaN(numeroUnoEscogido) == false && isNaN(numeroDosEscogido) == false) {
//         if (numeroDosEscogido == 0) {
//           console.log(
//             "La operación no se puede hacer porque tu numero divisor es " +
//             numeroDosEscogido
//           );
//         } else {
//           console.log(
//             "La operación que deseas realizar es una division, y tus numeros ingresados son \n Numero1 = " +
//             numeroUnoEscogido +
//             " \n Numero2 = " +
//             numeroDosEscogido +
//             " \n Resultado = " +
//             numeroUnoEscogido / numeroDosEscogido
//           );
//         }
//       }
//       else {
//         console.log("Ingresa una opción alfanumerica correcta.")
//       }


//       break;
//     default:
//       console.log(
//         "No has elegido una opción correcta, recuerda que debes seleccionar el numero asignado a la operación a realizar"
//       );
//   }
// }
// else {
//   console.log("Elige una opcion alfanumerica correcta")
// }


// // ejercicio 13

// let nombreCC = prompt("Ingresa el nombres y apellidos de tu cedula: ")
// let cedula = prompt("Ingresa el numero de tu cedula sin puntos: ")
// let alturaCC = prompt("Ingresa tu altura solo en NUMEROS: ")
// let tipoDeSangre = prompt("Ingresa que tipo de sangre eres")
// let dni

// let confirmacionDatos = parseInt(prompt("Por favor necesitamos validar si la información es correcta, lea atentamente y confirme la confirmación de datos\n Su nombre de cedula es: " + nombreCC + " \n Su numero de identidad es: " + cedula + " \n Su altura es: " + alturaCC + " \n Su tipo de sangre es: " + tipoDeSangre + " \n \n para confirmar que los datos estan correctos marque \n 1) Para confirmar sus datos \n 2) Para rechazar la confirmación de datos"))
// console.log(isNaN(confirmacionDatos))

// if (isNaN(confirmacionDatos) == false) {
//   if (confirmacionDatos == 1) {
//     dni = {
//       nombreCedulaCiudadania: nombreCC,
//       cedulaCiudadania: cedula,
//       alturaCedulaCiudadania: alturaCC,
//       tipoDeSangreCC: tipoDeSangre
//     }
//     console.table(dni)
//   }
//   else {
//     console.log("Vuelva a intertarlo en un mes")
//   }
// }
// else {
//   alert("Por favor selecciona una opción correcta")

//   confirmacionDatos = parseInt(prompt("Por favor necesitamos validar si la información es correcta, lea atentamente y confirme la confirmación de datos\n Su nombre de cedula es: " + nombreCC + " \n Su numero de identidad es: " + cedula + " \n Su altura es: " + alturaCC + " \n Su tipo de sangre es: " + tipoDeSangre + " \n \n para confirmar que los datos estan correctos marque \n 1) Para confirmar sus datos \n 2) Para rechazar la confirmación de datos"))
//   if (isNaN(confirmacionDatos) == false) {

//     if (confirmacionDatos == 1) {
//       dni = {
//         nombreCedulaCiudadania: nombreCC,
//         cedulaCiudadania: cedula,
//         alturaCedulaCiudadania: alturaCC,
//         tipoDeSangreCC: tipoDeSangre
//       }
//       console.table(dni)
//     }
//     else {
//       console.log("Vuelva a intertarlo en un mes")
//     }
//   }
//   else {
//     alert("Por favor selecciona una opción correcta")

//   }
// }
