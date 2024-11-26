Usando os operadores necessários e as condicionais “if, eles e eles if” Responda as questões de 1 até 10:

1)Verifique se um número é positivo ou negativo

var num = parseInt(prompt("digite um numero"))

if (num < 0){
  document.write("esse é negaivo")
}
else{document.write("é positivo")}

2)Verifique se um número é par ou ímpar:

var num = parseInt(prompt("digite um numero"))

if (num % 2 ===0){
  document.write("esse é par")
}
else{document.write("é impar")}



3)Classifique uma nota de 0 a 10, da seguinte forma: se for igual
 ou maior que 9 a nota é “A”, se for igual
a 8 nota “B”, se for igual a 7 nota “C”, se for igual a 6 nota “D”,
 se for igual a 5 ou menor, nota “F”.


var num = parseInt(prompt("digite um numero"))

if(num >= 9 ){
document.write(num," nota A")
}
else if (num == 8){
  document.write( num ," nota B")
}
else if (num == 7){
document.write(num," nota C")
}
else if(num == 6){
  document.write(num," nota D")
}
else if (num <= 5){document.write(" nota F")}



4) Verifique se um ano é bissexto:

var ano = prompt("Digite um ano:");

ano = Number(ano);

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(ano + " é um ano bissexto.");
} else {
    alert(ano + " não é um ano bissexto.");
}


5)Verifique se um número está entre 10 e 20:

var num = parseInt(prompt("Digite um numero"))
if(num>=10 && num<=20){
  document.write("Esta entre 10 e 20")
}else{
  document.write("nao esta entre os numeros")
}



6)Determine o maior de dois números:

var num1 = parseInt(prompt("Digite um numero"))
var num2 = parseInt(prompt("Digite um numero"))

if (num1 > num2){document.write("primeio numero é maior")}
else {document.write("o segundo numero é maior")}

7)Verifique se um caractere é uma vogal ou consoante:

var letra = (prompt("digite uma letra"));
if ("aeiou".includes(letra)) {
        document.write("A letra '" + letra + "' é uma vogal.");
    } else if (letra.length === 1 && letra.match(/[a-z]/)) {
     
        document.write("A letra '" + letra + "' é uma consoante.");
    } else {
        document.write("Por favor, insira apenas uma letra.");
    }

8)Verifique se um número é múltiplo de 3 ou 5:


var numero = parseInt(prompt("Digite um número:"));

if (numero % 5 == 0) {
    document.write(numero + "  é múltiplo de 5.")}
    else if( numero % 3 ==0){
      document.write(numero+ "  é multiplo de 3")
    }
    else{
      document.write("insira um numero correto")
    }


9)Determine a fase do dia com base na hora (0-23):
var tempo = parseInt(prompt("Digite a hora"))
if(tempo>=5 && tempo<12){
  document.write("é de manhã")
}
else if(tempo>=12 && tempo<=17){
  document.write("é de tarde")
}
else if(tempo>=18 && tempo<=23){
  document.write("é de noite")
}
else{
  document.write("nao se encaixa nos horarios")
}



10)Verifique se uma pessoa é maior de idade:

var idade = parseInt(prompt("Digite a sua idade"))

if(idade >= 18){
  document.write("É de maior")
}
else{document.write("é de menor")}

11) Use Switch case para verificar o dia da semana (0 - Domingo, 1 - Segunda, etc.):

var dia = parseInt(prompt("Digite dia"))

switch (dia){
  case 0: {document.write("domingo")}
  break;
case 1:{document.write("segunda")}
break;
case 2:{document.write("terça")}
break;
case 3:{document.write("quarta")}
break;
case 4:{document.write("quinta")}
break;
case 5:{document.write("sexta")}
break;
case 6:{document.write("sabado")}
break;
default: document.write("digite de 0 a 6");
}

12) Use Switch case para classificar uma fruta:

var fruta = parseInt(prompt("Digite um numero"))

switch (fruta){
  case 0: {document.write("maça")}
  break;
case 1:{document.write("banana")}
break;
case 2:{document.write("laranja")}
break;
case 3:{document.write("limão")}
break;
case 4:{document.write("morango")}
break;
case 5:{document.write("melancia")}
break;
case 6:{document.write("maracuja")}
break;
default: document.write("digite de 0 a 6");
}

13) Use Operador lógico AND (&&) para verificar se um número está entre 10 e 20:

let numero = 15; 

if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20.");
} else {
    console.log("O número não está entre 10 e 20.");
}

14) Use o operador ternário para verificar se uma pessoa pode votar (maior de 18 anos):

let idade = 20; 

let podeVotar = (idade >= 18) ? "A pessoa pode votar." : "A pessoa não pode votar.";

console.log(podeVotar);

15) Use Operador lógico OR (||) para verificar se uma pessoa é criança ou idosa:

let idade = 10; 

if (idade < 12 || idade >= 65) {
    console.log("A pessoa é criança ou idosa.");
} else {
    console.log("A pessoa não é criança nem idosa.");
}

16) Use Switch case para verificar a estação do ano com base no mês:

let mes = 3; 

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("É verão.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("É outono.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("É inverno.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("É primavera.");
        break;
    default:
        console.log("Mês inválido. Por favor, insira um número de 1 a 12.");
}


17) Use Operador ternário encadeado para classificar uma nota entre 0 e 10, da seguinte forma: se for
igual ou maior que 9 a nota é “A”, se for igual a 8 nota “B”, se for igual a 7 nota “C”, se for igual a 6 nota
“D”, se for igual a 5 ou menor, nota “F”.
  
  let nota = 8; 

let classificacao = 
    (nota >= 9) ? "A" :
    (nota === 8) ? "B" :
    (nota === 7) ? "C" :
    (nota === 6) ? "D" :
    (nota <= 5) ? "F" :
    "Nota inválida"; 

console.log(`A classificação da nota ${nota} é: ${classificacao}`);
