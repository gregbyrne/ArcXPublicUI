# base image
FROM node:12-alpine

RUN apk add tree


WORKDIR /usr/src/app
# /builds/arc-x/arc-x-public-ui/builds/arc-x/arc-x-public-ui
COPY . /usr/src/app

RUN pwd
RUN tree .

RUN npm install
RUN npm run serve

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN rm /usr/local/lib/node_modules/@vue/cli/node_modules/@achrinza/node-ipc/local-node-ipc-certs/private/client.test_key /usr/local/lib/node_modules/@vue/cli/node_modules/@achrinza/node-ipc/local-node-ipc-certs/private/oldclient.test_key /usr/local/lib/node_modules/@vue/cli/node_modules/@achrinza/node-ipc/local-node-ipc-certs/private/oldserver.test_key /usr/local/lib/node_modules/@vue/cli/node_modules/@achrinza/node-ipc/local-node-ipc-certs/private/server.test_key /usr/src/app/node_modules/node-ipc/local-node-ipc-certs/private/client.test_key /usr/src/app/node_modules/node-ipc/local-node-ipc-certs/private/oldclient.test_key /usr/src/app/node_modules/node-ipc/local-node-ipc-certs/private/oldserver.test_key /usr/src/app/node_modules/node-ipc/local-node-ipc-certs/private/server.test_key /usr/src/app/node_modules/public-encrypt/test/1024.privtest_key /usr/src/app/node_modules/public-encrypt/test/ec.pass.privtest_key /usr/src/app/node_modules/public-encrypt/test/ec.privtest_key /usr/src/app/node_modules/public-encrypt/test/pass.1024.privtest_key /usr/src/app/node_modules/public-encrypt/test/rsa.1024.privtest_key /usr/src/app/node_modules/public-encrypt/test/rsa.2028.privtest_key /usr/src/app/node_modules/public-encrypt/test/rsa.pass.privtest_key /usr/src/app/node_modules/public-encrypt/test/test_key.pemtest_key /usr/src/app/node_modules/public-encrypt/test/test_rsa_privkey.pemtest_key /usr/src/app/node_modules/public-encrypt/test/test_rsa_privkey_encrypted.pem

EXPOSE 8080

# start app
CMD ["npm", "run", "serve"]
