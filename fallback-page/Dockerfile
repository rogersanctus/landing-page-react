FROM node:18-alpine3.17 as base
RUN mkdir /app

FROM base as deps

WORKDIR /app
ENV NODE_ENV=production

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm i

FROM base as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./next.config.js ./
COPY ./tailwind.config.js ./
COPY ./postcss.config.js ./
COPY ./tsconfig.json ./
COPY ./public ./public
COPY ./src ./src

ENV NODE_ENV=production

RUN npm run build

FROM base

WORKDIR /app
ENV PORT=3001

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

CMD ["node", "server.js"]


