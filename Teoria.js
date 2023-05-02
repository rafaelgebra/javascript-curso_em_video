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

                Aula 7  - Operadores (PARTE1)

                        1 - aritimético

Soma                    +       5 + 2 -> 7
Subtroção               -       5 - 2 -> 3
Multiplicação           *       5 * 2 -> 10
Divisão real            /       5 / 2 -> 2.5
Divisão inteira         %       5 % 2 -> 1 ("Resto da Divisão inteira" )
Potência                **      5 / 2 -> 25

Muito importante tomar cuidado com a precedência de operadores.

1 - ()
2 - **
3 - * / %       "Entre esses operadores aritiméticos não tem prioridade, é calculado o que aparecer primeiro"
4 - + -         "Entre esses operadores aritiméticos não tem prioridade, é calculado o que aparecer primeiro"

Ex:

var a = 5+3             -> 8
var b = a%5             -> 5
var c = 5*b** 2         -> 45
var d = 10-1/2          -> 6
var e = 6*2/d           -> 2
var f = b%e+4/e         -> 3


                                2 - atribuição

Auto-atribuição         Auto-atribuição (simplificada)          operadores de incremento

var n = 3
n = n + 4               n += 4  -> 7                            n ++
n = n - 5               n -= 5  -> 2                            n --
n = n * 4               n *= 4  -> 8
n = n / 2               n /= 2  -> 4
n = n ** 2              n **= 2 -> 16
n = n % 5               n %= 5  -> 1

                Aula 8 - Operadores (PARTE2)

                        3 - relacionais

maior           >       5>2     -> true
menor           <       7<4     -> false
maior ou igual  >=      8>=8     -> true
menor ou igual  <=      9<=7    -> false    
igual           ==      5==5    -> true
diferebte       !=      4!=4    -> false

todo resultado dessas espreções com operadores RELACIONAL é boolean (true, 'verdadeiro')( false, 'falso')

5 == 5          -> true         operadores de identidade
5 == '5'        -> true         operadores de identidade
5 === '5'       -> false        operador de igualdade restrita
5 === 5         -> true         operador de igualdade restrita
5 !== 5         -> false        operador desigual restrito

=== se le "identico". Aqui é analizado que o conteúdo é igual e do mesmo tipo. 
!== se le "desigual"


                        4 - lógicos

!    ->   negação     -> não    tem duas opções (true ou false)                  
&&   ->   conjunção   -> e      Esse operador faz uma comparação entre dois valores lógicos. Operador binario
||   ->   disjunção   -> ou

                        Operador ! (não) é o oposto da afirmação

        ! -> true  -> false
        ! -> false -> true

                        Operador && (e) só aceita se os dois afirmações forem verdadeiras

        true  && true   ->      true           
        true  && false  ->      false
        false && true   ->      false
        false && false  ->      false

                        Operador || (ou) Esse operador aceita se umas das duas afirmações forem verdadeiras. Se as duas afirmações forem falsa, entrao da true

        true  || true   ->      true           
        true  || false  ->      true
        false || true   ->      true
        false || false  ->      false  
 
        
                Orderm de precedência de todo os operadores até agora

1 - aritimético, tem ondem de precedência interna.
        

        Esses são os operadores aritiméticos

        Soma                    +       5 + 2 -> 7
        Subtroção               -       5 - 2 -> 3
        Multiplicação           *       5 * 2 -> 10
        Divisão real            /       5 / 2 -> 2.5
        Divisão inteira         %       5 % 2 -> 1 ("Resto da Divisão inteira" )
        Potência                **      5 / 2 -> 25
        
        Essa é a onder interna dos operadores aritiméticos
                1 - ()
                2 - **
                3 - * / %       "Entre esses operadores aritiméticos não tem prioridade, é calculado o que aparecer primeiro"
                4 - + -         "Entre esses operadores aritiméticos não tem prioridade, é calculado o que aparecer primeiro"


2 - relacionais, não tem ordem de precedência interna

        maior           >       5>2     -> true
        menor           <       7<4     -> false
        maior ou igual  >=      8>=8     -> true
        menor ou igual  <=      9<=7    -> false    
        igual           ==      5==5    -> true
        diferebte       !=      4!=4    -> false                

3 - lógicos, tem ordem de precedência interna

        1° !    ->   negação     -> não                   
        2° &&   ->   conjunção   -> e      
        3° ||   ->   disjunção   -> ou
               
                        5 - ternário

Recebe esse nome porque a operação tem três (3) parte (operandos)

        teste ? true : false

1° o primeiro bloco é o teste lógico
2° o segundo bloco é se o resultado for verdadeiro
3° o terceiro bloco é se o resultado for falso

        Ex:      media >= 7 ? "aprovado" : "reprovado"
// dependendo do teste lógico o resultado vai ser aprovado ou reprovado



                        Módulo C - Entendendo o DOM/Document Object Model

Vertende web do JavaScript, uma poderoso ferramenta que esta dentro do navegador, um conjunto de objetos do JavaScript.

                        Aula 9 - Árvore DOM 

A raiz da árvore DOM é o window (tudo dentro do JS esta dentro do window 'janela') e dentro do window tem varios outros objetos.

Tudo que aparece na árvore DOM, são elementros e esses elementros podem ser selecionados

1° Por Marca
2° Por ID
3° Por Nome
4° Por Classe
5° Por Seletor CSS

                        Marca
O comando é getElementsByTagName() // seleciona por TAG
Ex:
<script>
var p1 = window.document.getElementsByTagName('p')[0]
window.document.write('Esta escrito assim: ' + p1.innerText)
p1.style.color = 'black'

// o innerText pega somento o texto sem (as filhas) sem a formatação
// o innerHTML pega o texto e (as filhas) as formatações
</script>

                        ID
O camando é getElementById() // Seleciona por ID

                        Nome
O comando é getElementsByName() // seleciona por Name.
Quando tem mais de um objeto, usa depois dos parênteses () os colchetes []

                        Classe
O comando é getElementsByClassName() // Seleciona por class

                        Seletor
O comando é querySelector()     // é mais facil para selecionar um objeto e mais novo
O comando é querySelectorAll()  // a única diferena é que esse seletor é no plural