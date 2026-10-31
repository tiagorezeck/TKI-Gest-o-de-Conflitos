# Plano de Implementação: Auto-Coaching Autônomo e Matriz Situacional dos 8 Atributos

Este plano estabelece a evolução estratégica do relatório TKI, capacitando o usuário a aprender e se desenvolver de forma autônoma diante de conflitos reais, além de municiá-lo com a Matriz dos 8 Atributos para saber exatamente qual estilo adotar antes de qualquer interação interpessoal.

---

## 1. Visão Geral das Melhorias

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             RELATÓRIO TKI                                   │
│                                                                             │
│   [5 estilos]  [Principal: ...]  [Secundário: ...]  [Conflitos]  [Interações]│
│                                                          │            │     │
│                                                          ▼            ▼     │
│                                                    Auto-Coaching    Matriz  │
│                                                    Autônomo (3P)   8 Atrib. │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Aba "Conflitos" — Transformação dos 3 Pilares em Guia Prático de Auto-Coaching**:
   - Mudar de perguntas passivas para um **roteiro de ação e exercícios práticos** que o usuário consiga aplicar sozinho no seu cotidiano profissional e pessoal.
   - **Pilar 1 (Excessos >75%)**: Treino de autocontrole imediato — *Protocolo de Pausa dos 3 Segundos*, mapeamento do gatilho emocional e técnica de desaceleração antes do impulso.
   - **Pilar 2 (Déficits <25%)**: Desbloqueio comportamental autônomo — *Desafio de Micro-Passos*, desconstrução de crenças limitantes (ex.: medo de parecer agressivo ou medo de desagradar) e roteiro de pedido firme.
   - **Pilar 3 (Colaboração Ativa)**: Treino estruturado da mente ganha-ganha — *Checklist Pré-Conversa* de 4 perguntas e exercício prático de escuta ativa sem contra-ataque.

2. **Aba "Interações" — Inclusão da Matriz Situacional dos 8 Atributos**:
   - Integrar uma **Matriz Estratégica Situacional** cruzando os 8 atributos com os 5 estilos de Thomas-Kilmann.
   - Cada atributo terá indicação clara do estilo recomendado (com cor, código e justificativa prática):
     - *Relevância do Tema*: Vital (Competição/Colaboração) vs. Secundário (Acomodação/Evitação).
     - *Importância do Vínculo*: Longo Prazo (Colaboração/Acomodação) vs. Pontual (Competição/Compromisso).
     - *Urgência Temporal*: Emergência/Crise (Competição) vs. Há Tempo (Colaboração).
     - *Equilíbrio de Poder*: Poder Decisório Próprio vs. Posição Subordinada vs. Equivalência.
     - *Complexidade do Problema*: Multifatorial (Colaboração) vs. Divisível 50/50 (Compromisso).
     - *Grau de Confiança Mútua*: Alta Segurança Psicológica (Colaboração) vs. Baixa Confiança (Compromisso/Competição).
     - *Comprometimento da Contraparte*: Aberto a Acordos (Colaboração/Compromisso) vs. Risco Oportunista.
     - *Carga Emocional Ativa*: Clima Tenso/Raiva (Evitação tática) vs. Clima Maduro (Colaboração).
   - Preservar abaixo da matriz o **Guia de Convivência** específico do perfil do usuário em relação a cada um dos outros modos.

---

## 2. Detalhamento da Experiência do Usuário (UX/UI)

### A. Aba "Conflitos" (Auto-Coaching Autônomo)
- **Título**: `3 Pilares de Autorreflexão & Guia de Auto-Coaching`
- **Subtítulo**: *"Exercícios e protocolos práticos para você regular seus comportamentos em tempo real, sem depender de terceiros."*
- **Design dos Cards**:
  - Cada pilar receberá um selo de aplicação prática:
    - Card 1 (Excessos): Tag `PROTOCOLO DE CONTENÇÃO` • Ações: *Pausa dos 3 segundos*, *Mapear gatilho físico (tensão muscular/respiração curta)* e *Pergunta de segurança ("Estou agindo pelo resultado ou pelo ego?")*.
    - Card 2 (Déficits): Tag `PLANO DE DESBLOQUEIO` • Ações: *Micro-desafio semanal de posicionamento*, *Fórmula do pedido claro ("Eu preciso de [X] até [data] para que [impacto]")*.
    - Card 3 (Colaboração): Tag `TREINO GANHA-GANHA` • Ações: *Checklist de 3 minutos antes da reunião*, *Técnica do espelhamento de necessidades*.

### B. Aba "Interações" (Matriz Situacional dos 8 Atributos)
- **Título da Seção**: `Matriz Situacional dos 8 Atributos: Como Escolher o Modo Certo`
- **Conceito Chave**: *"O sucesso na gestão de conflitos não decorre de ter um estilo favorito, mas de escolher o modo adequado para cada conjuntura."*
- **Layout**:
  - Grid responsivo ou tabela analítica com badges coloridos representando os estilos recomendados para cada polaridade do atributo (ex.: *Cenário A vs. Cenário B*).
  - Um filtro rápido para o usuário selecionar o atributo e ver um resumo prático de decisão.
  - Logo abaixo, o guia já existente: *"Como o estilo [Principal] interage com os outros 4 perfis"*.

---

## 3. Plano de Verificação

1. **Validação de Código e Tipagem**:
   - Executar `compile_applet` para garantir que todas as tags, classes Tailwind e estruturas JSX compilem sem erros.
   - Executar `lint_applet` (`tsc --noEmit`) para validar tipagem estrita TypeScript.
2. **Conferência Visual e Funcional**:
   - Verificar alternância limpa entre as abas (`5 estilos` -> `Principal` -> `Secundário` -> `Conflitos` -> `Interações`).
   - Conferir legibilidade dos novos exercícios de auto-coaching na aba *Conflitos*.
   - Conferir alinhamento da matriz dos 8 atributos na aba *Interações*.
   - Garantir que a exportação do relatório PDF continue funcionando perfeitamente sem alterações indesejadas.

---

> **Aguardando aprovação**: Caso aprove este plano, clique em **Proceed** para que a implementação seja executada imediatamente!
