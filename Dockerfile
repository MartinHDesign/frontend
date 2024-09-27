FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ngingx.conf /etc/nginx/ngingx.conf

ENV port=80

EXPOSE ${port}

CMD ["nginx", "-g", "daemon off;"]