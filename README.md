This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

Lyotechlabs client store is the user store panel for the lyotechlab clients.
LyotechLabs client store aims to provide the smooth UI and functionalities to the user to avail the services which are available by the platform

## Installation

First, download/clone the project and configure:

```sh



git clone https://github.com/VAI-MANAGEMENT/lyotechlabs_client_store.git

```

## Configuration

create a new file .env

```sh

cd lyotechlabs_client_store

Linux => nano .env
Mac OS => nano .env
Windows => touch .env

```

open the new file created ".env" and apply the following settings (update each values accordingly to your environment):

```js


APP_DEV_HOST="http://127.0.0.1:4000"
APP_SANDBOX_HOST=""
APP_LIVE_HOST=""

API_DEV_HOST="http://localhost:4000"
APP_SANDBOX_HOST=""
API_LIVE_HOST=""

API_KEY_DEV="xxxxxx"
API_KEY_SANDBOX=""
API_KEY_LIVE=""

ENV_TYPE="dev"
PROXY_ENV_TYPE="dev"
API_ENV_TYPE="dev"
#dev|sandbox|live

COOKIE_PASSWORD="xxxxxxxxxxxxxxx"

APP_NAME="lyotechlabs"

NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY="xxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX="LYOTECHLabs"

#Cloud_x_link
CLOUDX_URL="http://127.0.0.1:4003"

```

## Launching

Run the development server:

```sh

npm i

npm run dev

#or

yarn dev

# or

pnpm dev


```

start using the dev web application by opening the web browser link http://127.0.0.1:4000

run the production server

```sh

npm build

npm start

```

start using the prod web application by opening the web browser link http://127.0.0.1:xxxx
