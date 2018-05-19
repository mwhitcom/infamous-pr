FROM node:latest

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "--port", "3000", "build"]