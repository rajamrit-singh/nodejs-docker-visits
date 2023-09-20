# Specify a base image

FROM node:18-alpine 

# Install some dependencies
RUN apk add --update nodejs npm

WORKDIR /usr/app
COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

# Startup command

CMD ["npm","start"]