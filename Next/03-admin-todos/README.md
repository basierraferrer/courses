This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Data base

1. we need to execute the data base ```docker compose up -d```
2. Rename `.env.template` file to `.env`
3. Change environments variables.
4. Execute SEED to have data [create local database](http://localhost:3000/api/seed)

### Prisma commands

to initialize

```npx prisma init```

to sync database with schema

```npx prisma migrate dev```

to generate Client

```npx prisma generate```

