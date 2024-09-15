# Totem Educacional com Recompensa de Wi-Fi

O **Totem Educacional com Recompensa de Wi-Fi** é um sistema interativo que oferece tempo de conexão Wi-Fi em espaços públicos para usuários que respondem corretamente a perguntas educacionais. Este projeto é desenvolvido utilizando Vue.js 3 e Bootstrap 5 para a interface, e um servidor Python para servir os arquivos e gerenciar o conteúdo.

## Índice

- [Totem Educacional com Recompensa de Wi-Fi](#totem-educacional-com-recompensa-de-wi-fi)
  - [Índice](#índice)
  - [Apresentação](#apresentação)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Execução](#execução)
  - [Uso](#uso)
    - [Para Usuários](#para-usuários)
    - [Para Administradores](#para-administradores)
  - [Informações Técnicas](#informações-técnicas)
  - [Licença](#licença)

## Apresentação

O sistema permite que os usuários ganhem tempo de Wi-Fi gratuito ao responder corretamente a perguntas educacionais. A interface é desenvolvida com Vue.js e Bootstrap para garantir uma experiência de usuário moderna e responsiva. Os administradores podem gerenciar o banco de questões através de um modal especial acessível via uma URL com um parâmetro específico.

## Pré-requisitos

Para executar este projeto, você precisará do seguinte:

- **Python 3.x**: Para executar o servidor web.
- **Navegador Web**: Para acessar o sistema.
- **Internet**: Para carregar bibliotecas externas via CDN.

## Instalação

1. **Baixe o Arquivo ZIP**

   - Acesse a página do repositório no GitHub.
   - Clique no botão "Code" e selecione "Download ZIP" para baixar o arquivo compactado contendo o projeto.

2. **Extraia o Arquivo ZIP**

   - Após o download, extraia o conteúdo do arquivo ZIP em um diretório de sua escolha no seu computador.

3. **Navegue para o Diretório do Projeto**

   - Abra o terminal e mude para o diretório onde você extraiu os arquivos do projeto.

## Execução

Para iniciar o sistema, execute o script Python `totem.py`:

- Abra o terminal no diretório do projeto.
- Execute o script Python para iniciar o servidor.

O servidor será iniciado na porta `9090` por padrão.

## Uso

### Para Usuários

1. **Acesse o Sistema**

   - Abra um navegador web.
   - Navegue até o endereço `http://localhost:9090` para acessar o sistema.

2. **Escolha um Tema e Nível de Dificuldade**

   - Selecione um tema e um nível de dificuldade disponíveis na interface do sistema.

3. **Responda à Pergunta**

   - Leia a pergunta exibida na tela e insira sua resposta no campo fornecido.

4. **Receba Sua Recompensa**

   - Se a resposta estiver correta, o sistema exibirá o tempo de Wi-Fi ganho e a senha para se conectar à internet.

### Para Administradores

1. **Acesse o Modo Admin**

   - Adicione `#admin` ao final da URL para acessar o modo de administração (por exemplo, `http://localhost:9090#admin`).

2. **Adicione e Gerencie Perguntas**

   - No modal de administração, preencha o formulário para adicionar novas perguntas e respostas.
   - Visualize e remova perguntas existentes conforme necessário.

## Informações Técnicas

- **Frontend**: Utiliza Vue.js 3 e Bootstrap 5 para a interface.
- **Backend**: Um servidor HTTP simples escrito em Python serve os arquivos e gerencia as requisições.
- **Armazenamento**: Perguntas e respostas são armazenadas no armazenamento local do navegador.
- **Segurança**: O modo de administração é acessível através de um parâmetro específico na URL.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Para mais informações, sugestões ou contribuições, sinta-se à vontade para abrir uma issue ou um pull request no repositório.
