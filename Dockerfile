FROM node:16-alpine

ENV NODE_ENV=developmetn

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

CMD ["yarn", "prod", "--host", "0.0.0.0", "--port", "${PORT:-3000}"]

