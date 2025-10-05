/* const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayunNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

const nombre = 'Fran Quesada';
const escuela = 'Ficticia';

const profesor = {nombre , escuela}

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

const {dc: heroesDC} = heroes
console.log(heroes)

const dc = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman:  {
            nombre: 'Clark Kent'
        }
    }
}

const {heroes : {batman}} = dc

console.log(dc);
const objeto1 = {
    nombre: 'Fran Quesada',
    edad: 26,
}

const objetoCongelado = Object.freeze(objeto1)

const nuevoObjeto = {
    objetoCongelado: {
        salario : '$15,000',
        localidad: 'Madrid'
    }
    
}

console.log(objetoCongelado , nuevoObjeto) */


const shopping_cart = {
    products : [{
        name_product: 'Azucar Morena',
        unity: 1,
        price: 4.50,
    },
    {
        name_product: 'pack de jugos del monte',
        unity: 2,
        price: 1.90,
    }, 
    {
        name_product: 'Tocino de cerdo crudo lb/ 454 g',
        unity: 4,
        price: 2.80,
    }, 
    {
        name_product: 'Pierna de Cerdo entera con hueso lb / 454 g',
        unity: 6,
        price: 3.00,
    }, 
    {
        name_product: 'Polvo Decolorante Issue Maxima aclaracion 30g',
        unity: 2,
        price: 1.40,
    }],

    get precioTotal() {
        let price_unity = 0.00;
        for (let i = 0.00; i < this.products.length; i++) {
            price_unity += this.products[i].unity * this.products[i].price;
        }
        return price_unity;
    } 
}

console.log("Ticket :  " , shopping_cart.products );
console.log("Total a pagar : " , shopping_cart.precioTotal);