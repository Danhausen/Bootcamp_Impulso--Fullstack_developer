const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são unicos
console.log('Symbol1 é igual a symbol2: ', symbol1 === symbol2);

//Previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Daniel',
    [nameSymbol2]: 'Ana',
    lastName: 'Hausen'
}

console.log(user);

//Symbols criam propriedades que não são enumerables
for(const key in user) {
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
        
    }
}

console.log('\nPropriedades do objeto user: ', Object.keys(user));
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('\nTodas as propriedades do objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};
