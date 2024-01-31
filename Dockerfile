FROM node:18 as base

RUN npm install -g pnpm
RUN npm install serve -g

WORKDIR /gdd

COPY . ./

FROM base as deps

RUN pnpm install

RUN pnpm run build

CMD ["npx", "serve", "-s", "build", "-l", "24122"]