FROM node
MAINTAINER Gabriel Mar
WORKDIR /APP
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start
