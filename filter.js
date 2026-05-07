//Filter

//callback
/*array.metodo((element, index, array) => {

});*/

//forEach
/*const frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element);
});

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}*/

//forEach
/*const alunos = ["Lucas", "Maria", "João"];

alunos.forEach((nome, index) => {
    console.log(`${index + 1} aluno: ${nome}`);
});*/

//Filter

/*const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

/*const novoArray = array.filter((element) => {
    return condicao;
});*/

/*const maiores = people.filter((person)=> {
    return person.age >= 18;
});
console.log(maiores)
*/
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(pares)
*/

//Crie um array com vários números.
//Use filter para mostrar apenas os números maiores que 50.

/*const nums = [10,55,80,20,00];

const maiores = nums.filter((n) => {
    return n <50;
})

console.log(maiores);
*/

//Map
/*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "João", age: 18},
    {name: "Ana", age: 22},
];*/

/*const novoArray =  array.map((element) => {
    return novoValor;
});*/

/*const nomes = people.map((person) => {
    return person.name.toUpperCase();
});
console.log(nomes);
*/

/*const numeros = [1,2,3,4,5];

const dobro = numeros.map((numero) => {
    return numero * 2;
})
console.log(dobro);

const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map ((produto) => {
    return `Produtos: ${produto}`
});
console.log(frases)
*/

/*const pessoas = [
    {nome: "Lucas", idade: 35},
    {nome: "Maria", idade: 17},
];

const resultado = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >= 18
    }
});
console.log(resultado);
*/

//Use map para transformar um array de preços em preços com desconto de 10%.

/*const precos = [100, 200, 300];
const numeros = precos.map ((preco) => {
    return preco * 0.9;
})
console.log(numeros);
*/

//Use map para transformar: [1,2,3,4] em ["Número 1", "Número 2"...]

/*const numeros = [1,2,3,4];
const resultado = numeros.map ((numero) => {
    return `Número: ${numero}`;
})
console.log(resultado);
*/

//Find
/*const item = array.find((element) => {
    return condicao;
});
*/

/*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "João", age: 18},
    {name: "Ana", age: 22},
];*/

/*const maria = people.find((person) => {
    return person.name === "Maria";
});
console.log(maria);
*/

//Encontrar número
/*const numeros = [5,10,15,20,25];
const encontrado = numeros.find((numero) => {
    return numero > 18;
});
console.log(encontrado);
*/

/*const usuarios = [
    {id:1, nome:"Lucas"},
    {id:2, nome:"Maria"},
    {id:3, nome:"João"}
];
const usuario = usuarios.find((u) => {
    return u.id === 2;
});
console.log(usuario);
*/

//Encontre o primeiro número negativo do array.
/*const numeros = [5,8,-2,10,-7];
const negativo = numeros.find((numero) => {
    return numero < 0;
});
*/

//Reduce
/*Array.reduce((acc, element) => {
    return novoACC;
}, valorInicial);
*/

/*const numeros = [10 , 20, 30];

const soma = numeros.reduce((acc, numero) => {
    console.log("ACC:", acc);
    console.log("Número atual:", numero);
    return acc + numero;
}, 0);
console.log(soma);
*/

/*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "João", age: 18},
    {name: "Ana", age: 22},
];*/
/*const totalIdade = people.reduce((acc, person) => {
    return acc + person.age;
}, 0);
console.log(totalIdade)
*/

/*const nomes = people.reduce((acc, person) => {
    return acc + " " + person.name;
}, "");
console.log(nomes);
*/

//Multiplicar números
/*const numeros = [2,3,4];
const Multiplicar = numeros.reduce((acc, numero) => {
    return acc * numero;
}, 1);
console.log(Multiplicar)
*/

//Somar preços de produtos
/*const carrinho = [
    {produto: "Mouse", preco:50}
    {produto: "Teclado", preco:100}
    {produto: "Monitor", preco:900}
];
const total = carrinho.reduce((acc, item) => {
    return acc + item.preco;
}, 0);
console.log(total);
*/

//Contar quantidade de palavras de letras
/*const palavras = ["oi","javascript","html"];

const totalLetras = palavras.reduce((acc, palavra) => {
    return acc + palavra.length;
}, 0);
console.log(totalLetras);
*/

//Reduce

//Use reduce para descobrir: qual o maior número do array.
/*const numeros = [10, 45, 7, 99, 32];

/*const maior = numeros.reduce((acc, numero) => {
    if (numero > acc) {
        return numero
    }
    return acc; 
}, numeros [0]);

console.log(maior);
*/

