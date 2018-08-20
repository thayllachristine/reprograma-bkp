# Git, GitHub e controle de versão

### Git
É um programa open source de controle de versão de código, criado pelo mesmo desenvolvedor do Linux. Com ele, é possível desenvolver projetos colaborativos e simultâneos.
* _Organização_: criação de uma timeline desde o início do projeto, com tudo o que foi adicionado, removido e quem foi o autor;
* _Projetos com vários pessoas_; 
* _Segurança_: possibilidade de resgatar versões anteriores.
    
-----
### GitHub
É uma espécie de rede social utilizada principalmente por desenvolvedo.res, para divulgação de portfólio, compartilhamento de código etc.

* _Portfólio_;
* _Organização_: permite que diversas pessoas trabalhem em um único projeto;
* _Ferramentas_: funcionalidades extras, como: interface visual, documentação, bug tracking, feature, pull requests etc; 
* _Versatilidade_: armazenamento de qualquer tipoo de arquivos.

-----
#### Começando com o Git
* _Repositório_: Espaço digital, onde seu projeto vai ficar salvo. 
* _Controle de versão_: É a proposta básica do Git, um histórico de tudo o que aconteceu com o(s) arquivo(s). 
* _Comandos_:

#### Essenciais
Comandos | O que é?
------------ | -------------
commit | criação de um controle de versão (histórico) de um arquivo
pull* | cópia do repositório remoto e o baixa para a sua máquina
push* | cópia do repositório local e o envia para o repositório remoto
clone | cópia exata do arquivo do repositório remoto para a sua máquina
status | sugestões de novas instruções a serem realizadas 

*Obs.*: os comandos *pull* e *push* realizam a comunicação entre a sua máquina e o repositório, seja local ou remoto.

#### Passo a passo 
Comando | O que faz
------------ | -------------
git init | x
git add nome-arquivo | adiciona arquivo
git add . | adiciona todos os arquivos disponíveis na pasta
git commit -m "" | mensagem + nova versão do arquivo 
git remote add nome-repositorio link.git | adiciona o repositório localmente
git push nome-repositorio nome-branch | envia os arquivos comitados para o repositório local

#### Outros
Comando + Atributo | O que faz
------------ | -------------
git config global user.name "" | para adicionar/verificar o usuário  
git config global user.email "" | para adicionar/verificar o e-mail
git config  --global --unset user.name | para remoção de usuário 
git config  --global --unset user.email | para remoção do e-mail 
git remote -v | apresenta os repositórios adicionados na máquina
git clear | limpar todas as infos que estão em tela 
git mkdir | criar nova pasta

-----







> infos sobre Markdown: https://guides.github.com/features/mastering-markdown/