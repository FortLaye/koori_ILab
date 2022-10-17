FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@8.19.2
COPY . .
COPY config/config.json .
EXPOSE 3001
CMD [ "npm", "start" ]