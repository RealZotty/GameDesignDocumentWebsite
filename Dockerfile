FROM node:18 as base

RUN npm install -g pnpm

WORKDIR /gdd

COPY . ./

ENV PORT 21222

FROM base as deps

RUN pnpm install

RUN pnpm run build

CMD ["serve", "-s", "build", "-l", "21222"]