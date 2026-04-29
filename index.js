let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá, Mundo"
console.log(minhaVariavel);

minhaVariavel = true
console.log(minhaVariavel)

let numero =10;
let texto = "20"

let resultado = numero + texto;
console.log(resultado)

// Isso é um comentario de linha única
/*
Isso é um comentário
de múltiplas linhas
*/
console.log("Isso vai executar"); // mas isso aqui é ignorado

let nome = "Lucas";
let Nome = "Maria";
let NOME = "João";
console.log(nome)
console.log(Nome)
console.log(NOME)

//Palavras Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter letras, números, _ ou $
//Não pode: começar com número
//Não pode ter espaços
//Não pode usar: acentos

let nome2;
let nomeCompleto;
let _contador;
let idade2;

// Nomes de funções começam com verbos:
function calcularMedida(){

}
function buscarUsuario(){

}

//Tipos Primitivos
//NUMBER - Número
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3 = "Lucas"
console.log(typeof nome3)

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//Null - ausencia internacional de valor
const vazio = null;
console.log(typeof  vazio);

//UNDEFINED - variável sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - números muitos grandes
const grande = 9007199254740993n;
console.log(typeof grande)

//Valores Especiais: NaN e Infinit
//// INFINIT - divisão por zero
console.log(5 / 0);
console.log(-5 / 0);

//NaN (Not a number)
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se é NaN
console.log(Number.isNaN ("abc" * 3));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade

    if (Number.isNaN(total)) {
        console.log("Eroo: preço ou quntidade inválidos");
        return 0;
    }
    return total;
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));

//Strings e Template Literals
// // Aspas simples, duplas ou crase
const nome4 = 'Lucas';
const nome5 = "Maria";
const nome6 = `João`;

//Propriedades e métodos
const nomeCompleto2 = "Lucas Lacerda";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLocaleLowerCase());

// TEMPLATE STRING (crase) - permite inserir variáveis
const nome7 = "Lucas";
const idade = 20;

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos.`);

//Conversão de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));

//const texto2 = prompt("Digite um número:");
//console.log(texto2 + 5);
//alert(text02 +5);

const numero2 = Number(prompt("Digite um número:"));
console.log(numero2 + 5);
alert(numero2 + 5);~

//Operadores Aritméticos
console.log(2 + 3)  //soma
console.log(5 - 2)  //subtração
console.log(4 * 2)  //multiplicação
console.log(10 / 2)  //divisão
console.log(10 % 3)  //resto de divisão
console.log(2 ** 3)  //potencia

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

//Operadores de Comparação
console.log(5 == "5"); //true - valores são iguais (após conversão)
console.log(5 == 5); //true - valores são iguais

console.log(5 == "5")  //false - tipos diferentes (number vs string)
console.log(5 == 5)  //true - valor e tipos iguais

console.log(5 !="5"); //false - valores NÂO são diferentes (após conversão)
console.log(5 !=7); //true - valores SÂO diferentes

console.log(5 !=="5"); //true - SÂO diferentes (tipos diferentes)
console.log(5 !==5); //false - NÂO são diferentes (identicos)

console.log(!true);
console.log(!false);

const idade3 =15;
console.log(idade3 >= 18);
console.log(!(idade3 >= 18));

const nome8 = "";
const nomeVazio = nome ==="";
console.log(nomeVazio)

const nomeNaoVazio = nome8 !== "";

console.log(!!true);

//Estrutura Sequencial (Entrada - Processamento - Saída)

//Entrad
const nome9 = prompt("Digite seu nome:");
//processamneto
//saída
console.log("Olá," + nome9 + "!");

//Entrada Soma de dois números
const n1 = Number(prompt("Digite o primeiro número"))
const n2 = Number(prompt("Digite o segundo número"))
//procesamneto
const soma = n1 + n2;
//Saída
alert("Resultado:" + soma);

//Dopro de um número
//const numero =Number(prompt("Digite um numero:"));
const dobro = numero *2;
alert(`O dobro de ${numero} é ${dobro}`);

//Média de duas notas
const  nota1 = Number(prompt("Primeira Nota:"));
const  nota2 = Number(prompt("Segunda Nota:"));

const media = (nota1 + nota2) / 2;

alert(`Média: ${(media.toFixed(1))}`);

//Idade detalhada
//Converter anos em meses, dias, horas e minutos.

//Faça um programa que leia a **idade de uma pessoa em anos** e mostre a mesma idade aproximada em:

//- Meses
//- Dias
//- Horas
//-Use **365 dias por ano** como simplificação.

const anos = Number(prompt("Digite sua idade em anos:"));

const meses = anos *12;
const dias = anos * 365;
const horas = dias * 24;
const minutos =horas * 60;

console.log('Idade informada: ${anos} anos');
console.log("_______________________");
console.log(meses);
console.log("dias" + dias);
console.log(`${horas} horas`);
console.log(`${minutos} minutos`);

// Celsius - Fahrenheit
//Converter temperatura de Celsius para Fahrenheit.

//Fórmula: F = (C x 9/5) + 32

const celsius = Number(prompt("Temperatura em C:"));

const f = (celsius *9/5) + 32;
console.log(`${celsius} c = ${f.toFixed(1)} F`);