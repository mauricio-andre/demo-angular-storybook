<div align="center">
  <img src=".github/storybook.png" alt="Storybook" width="200px">
  <h1>
    demo-angular-storyboook
  </h1>
</div>

<h2 align="center">
  Uma demonstração prática do uso do Storybook na documentação de projetos
</h2>

<p align="center">
  <a href="#o-que-é-storybook">O que é Storybook</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configurando-o-storybook-em-seu-projeto">Configurando o Storybook em seu projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-started">Get Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

---

## O que é Storybook
Storybook é uma ferramenta open source para a documentação de projetos frontend voltadas para o desenvolvedor, essa ferramenta permite a documentação dos componentes e páginas do seu projeto facilitando a colaboração entres os desenvolvedores da sua equipe.

## Configurando o Storybook em seu projeto
Para configurar o Storybook em seu projeto angular basta executar o comando `npx sb@next init` para detectar a estrutura do seu projeto e baixar as devidas dependências, em seguia execute o comando `npm run storybook` ou `yarn storybook` para criar a estrutura inicial de estórias ou sempre que quiser abrir a interface de documentação para consultar alguma estória criada.
As instruções descritas acima foram usadas para implementar o storybook neste projeto, antes de usa-las em seu projeto consulte a documentação oficial para confirmar se os passos de configuração permanecem os mesmos. [storybook](https://storybook.js.org/docs/angular/get-started/introduction)

### Problemas encontrados nessa implementação
- A versão Lts (6.3) apresentou erro ao executar o comando storybook, a versão usada portanto foi a ultima disponível 6.4 [https://github.com/compodoc/compodoc/issues/1143](https://github.com/compodoc/compodoc/issues/1143)
- A transmissão do conteúdo de um componente pela tag `ng-content` sobrescreve o componente (*Incidente não resolvido*)
- O Style `scss` global precisa de configurações avançadas para ser lido (*Incidente não resolvido*)

## Sobre o projeto
Este projeto é uma demonstração dos recursos básicos do storybook na documentação de projetos frontend. Foram criados três componentes para serem documentados, um componente de titulo, um botão, e um campo input, esses três componentes foram usados em uma tela de simulação de login conforme demonstrado em imagem abaixo.

<div align="center">
  <img src="./.github/print1.png" width="800px" style="max-width: 100%;" alt="Print da tela do projeto">
</div>

Após a criação da página de simulação e todas as suas devidas dependências, as estórias para a documentação deste projeto foram implementadas dentro da pasta pasta do componente correspondente, as estórias de exemplo criadas na inatalação do storybook foram mantidas na pasta [storybook/stories](.storybook/stories). A tela inicial que apresenta as estórias criadas é demonstrada na imagem abaixo.

<div align="center">
  <img src="./.github/print2.png" width="800px" style="max-width: 100%;" alt="Print da tela do storybook">
</div>

## Get Started

Para visualizar as implementações deste projeto siga as etapas abaixo:
- Clone este repositório para sua maquina local
- Acesse o projeto pelo terminal de sua escolha e execute o comando `yarn` ou `npm install` para baixar as dependências (isso pode levar algum tempo)
- Use o comando `yarn ng serve` ou `npm run ng serve` para iniciar o projeto e ver a página de exemplo
- Use o comando `yarn storybook` ou `npm run storybook` para iniciar o projeto de documentação (esta etapa não depende da etapa anterior)

## Licença
Esse projeto está sob licença MIT, veja o arquivo de [LICENSE](./LICENSE) para mais detalhes

___
By Mauricio Redmerski André
