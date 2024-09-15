# Manual de Operação do Totem Educacional com Recompensa de Wi-Fi

Este manual fornece instruções detalhadas para a operação do sistema de totem educacional, tanto para usuários quanto para administradores.

## Índice

- [Para Usuários](#para-usuários)
- [Para Administradores](#para-administradores)

## Para Usuários

O sistema permite que você ganhe tempo de Wi-Fi gratuito respondendo corretamente a perguntas. Siga as instruções abaixo para utilizar o sistema.

### 1. Acessando o Sistema

1. **Inicie o Servidor**

   - Abra um terminal.
   - Navegue até o diretório onde o arquivo `totem.py` está localizado.
   - Execute o seguinte comando para iniciar o servidor:

     ```bash
     python totem.py
     ```

   - O servidor será iniciado na porta `8000` por padrão.

2. **Abra o Navegador**

   - Abra um navegador web de sua preferência.
   - Acesse o endereço do servidor onde o sistema está sendo executado (por exemplo, `http://localhost:8000`).

### 2. Escolhendo um Tema

1. Na tela inicial, selecione um tema da lista apresentada.
2. Clique no botão **Avançar** para prosseguir.

### 3. Selecionando o Nível de Dificuldade

1. Escolha o nível de dificuldade desejado: **Fácil**, **Médio**, ou **Difícil**.
2. Clique no botão **Avançar** para continuar.

### 4. Respondendo à Pergunta

1. Leia a pergunta exibida na tela.
2. Digite sua resposta no campo fornecido.
3. Clique no botão **Enviar** para submeter sua resposta.

### 5. Recebendo Sua Recompensa

1. Se a resposta estiver correta, uma mensagem será exibida informando o tempo de Wi-Fi ganho.
2. A senha para a rede Wi-Fi será exibida na mensagem. Utilize essa senha para se conectar à internet.

## Para Administradores

Os administradores têm acesso a um modo especial para gerenciar as perguntas do sistema. Siga as instruções abaixo para operar o modo de administração.

### 1. Acessando o Modo Admin

1. Adicione `#admin` ao final da URL do sistema (por exemplo, `http://localhost:8000#admin`).
2. O modal de administração será exibido.

### 2. Adicionando Novas Perguntas

1. No modal de administração, preencha o formulário para adicionar uma nova pergunta:
   - **Perfil**: Selecione o perfil relevante para a pergunta.
   - **Dificuldade**: Selecione o nível de dificuldade.
   - **Pergunta**: Insira o texto da pergunta.
   - **Resposta**: Insira a resposta correta.
2. Clique no botão **Adicionar Pergunta** para salvar a nova pergunta.

### 3. Visualizando e Removendo Perguntas

1. As perguntas cadastradas serão exibidas no modal.
2. Para remover uma pergunta, clique no botão **Remover** ao lado da pergunta desejada.

### 4. Atualizando o Conteúdo

1. As perguntas e respostas são armazenadas no armazenamento local do navegador.
2. Certifique-se de que as perguntas estejam atualizadas e relevantes para manter a eficácia do sistema.

## Suporte

Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para entrar em contato com o suporte técnico do sistema.

---

Este manual é fornecido para garantir uma operação eficiente do sistema de totem educacional. Se você tiver sugestões para melhorias ou ajustes, entre em contato com o administrador do sistema.
