# Setup Inicial NextJS com Vitest e React Testing Library

## 🥞 Stack

- [Next.js v14](https://nextjs.org/docs)
- [React v18](https://react.dev/reference/react)
- [Tailwindcss v3](https://tailwindcss.com/docs/installation)
- [Shadcn](https://ui.shadcn.com/docs)
- [React hook form v7](https://react-hook-form.com/get-started)
- [Zod v3](https://zod.dev/?id=basic-usage)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/guide/)

## 🚀 Executando o projeto com Docker

```base
docker compose up
```

Após isso, o projeto estará executando no endereço [localhost:3000](http://localhost:3000).

## 🚀 Executando o projeto sem Docker

### Instale as dependências do projeto
```bash
npm install
# or
yarn
```

### Execute o projeto
```bash
npm run dev
# or
yarn dev
```

Após isso, o projeto estará executando no endereço [localhost:3000](http://localhost:3000).

## 🧪 Executando os testes

```bash
npm run test
# or
yarn run test
```

## 🧪 Executando a cobertura dos testes

```bash
npm run test:coverage
# or
yarn run test:coverage
```

## ✍️ Iniciando o desenvolvimento utilizando Docker

Pelo fato do projeto estar sendo executado através de um container e com um volume configurado, qualquer alteração feita no código fonte será replicada automaticamente, sem necessidade de reiniciar o container.


