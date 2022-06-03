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

//função de soma

//function soma(valor1,valor2){
  //  return valor1 + valor2;
//}

//FUNÇÃO DE COTAÇÃO DO DOLAR
/*
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}
var  valorReal = 7.89;
var  cotacao = 5.08;

var total = realParaDolar(valorReal,cotacao);

alert("o valor em real R$:" + valorReal+" o valor em dólar U$ é:"+total);*/
/*
function alertaHello(){
    alert("Olá pessoal");
}
alertaHello();
*/
/*
function paraCelsius(valorFhrenheit){
    return (5/9) * (valorFhrenheit-32);
}

var x = paraCelsius(77);

alert("A temperatura é de "+x+ "graus celsius");
*/

/* Objetos 
Objetos são basicamente variáveis com muitos valores dentro.

Ex:const carro = {marca:"ford",modelo:"ka",ano 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade.

*/

/*
const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"ABC-1234",
    buzina:function(){ alert(biiiiiiiiiiiiii)},
    completo:function(){
        return "A marca é "+this.marca+" e o modelo é "+ this.modelo;
    }
};

console.log(carro.completo());

//console.log(carro);
*/

/*

Eventos
Eventos são ações disparadas pela intenção dos usuarios na pagina.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:
onclick -> Disparador quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco.Válido para input
onchange -> Disparado quando existe uma mudança  no conteudo."Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada.Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/

/*
function eventoClick(){
   // alert('Acionou um evento de click');
    document.body.style.backgroundColor = "red";
}

*/

/*

function eventoDblClick(){
     alert('Evento de clique duplo');
    
 }

 function viraVermelho(){
     let div = document.getElementById("teste");
     div.style.backgroundColor = "red";
 }

 function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append('O mouse moveu<br>');
}
*/

 
 










