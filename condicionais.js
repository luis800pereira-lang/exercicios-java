//JavaScript: Condiocionaisn(if, else, operadores lógicos)
/*const iadde = 20;
if (idade >= 18) {
    console.log("Maior de idade!");
}

if (idade >= 18) {
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!")
}

//Operadores
const a = 10;
const b = 5;

console.log("10 > 5:", a > b)
console.log("5 > 10:", b > a)

console.log("5 < 10:", a < b)
console.log("10 < 5:", b < a);

console.log("10 >=5:", a >= b);
console.log("10 >= 10:", b >= a);
*/

//Operador de comparação
/*const idade = 20;
const temDocumento = true;
const estaNaLista = true;

if (idade >= 18 && temDocumento && estaNaLista) {
    console.log("Pode entrar!!")
} else {
    console.log("Se lascou!!!")
}

//Operador || (OU / OR)

const temDinheiro = false;
const temCartão = true;
const temPix = false*/

/*if (temDinheiro || temCartão || temPix) {
    console.log("Pode pagar!!")
} else {
    console.log("Não tem como pagar!!")

const usuario = "admin";
const senha ="1234";

const senhaCorreta = (senha === "1234");
const ehAdminn = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdminn && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")
}

if ((ehAdminn || ehGerente) && senhaCorreta) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")


const usuario2 = prompt("Usuario");
const senha2 = prompt("Senha");

const acessoAdmin = (usuario2 ==="admin" && senha2 === "1234");
const acessoUser = (usuario2 === "user" && senha2 === "senha123");

if (acessoAdmin || acessoUser) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado")
}

const nota = 85;

if (nota >= 60) {
    console.log("Aprovado!")
} else if (nota >= 80) {
    console.log("Recuperação");
} else {
    console.log("Reprovado")
}

const temp = Number(prompt ("Temperatura atual C:"));

if (Number.isNaN(temp)) {
    console.log("Temperatura inválida!")
} else if (temp <0) {
    console.log("Abaixo de 0 C");
} else if (temp <=15) {
    console.log("Frio");
} else if (temp <=25) {
    console.log("Agradável")
}else if (temp <=35) {
    console.log("Quente")
}else {
    console.log("Morte")
}

if (Number.isNaN(temp)) {
    console.log("Abaixo de 0 C")
} else if (temp >= 0){
}else if (temp >= 0 && temp <=15) {
    console.log("Frio";)
}else if (temp > 15 && temp <=25) {
    console.log("Agradável");
}else if (temp > 25 && temp <= 35) {
    console.log("Quente");
} else {
    console.log("Morte")
}
}*/


const verde = "verde"
const amarelo = 'amarelo'
const  vermelho = "vermelho"
const cor = prompt("Digite qual cor")
.toLocaleLowerCase()
.trim();

if (cor === verde) {
    console.log("Siga!");
} else if (cor === amarelo) { 
    console.log("Atenção!")
} else if (cor === vermelho) {
    console.log ("Pare!")
} else {
    console.log ("Cor inválida!")
}

//Calculadora de IMC Validada

const peso = Number(prompt("Peso (Kg)"));
const altura = Number(prompt("Altura (m)"));

if (Number.isNaN(peso) || Number.isNaN(altura)) {
    console.log("Digite apenas números!")
} else if (peso <= 0 || altura <= 0) {
    console.log("Peso e altura devem ser positivos!")
} else if (altura > 3) {
    console.log("Altura parece estar errada. Digite em metros (ex. 1.76)");
} else {
    const imc = peso / (altura ** 2);
    console.log(`Seu IMC: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
    console.log("Abaixo do peso!")
} else if (imc < 25) {
    console.log("Peso normal")
} else if (imc < 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}
}

//Calculadora simples
const n1= Number(prompt("Número:"));
const operacao = prompt("Opereção (+, -, *, /):");
const n2 = Number(prompt("Número 2:"));
let resultado;
if (operacao ==="+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
} else {
    alert("Operação invalída!");
}
alert("Resultado: " = resultado)

