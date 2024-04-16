FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm run build

CMD ["nginx", "-g", "daemon off;"]

