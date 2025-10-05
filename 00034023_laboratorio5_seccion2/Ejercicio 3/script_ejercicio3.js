/* const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayunNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

const nombre = 'Fran Quesada';
const escuela = 'Ficticia';

const profesor = { nombre, escuela }

const string = 'mi string'

const objeto = {
    Blockchain: 'es la nueva ventana al mundo de protección de datos en ciberseguridad'
}

objeto.IA = 'los agentes de IA se han aplicado alrededor del mundo un 22%'
objeto.Blockchain = 'el blockchain esta conformada por un conjunto de nodos '

console.log(profesor)

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const { dc: heroesDC } = heroes
console.log(heroes)

const dc = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
}

const { heroes: { batman } } = dc

console.log(dc);
const objeto1 = {
    nombre: 'Fran Quesada',
    edad: 26,
}

const objetoCongelado = Object.freeze(objeto1)

const nuevoObjeto = {
    objetoCongelado: {
        salario: '$15,000',
        localidad: 'Madrid'
    }

}

console.log(objetoCongelado, nuevoObjeto) */


const Estanteria = {
    libros: [{
        nombre: 'EVERY THING IS FUCKED',
        autor: 'Mark Manson',
        leido: false
    },
    {
        nombre: 'BAJO LA MISMA ESTRELLA',
        autor: 'John Green',
        leido: true
    },
    {
        nombre: 'CAZADORES DE SOMBRAS 1 - CIUDAD DE HUESO',
        autor: 'Cassandra Clare',
        leido: true
    },
    {
        nombre: 'BIBLIOTECARIA DE AUSCHWITZ',
        autor: 'Antonio Iturbe',
        leido: false
    },
    {
        nombre: 'CATEDRAL DEL MAR',
        autor: 'Ildefonso Falcones',
        leido: false
    },
    {
        nombre: 'LA LADRONA DE LIBROS',
        autor: 'Markus Zusak',
        leido: true
    },
    {
        nombre: 'PSICOANALISTA',
        autor: 'John Katzenbach',
        leido: false
    }],
    log() {
        const {libros } = this;
        let resultado = ''
        for(const libro of libros) {
            const prefijo = libro.leido ? 'Ya has leido' : 'Aun no has leido' ;
            resultado = `${resultado}
            ${prefijo} = ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado)
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido)
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
        const elementoRandom = librosNoLeidos[indiceRandom]
        console.log(`Te sugiero  ${elementoRandom.nombre} de ${elementoRandom.autor}`)
    }
}

console.log("Libros : ",  Estanteria.libros)
Estanteria.log();
Estanteria.sugerencia();