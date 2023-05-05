FROM newty19/node-app:v1
MAINTAINER Eduardo Rodriguez
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js