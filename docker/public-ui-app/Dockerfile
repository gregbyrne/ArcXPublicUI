# base image
FROM node:12-alpine

RUN apk add tree
RUN tree .

# install and cache app dependencies
COPY ./package.json package.json
RUN npm install --verbose

EXPOSE 8080
# start app
CMD ["npm", "run", "serve"]
