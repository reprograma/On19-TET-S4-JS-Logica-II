const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando foreach multiplique cada item por 2 salvando numa nova array, imprima o resultado
let soma = 0;
arrNumeros.forEach((item, i) => arrNumeros[i] = item * 2)
console.log(arrNumeros);


const arrObjetos = [
  {
    nome: "Maria",
    idade: 21
  },
  {
    nome: "Josefa",
    idade: 12
  },
  {
    nome: "Clementina",
    idade: 55
  },
  {
    nome: "Gustava",
    idade: 14
  },
  {
    nome: "Chablana",
    idade: 33
  }
];

//usando foreach adicione 1 a todas as idades
arrObjetos.forEach((item, i) => arrObjetos[i].idade = item.idade + 1);
console.log(arrObjetos);