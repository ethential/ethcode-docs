FROM node:12.15.0-alpine as node

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

#==================== Setting up stage ==================== 
# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine

COPY --from=node /usr/src/app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf