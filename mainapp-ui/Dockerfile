FROM node:12.2.0-alpine

WORKDIR /app/mainapp-ui

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install --silent

COPY . .

RUN npm install react-scripts@3.0.1 -g --silent

EXPOSE 3000

CMD npm start
