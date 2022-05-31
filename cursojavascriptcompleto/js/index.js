//alert("ola mundo ")
//document.getElementById("texto").innerHTML="meu primeiro texto<b>JS</br>!";
//console.log("oi isso é um console.log");
//Declarações
//let a,b,c; a=5;b=6;c=7;
//sintaxe
//var a = 1;
//var b = 5;
//var c = a + b; //posso varios sinais artimetico
//console.log(c);
//Comentarios
//Essa aula bem curta de comentarios
/* Vamos entender Variáveis
Variáveis são "recipientes" onde podemos armazenar informações que 
podem variar, ou seja, podem ter qualquer tipo de valor .

No Javascript temos 3 palavras- chave para declarar variáveis :
-> var
-> let
-> const
*/

//Declaração de variaveis 
//var a,b,c;

// atribuição dos valores
//a=2;
//b=3;
//c= a + b;

//alert(c);

/*var x = 10; //aqui é 10

{
    var x = 2; //aqui é 2 //pode usar let ou const para declarar 
}

//Aqui também vai ser 2 
document.getElementById("texto").innerHTML = x;*/

//Operadores

/* Vamos entender Operadores:
-> Os operadores Javascript são usados para atribuir valores, comparar
valores,executar operações aritmeticas e muito mais.

são os sinais  que usamos: + - * / = ++= -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritmeticos (matematicos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicional (Ternário)
6) Operadores Lógicos
*/

//var valor1, valor2, total;
//valor1 = 5;
//valor2 = 2;

//total = ++valor1;
//alert(total);
//alert('o valor1 ficou:' + valor1);

/*var valor1, valor2,total;
valor1 = "Anderson ";
valor2 = "Moreira";

total = valor1 + valor2;
alert(total);*/

//var valor1, valor2,total;
//valor1 = 8;//Operadores de Comparação ==
//valor2 = 10;

//total = (valor1 == valor2);//true (verdedadeiro)ou false(falso)
//alert(total);

/*
var valor1, valor2,total;
valor1 = 8;//Operadores de Comparação ==
valor2 = 12;

total = (valor1 <= 9);//true (verdedadeiro)ou false(falso)
alert(total);*/
/*
var idade,eleitor;
idade = 25;
eleitor = (idade<18) ? "Não Eleitor": "Sim, eleitor";

alert('A resposta é ' + eleitor + 'a idade dele é de:' + idade);*/

/*var idade,eleitor,resultado;
idade = 65;
eleitor = (idade<18) ? "Não Eleitor": "Sim, eleitor";

resultado = (idade > 60 && idade < 70);//true ///false

alert(resultado);*/

/*var idade,eleitor,resultado;
idade = 65;
eleitor = (idade<18) ? "Não Eleitor": "Sim, eleitor";

resultado = (idade === 65 || idade === 72);

alert(resultado);*/
/*
var idade,eleitor,resultado;
idade = 71;
eleitor = (idade<18) ? "Não Eleitor": "Sim, eleitor";

resultado = (idade ===65);//true // false && || !

alert(resultado); */

/*Funções 
Uma função Javascript é um bloco de codigo projetado para executar uma tarefa especifica.
E como uma pequena "fabrica" onde você faz uma entrada e ele te dá uma saida.
Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo codigo.

uma função Javascript é executada quando "algo" a invonca (chama-a).
*/
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10); */






