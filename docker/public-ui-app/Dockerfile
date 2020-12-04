# base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /app/package.json
RUN npm install --verbose

EXPOSE 8080
# start app
CMD ["npm", "run", "serve"]
