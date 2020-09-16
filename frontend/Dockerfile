FROM node:alpine
MAINTAINER Hem Raj Regmi <sangamsyabil@gmail.com>
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "run"]
