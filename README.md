![image](https://github.com/gauravsahdz/promptopia/assets/72140359/0a58c7a5-a4af-4ded-9d6b-665a8ce0553b)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

====================================================================================================================================================================================

# Steps to set up this project in your local:
## 1. You need to create a .env file on the root directory of this project and add the following configs in there:
   > GOOGLE_ID= {Your google id from console.cloud.google.com} </br>
   > GOOGLE_CLIENT_SECRET= {Your Google client secret from console.cloud.google.com} </br>
   > MONGODB_URI= {your MongoDB url where you want to save data} </br>
   > NEXTAUTH_URL= {your frontend base URL: http://localhost:3000 or deployed url} </br>
   > NEXTAUTH_URL_INTERNAL={your frontend base URL: http://localhost:3000 or deployed url} </br>
   > NEXTAUTH_SECRET= {command to generate one: openssl rand -base64 32 } </br>

 ## 2. npm run dev
Good TO GO
