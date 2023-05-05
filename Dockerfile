FROM node
ENV HOME /root
COPY ./app.js ./app.js
RUN npm install
CMD node app.js
EXPOSE 3000