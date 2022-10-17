FROM node:14
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install -g npm@8.19.2
COPY . /app
EXPOSE 4200
CMD [ "npm", "start" ]
