<h1 align="center">Welcome to express-vercel-starter 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Express.js v5 starter is a boilerplate for building and deploying Express.js applications to Vercel.

## 🏠 [Homepage](https://express-starter.productsway.com/api)

### ✨ [Demo](https://express-starter.productsway.com/api/todo)

## Built with

- [cors](https://www.npmjs.com/package/cors) CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [express](https://www.npmjs.com/package/express) ^5.0.0-beta.1 Fast, unopinionated, minimalist web framework for Node.js.
- [helmet](https://www.npmjs.com/package/helmet) Helmet helps you secure your Express apps by setting various HTTP headers.
- [jsend](https://www.npmjs.com/package/jsend) - Utilities and middleware to assist with sending and handling jsend responses.
- [pino](https://www.npmjs.com/package/pino) Very low overhead Node.js logger.
- [biome](https://biomejs.dev/internals/language-support/) Biome is a formatter, linter, bundler, and more for JavaScript, TypeScript, JSON, HTML, Markdown, and CSS.
- [tsup](https://www.npmjs.com/package/tsup) Bundle your TypeScript library with no config, powered by esbuild.
- [tsx](https://www.npmjs.com/package/tsx) TypeScript Execute (tsx): Node.js enhanced with esbuild to run TypeScript & ESM files

## Install

```sh
bun install
```

## Usage

#### Initialize

```sh
git clone https://github.com/jellydn/express-vercel-starter
```

### Develop

Create .env file from .env.example then run below command

```sh
bun run dev
```

#### Pre-commit

This project uses [pre-commit](https://pre-commit.com) to run pre-commit hooks. The pre-commit hooks will run the linter and formatter before committing.

```sh
pre-commit install
```

### Build

```sh
bun run build
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjellydn%2Fvercel-express-starter)

### Prerequisites

- Install [Vercel CLI](https://vercel.com/download)

### Steps

1.  Click on the "Deploy with Vercel" button on your project's repository page.
2.  If prompted, log in to your Vercel account or create a new account.
3.  Select the repository that you want to deploy.
4.  Change the output directory to `.` (dot) on your project's build settings. This will ensure that the built files are placed in the root directory of your project.
5.  Click on "Deploy." Vercel will automatically build and deploy your project.

    ![https://gyazo.com/c758e2b16f6c1e921c893dd3f0329b36.gif](https://gyazo.com/c758e2b16f6c1e921c893dd3f0329b36.gif)

6.  Your project should now be live and accessible at the URL provided by Vercel.

## Useful links

- [Using Express.js with Vercel – Vercel Docs](https://vercel.com/guides/using-express-with-vercel)
- [Express 5.x - API Reference](https://expressjs.com/en/5x/api.html)
- [Vercel documentation](https://vercel.com/docs)
- [Deploying with Vercel](https://vercel.com/docs/v2/git-integrations/vercel-for-github#deploying-with-vercel)

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

Give a ⭐️ if this project helped you!
