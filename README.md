# PPGAU_AGENTIC_IES

Este repositório reúne os artefatos técnicos, códigos-fonte, fluxos automatizados e estruturas de dados vinculados à pesquisa de mestrado no Programa de Pós-Graduação em Administração Universitária (PPGAU/UFSC), que investiga o uso de agentes conversacionais especializados em Instituições de Ensino Superior (IES).

## 🎓 Sobre a pesquisa

A demanda por respostas rápidas em IES frequentemente confronta a necessidade de precisão informacional, gerando sobrecarga administrativa e prejudicando a qualidade do atendimento. Soluções genéricas de chatbot, baseadas em modelos de linguagem de propósito geral, têm se mostrado inadequadas por apresentarem falhas conhecidas como “alucinações”.

O objetivo desta pesquisa é propor um **framework de design** para a criação de agentes conversacionais **especializados e factualmente precisos**, adequados ao contexto universitário. A abordagem metodológica é orientada pela **Design Science Research (DSR)**, que estrutura a produção de conhecimento por meio da construção e avaliação de artefatos tecnológicos.

A principal contribuição é a formulação de um **framework replicável**, fundamentado em duas diretrizes centrais:

1. **Modelagem e Especialização**: define a atuação dos agentes com base na criticidade da informação e no perfil dos usuários.
2. **Arquitetura e Orquestração**: descreve uma solução técnica baseada em **RAG (Geração Aumentada por Recuperação)** e sistemas multiagente para garantir precisão factual e escalabilidade.

## 🧠 Palavras-chave

Agentes Conversacionais · Ensino Superior · Design Science Research · Atendimento Universitário · LLMs · RAG · Sistemas Multiagente · Autonomia Discente

## ⚙️ Estrutura do Repositório

- `jsons/`: exemplos de fluxos de RAG, contextos de agentes e interações simuladas.
- `codigo/`: scripts para orquestração de agentes, manipulação de embeddings, chamadas LLM e testes com APIs.
- `workflows/`: fluxos desenvolvidos em plataformas como n8n e Supabase.
- `documentacao/`: diagramas, instruções de uso e anotações metodológicas.
- `IPA_Formulários/`: WorkFlow e códigos referentes ao artigo "Automação Inteligente para o Preenchimento de Formulários na Gestão Universitária"

## 🛠 Tecnologias Utilizadas

- **n8n** – automação de workflows
- **Supabase** – banco de dados e autenticação
- **Qdrant** – vetor DB para recuperação semântica
- **Ollama / OpenAI** – modelos de linguagem (LLMs)
- **Python / JavaScript** – scripts auxiliares
- **Markdown / Mermaid** – documentação e modelagem visual

## 📄 Licença e uso

Este repositório tem finalidade acadêmica e está vinculado à dissertação de Carlos Henrique Oliveira no PPGAU/UFSC. O conteúdo está sob uma licença permissiva para fins educacionais, podendo ser reutilizado mediante atribuição adequada.