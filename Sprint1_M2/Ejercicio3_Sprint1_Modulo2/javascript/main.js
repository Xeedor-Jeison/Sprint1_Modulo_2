let numero = parseInt(prompt("Ingresa un numero del 1 al 10"))

let numeroIncognita = Math.floor(Math.random() * (10 - 1 + 1) + 1)
let numeroDeVidas = 3

console.log(numeroIncognita)


if (numero < numeroIncognita) {
  console.log("Has perdido una vida te quedan " + (numeroDeVidas - 1))
  console.log("El numero que has ingresado es " + numero)
  console.log("El numero a encontrar es MAYOR a este numero")

  numero = prompt("Ingresa un numero del 1 al 10") 

  if (numero < numeroIncognita) {
    console.log("El numero que has ingresado es " + numero)
    console.log("El numero a encontrar es MAYOR a este numero")
    console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))

    numero = prompt("Ingresa un numero del 1 al 10")  

    if (numero < numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perdido el numero a encontrar era: " + numeroIncognita)                                            

    } else if (numero > numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perdido el numero a encontrar era: " + numeroIncognita)
    }

    else if (numero == numeroIncognita) {
      console.log("Has elegido el numero correcto, HAS GANADO")
    }
    else {
      console.log("Ingresa un valor numerico valido.")
    }
  } else if (numero > numeroIncognita) {
    console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))
    console.log("El numero que has ingresado es " + numero)
    console.log("El numero a encontrar es MENOR a este numero")

    numero = prompt("Ingresa un numero del 1 al 10")  

    if (numero < numeroIncognita) {
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido el numero a encontrar era: " + numeroIncognita)                                          

    } else if (numero > numeroIncognita) {
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perido")
    }

    else if (numero == numeroIncognita) {
      console.log("Has elegido el numero correcto, HAS GANADO")
    }
    else {
      console.log("Ingresa un valor numerico valido.")
    }
  }
  else if (numero == numeroIncognita) {
    console.log("Has elegido el numero correcto, HAS GANADO")
  }
  else {
    console.log("Ingresa un valor numerico valido.")
  }
} else if (numero > numeroIncognita) {
  console.log("Has perdido una vida te quedan " + (numeroDeVidas - 1))
  console.log("El numero que has ingresado es " + numero)
  console.log("El numero a encontrar es MENOR a este numero")

  numero = prompt("Ingresa un numero del 1 al 10") 

  if (numero < numeroIncognita) {
    console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))
    console.log("El numero que has ingresado es " + numero)
    console.log("El numero a encontrar es MAYOR a este numero")

    numero = prompt("Ingresa un numero del 1 al 10")  

    if (numero < numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perdido el numero a encontrar era: " + numeroIncognita)                                            

    } else if (numero > numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perido")
    }

    else if (numero == numeroIncognita) {
      console.log("Has elegido el numero correcto, HAS GANADO")
    }
    else {
      console.log("Ingresa un valor numerico valido.")
    }
  } else if (numero > numeroIncognita) {
    console.log("El numero que has ingresado es " + numero)
    console.log("El numero a encontrar es MENOR a este numero")
    console.log("Has perdido una vida te quedan " + (numeroDeVidas - 2))
    
    numero = prompt("Ingresa un numero del 1 al 10")  

    if (numero < numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perdido el numero a encontrar era: " + numeroIncognita)                                          

    } else if (numero > numeroIncognita) {
      console.log("El numero que has ingresado es " + numero)
      console.log("Has perdido una vida te quedan " + (numeroDeVidas - 3))
      console.log("Has perido")
    }

    else if (numero == numeroIncognita) {
      console.log("Has elegido el numero correcto, HAS GANADO")
    }
    else {
      console.log("Ingresa un valor numerico valido.")
    }
  }
  else if (numero == numeroIncognita) {
    console.log("Has elegido el numero correcto, HAS GANADO")
  }
  else {
    console.log("Ingresa un valor numerico valido.")
  }
} else if (numero == numeroIncognita) {
  console.log("Has elegido el numero correcto, HAS GANADO")
}
else {
  console.log("Ingresa un valor numerico valido.")
}
