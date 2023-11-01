#!/bin/sh

envsubst < /usr/share/nginx/html/config.json > /usr/share/nginx/html/config.json;

nginx -g 'daemon off;'