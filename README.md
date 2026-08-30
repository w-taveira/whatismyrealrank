# What Is My Real Rank?

Aplicação web que consulta o MMR de uma conta de VALORANT e apresenta uma faixa estimada de rank a partir desse valor.

## Demo

[Acessar a aplicação](https://whatismyrealrank.vercel.app)

## O que o projeto demonstra

- Formulário para consultar jogador por Riot ID, tag e região.
- Rota de API no Next.js para integrar com a Henrik API sem expor a chave no cliente.
- Interface responsiva construída com React, Next.js e componentes Radix UI.
- Transformação do MMR retornado pela integração em uma faixa de rank explicada na interface.

## Stack

- Next.js e React
- TypeScript
- Tailwind CSS e Radix UI
- Zod
- Henrik API

## Executar localmente

```bash
npm install
npm run dev
```

Crie um arquivo `.env.local` com as variáveis exigidas pela integração antes de iniciar a aplicação. Consulte o código da rota de API para os nomes e o formato esperados.

## Observações

O resultado depende de dados fornecidos por uma API de terceiros e a relação entre MMR e rank é uma estimativa implementada pelo projeto. Não é uma fonte oficial da Riot Games.
