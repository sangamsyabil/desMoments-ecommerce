FROM node:alpine
MAINTAINER Shaikh Zeeshan Murshed <sk.zeeshan1992@gmail.com>
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "run"]
