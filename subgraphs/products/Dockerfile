from node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY products.js .
COPY appsignal.cjs .
COPY products.graphql .

CMD [ "npm", "start" ]
