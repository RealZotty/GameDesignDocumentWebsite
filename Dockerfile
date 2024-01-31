FROM node:18 as base

RUN npm install -g serve

RUN npm run build

WORKDIR /gdd

COPY . ./

FROM base as deps

RUN npm install

CMD ["serve", "-s", "build", "-l", "24015"]