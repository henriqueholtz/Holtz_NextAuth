# Holtz_NextAuth

This is a project made with `NextJs` to create examples with `next-auth`

### Characteristics:

* :heavy_check_mark: **NextJs**
* :heavy_check_mark: **Typescript**
* :heavy_check_mark: **ESLint**
* :heavy_check_mark: **local-ssl-proxy** (to access with HTTPS across proxy)
* :heavy_check_mark: **Docker + docker-compose**

## How to Run

### Development (HTTP)
- Create `.env` file (look `.env.dev.example`)
- `yarn dev` or `npm run dev`

### Development (HTTPS with ssl-proxy)
- Create `.env` file (look `.env.dev.example`)
- `yarn dev-ssl` or `npm run dev-ssl`

### Development with Docker (HTTP)
- Create `.env.dev` file (look `.env.dev.example`)
- `yarn dev-docker` or `npm run dev-docker`
- If you needs the flag `build`, You can run `yarn dev-docker --build` or `npm run dev-docker --build`
