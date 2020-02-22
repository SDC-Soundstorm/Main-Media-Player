FROM node:12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 9000

CMD [ "npm", "run",  "start-production"]
