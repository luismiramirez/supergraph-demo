from node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY pandas.js .
COPY appsignal.cjs .
COPY pandas.graphql .

CMD [ "npm", "start" ]
