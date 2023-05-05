FROM newty19/node-app
MAINTAINER Eduardo Rodriguez
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js