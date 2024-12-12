let nome= prompt("Qual é o seu nome");
let idade= prompt("Quantos anos você tem?");
let linguagem=prompt("Qual linguagem de programação você esta estudando?");
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
//Complementando o codigo
let questao=prompt(`Você gosta de estudar ${linguagem}? n\ Responda com número 1 para Sim ou 2 para Não.`);
if(questao==1){
console.log("MUito bom! Continue estudando e você terá muito sucesso");
}else if(questao==2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}else{
    console.log("Comando Invalido");
}