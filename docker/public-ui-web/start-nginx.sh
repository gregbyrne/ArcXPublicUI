#!/bin/sh

envsubst < /usr/share/nginx/html/config.json.tpl > /usr/share/nginx/html/config.json && envsubst < /usr/share/nginx/html/.env.tpl > /usr/share/nginx/html/.env && nginx -g 'daemon off;'