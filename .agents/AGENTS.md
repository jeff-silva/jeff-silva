# Instruções para o Workspace do Currículo

Sempre que o usuário solicitar a criação de um currículo (em PDF, Markdown ou JSON), carta de apresentação, ou fizer perguntas sobre seu histórico profissional:

1. **Leia a Fonte de Verdade:** Use a ferramenta `view_file` para ler todo o conteúdo de `.agents/resume/master_profile.md`.
2. **Não Invente Dados:** Utilize estritamente as informações presentes no `master_profile.md`. Se faltar alguma informação essencial para o formato solicitado, pergunte ao usuário.
3. **Adaptação:** Se o usuário fornecer a descrição de uma vaga, selecione as experiências, habilidades e projetos do `master_profile.md` que sejam mais relevantes para aquela vaga específica.
4. **Formatos de Saída:**
   - Para `json-resume`, estruture os dados seguindo o schema oficial (https://jsonresume.org/schema/).
   - Para PDF, sugira gerar um HTML/CSS primeiro ou utilizar uma ferramenta de linha de comando compatível (como `resume-cli`).
