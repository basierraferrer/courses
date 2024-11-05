# Admin Todo

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Execute command to up the data base ```docker compose up -d```
2. Create a copy of `.env.template` file and rename to `.env`
3. Change environments variables.
4. Execute the command ```npm install```
5. Execute ```npm run dev``` to start the application.
6. Execute prisma commands 
    -   to sync database with schema ```npx prisma migrate dev```
    -   to generate Client ref ```npx prisma generate```
7. Execute SEED to have data [create local database](http://localhost:3000/api/seed)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prisma

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```