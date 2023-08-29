// Definición de la clase padre "Raperos"
class Raperos {
  constructor(objeto) {
    this.objeto = objeto;
  }

  filtrarRaperosPorNombre(nombre) {
    const raperosFiltrados = this.objeto[Object.keys(this.objeto)[0]].filter(
      (rapero) => rapero.includes(nombre)
    );
    return raperosFiltrados;
  }

  obtenerRaperoPorIndice(indice) {
    const raperos = this.objeto[Object.keys(this.objeto)[0]];
    if (indice >= 0 && indice < raperos.length) {
      return raperos[indice];
    } else {
      return "Índice inválido";
    }
  }
}

// Definición de la clase hija "RaperosEnEspanol"
class RaperosEnEspanol extends Raperos {
  constructor(objeto) {
    super(objeto);
  }
}

// Definición de la clase hija "RaperosEnIngles"
class RaperosEnIngles extends Raperos {
  constructor(objeto) {
    super(objeto);
  }
}

// Crear objetos con los raperos
const raperosVenezuela = {
  Venezuela: [
    "Lil Supa",
    "Canserbero",
    "Apache",
    "Akapellah",
    "Gabyonia",
    "Rian Guawanko",
    "NK Profeta",
  ],
};
const raperosCuba = {
  Cuba: ["Rxndy Akozta", "Al2", "Orishas"],
};
const raperosEspana = {
  Espana: [
    "Kase-O",
    "Nach",
    "Chojin",
    "Mala Rodriguez",
    "SFDK",
    "Rayden",
    "Ayax",
    "Foyone",
    "Tote King",
    "ZPU",
    "LNDC",
    "Fernando Costa",
  ],
};
const raperosDominicana = {
  "Republica Dominicana": ["Original Juan", "Ariana Puello", "Lapiz Conciente"],
};
const raperosUSA = {
  "Estados Unidos": [
    "Nas",
    "Roc Marciano",
    "Sean Price",
    "Jay Z",
    "Buckshot",
    "Outkast",
    "KRS One",
    "J Cole",
    "Method Man",
    "Kendrick Lamar",
    "Eminem",
    "Notorious BIG",
    "Talib Kweli",
  ],
};
const raperosMexico = {
  Mexico: [
    "Aleman",
    "Snow Tha Product",
    "C-Kan",
    "Cartel de Santa",
    "Bocafloja",
    "MC Davo",
  ],
};

// Crear instancias de las clases
const raperosMundo = new Raperos({
  ...raperosVenezuela,
  ...raperosCuba,
  ...raperosEspana,
  ...raperosDominicana,
  ...raperosUSA,
  ...raperosMexico,
});

const raperosEspanol = new RaperosEnEspanol({
  ...raperosVenezuela,
  ...raperosCuba,
  ...raperosEspana,
  ...raperosDominicana,
  ...raperosMexico,
});

const raperosIngles = new RaperosEnIngles({
  ...raperosUSA,
});

// Mostrar resultados
console.log("==== Resultados de Raperos Mundo ====");
console.log("Raperos en todo el mundo:");
console.log(raperosMundo.objeto);

console.log("\nFiltrar raperos con 'ZPU' en el nombre:");
const raperosConZPU = raperosMundo.filtrarRaperosPorNombre("ZPU");
console.log(raperosConZPU);

console.log("\nObtener rapero en el índice 3:");
const raperoEnIndice3 = raperosMundo.obtenerRaperoPorIndice(3);
console.log(raperoEnIndice3);

console.log("\n==== Resultados de Raperos en Español ====");
console.log("Raperos en español:");
console.log(raperosEspanol.objeto);

console.log("\nFiltrar raperos con 'Kase-O' en el nombre:");
const raperosConKaseO = raperosEspanol.filtrarRaperosPorNombre("Kase-O");
console.log(raperosConKaseO);

console.log("\nObtener rapero en el índice 1:");
const raperoEnIndice1 = raperosEspanol.obtenerRaperoPorIndice(1);
console.log(raperoEnIndice1);

console.log("\n==== Resultados de Raperos en Inglés ====");
console.log("Raperos en inglés:");
console.log(raperosIngles.objeto);

console.log("\nFiltrar raperos con 'Eminem' en el nombre:");
const raperosConEminem = raperosIngles.filtrarRaperosPorNombre("Eminem");
console.log(raperosConEminem);

console.log("\nObtener rapero en el índice 5:");
const raperoEnIndice5 = raperosIngles.obtenerRaperoPorIndice(5);
console.log(raperoEnIndice5);
