from node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY inventory.js .
COPY appsignal.cjs .
COPY inventory.graphql .

CMD [ "npm", "start" ]
