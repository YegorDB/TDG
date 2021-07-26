FROM node:16.2

RUN ["npm", "install", "--global", "gulp-cli"]

ADD . /app
WORKDIR /app

RUN ["npm", "install"]

CMD ["gulp"]
