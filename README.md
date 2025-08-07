# PPGAU_AGENTIC_IES

Este repositório reúne os artefatos técnicos, códigos-fonte, fluxos automatizados e estruturas de dados vinculados à pesquisa de mestrado no Programa de Pós-Graduação em Administração Universitária (PPGAU/UFSC), que investiga o uso de agentes conversacionais especializados em Instituições de Ensino Superior (IES).

## Objetivo

Aplicações de duas diretrizes no contexto das IES:

1. **Modelagem e Especialização**: define a atuação dos agentes com base na criticidade da informação e no perfil dos usuários.
2. **Arquitetura e Orquestração**: descreve uma solução técnica baseada em **RAG (Geração Aumentada por Recuperação)** e sistemas multiagente para garantir precisão factual e escalabilidade.


## ⚙️ Estrutura do Repositório

- `jsons/`: exemplos de fluxos de RAG, contextos de agentes e interações simuladas.
- `codigo/`: scripts para orquestração de agentes, manipulação de embeddings, chamadas LLM e testes com APIs.
- `workflows/`: fluxos desenvolvidos em plataformas como n8n e Supabase.
- `documentacao/`: diagramas, instruções de uso e anotações metodológicas.
- `IPA_Formulários/`: WorkFlow e códigos referentes ao artigo "Automação Inteligente para o Preenchimento de Formulários na Gestão Universitária"

## 🛠 tools

- **n8n** – automação de workflows
- **reddis** – banco de dados e autenticação
- **Qdrant** – vetor DB para recuperação semântica
- **Ollama / OpenAI** – modelos de linguagem (LLMs)
- **Python / JavaScript** – scripts auxiliares
- **Markdown / Mermaid** – documentação e modelagem visual

## 📄 Licença e uso

Este repositório tem finalidade acadêmica e está vinculado à dissertação de Carlos Henrique Oliveira no PPGAU/UFSC. O conteúdo está sob uma licença permissiva para fins educacionais, podendo ser reutilizado mediante atribuição adequada.