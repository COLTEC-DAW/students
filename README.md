[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/fbifata4)
# Exercício 00: Mural dos Estudantes 

Professor: João Eduardo Montandon

**Objetivo:** Nesta lista, você irá praticar seus conhecimentos de Git & GitHub para adicionar suas informações no mural dos alunos do curso.
## Mural dos Alunos

O mural dos alunos é uma página que exibe as informações do GitHub de todos que já passaram pela disciplina ao longo da história do curso.
Você pode acessar essas informações diretamente a partir da página da disciplina, neste [link](https://coltec-daw.github.io/students/).

Nesta prática, você irá exercitar seus conhecimentos a respeito do Git & GitHub para incluir suas informações no mural da sua turma.


## Fork & Clone do Projeto

O primeiro passo consiste em fazer uma cópia do projeto para a sua máquina.
Para isso, você precisará fazer primeiramente o fork do projeto. 
Basicamente, esse procedimento irá gerar uma cópia do repositório da atividade para seu usuário no GitHub, permitindo que você faças as alterações necessárias.

Como o projeto está no GitHub (e portanto versionado em git), você poderá usar o comando `$ git clone` para clonar a estrutura do projeto em sua máquina.

**Tarefa: faça o fork & clone do projeto para sua máquina**

### A pasta `_data`

Você vai observar que o projeto contém diversos arquivos.
A grande maioria deles é responsável por fazer o processamento das informações dos alunos e exibí-los automaticamente na página do mural.
Não se preocupe, você não vai precisar alterar nenhum deles! 
Porém, se você tiver interesse em entender como isso é feito, dê uma olhada no [Jekyll](https://jekyllrb.com/).

Nesta atividade, vamos fazer alterações na pasta [`_data`](_data/).
Essa pasta é responsável por armazenar os dos integrantes do mural. 
Repare também que esta pasta contém vários subdiretórios, um para cada ano em que a disciplina foi dada.
As informações presentes nesse diretório serão processadas pelo Jekyll e então carregadas no arquivo `index.html`.

### O arquivo `jemaf.json`

Ao acessar a pasta `2023`, você vai observar a presença de um arquivo, chamado [`jemaf.json`](_data/2023/jemaf.json).
Ao abrir esse arquivo, você vai observar que ele possui a seguinte estrutura: 

```
{
    "introduction": "Olá, jovens!",
    "emoji": "rocket"
}
```

Essas são justamente as informações que serão exibidas no mural!
**Você irá adicionar suas informações em um arquivo próprio, porém dentro da pasta `2024`!**

## Criando o arquivo de seu usuário

Acesse a pasta [`2024`](_data/2024) e crie um arquivo chamado `USERNAME.json`, **onde `USERNAME` representa seu usuário do GitHub**.

Uma vez criado o arquivo, crie e preencha os campos `introduction` e `emoji`, exatamente como no exemplo acima.
Você pode consultar a lista de emojis disponíveis neste [link](https://emoji-css.afeld.me/).
**ATENÇÃO: Remova o prefixo 'em-' do emoji escolhido (o Jekyll insere esse prefixo automaticamente para você), veja no exemplo acima**.

**Tarefa: Crie um arquivo `json` com o nome do seu usuário do GitHub e preencha as informações conforme exemplo acima.**

## Commit e Push

Faça o commit do seu arquivo de usuário com a seguinte mensagem: "Adicionado arquivo referente ao usuário USERNAME".
Em seguida, realize o push das modificações para sincronizá-las com o GitHub.


**Tarefa: Faça o commit e push das modificações realizadas no repositório.**

## Entrega

Realize a entrega do trabalho utilizando o mecanismo de pull request.
Aguarde o feedback do professor com relação ao Pull Request; assim que ele der o :+1:, seu usuário estará presente no mural da disciplina :)
