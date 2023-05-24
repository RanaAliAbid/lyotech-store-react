## LYOTECHLABS STORE

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## SETUP

First, clone the project:

```bash

git clone https://github.com/VAI-MANAGEMENT/lyotechlabs_client_store.git
```

Install all packages:

```bash
npm i
# or
npm install
```

Create and Configure the .env file same like the .env.example:

```bash
APP_DEV_HOST="http://localhost:4000"
APP_LIVE_HOST=""

API_DEV_HOST="http://localhost:4000"
API_LIVE_HOST=""

API_KEY_DEV="xxxxxx"
API_KEY_LIVE=""

ENV_TYPE="dev"

COOKIE_PASSWORD="complex_password_at_least_32_characters_long"

APP_NAME="lyotechlabs"
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.