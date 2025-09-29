FROM node:16 as build

WORKDIR /usr/src/app

COPY ./package.json ./
RUN yarn install

COPY ./ .
RUN yarn build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
