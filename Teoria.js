//Para dar comentarios usar o seguinte

// -> //comentario em uma inica linha - JS

/**/ -> /*Comentario 
        em mais de uma 
        linha*/ - JS CSS

//<!-- --> <!-- comentario em HTML-->

                        Modulo A
                Conhecendo JavaScript.

HTML -> Conteúdo
CSS -> Estilo
JS-> Interação


                    HTML
Texto, marcações e imagens -> Não se programa em HTML (HTML não é linguagem de programação).

                    CSS
Deixar tudo arrumado e bonito, organizado e armonico. -> Não se programa em CSS ( CSS não é linguagem de programação).

                    JS
O papel do JS faz o papel de interação, e até consegue fazer alteração no HTML. -> O JS (JS é considerado linguarem de programação).


                Evolução do javaScript

1970 - a guerra Fria USA e União Sovietica
os USA criou a DARPA (foi criada para criar tecnologia para a Guerra), Arpanete (foi criada para ter comunicação entre computadores militar, governo e univercidade. Atualmente chama internet).

Software para trabalhar com JS
Google chrome
Visual Studio Code (uma das opções)
node.js  Para linux só instalar a versão mais recente (curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs)


No JS não precisa do ; mas o JS aceita sem problema.


                       Modulo B

        Aula 5 - Váriaveis e Tipos de Primitivos

Váriavel em JS é um pouco diferente

No JS moderno, além de utulizar a palavra (var), também podemos usar a palavra (let)
 1 sinal de = se fala 'recebe'
 A váriaveis são locais da memórias dos computador para armazenar dados.

Em JS pode usa 3 tipos de aspas.
Aspas duplas ""
Aspas simpres ''
Crase ``
E cada uma tem uma importancia.

Para identificar cada váriavel tem um nome definido.
O nome se chama identificador e tem regras para isso.

                Regra dos nomes das Variáveis (identificador)

1 - Podem começar cim uma letra, $ ou _
2 - NÃO pode começar com números
3 - É possível usar letras e numeros juntos "Não COMEÇANDO com números"
4 - É possivel usar acentros e símbulos
5 - NÃO pode usar o espaço entre as letras
6 - NÃO pode usar palavras RESERVADAS

                Dicas para escolher o nome das variáveis

1 - Maiúsculas e minúsculas fazer diferença
2 - Tente escolher o nome coerente para as variáveis
3 - Evite ser um programador 'programador alfabeto' ou um 'programador contator'

        Resumindo 
As variáveis server para armazenar dados


                Tipos primos primordiais

Number = 1 2  56 234 -12 -345 4.56 -34.5
String = "Google" 'JavaScript' `Maria`
boolean = true folse

Para saber o tipo de algumas coisa pode usar usar (typeof)

                Aula 6 - Tratamento de Dados

Manupulação de dados.
Exemplo:

                Converter conteudo de string para numero

var n1 = Number.parseInt(window.prompt('Digite um número')) // converter o conteudo nativo strig para numero inteiro.
var n2 = Number.parseFloat(window.prompt('Digite outro numero'))// converter o conteudo nativo strig para numero float.
var s = n1 + n2
window.alert('A soma dos valores é ' + s)

Essa sintaxa é usada nas versões mais antigas.
Nas verções mais novas é usado somente Number(n), mas se quiser forçar o sistema ao tipo Int ou Float só usar, Number.parseInt() para numeros inteiros e Number.parseFloat() para numeros flutuantes



Converter conteudo numerido para strind
só por na frente.
Exemplo:

1 + String(s) -> '1'
        ou
1.toString() -> '1'

                Formatação String (Template string)

Fica mais facil usar os templade string ${} para colocar os dados.
Em vez de fazer assim:
'O aluno ' + nome + ' com '+ idade + ' anos ' + ' tirou a nota ' + nota
'O aluno Rafael com 34 anos tirou a 5.5'

Pode ser feito assim:
`O aluno ${nome} com ${idade} anos tirou a ${nota}`
'O aluno Rafael com 34 anos tirou a 5.5'

O resultado é o mesmo, porém é muito mais facil escrever com template string ${}
Mais um exemplo:

var nome = window.prompt('Qual o seu nome?')
document.write(`O seu nome tem ${nome.length}`)


Vamos usar bastante.
Aspas '' simples e duplas "" para strings simples (sem interpolação)
O uso da Crase `` para strings (usa template string)

Exemplos:
/*
var s = 'JavaScript
'Eu estou aprendendo s'         // não faz interpolação
'Eu estou aprendendo' + s       // usa concatenação
´eu estou aprendendo ${s}       // usa template string
*/





                Aula 7 - Operadores (PARTE1)

                Aula 8 - Operadores (PARTE2)





