FROM node:latest

WORKDIR /usr/app

COPY dist .
COPY config/docker .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
