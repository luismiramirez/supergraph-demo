from node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY gateway.js .
COPY appsignal.cjs .

CMD [ "npm", "start" ]
