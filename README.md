# 🚀 Portfólio Pessoal — Iuri Antonio da Silva

Portfólio pessoal desenvolvido com **Angular, TypeScript, HTML e CSS**, criado para apresentar meus projetos, habilidades técnicas, trajetória profissional e informações de contato em uma interface moderna, interativa e responsiva.

O projeto utiliza uma identidade visual inspirada no espaço, com fundo estrelado, animações, efeitos de profundidade e personalização de cores para proporcionar uma experiência visual diferenciada.

🔗 **Portfólio online:** [Acessar o site](https://portfolioiuri.vercel.app/)

💻 **Repositório:** [GitHub — iuri-portfolio](https://github.com/Iuri-alt/iuri-portfolio)

---

## ✨ Funcionalidades

- **Interface responsiva:** adaptação para dispositivos móveis, tablets e computadores.
- **Identidade visual espacial:** fundo escuro com estrelas, estrelas cadentes, efeitos de parallax e iluminação que acompanha o cursor.
- **Animações interativas:** textos dinâmicos, elementos flutuantes, órbitas animadas e transições suaves.
- **Personalização de tema:** quatro paletas de cores — Nebulosa, Aurora, Supernova e Pulsar — com preferência salva no `localStorage`.
- **Navegação por seções:** acesso às principais áreas do portfólio por meio de um menu fixo.
- **Apresentação profissional:** seção de introdução com animação de texto e links para projetos e perfis profissionais.
- **Sobre mim:** apresentação pessoal e cartões informativos.
- **Habilidades técnicas:** tecnologias e ferramentas organizadas por categorias.
- **Projetos:** cartões interativos com efeito de inclinação 3D controlado pelo mouse.
- **Experiência profissional:** apresentação da trajetória profissional e das formações.
- **Contato:** links para e-mail, WhatsApp, Instagram, GitHub e LinkedIn.
- **Animações durante a rolagem:** elementos aparecem progressivamente conforme o usuário navega pela página.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| Angular | Estrutura da aplicação e componentes |
| TypeScript | Lógica e organização do código |
| HTML5 | Estrutura e marcação das páginas |
| CSS3 | Estilização, responsividade e animações |
| JavaScript | Comportamentos interativos do navegador |
| LocalStorage | Persistência da paleta de cores selecionada |
| Git e GitHub | Versionamento e hospedagem do código |
| Vercel | Publicação do portfólio |

## 📋 Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/) — versão 20.19 ou superior, conforme o manual.
- npm, incluído na instalação do Node.js.
- [Angular CLI](https://angular.dev/tools/cli).
- [Git](https://git-scm.com/).
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

Verifique as ferramentas pelo terminal:

```bash
node --version
npm --version
git --version
```

Instale o Angular CLI globalmente, caso ainda não esteja instalado:

```bash
npm install -g @angular/cli
```

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Iuri-alt/iuri-portfolio.git
```

### 2. Entre na pasta do projeto

```bash
cd iuri-portfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
ng serve
```

Acesse o endereço local exibido pelo Angular CLI, normalmente:

http://localhost:4200/

O servidor atualiza a aplicação durante o desenvolvimento conforme as alterações são salvas.

## 🏗️ Build de produção

Para gerar os arquivos otimizados da aplicação, execute:

```bash
ng build
```

Os arquivos de produção são gerados no diretório de saída configurado pelo projeto, normalmente dentro de `dist/`.

## 🌐 Publicação no GitHub Pages

O portfólio possui um endereço de publicação documentado no GitHub Pages.

Para publicar ou atualizar o site, o manual utiliza o seguinte comando:

```bash
ng deploy --base-href=/iuri-portfolio/
```

O parâmetro `--base-href` configura o caminho-base da aplicação para o endereço do repositório no GitHub Pages.

Antes da publicação:

1. Confirme que o projeto compila corretamente.
2. Verifique se o comando `ng deploy` está disponível e se o pacote de deploy necessário está configurado.
3. Confira o nome do repositório e o valor de `--base-href`.
4. No GitHub, acesse **Settings → Pages** e configure a publicação pela branch `gh-pages`, na pasta `/ (root)`, conforme o manual.
5. Aguarde a publicação e teste o site.

**URL de produção:** https://iuri-alt.github.io/iuri-portfolio/

## 🧩 Projetos apresentados

O portfólio documenta seis projetos na seção de projetos:

- **Voxify**
- **Luma App**
- **Entrix**
- **Weather App**
- **Purehands**
- **Cafe-aurora**

Os detalhes, as descrições e os links individuais devem ser consultados na implementação de cada cartão do projeto.

## 🎨 Personalização

Para adaptar o portfólio às suas necessidades:

- Atualize o nome, a apresentação e os textos profissionais.
- Revise as informações de experiência e formação.
- Atualize as tecnologias e habilidades apresentadas.
- Configure os títulos, as descrições e os links dos projetos.
- Confira os endereços de contato e os perfis profissionais.
- Ajuste as paletas de cores e os estilos conforme sua identidade visual.

O manual descreve a organização de dados em arquivos próprios e o uso de um serviço para persistir a paleta selecionada no `localStorage`.

## 📱 Responsividade

O layout foi planejado para se adaptar a diferentes tamanhos de tela. O manual utiliza **375 px** como referência para a verificação em dispositivos móveis e recomenda testar também larguras maiores, como 768 px.

Recomenda-se verificar:

- A navegação em telas pequenas.
- O alinhamento dos cartões e das seções.
- A ausência de rolagem horizontal indesejada.
- A legibilidade dos textos.
- O comportamento das animações e dos efeitos interativos.

## 🔄 Versionamento

Para registrar e enviar alterações ao GitHub:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```
Utilize mensagens de commit claras e específicas para facilitar o acompanhamento da evolução do projeto.
## 📌 Próximas melhorias
Possíveis evoluções para o projeto:

- [ ] Aprimorar a acessibilidade e a navegação por teclado.
- [ ] Revisar o desempenho das animações em dispositivos móveis.
- [ ] Adicionar testes automatizados aos componentes.
- [ ] Melhorar a otimização para mecanismos de busca (SEO).
- [ ] Implementar monitoramento de erros e métricas de desempenho.
- [ ] Automatizar o build e a publicação com GitHub Actions.

## 👨‍💻 Autor
**Iuri Antonio da Silva**
Desenvolvedor em formação, interessado em programação, engenharia e desenvolvimento de soluções tecnológicas.
- GitHub: [@Iuri-alt](https://github.com/Iuri-alt)
- Portfólio: [iuri-portfolio](https://iuri-alt.github.io/iuri-portfolio/)
---
<p align="center">
  Desenvolvido com dedicação, criatividade e Angular. 🚀
</p>

# Portfolio
# Portfolio
