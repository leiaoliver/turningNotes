//exercícios
//Transformar notas escolares numericas em letras

// de 90 pra cima - A
// entre 80 e 89 - B
// entre 70 e 79 - C
// entre 60 e 69 - D
// menor que 60 - F

function transformandoNotas(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota < 60

  let notaFinal

  if (notaA) {
    notaFinal = 'A'
  } else if (notaB) {
    notaFinal = 'B'
  } else if (notaC) {
    notaFinal = 'C'
  } else if (notaD) {
    notaFinal = 'D'
  } else if (notaF) {
    notaFinal = 'F'
  } else {
    notaFinal = 'Nota invalida'
  }

  return notaFinal
}

console.log(transformandoNotas(100))
console.log(transformandoNotas(90))
console.log(transformandoNotas(60))
console.log(transformandoNotas(6100))
console.log(transformandoNotas(30))
