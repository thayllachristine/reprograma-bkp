## Aula 3/4

## Flex

``display: flex``
Permite alinhar com facilidade elementos lado a lado.
Tem propriedade complementares que permitem alinhar os elementos filhos ao centro, à direita, à esquerda, tanto na horizontal como na vertical.

-----
### ``justify-content``
Alinha itens horizontalmente (eixo x) e aceita os seguintes valores

Atributo | O que faz?
---- | ----
``flex-start`` | se alinham à esquerda do container.
``flex-end`` | se alinham à direita do container.
``center`` | se alinham no centro do container.
``space-between`` | se alinham com distância igual entre eles.
``space-around`` | se alinham com distância igual em torno deles.

----
### ``align-items`` 
Alinha os itens verticalmente (eixo y) e aceita os seguintes valores.

### ``align-self``
Outra propriedade que você pode aplicar para itens individuais.

Atributo | O que faz?
----|----
``center`` | alinham no centro vertical do container
``baseline`` | alinham na linha da base do container.
``stretch`` | esticam para preencher o container.

-----

### ``flex-direction``
Define a direção em que os itens são posicionados no container.

Atributo | O que faz?
---- | ----
``row`` | Itens são posicionados na mesma direção do texto.
``row-reverse`` | Itens são posicionados na direção oposta à do texto.
``column`` | Itens são posicionados de cima para baixo.
``column-reverse`` | Itens são posicionados de baixo para cima.

-----

### ``order``
Em alguns momentos, reverter a ordem de uma coluna ou de um container não é suficiente. Nesses casos, podemos aplicar a propriedade order para itens individuais. Por padrão, itens tem um valor de 0, mas nós podemos usar essa propriedade para alterar para um valor inteiro positivo ou negativo.

-----

### ``flex-wrap``
Atributo | O que faz?
----|----
``nowrap`` | todos são apertados em uma única linha.
``wrap`` | se separam em linhas adicionais.
``wrap-reverse`` | se separam em linhas adicionais em reverso.

-----
### ``flex-flow``
As duas propriedades ``flex-direction`` e ``flex-wrap`` são usadas tão frequentemente juntas que uma propriedade abreviada ``flex-flow`` foi criada para combiná-las. Essa propriedade aceita o valor das duas propriedades separados por um espaço.

Por examplo, você pode usar ``flex-flow: row wrap`` para aplicar a direção de linha e quebrar em múltiplas linhas.

-----

### ``align-content`` 
Para definir como múltiplas **linhas** devem ser espaçadas uma das outras.

Atributo | O que faz?
----|----
``flex-start`` | agrupadas no topo do container.
``flex-end`` | agrupadas no fundo do container.
``center`` | agrupadas no centro vertical do container.
``space-between`` | posicionadas com espaço igual entre elas.
``space-around`` | posicionadas com espaço igual em torno delas.
``stretch`` | se esticam para preencher o container.

Obs.: O ``align-content`` determina o espaçamento entre linhas, enquanto ``align-items`` determina como as linhas como um todo são alinhadas dentro do container. Quando há só uma linha, ``align-content`` não tem nenhum efeito.