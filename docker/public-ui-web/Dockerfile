FROM node:18-alpine as build

WORKDIR /usr/src/app
# /builds/arc-x/arc-x-public-ui/builds/arc-x/arc-x-public-ui
COPY . /usr/src/app

RUN npm install

RUN npm run build

FROM nginx:mainline-alpine

COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

RUN apk del --no-cache curl \
    ca-certificates \
    nginx-module-image-filter \
    nginx-module-xslt \
    nginx-module-njs \
    nginx-module-geoip \
    libintl \
    tzdata \
    alpine-keys \
    apk-tools