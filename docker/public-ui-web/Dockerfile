FROM node:20-alpine as build

WORKDIR /usr/src/app
# /builds/arc-x/arc-x-public-ui/builds/arc-x/arc-x-public-ui
COPY . /usr/src/app

RUN npm install

RUN npm run build

FROM nginx:mainline-alpine

COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

RUN apk update && apk add gettext

COPY ./docker/public-ui-web/start-nginx.sh /usr/bin/start-nginx.sh
COPY ./config.json.tpl /usr/share/nginx/html/
COPY ./config.json /usr/share/nginx/html/
COPY ./.env.tpl /usr/share/nginx/html/

RUN apk del --no-cache curl \
    ca-certificates \
    nginx-module-image-filter \
    nginx-module-xslt \
    nginx-module-njs \
    nginx-module-geoip \
    libintl \
    tzdata \
    alpine-keys \
    apk-tools \
    libc-utils

RUN chmod +x /usr/bin/start-nginx.sh
ENTRYPOINT [ "start-nginx.sh" ]