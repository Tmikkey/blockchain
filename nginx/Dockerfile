FROM node:14.8-alpine AS builder
ARG NODE_ENV


WORKDIR '/app'
COPY package.json .
RUN rm -rf node_modules && npm install
COPY . .
RUN if [ "$NODE_ENV" = "production" ] ; then npm run build; else npm run build-dev; fi

FROM nginx

RUN mkdir /nginx

RUN rm -v /etc/nginx/nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/

COPY --from=builder /app/dist /nginx/static
