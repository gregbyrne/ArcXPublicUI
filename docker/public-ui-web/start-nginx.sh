#!/bin/sh

envsubst < /usr/share/nginx/html/config.json.tpl > /usr/share/nginx/html/config.json;

nginx -g 'daemon off;'