//Reduce
/*const produtos = [
    {nome: "Mouse", preco:50},
    {nome: "Teclado", preco:200},
    {nome: "Monitor", preco:900},
    {nome: "Notebook", preco:3000},
];

const resultado = produtos.filter((produtos) => {
    return produtos.preco > 100;
})
.map ((produto) => {
    return produto.nome;
});
console.log(resultado);
*/

/*const filmes = [
     {nome: "Vingadores", nota:9},
     {nome: "Batman", nota:7},
     {nome: "Dragon ball", nota:10},
     {nome: "Matrix", nota:8},
];*/
//Use filter para pegar notas >= 8
//Use map para pegar apenas nomes
//Use find para encontrar "Batman"
//Use reduce para somar todas as notas

/*const filmesBons = filmes.filter((filme) => {
    return filme.nota >= 8;
)};
console.log (filmesBons);

const nomes = filmes.map ((filmes) => {
    return filmes.nome;
});
console.log(nomes);

const batman = filmes.find((filme) =>) {
    return filme.nome === "Batman";
});
console.log (batman);

const somaNotas = filmes.reduce ((acc, filme) => {
    return acc + File.nota;
});

console.log (somaNotas);
*/

//Switch
/*const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default: console.log("Dia inválido!")
        break;
}
*/

/*const n1 = 10;
const n2 = 5;

const operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log ("Operação inválida!")
}
*/

//Faça um sistema de notas:
//A = Excelente
//B = Bom
//C = Regular
//D = Ruim

/*const nota = prompt("Digite uma nota : A, B, C ou D");

switch (nota) {
    case "A":
        console.log ("Excelente")
        break;
    case "B":
        console.log ("Bom")
        break;
    case "C":
        console.log ("Regular")
        break;
    case "D":
        console.log ("Ruim")
        break;
    default:
        console.log ("Nota inválida!")
}
*/

//Crie um sistema de menu de videogame:

//1 = Jogar
//2 = Configurações
//3 = Créditos
//4 = Sair

/*let opcao;
do {
    opcao = Number(prompt(`
        === Menu ===
        1 - Jogar
        2 - Configurações
        3 - Créditos
        4 - Sair
        `));

        switch (opcao) {
            case 1:
                console.log("Iniciando jogo...")
                break;
            case 2:
                console.log("Abrindo configurações...")
                break;
            case 3:
                console.log("Criado por Lucas...")
                break;
            default:
                break;
        }
} while (opcao ! == 4);
 */

// Exercícios Map, Find, Filter e Reduce

//exercicio 1 , Filter

const notas = [4,7,9,3,10,5];
const notasAprovadas = notas.filter((nota => nota >= 7),
    
)
console.log(notasAprovadas)

//Exercicio 2 , Filter

const palavras = ["sol", "mar", "computador", "lua", "código"];
const palavtras = palavras.filter((palavra => palavra.length >= 4),
    
)
console.log(palavtras)

// Exercicio 3 , Filter

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];
const animaisComc = animais.filter((animal => animal[0] === "c"));
console.log(animaisComc);





//Exercicio 1 Find
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];
const filmeComB = filmes.find((filme => filme[0] === "B"
));
console.log(filmeComB);

//exercicio 2 find

const numeros = [2, 4, 6, 9, 12, 15];
const numeroImpar = numeros.find((numero => numero % 2 !== 0));
console.log(numeroImpar);

//exercicio 3 find 

const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];
const alunoAprovado = alunos.find((aluno => aluno.nota >= 7));
console.log(alunoAprovado);





// Exercicio 1 Map

const temperaturas = [20,25,30,15];
const temperaturasFahrenheit = temperaturas.map((temp => temp * 1.8 + 32));
console.log(temperaturasFahrenheit);

//Exercicio 2 Map
const produtos =["camisa","calça","Sapato"];
const produtosCompreco = produtos.map((produto =>{
    return "Produto:"+ produto.toLocaleUpperCase();
}));
console.log(produtosCompreco);

// Exercicio 3 Map
const numeros =[1,2,3,4];
const numerosQuadrado = numeros.map((numero => numero * numero));
console.log(numerosQuadrado);




// Exercicio 1 Reduce
const valores = [100, 200, 50, 150];
const valorTotal = valores.reduce((acc, valor)=> acc + valor, 0);
console.log(valorTotal);

// Exercicio 2 Reduce
const palavras = ["JS", "é", "muito", "legal"];
const frase = palavras.reduce((acc, palavra)=> acc + ""+ palavra);
console.log(frase);

//Exercicio 3 reduce
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc , numero)=> acc + numero, 0);
console.log(soma);