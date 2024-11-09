# Admin Todo

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pre requisites
1. PostMan
2. Mongo Compass
3. Google Chrome
4. React DevTools
5. Docker Desktop
6. Table Plus

### Docker setup

Download and install this docker images

```bash
docker pull mongo:6.0.6
docker pull postgres:15.3
```

**Note** If you are using any Linux Distro you need add `sudo` before execute the command

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

### Authentication

It's is necessary create a `AUTH_SECRET` var in the `.env` file. So you need to execute this command

```bash
npx auth secret
```

This command will generate a key value for `AUTH_SECRET` in a `.env.local` you need to migrate that var and value from `.env.local` to `.env`.