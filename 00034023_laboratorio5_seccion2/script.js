 const nuestroPrimeritoObjeto = {
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

console.log(objetoCongelado, nuevoObjeto) 

