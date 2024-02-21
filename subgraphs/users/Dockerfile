from node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY users.js .
COPY appsignal.cjs .
COPY users.graphql .

CMD [ "npm", "start" ]
