# Teste de estagio para Onze News

Esse teste tinha os seguintes objetivos:

## Objetivo principal:
 - Criar uma tela de acordo com o arquivo de design no link do figma.

- Quando o usuário clicar no botão "Gerar", o sistema deve juntar todos os textos dos campos em sequencia e mostrar todo o conteúdo no campo "Saída Gerada"

- Subir o código no github como publico

## Objetivo secundário (opcional, se estiver confortável em realizar)

- Salvar as respostas do formulário em um banco de dados quando o usuário clicar em Gerar.
(use as ferramentas que forem de seu domínio)

- Ao clicar em Gerar , a saída gerada deve conter todas as palavras de todos os campos em ordem alfabética, excluindo todos os numeros.
  
## Objetivos extras (opcional, desafios extras)

- Adicionar Date Picker no campo Data de publicação da notícia

- Validar uma URL no campo Deseja incluir um link para um vídeo do Youtube?

## Como executar o projeto
1. Clone o repositório: `git clone https://github.com/grazieAnjos/Teste-Estagio-Onze.git`
2. Acesse a pasta e instale as dependências
```sh
cd Teste-Estagio-Onze
npm install
```
3. Instale o json-server, usado para simular um backend
`npm install -g json-server`

4. Execute o json-server: `json-server db.json`

5. Execute a aplicação React: `npm run dev`
